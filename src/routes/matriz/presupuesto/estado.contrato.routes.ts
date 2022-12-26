import { Router, RequestHandler } from 'express'
import { createEstadoContrato, deleteEstadoContrato, getEstadoContrato, getEstadosContrato, updateEstadoContrato } from '../../../controllers/matriz/presupuesto/estado.contrato.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createEstadoContratoSchema, getEstadoContratoSchema, updateEstadoContratoSchema } from '../../../middlewares/schemas/presupuesto/estado.contrato.schema'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getEstadosContrato as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getEstadoContratoSchema, 'params'), getEstadoContrato as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createEstadoContratoSchema, 'body'), createEstadoContrato as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getEstadoContratoSchema, 'params'),
  validatorHandler(updateEstadoContratoSchema, 'body'),
  updateEstadoContrato as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteEstadoContrato as RequestHandler)
export default router
