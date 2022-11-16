import { RequestHandler, Router } from 'express'
import { createUser, getUser, getUsers, updateUser, deleteUser, getUsersCGR } from '../controllers/user.controller'
import { checkApiKey, checkRoles } from '../middlewares/auth.handler'
import { validatorHandler } from '../middlewares/schemas/validator.handler'
import { createUserSchema, getUserSchema, updateUserSchema } from '../middlewares/schemas/users/users.schema'
import passport from 'passport'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getUsers as RequestHandler)
router.get('/cgr', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), getUsersCGR as RequestHandler)
router.get('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getUserSchema, 'params'), getUser as RequestHandler)
router.post('/', passport.authenticate('jwt', { session: false, failWithError: true }), createUser as RequestHandler)
// router.post('/', validatorHandler(createUserSchema, 'body'), createUser as RequestHandler)
router.patch('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), updateUser as RequestHandler)
// router.patch('/:id', validatorHandler(getUserSchema, 'params'),
//   validatorHandler(updateUserSchema, 'body'), updateUser as RequestHandler)
router.delete('/:id', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('JEDI', 'ADMIN'), validatorHandler(getUserSchema, 'params'), deleteUser as RequestHandler)
export default router
