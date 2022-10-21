/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router, RequestHandler } from 'express'
import multer from 'multer'
import { setUploadFiles } from '../../controllers/azure/azure.controller'
import { checkApiKey } from '../../middlewares/auth.handler'
const router = Router()
const inMemoryStorage = multer.memoryStorage()
const uploadStrategy = multer({ storage: inMemoryStorage }).single('file')

router.get('/', checkApiKey, uploadStrategy, setUploadFiles as RequestHandler)

export default router
