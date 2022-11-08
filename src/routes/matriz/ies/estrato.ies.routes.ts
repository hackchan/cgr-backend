import { Router, RequestHandler } from 'express'
import { createEstrato, deleteEstrato, getEstrato, getEstratos, updateEstrato } from '../../../controllers/matriz/ies/estratos.ies.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createEstratoIesSchema, getEstratoIesSchema, updateEstratoIesSchema } from '../../../middlewares/schemas/ies/estrato.ies.schema'
const router = Router()

router.get('/', getEstratos as RequestHandler)
router.get('/:id', validatorHandler(getEstratoIesSchema, 'params'), getEstrato as RequestHandler)
router.post('/', validatorHandler(createEstratoIesSchema, 'body'), createEstrato as RequestHandler)
router.patch('/:id',
  validatorHandler(getEstratoIesSchema, 'params'),
  validatorHandler(updateEstratoIesSchema, 'body'),
  updateEstrato as RequestHandler)
router.delete('/:id', deleteEstrato as RequestHandler)
export default router
