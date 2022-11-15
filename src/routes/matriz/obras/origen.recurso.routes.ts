import { Router, RequestHandler } from 'express'
import { createOrigenRecurso, deleteOrigenRecurso, getOrigenRecurso, getOrigenRecursos, updateOrigenRecurso } from '../../../controllers/matriz/obras/origen.recursa.obra.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createOrigenRecursoSchema, getOrigenRecursoSchema, updateOrigenRecursoSchema } from '../../../middlewares/schemas/obra/origenRecurso.schema'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getOrigenRecursos as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getOrigenRecursoSchema, 'params'), getOrigenRecurso as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(createOrigenRecursoSchema, 'body'), createOrigenRecurso as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'),
  validatorHandler(getOrigenRecursoSchema, 'params'),
  validatorHandler(updateOrigenRecursoSchema, 'body'),
  updateOrigenRecurso as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteOrigenRecurso as RequestHandler)
export default router
