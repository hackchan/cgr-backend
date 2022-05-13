import { DataSource } from 'typeorm'
import config from './config'
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
  migrations: ['src/migrations/*.{js,ts}'],
  entities: ['src/entity/**/*.{js,ts}']
  // migrationsTableName: 'migrations',
  // migrations: ['dist/migration/*.js'],
  // subscribers: ['dist/subscriber/**/*.js']
})
