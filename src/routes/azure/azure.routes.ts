import { Router, RequestHandler } from 'express'
import { setUploadFiles } from '../../controllers/azure/azure.controller'
const router = Router()

router.get('/', setUploadFiles as RequestHandler)

export default router
