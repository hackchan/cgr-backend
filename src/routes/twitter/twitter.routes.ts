import { Router, RequestHandler } from 'express'
import { createMember, getMember, deleteMember, updateMember, getMembers } from '../../controllers/twitter/member.controller'

const router = Router()

router.get('/', getMembers as RequestHandler)
router.get('/:id', getMember as RequestHandler)
router.post('/', createMember as RequestHandler)
router.patch('/:id', updateMember as RequestHandler)
router.delete('/:id', deleteMember as RequestHandler)
export default router
