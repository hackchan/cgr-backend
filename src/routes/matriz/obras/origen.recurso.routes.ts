import { Router, RequestHandler } from 'express'
import { createOrigenRecurso, deleteOrigenRecurso, getOrigenRecurso, getOrigenRecursos, updateOrigenRecurso } from '../../../controllers/matriz/obras/origen.recursa.obra.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createOrigenRecursoSchema, getOrigenRecursoSchema, updateOrigenRecursoSchema } from '../../../middlewares/schemas/obra/origenRecurso.schema'
const router = Router()

router.get('/', getOrigenRecursos as RequestHandler)
router.get('/:id', validatorHandler(getOrigenRecursoSchema, 'params'), getOrigenRecurso as RequestHandler)
router.post('/', validatorHandler(createOrigenRecursoSchema, 'body'), createOrigenRecurso as RequestHandler)
router.patch('/:id',
  validatorHandler(getOrigenRecursoSchema, 'params'),
  validatorHandler(updateOrigenRecursoSchema, 'body'),
  updateOrigenRecurso as RequestHandler)
router.delete('/:id', deleteOrigenRecurso as RequestHandler)
export default router
