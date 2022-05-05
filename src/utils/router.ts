import { Router } from 'express'

import userRoutes from '../routes/user.routes'

const routers = (app: any): void => {
  const router = Router()
  app.use('/api/v2', router)
  router.use('/users', userRoutes)
}

export default routers
