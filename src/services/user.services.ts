import { AppDataSource } from '../db'
import { User } from '../entity/UserManagement/User'
import { CreateUserDTO } from '../entityTypes/user.dto'

// import { validate } from 'class-validator'

class UserService {
  async create (data: CreateUserDTO): Promise<User> {
    try {
      const userRepo = AppDataSource.getRepository(User)
      const newUser = userRepo.create(data)
      const result = await userRepo.save(newUser)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

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
