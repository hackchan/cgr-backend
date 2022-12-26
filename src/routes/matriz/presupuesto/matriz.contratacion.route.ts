import { Router, RequestHandler } from 'express'
import { createContrato, createUpdateContrato, deleteContrato, getContrato, getContratos, updateContrato } from '../../../controllers/matriz/presupuesto/matriz.contratacion.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createMatrizProyecto, getMatrizProyectoSchema, updateMatrizProyecto } from '../../../middlewares/schemas/presupuesto/matriz-proyecto.schema'
import passport from 'passport'
import { checkRoles, isAdmin } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), isAdmin(), getContratos as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'), getContrato as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD'), createContrato as RequestHandler)
router.post('/upsert', checkRoles('ADMIN', 'JEDI', 'ENTIDAD'), createUpdateContrato as RequestHandler)
router.patch('/update', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI', 'ENTIDAD', 'INFORMACION', 'ANALISIS', 'URI'),
  updateContrato as RequestHandler)
router.delete('/delete', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('ADMIN', 'JEDI'), deleteContrato as RequestHandler)
export default router
