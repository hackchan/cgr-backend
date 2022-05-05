import { DataSource } from 'typeorm'
// import { User } from './entity/User'
export const AppDataSource = new DataSource({
  type: 'mssql',
  host: '192.168.18.12',
  port: 1433,
  username: 'hackchan',
  password: 'Colombia2020',
  database: 'appStore',
  dropSchema: false,
  synchronize: false,
  options: { encrypt: false },
  logging: true,
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
