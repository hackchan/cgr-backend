import { Router, RequestHandler } from 'express'
import { getCategorias, getCategoria, createCategoria, deleteCategoria, updateCategoria } from '../../controllers/entidad/categoria.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createCategorySchema, updateCategorySchema, getCategorySchema } from '../../middlewares/schemas/entidad/categoria.schema'
const router = Router()

router.get('/', getCategorias as RequestHandler)
router.get('/:id', validatorHandler(getCategorySchema, 'params'), getCategoria as RequestHandler)
router.post('/', validatorHandler(createCategorySchema, 'body'), createCategoria as RequestHandler)
router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategoria as RequestHandler)
router.delete('/:id', deleteCategoria as RequestHandler)
export default router
