import express, { Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()
const port = 3010

app.get('/', (_req: Request, res: Response) => {
  res.send('Hola mSundo 4!!')
})

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.listen(port, () => {
  console.log(`App listen at port ${port}`)
})
