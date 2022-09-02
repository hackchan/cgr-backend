import { Router, RequestHandler } from 'express'
import { createObra, getObras, getObra, deleteObra, updateObra } from '../../../controllers/matriz/obras/matriz.obra.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { getMatrizObraSchema, createMatrizObraSchema, updateMatrizObraSchema } from '../../../middlewares/schemas/obra/matrizObra.schema'
const router = Router()

router.get('/', getObras as RequestHandler)
router.get('/:id', validatorHandler(getMatrizObraSchema, 'params'), getObra as RequestHandler)
router.post('/', validatorHandler(createMatrizObraSchema, 'body'), createObra as RequestHandler)
router.patch('/:id',
  validatorHandler(getMatrizObraSchema, 'params'),
  validatorHandler(updateMatrizObraSchema, 'body'),
  updateObra as RequestHandler)
router.delete('/:id', deleteObra as RequestHandler)
export default router
