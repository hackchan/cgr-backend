import { Router, RequestHandler } from 'express'
import { createObra, getObras, getObra, deleteObra, updateObra, createUpdateObra } from '../../../controllers/matriz/obras/matriz.obra.controller'
import { validatorHandler } from '../../../middlewares/schemas/validator.handler'
import { getMatrizObraSchema, createMatrizObraSchema, updateMatrizObraSchema } from '../../../middlewares/schemas/obra/matrizObra.schema'
import passport from 'passport'
import { checkRoles } from '../../../middlewares/auth.handler'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false, failWithError: true }), checkRoles('admin', 'entidad', 'informacion', 'analisis', 'uri'), getObras as RequestHandler)
router.get('/:id', validatorHandler(getMatrizObraSchema, 'params'), getObra as RequestHandler)
router.post('/', validatorHandler(createMatrizObraSchema, 'body'), createObra as RequestHandler)
router.post('/upsert', validatorHandler(createMatrizObraSchema, 'body'), createUpdateObra as RequestHandler)
router.patch('/:id',
  validatorHandler(getMatrizObraSchema, 'params'),
  validatorHandler(updateMatrizObraSchema, 'body'),
  updateObra as RequestHandler)
router.delete('/:id', deleteObra as RequestHandler)
export default router
