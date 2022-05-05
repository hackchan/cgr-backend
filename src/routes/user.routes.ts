import { Router } from 'express'
import { createUser } from '../controllers/user.controller'
const router = Router()

// router.get('/', getUsers)
// router.get('/:id', getUser)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', createUser)
// router.patch('/:id', updateUser)
// router.delete('/:id', deleteUser)
export default router
