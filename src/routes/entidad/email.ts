import { Router, RequestHandler } from 'express'
import { createEmail, deleteEmail, getEmail, getEmails, updateEmail } from '../../controllers/entidad/emails.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createEmailSchema, getEmailSchema, updateEmailSchema } from '../../middlewares/schemas/entidad/emails.schema'
import passport from 'passport'
import { checkRoles } from '../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getEmails as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getEmailSchema, 'params'), getEmail as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createEmailSchema, 'body'), createEmail as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getEmailSchema, 'params'),
  validatorHandler(updateEmailSchema, 'body'),
  updateEmail as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteEmail as RequestHandler)
export default router
