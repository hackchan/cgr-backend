import { DataSource } from 'typeorm'
import config from './config'
import { Auth } from './entity/UserManagement/Auth'
import { Role } from './entity/UserManagement/Role'
import { User } from './entity/UserManagement/User'
import { Videos } from './entity/blog/Videos'
import { UserType } from './entity/UserManagement/UserType'
import { Satelital } from './entity/Departments/Satelital'
import { Departamento } from './entity/Departments/Departamento'
import { Municipio } from './entity/Departments/Municipio'
import { Vereda } from './entity/Departments/Vereda'
import { TypeMunicipio } from './entity/Departments/TypeMunicipio'
import { Categoria } from './entity/Entidad/Categoria'
import { Sector } from './entity/Entidad/Sector'
import { Subsector } from './entity/Entidad/Subsector'
import { EntidadControl } from './entity/Entidad/EntidadControl'
import { RepLegal } from './entity/Entidad/RepLegal'
import { Email } from './entity/Entidad/Email'
import { Telefono } from './entity/Entidad/Telefono'
import { EstadoObra } from './entity/Matriz/Obras/EstadoObra'
import { OrigenRecurso } from './entity/Matriz/Obras/OrigenRecurso'
import { SectorObra } from './entity/Matriz/Obras/SectorObra'
import { MatrizObra } from './entity/Matriz/Obras/MatrizObra'
import { Hito } from './entity/Matriz/Obras/Hito'
import { MatrizHito } from './entity/Matriz/Obras/MatrizHitos'
import { MatrizGeo } from './entity/Matriz/Obras/MatrizGeo'
import { SoportesObras } from './entity/Matriz/Obras/SoportesObras'
import { TipoSoporte } from './entity/Matriz/Obras/TipoSoporte'
import { DocumentType } from './entity/Matriz/ies/DocumentType'
import { Estrato } from './entity/Matriz/ies/Estrato'
import { Semestre } from './entity/Matriz/ies/Semestre'
import { MatrizIes } from './entity/Matriz/ies/MatrizIes'

import { SoportesContrato } from './entity/Matriz/Presupuesto/Contratacion/SoporteContrato'
import { SectorProyecto } from './entity/Matriz/Presupuesto/Proyectos/SectorProyecto'
import { MatrizProyectos } from './entity/Matriz/Presupuesto/Proyectos/MatrizProyectos'
import { ClaseContrato } from './entity/Matriz/Presupuesto/Contratacion/ClaseContrato'
import { EstadoContrato } from './entity/Matriz/Presupuesto/Contratacion/EstadoContrato'
import { FormaContrato } from './entity/Matriz/Presupuesto/Contratacion/FormaContrato'
import { MatrizContratacion } from './entity/Matriz/Presupuesto/Contratacion/MatrizContratacion'
import { MatrizRelacionPagos } from './entity/Matriz/Presupuesto/RelacionPagos/MatrizRelacionPagos'
import { MatrizRelacionObligaciones } from './entity/Matriz/Presupuesto/RelacionObligaciones/MatrizRelacionObligaciones'

import { TipoCompromiso } from './entity/Matriz/Presupuesto/RelacionCompromisos/TipoCompromiso'
import { TipoGastos } from './entity/Matriz/Presupuesto/RelacionCompromisos/TipoGasto'
import { Vigencia } from './entity/Matriz/Presupuesto/RelacionCompromisos/Vigencia'
import { MatrizRelacionCompromisos } from './entity/Matriz/Presupuesto/RelacionCompromisos/MatrizRelacionCompromisos'
import { MatrizCDPs } from './entity/Matriz/Presupuesto/RelacionCDPs/MatrizRelacionCDPs'
import { EstadoSolicitud } from './entity/Matriz/Fovis/EstadoSolicitud'
import { FuenteFinanciamiento } from './entity/Matriz/Fovis/FuenteFinanciamiento'
import { MatrizFovis } from './entity/Matriz/Fovis/MatrizFovis'
import { Programa } from './entity/Matriz/Fovis/Programa'
import { RangoIngresos } from './entity/Matriz/Fovis/RangoIngresos'
import { ZonaSolicitud } from './entity/Matriz/Fovis/Zona'
// Regalias
import { TipoOcad } from './entity/Matriz/Regalias/TipoOcad'
import { MatrizRegalias } from './entity/Matriz/Regalias/MatrizRegalias'
// Contable y Financiera
import { MatrizAxiliarSaldos } from './entity/Matriz/ContableFinanciera/MatrizAuxiliarSaldos'
import { MatrizLibroMayor } from './entity/Matriz/ContableFinanciera/MatrizLibroMayorBalance'
import { MatrizSituacionFinanciera } from './entity/Matriz/ContableFinanciera/SituacionFinanciera'
// Catastro
import { DestinoEconomico } from './entity/Matriz/Catastro/DestinoEconomico'
import { Tipificacion } from './entity/Matriz/Catastro/Tipificacion'
import { EstadoCivil } from './entity/Matriz/Catastro/EstadoCivil'
import { Uso } from './entity/Matriz/Catastro/Uso'
import { ZonaEconomica } from './entity/Matriz/Catastro/ZonaEconomica'
import { ZonaFisica } from './entity/Matriz/Catastro/ZonaFisica'
import { MatrizCatastro } from './entity/Matriz/Catastro/MatrizCatastro'
import { MatrizCatastroDetalle } from './entity/Matriz/Catastro/MatrizCatastroDetalle'
// reportes
import { Modelo } from './entity/Reportes/Modelo'
import { CategoriaReportes } from './entity/Reportes/CategoriaReporte'
import { Periodicidad } from './entity/Reportes/Periodicidad'
import { Reportes } from './entity/Reportes/Reportes'
import { SubReportes } from './entity/Reportes/SubReporte'
// submenus
import { Menu } from './entity/Menu/Menu'
import { SubMenu } from './entity/Menu/SubMenu'
import { Items } from './entity/Menu/Items'
// Prueba
// import { Maestro } from './entity/Prueba/Maestro'
// import { Detalle } from './entity/Prueba/Detalle'
// import { SubDetalle } from './entity/Prueba/SubDetalle'
// import { UserEntidad } from './entity/UserManagement/UserEntidad'
// import { Member } from './entity/twitter/Member'
// import { Profile } from './entity/twitter/Profile'
// import { Tweet } from './entity/twitter/Tweet'
// import { HashTag } from './entity/twitter/HashTag'
// import { User } from './entity/User'
export const AppDataSource = new DataSource({
  type: 'mssql',
  host: config.db.server,
  port: Number(config.db.port),
  username: config.db.user,
  password: config.db.password,
  database: config.db.dbName,
  dropSchema: false,
  synchronize: false,
  options: { encrypt: false },
  logging: false,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  // entities: [User],
  migrationsTableName: 'migrations',
  // migrations: ['src/migrations/*.{ts,js}'],
  // entities: ['src/entity/**/*.{ts,js}']
  migrations: ['src/migrations/*.{ts,js}'],
  // entities: [Auth, User, UserType, Role, EntidadControl, Categoria, Sector, Subsector, Email, Telefono, RepLegal, Municipio, Vereda, EstadoObra, OrigenRecurso, SectorObra, MatrizObra, Hito, MatrizHito, MatrizGeo, TipoSoporte, SoportesObras, DocumentType, SoportesContrato, MatrizContratacion, MatrizProyectos, SectorProyecto, ClaseContrato, FormaContrato, EstadoContrato, MatrizRelacionPagos, MatrizRelacionCompromisos, MatrizCDPs, Vigencia, TipoCompromiso, TipoGastos, MatrizRelacionObligaciones, MatrizIes, MatrizFovis, EstadoSolicitud, ZonaSolicitud, RangoIngresos, FuenteFinanciamiento, Programa, MatrizCatastro, EstadoCivil, DestinoEconomico, Estrato, Municipio, Departamento, Satelital, TypeMunicipio, Reportes, Periodicidad, CategoriaReportes, Modelo, SubReportes, MatrizRegalias, TipoOcad, MatrizAxiliarSaldos, MatrizLibroMayor, MatrizSituacionFinanciera]
  entities: [Auth, User, UserType, Role, Satelital, Departamento, Municipio, Vereda, TypeMunicipio, Categoria, Sector, Subsector, EntidadControl, Email, Telefono, RepLegal, EstadoObra, OrigenRecurso, SectorObra, MatrizObra, Hito, MatrizHito, MatrizGeo, TipoSoporte, SoportesObras, DocumentType, Estrato, Semestre, MatrizIes, Videos, SectorProyecto, MatrizProyectos, ClaseContrato, EstadoContrato, FormaContrato, MatrizContratacion, SoportesContrato, MatrizRelacionPagos, MatrizRelacionObligaciones, TipoCompromiso, TipoGastos, Vigencia, MatrizRelacionCompromisos, MatrizCDPs, EstadoSolicitud, FuenteFinanciamiento, Programa, RangoIngresos, ZonaSolicitud, MatrizFovis, TipoOcad, MatrizRegalias, MatrizAxiliarSaldos, MatrizLibroMayor, MatrizSituacionFinanciera, EstadoCivil, DestinoEconomico, MatrizCatastro, Tipificacion, Uso, ZonaEconomica, ZonaFisica, MatrizCatastroDetalle, Modelo, CategoriaReportes, Periodicidad, Reportes, SubReportes, Menu, SubMenu, Items]
  // migrationsTableName: 'migrations',
  // migrations: ['dist/migration/*.js'],
  // subscribers: ['dist/subscriber/**/*.js']
})
