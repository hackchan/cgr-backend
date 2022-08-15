import { Router, RequestHandler } from 'express'
import { getMunicipiosType, getMunicipioType, createMunicipioType, updateMunicipioType, deleteMunicipioType } from '../controllers/municipio-type.controller'
const router = Router()

router.get('/', getMunicipiosType as RequestHandler)
router.get('/:id', getMunicipioType as RequestHandler)
router.post('/', createMunicipioType as RequestHandler)
router.patch('/:id', updateMunicipioType as RequestHandler)
router.delete('/:id', deleteMunicipioType as RequestHandler)
export default router
