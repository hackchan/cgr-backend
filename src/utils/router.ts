import { Router } from 'express'

import userRoutes from '../routes/user.routes'
import usertypeRoutes from '../routes/usertype.routes'
import loginRoutes from '../routes/login.routes'
const routers = (app: any): void => {
  const router = Router()
  app.use('/api/v2', router)
  router.use('/users', userRoutes)
  router.use('/tipouser', usertypeRoutes)
  router.use('/login', loginRoutes)
}

export default routers
