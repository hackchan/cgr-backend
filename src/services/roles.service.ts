/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { Repository, Like } from 'typeorm'
import { AppDataSource } from '../db'
import { Role } from '../entity/UserManagement/Role'
import { CreateUserTypeDTO } from '../entityTypes/usertype.dto'

class Roles {
  readonly repositorio: Repository<Role>
  constructor () {
    this.repositorio = AppDataSource.getRepository(Role)
  }

  async create (data: CreateUserTypeDTO): Promise<Role> {
    try {
      const newRole = this.repositorio.create(data)
      const result = await this.repositorio.save(newRole)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any): Promise<any> {
    try {
      const options: any = {

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
          { name: Like(`%${globalFilter}%`) }
        ]
      }

      if (isFilters) {
        const pushWhere: any[] = []
        filtersColumn.forEach((obj: any) => {
          const bus: any = {}
          bus[obj.id] = Like(`%${obj.value}%`)
          pushWhere.push(bus)
        })

        options.where = pushWhere
      }

      if (isSorting) {
        const sort: any = {}
        sortingColumn.forEach((obj: any) => {
          sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
        })

        options.order = sort
      }

      const estadoObraList = await this.repositorio.find(options)
      const cantidad = await this.repositorio.count()
      const response = { cantidad, data: estadoObraList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Role> {
    try {
      const role = await this.repositorio.findOne({
        where:
        { id }
      })
      if (role == null) {
        throw boom.notFound('Role no encontrado')
      }
      return role
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: object): Promise<Role> {
    try {
      const role = await this.findOne(id)
      this.repositorio.merge(role, changes)
      const result = await this.repositorio.save(role)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Role> {
    try {
      const role = await this.findOne(id)
      const result = await this.repositorio.remove(role)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default Roles
