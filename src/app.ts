import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './utils'
import routers from './utils/router'
import {
  boomErroHandler,
  errorHandler
} from './middlewares/errors'
const app = express()
const port = 3010

//
app.set('port', port)
// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }))

// Routers
routers(app)
// errors
app.use(boomErroHandler)
app.use(errorHandler)

export default app
