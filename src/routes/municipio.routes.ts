import { Router, RequestHandler } from 'express'
import { getMunicipios, getMunicipio, createMunicipio, updateMunicipio, deleteMunicipio, getMunicipiosByDepartment, getDepartmentByMunicipioId } from '../controllers/municipio.controller'
import passport from 'passport'
import { checkRoles } from '../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getMunicipios as RequestHandler)
router.get('/consulta/:department', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getMunicipiosByDepartment as RequestHandler)
router.get('/consulta/department/:municipio', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getDepartmentByMunicipioId as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getMunicipio as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), createMunicipio as RequestHandler)
router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), updateMunicipio as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteMunicipio as RequestHandler)
export default router
