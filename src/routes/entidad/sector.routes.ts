import { Router, RequestHandler } from 'express'
import { createSector, deleteSubsector, getSector, getSectores, updateSector } from '../../controllers/entidad/sector.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createSectorSchema, getSectorSchema, updateSectorSchema } from '../../middlewares/schemas/entidad/sector.schema'
import passport from 'passport'
import { checkRoles } from '../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getSectores as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getSectorSchema, 'params'), getSector as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createSectorSchema, 'body'), createSector as RequestHandler)
router.patch('/:id',
  validatorHandler(getSectorSchema, 'params'),
  validatorHandler(updateSectorSchema, 'body'),
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  updateSector as RequestHandler)
router.delete('/:id', deleteSubsector as RequestHandler)
export default router
