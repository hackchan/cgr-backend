import { RequestHandler, Router } from 'express'
import { createUser, getUser, getUsers, updateUser, deleteUser, getUsersCGR } from '../controllers/user.controller'
import { checkApiKey } from '../middlewares/auth.handler'
import { validatorHandler } from '../middlewares/schemas/validator.handler'
import { createUserSchema, getUserSchema, updateUserSchema } from '../middlewares/schemas/users/users.schema'
const router = Router()

router.get('/', getUsers as RequestHandler)
router.get('/cgr', getUsersCGR as RequestHandler)
router.get('/:id', validatorHandler(getUserSchema, 'params'), getUser as RequestHandler)
router.post('/', validatorHandler(createUserSchema, 'body'), createUser as RequestHandler)
router.patch('/:id', validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'), updateUser as RequestHandler)
router.delete('/:id', validatorHandler(getUserSchema, 'params'), deleteUser as RequestHandler)
export default router
