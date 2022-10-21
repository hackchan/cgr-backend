import { Router, RequestHandler } from 'express'
import multer from 'multer'
import { setUploadFiles } from '../../controllers/azure/azure.controller'
const router = Router()
const inMemoryStorage = multer.memoryStorage()
const uploadStrategy = multer({ storage: inMemoryStorage }).single('file')
router.get('/', uploadStrategy, setUploadFiles as RequestHandler)

export default router
