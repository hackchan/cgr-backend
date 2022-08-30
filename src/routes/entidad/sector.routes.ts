import { Router, RequestHandler } from 'express'
import { createSector, deleteSubsector, getSector, getSectores, updateSector } from '../../controllers/entidad/sector.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createSectorSchema, getSectorSchema, updateSectorSchema } from '../../middlewares/schemas/entidad/sector.schema'
const router = Router()

router.get('/', getSectores as RequestHandler)
router.get('/:id', validatorHandler(getSectorSchema, 'params'), getSector as RequestHandler)
router.post('/', validatorHandler(createSectorSchema, 'body'), createSector as RequestHandler)
router.patch('/:id',
  validatorHandler(getSectorSchema, 'params'),
  validatorHandler(updateSectorSchema, 'body'),
  updateSector as RequestHandler)
router.delete('/:id', deleteSubsector as RequestHandler)
export default router
