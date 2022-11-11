import { Router, RequestHandler } from 'express'
import { createMatricula, deleteMatricula, updateMatricula, getMatricula, getMatriculas } from '../../../controllers/matriz/ies/matriz.ies.controller'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
// import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
// import { getMatrizObraSchema, createMatrizObraSchema, updateMatrizObraSchema } from '../../../middlewares/schemas/obra/matrizObra.schema'
const router = Router()

// router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin', 'entidad', 'informacion', 'analisis', 'uri'), getMatriculas as RequestHandler)
// router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin', 'entidad', 'informacion', 'analisis', 'uri'), getMatricula as RequestHandler)
// router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin', 'entidad'), createMatricula as RequestHandler)
// // router.post('/upsert', updateMatricula as RequestHandler)
// router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin', 'entidad'), updateMatricula as RequestHandler)
// router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), deleteMatricula as RequestHandler)

router.get('/', getMatriculas as RequestHandler)
router.get('/:id', getMatricula as RequestHandler)
router.post('/', createMatricula as RequestHandler)
// router.post('/upsert', updateMatricula as RequestHandler)
router.patch('/:id', updateMatricula as RequestHandler)
router.delete('/:id', deleteMatricula as RequestHandler)
export default router
