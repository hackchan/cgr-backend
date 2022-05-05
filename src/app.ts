import express, { Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()
const port = 3010

//
app.set('port', port)
// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routers
app.get('/', (_req: Request, res: Response) => {
  res.send('Hola mSundo 8!!')
})

export default app
