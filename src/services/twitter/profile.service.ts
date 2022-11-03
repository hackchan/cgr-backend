/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository } from 'typeorm'
import { Profile } from '../../entity/twitter/Profile'

class ProfileService {
  readonly repositorioProfile: Repository<Profile>

  constructor () {
    this.repositorioProfile = AppDataSource.getRepository(Profile)
  }

  async create (data: any): Promise<any> {
    try {
      const newProfile = this.repositorioProfile.create(data)
      const result = await this.repositorioProfile.save(newProfile)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async find (id: number): Promise<any> {
    try {
      const Member = await this.repositorioProfile.findOne({
        where:
        { id }
      })
      if (Member == null) {
        throw boom.notFound('Profile no encontrado')
      }

      return Member
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<any> {
    try {
      const profile = await this.find(id)
      const response = await this.repositorioProfile.remove(profile)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default ProfileService
