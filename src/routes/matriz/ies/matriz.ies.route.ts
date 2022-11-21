import { Router, RequestHandler } from 'express'
import { createMatricula, deleteMatricula, updateMatricula, getMatricula, getMatriculas } from '../../../controllers/matriz/ies/matriz.ies.controller'
import passport from 'passport'
import { checkRoles, isAdmin } from '../../../middlewares/auth.handler'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { getMatrizIESSchema, createMatrizIESSchema, updateMatrizIESSchema } from '../../../middlewares/schemas/ies/matriz.ies.schema'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), isAdmin(), getMatriculas as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), validatorHandler(getMatrizIESSchema, 'params'), getMatricula as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD'), validatorHandler(createMatrizIESSchema, 'body'), createMatricula as RequestHandler)
// router.post('/upsert', updateMatricula as RequestHandler)
router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD'), validatorHandler(getMatrizIESSchema, 'params'),
  validatorHandler(updateMatrizIESSchema, 'body'), updateMatricula as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI'), deleteMatricula as RequestHandler)
export default router
