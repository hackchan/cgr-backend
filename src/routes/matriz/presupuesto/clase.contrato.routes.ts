import { Router, RequestHandler } from 'express'
import { createClaseContrato, deleteClaseContrato, getClaseContrato, getClasesContrato, updateClaseContrato } from '../../../controllers/matriz/presupuesto/clase.contrato.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createClaseContratoSchema, getClaseContratoSchema, updateClaseContratoSchema } from '../../../middlewares/schemas/presupuesto/clase.contrato.schema'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getClasesContrato as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getClaseContratoSchema, 'params'), getClaseContrato as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createClaseContratoSchema, 'body'), createClaseContrato as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getClaseContratoSchema, 'params'),
  validatorHandler(updateClaseContratoSchema, 'body'),
  updateClaseContrato as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteClaseContrato as RequestHandler)
export default router
