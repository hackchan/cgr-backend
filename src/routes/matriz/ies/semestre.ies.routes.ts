import { Router, RequestHandler } from 'express'
import { createSemestre, deleteSemestre, getSemestre, getSemestres, updateSemestre } from '../../../controllers/matriz/ies/semestre.ies.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createSemestreIesSchema, getSemestreIesSchema, updateSemestreIesSchema } from '../../../middlewares/schemas/ies/semestre.ies.schema'
const router = Router()

router.get('/', getSemestres as RequestHandler)
router.get('/:id', validatorHandler(getSemestreIesSchema, 'params'), getSemestre as RequestHandler)
router.post('/', validatorHandler(createSemestreIesSchema, 'body'), createSemestre as RequestHandler)
router.patch('/:id',
  validatorHandler(getSemestreIesSchema, 'params'),
  validatorHandler(updateSemestreIesSchema, 'body'),
  updateSemestre as RequestHandler)
router.delete('/:id', deleteSemestre as RequestHandler)
export default router
