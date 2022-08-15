import { Router, RequestHandler } from 'express'
import { getSatelitales, getSatelital, createSatelital, updateSatelital, deleteSatelital } from '../controllers/satelital.controller'
const router = Router()

router.get('/', getSatelitales as RequestHandler)
router.get('/:id', getSatelital as RequestHandler)
router.post('/', createSatelital as RequestHandler)
router.patch('/:id', updateSatelital as RequestHandler)
router.delete('/:id', deleteSatelital as RequestHandler)
export default router
