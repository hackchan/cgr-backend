import boom from '@hapi/boom'
import { AppDataSource } from '../db'
import { Repository } from 'typeorm'
import { Satelital } from '../entity/Departments/Satelital'
import { CreateUserDTO } from '../entityTypes/user.dto'

// import { validate } from 'class-validator'

class UserSatelital {
  readonly repositorioSatelital: Repository<Satelital>

  constructor () {
    this.repositorioSatelital = AppDataSource.getRepository(Satelital)
  }

  async create (data: CreateUserDTO): Promise<Satelital> {
    try {
      const newSatelital = this.repositorioSatelital.create(data)
      const result = await this.repositorioSatelital.save(newSatelital)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (): Promise<Satelital[]> {
    try {
      const sateList = await this.repositorioSatelital.find()
      return sateList
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Satelital> {
    try {
      const satelital = await this.repositorioSatelital.findOne({
        relations: ['departaments'],
        where:
        { id }
      })
      if (satelital == null) {
        throw boom.notFound('Satelital no encontrada')
      }

      return satelital
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Satelital> {
    try {
      const satelital = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioSatelital.merge(satelital, changes)
      const result = await this.repositorioSatelital.save(satelital)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Satelital> {
    try {
      const satelital = await this.findOne(id)
      const response = this.repositorioSatelital.remove(satelital)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default UserSatelital
