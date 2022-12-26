import { Router, RequestHandler } from 'express'
import { createFormaContrato, deleteFormaContrato, getFormaContrato, getFormasContrato, updateFormaContrato } from '../../../controllers/matriz/presupuesto/forma.contrato.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createFormaContratoSchema, getFormaContratoSchema, updateFormaContratoSchema } from '../../../middlewares/schemas/presupuesto/forma.contrato.schema'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getFormasContrato as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getFormaContratoSchema, 'params'), getFormaContrato as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createFormaContratoSchema, 'body'), createFormaContrato as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getFormaContratoSchema, 'params'),
  validatorHandler(updateFormaContratoSchema, 'body'),
  updateFormaContrato as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteFormaContrato as RequestHandler)
export default router
