/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import { UserDTO } from '../entityTypes/user.dto'
import AuthService from '../services/auth.services'

const serviceAuth = new AuthService()

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: UserDTO = JSON.parse(JSON.stringify(req.user))
    success(req, res, serviceAuth.signToken(user))
  } catch (error) {
    next(error)
  }
}

export const recovery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body
    await serviceAuth.sendRecovery(email)
    success(req, res, { msn: 'revise su correo electrónico para obtener un enlace para restablecer su contraseña. si no aparece en unos minutos, revise su carpeta de correo no deseado.' })
    // const respose = await userService.findOne(parseInt(id, 10))
  } catch (error) {
    next(error)
  }
}

export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token, newPassword } = req.body
    const message = await serviceAuth.changePassword(token, newPassword)
    success(req, res, message)
    // const respose = await userService.findOne(parseInt(id, 10))
  } catch (error) {
    next(error)
  }
}

export const validateEmailEntidad = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body
    const message = await serviceAuth.validateEmail(email)
    success(req, res, message)
    // const respose = await userService.findOne(parseInt(id, 10))
  } catch (error) {
    next(error)
  }
}

// export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { refreshToken } = req.headers.refresh
//     if (refreshToken !== null) {
//       throw new Error('error al generar refresh')
//     }

//     success(req, res, message)
//     // const respose = await userService.findOne(parseInt(id, 10))
//   } catch (error) {
//     next(error)
//   }
// }
