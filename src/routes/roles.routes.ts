import { RequestHandler, Router } from 'express'
import { createRole, deleteRole, getRole, getRoles, updateRole } from '../controllers/roles.controller'
import passport from 'passport'
import { checkRoles } from '../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getRoles as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getRole as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), createRole as RequestHandler)
router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), updateRole as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteRole as RequestHandler)
// router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), getUserType as RequestHandler)
// router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), createUserType as RequestHandler)
// router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), updateUserType as RequestHandler)
// router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), deleteUserType as RequestHandler)

export default router
