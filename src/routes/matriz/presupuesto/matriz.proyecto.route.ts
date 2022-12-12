import { Router, RequestHandler } from 'express'
import { createProyecto, createUpdateProyecto, deleteProyecto, getProyecto, getProyectos, updateProyecto } from '../../../controllers/matriz/presupuesto/matriz.proyecto.controller'
// import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
// import { getMatrizObraSchema, createMatrizObraSchema, updateMatrizObraSchema } from '../../../middlewares/schemas/obra/matrizObra.schema'
import passport from 'passport'
import { checkRoles, isAdmin } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), isAdmin(), getProyectos as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getProyecto as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD'), createProyecto as RequestHandler)
router.post('/upsert', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD'), createUpdateProyecto as RequestHandler)
router.patch('/:id',
  passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'),
  updateProyecto as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI'), deleteProyecto as RequestHandler)
export default router
