import { Router, RequestHandler } from 'express'
import { createMatricula, deleteMatricula, updateMatricula, getMatricula, getMatriculas } from '../../../controllers/matriz/ies/matriz.ies.controller'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
// import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
// import { getMatrizObraSchema, createMatrizObraSchema, updateMatrizObraSchema } from '../../../middlewares/schemas/obra/matrizObra.schema'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getMatriculas as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getMatricula as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'ENTIDAD'), createMatricula as RequestHandler)
// router.post('/upsert', updateMatricula as RequestHandler)
router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'ENTIDAD'), updateMatricula as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN'), deleteMatricula as RequestHandler)
export default router
