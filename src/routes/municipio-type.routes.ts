import { Router, RequestHandler } from 'express'
import { getMunicipiosType, getMunicipioType, createMunicipioType, updateMunicipioType, deleteMunicipioType } from '../controllers/municipio-type.controller'
import passport from 'passport'
import { checkRoles } from '../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getMunicipiosType as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getMunicipioType as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), createMunicipioType as RequestHandler)
router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), updateMunicipioType as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteMunicipioType as RequestHandler)
export default router
