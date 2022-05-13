import boom from '@hapi/boom'
import { Repository } from 'typeorm'
import { AppDataSource } from '../db'
import { UserType } from '../entity/UserManagement/UserType'
import { CreateUserTypeDTO } from '../entityTypes/usertype.dto'

class UserTypeService {
  readonly repositorio: Repository<UserType>
  constructor () {
    this.repositorio = AppDataSource.getRepository(UserType)
  }

  async create (data: CreateUserTypeDTO): Promise<UserType> {
    try {
      // const userTypeRepo = AppDataSource.getRepository(UserType)
      const newUser = this.repositorio.create(data)
      const result = await this.repositorio.save(newUser)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (): Promise<UserType[]> {
    try {
      const userTypeRepoList = await this.repositorio.find()
      return userTypeRepoList
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<UserType> {
    try {
      const userType = await this.repositorio.findOne({
        where:
        { id }
      })
      if (userType == null) {
        throw boom.notFound('Tipouser no encontrado')
      }
      return userType
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: object): Promise<UserType> {
    try {
      const tipoUser = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorio.merge(tipoUser, changes)
      const result = await this.repositorio.save(tipoUser)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<UserType> {
    try {
      const user = await this.findOne(id)
      const result = await this.repositorio.remove(user)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default UserTypeService
