import { RequestHandler, Router } from 'express'
import { login, sendEmailrecovery, sendEmailActiveUser, changePassword, validateEmailEntidad, verifyUserActive } from '../controllers/login.controller'
  import passport from 'passport'
// import { checkApiKey } from '../middlewares/auth.handler'
const router = Router()

router.post('/', passport.authenticate('local', { session: false, failureMessage: true }), login as RequestHandler)
router.post('/recovery', sendEmailrecovery as RequestHandler)
router.post('/email-active', sendEmailActiveUser as RequestHandler)
router.post('/change-password', changePassword as RequestHandler)
router.post('/verify-user', verifyUserActive as RequestHandler)
router.post('/refresh', changePassword as RequestHandler)
router.post('/validate-email-entidad', validateEmailEntidad as RequestHandler)
export default router
