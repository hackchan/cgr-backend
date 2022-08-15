import { Router, RequestHandler } from 'express'
import { getMunicipios, getMunicipio, createMunicipio, updateMunicipio, deleteMunicipio } from '../controllers/municipio.controller'
const router = Router()

router.get('/', getMunicipios as RequestHandler)
router.get('/:id', getMunicipio as RequestHandler)
router.post('/', createMunicipio as RequestHandler)
router.patch('/:id', updateMunicipio as RequestHandler)
router.delete('/:id', deleteMunicipio as RequestHandler)
export default router
