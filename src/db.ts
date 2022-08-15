import { DataSource } from 'typeorm'
import config from './config'
import { Auth } from './entity/UserManagement/Auth'
import { User } from './entity/UserManagement/User'
import { UserType } from './entity/UserManagement/UserType'
import { Satelital } from './entity/Departments/Satelital'
import { Departamento } from './entity/Departments/Departamento'
import { Municipio } from './entity/Departments/Municipio'
import { TypeMunicipio } from './entity/Departments/TypeMunicipio'
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
  entities: [Satelital, Departamento, Municipio, TypeMunicipio, Auth, User, UserType]
  // migrationsTableName: 'migrations',
  // migrations: ['dist/migration/*.js'],
  // subscribers: ['dist/subscriber/**/*.js']
})
