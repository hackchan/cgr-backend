import { Router, RequestHandler } from 'express'
import { createSector, deleteSector, getSector, getSectores, updateSector } from '../../../controllers/matriz/presupuesto/sector.proyecto.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createSectorObraSchema, getSectorObraSchema, updateSectorObraSchema } from '../../../middlewares/schemas/obra/sectorObra.schema'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getSectores as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getSectorObraSchema, 'params'), getSector as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createSectorObraSchema, 'body'), createSector as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getSectorObraSchema, 'params'),
  validatorHandler(updateSectorObraSchema, 'body'),
  updateSector as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteSector as RequestHandler)
export default router
