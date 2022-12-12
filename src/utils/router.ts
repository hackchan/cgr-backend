import { Router } from 'express'

import userRoutes from '../routes/user.routes'
import usertypeRoutes from '../routes/usertype.routes'
import loginRoutes from '../routes/login.routes'
import satelitalRoutes from '../routes/satelital.routes'
import departmentsRoutes from '../routes/department.routes'
import municipiosRoutes from '../routes/municipio.routes'
import municipiosTypesRoutes from '../routes/municipio-type.routes'
import categorias from '../routes/entidad/categoria.routes'
import sector from '../routes/entidad/sector.routes'
import subsector from '../routes/entidad/subsector.routes'
import entidad from '../routes/entidad/entidad.routes'
import email from '../routes/entidad/email'
import estadoObra from '../routes/matriz/obras/estado.obra.routes'
import origenRecurso from '../routes/matriz/obras/origen.recurso.routes'
import sectorObra from '../routes/matriz/obras/sector.obra.routes'
import Obra from '../routes/matriz/obras/matriz.obra.route'
import Roles from '../routes/roles.routes'
import Azure from '../routes/azure/azure.routes'
import Twitter from '../routes/twitter/twitter.routes'
import Tweets from '../routes/twitter/tweet.routers'

import Ies from '../routes/matriz/ies/matriz.ies.route'
import Estrato from '../routes/matriz/ies/estrato.ies.routes'
import Semestre from '../routes/matriz/ies/semestre.ies.routes'
import TipoDoc from '../routes/matriz/ies/tipodoc.ies.routes'

import Proyecto from '../routes/matriz/presupuesto/matriz.proyecto.route'

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
  router.use('/categoria', categorias)
  router.use('/sector', sector)
  router.use('/subsector', subsector)
  router.use('/email', email)
  router.use('/entidad', entidad)
  router.use('/estado-obra', estadoObra)
  router.use('/origen-recurso', origenRecurso)
  router.use('/sector-obra', sectorObra)
  router.use('/obra', Obra)
  router.use('/role', Roles)
  router.use('/azure', Azure)
  router.use('/twitter', Twitter)
  router.use('/tweets', Tweets)
  router.use('/ies', Ies)
  router.use('/estrato', Estrato)
  router.use('/semestre', Semestre)
  router.use('/tipodoc', TipoDoc)

  router.use('/proyecto', Proyecto)
}

export default routers
