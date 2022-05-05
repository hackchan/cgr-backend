import 'reflect-metadata'
import app from './app'
import { AppDataSource } from './db'
const port: number = app.get('port')

const main = async (): Promise<void> => {
  try {
    await AppDataSource.initialize()
    console.log('Database Connect')
    app.listen(port, () => {
      console.log(`App listen at port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
void main()
