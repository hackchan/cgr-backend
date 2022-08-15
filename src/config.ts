import dotenv from 'dotenv'
dotenv.config()

export default {
  dev:
    process.env.NODE_ENV === 'development',
  port: process.env.NODE_PORT ?? 3000,
  db: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    dbName: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT ?? 'msql'
  },
  api: {
    key: process.env.API_KEY,
    jwt: process.env.JWT_SECRET,
    refresh: process.env.JWT_REFRESH
  },
  mail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT ?? 465,
    secure: process.env.MAIL_SECURE === 'true'
  }
}
