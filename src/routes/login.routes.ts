import { RequestHandler, Router } from 'express'
import { login } from '../controllers/login.controller'
import passport from 'passport'
// import { checkApiKey } from '../middlewares/auth.handler'
const router = Router()

router.post('/', passport.authenticate('local', { session: false, failureMessage: true }), login as RequestHandler)

export default router
