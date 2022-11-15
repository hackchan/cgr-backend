import { Router, RequestHandler } from 'express'
import { getSatelitales, getSatelital, createSatelital, updateSatelital, deleteSatelital } from '../controllers/satelital.controller'
import passport from 'passport'
import { checkRoles } from '../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getSatelitales as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getSatelital as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), createSatelital as RequestHandler)
router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), updateSatelital as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), deleteSatelital as RequestHandler)
export default router
