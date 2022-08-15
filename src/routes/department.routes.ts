import { Router, RequestHandler } from 'express'
import { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment } from '../controllers/department.controller'
const router = Router()

router.get('/', getDepartments as RequestHandler)
router.get('/:id', getDepartment as RequestHandler)
router.post('/', createDepartment as RequestHandler)
router.patch('/:id', updateDepartment as RequestHandler)
router.delete('/:id', deleteDepartment as RequestHandler)
export default router
