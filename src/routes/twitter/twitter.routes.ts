import { Router, RequestHandler } from 'express'
import { createMember, getMember, deleteMember } from '../../controllers/twitter.controller'

const router = Router()

// router.get('/', getDepartments as RequestHandler)
router.get('/:id', getMember as RequestHandler)
router.post('/', createMember as RequestHandler)
// router.patch('/:id', updateDepartment as RequestHandler)
router.delete('/:id', deleteMember as RequestHandler)
export default router
