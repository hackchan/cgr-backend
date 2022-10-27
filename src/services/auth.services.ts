import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config'
import UserService from './user.services'
import EmailService from './entidad/email'
import boom from '@hapi/boom'
import { PayloadDTO } from '../entityTypes/payload.dto'
import nodemailer from 'nodemailer'
import { UserDTO } from '../entityTypes/user.dto'

const service = new UserService()
const emailService = new EmailService()
class AuthService {
  async getUser (usernameORemail: string, password: string): Promise<Object> {
    const user = await service.findByUsernameOrEmail(usernameORemail)
    if (user === null) {
      throw boom.unauthorized()
    }
    const isMatch = await bcrypt.compare(password, user.auth.password)
    if (!isMatch) {
      throw boom.unauthorized()
    }
    return user
  }

  signToken (user: UserDTO): object {
    const payload: PayloadDTO = {
      sub: user.id,
      role: user.auth.role
    }
    const token = jwt.sign(payload, config.api.jwt ?? '')
    return { user, token }
  }

  async sendRecovery (email: string): Promise<object> {
    try {
      const user = await service.findByUsernameOrEmail(email)
      if (user === null) {
        throw boom.unauthorized()
      }
      const payload = { sub: user.id }
      const token = jwt.sign(payload, config.api.jwt ?? '', { expiresIn: '15min' })
      const link = `http://localhost:3005/newpass?token=${token}`

      await service.update(user.id, { auth: { recoveryToken: token } })
      const mail = {
        from: config.mail.user, // sender address
        to: user.email, // list of receivers
        subject: 'recuperacion de clave ✔', // Subject line
        html: `<b>Ingresa a este link => ${link}</b>` // html body
      }
      const rta = await this.sendMail(mail)
      return rta
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async validateEmail (email: string): Promise<object> {
    try {
      const user = await service.isEmailExist(email)
      if (user !== null) {
        throw boom.notFound('El email ya se ecuentra registrado en el sistema')
      }
      const emailValidate = await emailService.findEmail(email)
      if (emailValidate === null) {
        boom.notFound(`El email ${email} no esta habilitado para registrarse en el sistema`)
      }
      return emailValidate
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async changePassword (token: string, newPass: string): Promise<object> {
    try {
      const payload = jwt.verify(token, config.api.jwt ?? '')
      const user = await service.findOne(Number(payload.sub))
      if (user.auth.recoveryToken !== token) {
        throw boom.unauthorized()
      }
      const hash = await bcrypt.hash(newPass, 10)
      await service.update(user.id, { auth: { recoveryToken: null, password: hash } })
      return { message: 'contraseña actualizada con exito' }
    } catch (error) {
      throw boom.unauthorized()
    }
  }

  async sendMail (infomail: object): Promise<object> {
    try {
      const transporter = nodemailer.createTransport({
        host: config.mail.host,
        port: Number(config.mail.port),
        secure: config.mail.secure,
        auth: {
          user: config.mail.user,
          pass: config.mail.pass
        }
      })

      // send mail with defined transport object
      await transporter.sendMail(infomail)
      return { message: 'mail sent' }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async refreshToken (token: string, newPass: string): Promise<object> {
    try {
      const payload = jwt.verify(token, config.api.refresh ?? '')
      const user = await service.findOne(Number(payload.sub))
      if (user.auth.recoveryToken !== token) {
        throw boom.unauthorized()
      }
      const hash = await bcrypt.hash(newPass, 10)
      await service.update(user.id, { auth: { recoveryToken: null, password: hash } })
      return { message: 'password change' }
    } catch (error) {
      throw boom.unauthorized()
    }
  }
}

export default AuthService
