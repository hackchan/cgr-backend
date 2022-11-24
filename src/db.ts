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
  entities: [Auth, User, UserType, Role, Satelital, Departamento, Municipio, Vereda, TypeMunicipio, Categoria, Sector, Subsector, EntidadControl, Email, Telefono, RepLegal, EstadoObra, OrigenRecurso, SectorObra, MatrizObra, Hito, MatrizHito, MatrizGeo, TipoSoporte, SoportesObras, DocumentType, Estrato, Semestre, MatrizIes, Videos]
  // entities: [Satelital, Departamento, Municipio, TypeMunicipio, Auth, User, UserType, Categoria, Sector, Subsector, EntidadControl, Email, Telefono, EstadoObra, OrigenRecurso, SectorObra, MatrizObra, Role, RoleUser, TipoSoporte, Soportes, UserEntidad]
  // migrationsTableName: 'migrations',
  // migrations: ['dist/migration/*.js'],
  // subscribers: ['dist/subscriber/**/*.js']
})
