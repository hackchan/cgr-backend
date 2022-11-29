import { Router, RequestHandler } from 'express'
import { createEntidad, deleteEntidad, getEntidad, getEntidades, updateEntidad } from '../../controllers/entidad/entidad.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createEntidadSchema, getEntidadSchema, updateEntidadSchema } from '../../middlewares/schemas/entidad/entidad.schema'
import passport from 'passport'
import { checkRoles, isAdmin } from '../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), isAdmin(), getEntidades as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getEntidadSchema, 'params'), getEntidad as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createEntidadSchema, 'body'), createEntidad as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getEntidadSchema, 'params'),
  validatorHandler(updateEntidadSchema, 'body'),
  updateEntidad as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteEntidad as RequestHandler)
export default router
