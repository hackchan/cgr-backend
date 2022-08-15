import { Strategy } from 'passport-local'
import AuthService from '../../services/auth.services'
const serviceAuth = new AuthService()
// eslint-disable-next-line @typescript-eslint/no-misused-promises
const localStrategy = new Strategy({ usernameField: 'username', passwordField: 'password' }, async (username, password, done): Promise<void> => {
  try {
    const user = await serviceAuth.getUser(username, password)
    done(null, user)
  } catch (error) {
    done(error, false)
  }
})

export default localStrategy
