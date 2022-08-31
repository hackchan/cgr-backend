import { Router, RequestHandler } from 'express'
import { createEstadoObra, deleteEstadoObra, updateEstadoObra, getEstadoObra, getEstadoObras } from '../../../controllers/matriz/obras/estado.obra.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createEstadoObraSchema, getEstadoObraSchema, updateEstadoObraSchema } from '../../../middlewares/schemas/obra/estadoObra.schema'
const router = Router()

router.get('/', getEstadoObras as RequestHandler)
router.get('/:id', validatorHandler(getEstadoObraSchema, 'params'), getEstadoObra as RequestHandler)
router.post('/', validatorHandler(createEstadoObraSchema, 'body'), createEstadoObra as RequestHandler)
router.patch('/:id',
  validatorHandler(getEstadoObraSchema, 'params'),
  validatorHandler(updateEstadoObraSchema, 'body'),
  updateEstadoObra as RequestHandler)
router.delete('/:id', deleteEstadoObra as RequestHandler)
export default router
