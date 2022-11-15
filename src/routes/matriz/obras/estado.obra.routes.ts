import { Router, RequestHandler } from 'express'
import { createEstadoObra, deleteEstadoObra, updateEstadoObra, getEstadoObra, getEstadoObras } from '../../../controllers/matriz/obras/estado.obra.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createEstadoObraSchema, getEstadoObraSchema, updateEstadoObraSchema } from '../../../middlewares/schemas/obra/estadoObra.schema'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getEstadoObras as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getEstadoObraSchema, 'params'), getEstadoObra as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createEstadoObraSchema, 'body'), createEstadoObra as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getEstadoObraSchema, 'params'),
  validatorHandler(updateEstadoObraSchema, 'body'),
  updateEstadoObra as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteEstadoObra as RequestHandler)
export default router
