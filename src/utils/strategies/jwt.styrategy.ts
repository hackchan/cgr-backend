import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import config from '../../config'
const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.api.jwt
}

const JwtStrategy = new Strategy(options, (payload, done) => {
  try {
    return done(null, payload)
  } catch (error) {
    console.log(error)
    done(error, false)
  }
})

export default JwtStrategy
