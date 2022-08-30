import { Router, RequestHandler } from 'express'
import { createSubsector, deleteSubsubsector, getSubsector, getSubsectores, updateSubsector } from '../../controllers/entidad/subsector.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createSubsectorSchema, getSubsectorSchema, updateSubsectorSchema } from '../../middlewares/schemas/entidad/subsector.schema'
const router = Router()

router.get('/', getSubsectores as RequestHandler)
router.get('/:id', validatorHandler(getSubsectorSchema, 'params'), getSubsector as RequestHandler)
router.post('/', validatorHandler(createSubsectorSchema, 'body'), createSubsector as RequestHandler)
router.patch('/:id',
  validatorHandler(getSubsectorSchema, 'params'),
  validatorHandler(updateSubsectorSchema, 'body'),
  updateSubsector as RequestHandler)
router.delete('/:id', deleteSubsubsector as RequestHandler)
export default router
