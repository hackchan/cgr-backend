import { Router, RequestHandler } from 'express'
import { createTipoDoc, deleteTipoDoc, getTipoDoc, getTipodocs, updateTipoDoc } from '../../../controllers/matriz/ies/tipo-documento.ies.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { createTipodocIesSchema, getTipodocIesSchema, updateTipodocIesSchema } from '../../../middlewares/schemas/ies/tipodoc.ies.schema'
const router = Router()

router.get('/', getTipodocs as RequestHandler)
router.get('/:id', validatorHandler(getTipodocIesSchema, 'params'), getTipoDoc as RequestHandler)
router.post('/', validatorHandler(createTipodocIesSchema, 'body'), createTipoDoc as RequestHandler)
router.patch('/:id',
  validatorHandler(getTipodocIesSchema, 'params'),
  validatorHandler(updateTipodocIesSchema, 'body'),
  updateTipoDoc as RequestHandler)
router.delete('/:id', deleteTipoDoc as RequestHandler)
export default router
