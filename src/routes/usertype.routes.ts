import { RequestHandler, Router } from 'express'
import { createUserType, getUserTypes, getUserType, updateUserType, deleteUserType } from '../controllers/usertype.controller'
import passport from 'passport'
import { checkRoles } from '../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), getUserTypes as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), getUserType as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), createUserType as RequestHandler)
router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), updateUserType as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin'), deleteUserType as RequestHandler)

export default router
