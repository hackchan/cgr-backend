import { Router, RequestHandler } from 'express'
import { createSector, deleteSector, getSector, getSectores, updateSector } from '../../../controllers/matriz/obras/sector.obra.controller copy'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createSectorObraSchema, getSectorObraSchema, updateSectorObraSchema } from '../../../middlewares/schemas/obra/sectorObra.schema'
const router = Router()

router.get('/', getSectores as RequestHandler)
router.get('/:id', validatorHandler(getSectorObraSchema, 'params'), getSector as RequestHandler)
router.post('/', validatorHandler(createSectorObraSchema, 'body'), createSector as RequestHandler)
router.patch('/:id',
  validatorHandler(getSectorObraSchema, 'params'),
  validatorHandler(updateSectorObraSchema, 'body'),
  updateSector as RequestHandler)
router.delete('/:id', deleteSector as RequestHandler)
export default router
