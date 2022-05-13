import bcrypt from 'bcrypt'
import { Strategy } from 'passport-local'
import UserService from '../../services/user.services'
import boom from '@hapi/boom'
const service = new UserService()
// eslint-disable-next-line @typescript-eslint/no-misused-promises
const localStrategy = new Strategy({ usernameField: 'username', passwordField: 'password' }, async (username, password, done): Promise<void> => {
  try {
    console.log('entro')
    const user = await service.findByUsernameOrEmail(username)
    if (user === null) {
      done(boom.unauthorized(), false)
    }
    const isMatch = await bcrypt.compare(password, user.auth.password)
    if (!isMatch) {
      done(boom.unauthorized(), false)
    }
    done(null, user)
  } catch (error) {
    console.log('el error:', error)
    done(error, false)
  }
})

export default localStrategy
