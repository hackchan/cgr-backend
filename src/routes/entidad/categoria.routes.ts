import { Router, RequestHandler } from 'express'
import { getCategorias, getCategoria, createCategoria, deleteCategoria, updateCategoria } from '../../controllers/entidad/categoria.controller'
import { validatorHandler } from '../../middlewares/schemas/validator.handler'
import { createCategorySchema, updateCategorySchema, getCategorySchema } from '../../middlewares/schemas/entidad/categoria.schema'
import passport from 'passport'
import { checkRoles } from '../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getCategorias as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getCategorySchema, 'params'), getCategoria as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createCategorySchema, 'body'), createCategoria as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategoria as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteCategoria as RequestHandler)
export default router
