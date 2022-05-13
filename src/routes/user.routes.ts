import { RequestHandler, Router } from 'express'
import { createUser, getUser, getUsers, updateUser, deleteUser } from '../controllers/user.controller'
import { checkApiKey } from '../middlewares/auth.handler'
const router = Router()

router.get('/', checkApiKey as RequestHandler, getUsers as RequestHandler)
router.get('/:id', getUser as RequestHandler)
router.post('/', createUser as RequestHandler)
router.patch('/:id', updateUser as RequestHandler)
router.delete('/:id', deleteUser as RequestHandler)
export default router
