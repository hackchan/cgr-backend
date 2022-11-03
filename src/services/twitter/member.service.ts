/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository } from 'typeorm'
import { Member } from '../../entity/twitter/Member'
import ProfileService from './profile.service'

const profileService = new ProfileService()

class MemberService {
  readonly repositorioMember: Repository<Member>

  constructor () {
    this.repositorioMember = AppDataSource.getRepository(Member)
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

  async findAll (query: any): Promise<any> {
    try {
      const response = await this.repositorioMember.find()

      // console.log(response)
      return response
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

  async delete (id: number): Promise<any> {
    try {
      const member = await this.findOnetoOne(id)
      const response = await this.repositorioMember.remove(member)
      await profileService.delete(id)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: object): Promise<any> {
    try {
      const member = await this.findOnetoOne(id)
      this.repositorioMember.merge(member, changes)
      const result = await this.repositorioMember.save(member)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default MemberService
