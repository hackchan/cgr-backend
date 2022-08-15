import { RequestHandler, Router } from 'express'
import { login, recovery, changePassword } from '../controllers/login.controller'
import passport from 'passport'
// import { checkApiKey } from '../middlewares/auth.handler'
const router = Router()

router.post('/', passport.authenticate('local', { session: false, failureMessage: true }), login as RequestHandler)
router.post('/recovery', recovery as RequestHandler)
router.post('/change-password', changePassword as RequestHandler)
router.post('/refresh', changePassword as RequestHandler)
export default router
