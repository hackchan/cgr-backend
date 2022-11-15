import { Router, RequestHandler } from 'express'
import { createSubsector, deleteSubsubsector, getSubsector, getSubsectores, updateSubsector } from '../../controllers/entidad/subsector.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createSubsectorSchema, getSubsectorSchema, updateSubsectorSchema } from '../../middlewares/schemas/entidad/subsector.schema'
import passport from 'passport'
import { checkRoles } from '../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getSubsectores as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getSubsectorSchema, 'params'), getSubsector as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createSubsectorSchema, 'body'), createSubsector as RequestHandler)
router.patch('/:id',
  validatorHandler(getSubsectorSchema, 'params'),
  validatorHandler(updateSubsectorSchema, 'body'),
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  updateSubsector as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteSubsubsector as RequestHandler)
export default router
