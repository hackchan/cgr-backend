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
app.use(express.json())
app.use(morgan('dev'))

// Routers
routers(app)
// errors
app.use(boomErroHandler)
app.use(errorHandler)

export default app
