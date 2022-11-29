/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../db'
import { Repository, Like } from 'typeorm'
import { User } from '../entity/UserManagement/User'
import { Auth } from '../entity/UserManagement/Auth'
import { UserEntidad } from '../entity/UserManagement/UserEntidad'

// import { validate } from 'class-validator'

class UserService {
  readonly repositorioUser: Repository<User>
  readonly repositorioAuth: Repository<Auth>
  readonly repositorioUserEntidad: Repository<UserEntidad>
  constructor () {
    this.repositorioUser = AppDataSource.getRepository(User)
    this.repositorioAuth = AppDataSource.getRepository(Auth)
    this.repositorioUserEntidad = AppDataSource.getRepository(UserEntidad)
  }

  async create (data: any): Promise<any> {
    try {
      if (!data.auth) {
        throw boom.notFound('No específico los datos de autenticación del usuario.')
      }
      const newUser = this.repositorioUser.create(data)
      const result = await this.repositorioUser.save(newUser)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any): Promise<any> {
    try {
      const options: any = {
        relations: { auth: true, tipo: true, roles: true, entidades: { municipio: { department: true } } },
        where: {},
        order: {}
      }
      const { take, skip, globalFilter, filters, sorting } = query

      let isGlobalFilter = false
      if (globalFilter && globalFilter.length > 0) {
        isGlobalFilter = true
      }

      let isFilters = false
      let filtersColumn = null
      if (filters) {
        filtersColumn = JSON.parse(filters) ?? null
        if (filters && filtersColumn.length > 0) {
          isFilters = true
        }
      }

      let isSorting = false
      let sortingColumn = null
      if (sorting) {
        sortingColumn = JSON.parse(sorting) ?? null
        if (sorting && sortingColumn.length > 0) {
          isSorting = true
        }
      }

      if (take !== null && skip !== null && !isGlobalFilter && !isFilters && !isSorting) {
        options.take = take
        options.skip = skip
        options.cache = true
      }
      if (isGlobalFilter) {
        options.where = [
          { id: Like(`%${globalFilter}%`) },
          { name: Like(`%${globalFilter}%`) },
          { lastName: Like(`%${globalFilter}%`) },
          { phone: Like(`%${globalFilter}%`) },
          { email: Like(`%${globalFilter}%`) },
          { image: Like(`%${globalFilter}%`) },
          { auth: [{ username: Like(`%${globalFilter}%`) }, { role: Like(`%${globalFilter}%`) }] },
          { tipo: { name: Like(`%${globalFilter}%`) } }
        ]
      }

      const obrasList = await this.repositorioUser.find(options)
      const cantidad = await this.repositorioUser.count()
      const response = { cantidad, data: obrasList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  // async findAll (): Promise<User[]> {
  //   try {
  //     const userList = await this.repositorioUser.find({ relations: ['auth', 'tipo'] })

  //     return userList
  //     // const userList = AppDataSource.manager

  //     //   .createQueryBuilder(User, 'user')
  //     //   .select([
  //     //     'user',
  //     //     'Auth.id',
  //     //     'Auth.uuid',
  //     //     'Auth.createdAt',
  //     //     'Auth.updatedAt',
  //     //     'Auth.username',
  //     //     'Auth.password',
  //     //     'Auth.role'

  //     //   ])
  //     //   .leftJoin('user.auth', 'Auth')

  //     // return await userList.getMany()
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }

  async findOne (id: number): Promise<User> {
    try {
      const user = await this.repositorioUser.findOne({
        where:
        { id }

      })
      if (user == null) {
        throw boom.notFound('Usuario no encontrado')
      }

      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findEntidadesByUserId (id: number): Promise<User> {
    try {
      const user = await this.repositorioUser.findOne({
        relations: { auth: true, tipo: true, roles: true, entidades: { municipio: { department: true } } },
        where:
        { id }

      })
      if (user == null) {
        throw boom.notFound('Usuario no encontrado')
      }

      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findByUsernameOrEmail (nicknameOrEmail: string, activeUser: boolean = true): Promise<User> {
    try {
      const user = await this.repositorioUser.findOne({
        relations: ['auth', 'roles', 'entidades', 'tipo'],
        where: [{ email: nicknameOrEmail }, { auth: { username: nicknameOrEmail } }]
      })

      console.log('the users:', user?.active)
      // const user = await AppDataSource.manager

      //   .createQueryBuilder(User, 'user')
      //   .select([
      //     'user',
      //     'Auth.id',
      //     'Auth.uuid',
      //     'Auth.createdAt',
      //     'Auth.updatedAt',
      //     'Auth.username',
      //     'Auth.password',
      //     'Auth.role'

      //   ])
      //   .leftJoin('user.auth', 'Auth')
      //   .where('Auth."username" = :value', { value: 'hackchan' })
      //   .getOne()
      if (user == null) {
        throw boom.notFound('usuario o clave incorrecta')
      }
      if (activeUser) {
        if (!user.active) {
          throw boom.notFound('Usuario está inactivo')
        }
      }

      return user
      // const response = JSON.parse(JSON.stringify(user))
      // return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async isEmailExist (email: string): Promise<User | null> {
    try {
      const user = await this.repositorioUser.findOne(
        {
          relations: ['auth', 'roles', 'entidades'],
          where: [{ email }]
        })

      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findByUserCGR (): Promise<User[]> {
    try {
      const user = await this.repositorioUser.find({
        relations: ['tipo'],
        where: [{ tipo: { name: 'CGR' } }]
      })

      if (user == null) {
        throw boom.notFound('usuarios de tipo CGR no existen')
      }
      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<User> {
    try {
      const user = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioUser.merge(user, changes)
      const result = await this.repositorioUser.save(user)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<User> {
    try {
      const user = await this.findOne(id)
      // const response = this.repositorioAuth.remove(user)
      // return await response
      // await this.repositorioAuth.delete({ id: user.auth.id })
      const remove = await user.remove()
      return remove
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
/**
 * let photos = await connection
    .getRepository(Photo)
    .createQueryBuilder("photo") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
    .innerJoinAndSelect("photo.metadata", "metadata")
    .leftJoinAndSelect("photo.albums", "album")
    .where("photo.isPublished = true")
    .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
    .orderBy("photo.id", "DESC")
    .skip(5)
    .take(10)
    .setParameters({ photoName: "My", bearName: "Mishka" })
    .getMany();
 */
/**  try {
      const repo = getRepository(User)
      const newUser = repo.create(data)
      const errors = await validate(newUser)
      if (errors.length !== 0) {
        const { constraints } = errors[0]
        throw [constraints]
      }
      const result = await repo.save(newUser)
      return result
    } catch (error) {
      throw error
    } */
export default UserService
