import { Router, RequestHandler } from 'express'
import { createObra, getObras, getObra, deleteObra, updateObra } from '../../../controllers/matriz/obras/matriz.obra.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createSectorObraSchema, getSectorObraSchema, updateSectorObraSchema } from '../../../middlewares/schemas/obra/sectorObra.schema'
const router = Router()

router.get('/', getObras as RequestHandler)
router.get('/:id', validatorHandler(getSectorObraSchema, 'params'), getObra as RequestHandler)
router.post('/', validatorHandler(createSectorObraSchema, 'body'), createObra as RequestHandler)
router.patch('/:id',
  validatorHandler(getSectorObraSchema, 'params'),
  validatorHandler(updateSectorObraSchema, 'body'),
  updateObra as RequestHandler)
router.delete('/:id', deleteObra as RequestHandler)
export default router
