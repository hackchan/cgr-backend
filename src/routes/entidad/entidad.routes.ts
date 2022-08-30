import { Router, RequestHandler } from 'express'
import { createEntidad, deleteEntidad, getEntidad, getEntidades, updateEntidad } from '../../controllers/entidad/entidad.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createEntidadSchema, getEntidadSchema, updateEntidadSchema } from '../../middlewares/schemas/entidad/entidad.schema'
const router = Router()

router.get('/', getEntidades as RequestHandler)
router.get('/:id', validatorHandler(getEntidadSchema, 'params'), getEntidad as RequestHandler)
router.post('/', validatorHandler(createEntidadSchema, 'body'), createEntidad as RequestHandler)
router.patch('/:id',
  validatorHandler(getEntidadSchema, 'params'),
  validatorHandler(updateEntidadSchema, 'body'),
  updateEntidad as RequestHandler)
router.delete('/:id', deleteEntidad as RequestHandler)
export default router
