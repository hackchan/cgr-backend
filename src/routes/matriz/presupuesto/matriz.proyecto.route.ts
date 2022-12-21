import { Router, RequestHandler } from 'express'
import { createProyecto, createUpdateProyecto, deleteProyecto, getProyecto, getProyectos, updateProyecto } from '../../../controllers/matriz/presupuesto/matriz.proyecto.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createMatrizProyecto, getMatrizProyectoSchema, updateMatrizProyecto } from '../../../middlewares/schemas/presupuesto/matriz-proyecto.schema'
import passport from 'passport'
import { checkRoles, isAdmin } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), isAdmin(), getProyectos as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), validatorHandler(getMatrizProyectoSchema, 'params'), getProyecto as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD'), validatorHandler(createMatrizProyecto, 'body'), createProyecto as RequestHandler)
router.post('/upsert', checkRoles('ADMIN', 'JEDI', 'ENTIDAD'), createUpdateProyecto as RequestHandler)
router.patch('/update', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'),
  validatorHandler(updateMatrizProyecto, 'body'),
  updateProyecto as RequestHandler)
router.delete('/delete', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI'), deleteProyecto as RequestHandler)
export default router
