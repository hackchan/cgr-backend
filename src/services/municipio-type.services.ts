import boom from '@hapi/boom'
import { AppDataSource } from '../db'
import { Repository } from 'typeorm'
import { TypeMunicipio } from '../entity/Departments/TypeMunicipio'
import { CreateUserDTO } from '../entityTypes/user.dto'

// import { validate } from 'class-validator'

class MunicipioType {
  readonly repositorioMunicipioType: Repository<TypeMunicipio>

  constructor () {
    this.repositorioMunicipioType = AppDataSource.getRepository(TypeMunicipio)
  }

  async create (data: CreateUserDTO): Promise<TypeMunicipio> {
    try {
      const muniType = this.repositorioMunicipioType.create(data)
      const result = await this.repositorioMunicipioType.save(muniType)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (): Promise<TypeMunicipio[]> {
    try {
      const muniTypeList = await this.repositorioMunicipioType.find()
      return muniTypeList
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<TypeMunicipio> {
    try {
      const muniType = await this.repositorioMunicipioType.findOne({
        // relations: ['satelital'],
        where:
        { id }
      })
      if (muniType == null) {
        throw boom.notFound('Tipo Municipio no encontrado')
      }

      return muniType
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<TypeMunicipio> {
    try {
      const muniType = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioMunicipioType.merge(muniType, changes)
      const result = await this.repositorioMunicipioType.save(muniType)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<TypeMunicipio> {
    try {
      const muniType = await this.findOne(id)
      const response = this.repositorioMunicipioType.remove(muniType)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default MunicipioType
