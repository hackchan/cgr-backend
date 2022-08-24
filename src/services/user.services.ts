import boom from '@hapi/boom'
import { AppDataSource } from '../db'
import { Repository } from 'typeorm'
import { User } from '../entity/UserManagement/User'
import { Auth } from '../entity/UserManagement/Auth'
import { CreateUserDTO } from '../entityTypes/user.dto'

// import { validate } from 'class-validator'

class UserService {
  readonly repositorioUser: Repository<User>
  readonly repositorioAuth: Repository<Auth>
  constructor () {
    this.repositorioUser = AppDataSource.getRepository(User)
    this.repositorioAuth = AppDataSource.getRepository(Auth)
  }

  async create (data: CreateUserDTO): Promise<User> {
    try {
      // const hash = await bcrypt.hash(data.auth.password, 10)
      // const auth = { ...data.auth, password: hash }
      // const newUser = this.repositorioUser.create({ ...data, auth })
      const newUser = this.repositorioUser.create(data)
      const result = await this.repositorioUser.save(newUser)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (): Promise<User[]> {
    try {
      const userList = await this.repositorioUser.find({ relations: ['auth'] })

      return userList
      // const userList = AppDataSource.manager

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

      // return await userList.getMany()
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<User> {
    try {
      const user = await this.repositorioUser.findOne({
        where:
        { id },
        relations: ['auth']
      })
      if (user == null) {
        throw boom.notFound('Usuario no encontrado')
      }
      console.log('user..>>>', user)
      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findByUsernameOrEmail (nicknameOrEmail: string): Promise<User> {
    try {
      const user = await this.repositorioUser.findOne({
        relations: ['auth'],
        where: [{ email: nicknameOrEmail }, { auth: { username: nicknameOrEmail } }]
      })
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
      return user
      // const response = JSON.parse(JSON.stringify(user))
      // return response
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

  async delete (id: number): Promise<void> {
    try {
      // const user = await this.findOne(id)
      // const response = this.repositorioAuth.remove(user)
      // return await response
      // const response = await this.repositorioAuth.delete({ id: user.auth.id })
      // const remove = user.remove()
      // return await remove
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
