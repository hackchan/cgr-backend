import { Router } from 'express'

import userRoutes from '../routes/user.routes'
import usertypeRoutes from '../routes/usertype.routes'
import loginRoutes from '../routes/login.routes'
import satelitalRoutes from '../routes/satelital.routes'
import departmentsRoutes from '../routes/department.routes'
import municipiosRoutes from '../routes/municipio.routes'
import municipiosTypesRoutes from '../routes/municipio-type.routes'

const routers = (app: any): void => {
  const router = Router()
  app.use('/api/v2', router)
  router.use('/users', userRoutes)
  router.use('/tipouser', usertypeRoutes)
  router.use('/login', loginRoutes)
  router.use('/satelital', satelitalRoutes)
  router.use('/department', departmentsRoutes)
  router.use('/municipio', municipiosRoutes)
  router.use('/municipio-types', municipiosTypesRoutes)
}

export default routers
