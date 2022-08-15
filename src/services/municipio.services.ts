import boom from '@hapi/boom'
import { AppDataSource } from '../db'
import { Repository } from 'typeorm'
import { Municipio } from '../entity/Departments/Municipio'
import { CreateUserDTO } from '../entityTypes/user.dto'

// import { validate } from 'class-validator'

class UserMunicipio {
  readonly repositorioMunicipio: Repository<Municipio>

  constructor () {
    this.repositorioMunicipio = AppDataSource.getRepository(Municipio)
  }

  async create (data: CreateUserDTO): Promise<Municipio> {
    try {
      const municipio = this.repositorioMunicipio.create(data)
      const result = await this.repositorioMunicipio.save(municipio)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (): Promise<Municipio[]> {
    try {
      const municipioList = await this.repositorioMunicipio.find({ relations: ['tipo'] })
      return municipioList
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Municipio> {
    try {
      const municipio = await this.repositorioMunicipio.findOne({
        relations: ['tipo'],
        // relations: ['satelital'],
        where:
        { id }
      })
      if (municipio == null) {
        throw boom.notFound('Municipio no encontrado')
      }

      return municipio
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Municipio> {
    try {
      const municipio = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioMunicipio.merge(municipio, changes)
      const result = await this.repositorioMunicipio.save(municipio)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Municipio> {
    try {
      const municipio = await this.findOne(id)
      const response = this.repositorioMunicipio.remove(municipio)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default UserMunicipio
