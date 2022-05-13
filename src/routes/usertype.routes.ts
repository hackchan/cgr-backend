import { RequestHandler, Router } from 'express'
import { createUserType, getUserTypes, getUserType, updateUserType, deleteUserType } from '../controllers/usertype.controller'
const router = Router()

router.get('/', getUserTypes as RequestHandler)
router.get('/:id', getUserType as RequestHandler)
router.post('/', createUserType as RequestHandler)
router.patch('/:id', updateUserType as RequestHandler)
router.delete('/:id', deleteUserType as RequestHandler)

export default router
