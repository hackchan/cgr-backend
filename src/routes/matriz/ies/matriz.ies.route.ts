import { Router, RequestHandler } from 'express'
import { createMatricula, deleteMatricula, updateMatricula, getMatricula, getMatriculas } from '../../../controllers/matriz/ies/matriz.ies.controller'
// import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
// import { getMatrizObraSchema, createMatrizObraSchema, updateMatrizObraSchema } from '../../../middlewares/schemas/obra/matrizObra.schema'
const router = Router()

router.get('/', getMatriculas as RequestHandler)
router.get('/:id', getMatricula as RequestHandler)
router.post('/', createMatricula as RequestHandler)
// router.post('/upsert', updateMatricula as RequestHandler)
router.patch('/:id', updateMatricula as RequestHandler)
router.delete('/:id', deleteMatricula as RequestHandler)
export default router
