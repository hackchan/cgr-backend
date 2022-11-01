/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository } from 'typeorm'
import { Member } from '../../entity/twitter/Member'
import { Profile } from '../../entity/twitter/Profile'

class MemberService {
  readonly repositorioMember: Repository<Member>
  readonly repositorioProfile: Repository<Profile>

  constructor () {
    this.repositorioMember = AppDataSource.getRepository(Member)
    this.repositorioProfile = AppDataSource.getRepository(Profile)
  }

  async createOnetoOne (data: any): Promise<any> {
    try {
      if (!data.profile) {
        throw boom.notFound('no se establecio el perfil para crear un miembro')
      }
      const newMenmber = this.repositorioMember.create(data)
      const result = await this.repositorioMember.save(newMenmber)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOnetoOne (id: number): Promise<any> {
    try {
      const Member = await this.repositorioMember.findOne({
        relations: ['profile'],
        withDeleted: true,
        where:
        { id }
      })
      if (Member == null) {
        throw boom.notFound('Member no encontrado')
      }

      return Member
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOnetoOneProfile (id: number): Promise<any> {
    try {
      const profile = await this.repositorioProfile.findOne({
        where:
        { id }
      })
      if (profile == null) {
        throw boom.notFound('Profile no encontrado')
      }

      return profile
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<any> {
    try {
      const member = await this.findOnetoOne(id)
      const response = await this.repositorioMember.remove(member)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default MemberService
