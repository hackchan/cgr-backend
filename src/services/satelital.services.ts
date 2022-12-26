/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../db'
import { Repository, Like } from 'typeorm'
import { Satelital } from '../entity/Departments/Satelital'
import { CreateUserDTO } from '../entityTypes/user.dto'

// import { validate } from 'class-validator'

class UserSatelital {
  readonly repositorioSatelital: Repository<Satelital>

  constructor () {
    this.repositorioSatelital = AppDataSource.getRepository(Satelital)
  }

  async create (data: CreateUserDTO): Promise<Satelital> {
    try {
      const newSatelital = this.repositorioSatelital.create(data)
      const result = await this.repositorioSatelital.save(newSatelital)
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
        order: { id: 'ASC' }
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

      const estadoClaseList = await this.repositorioSatelital.find(options)
      const cantidad = await this.repositorioSatelital.count()
      const response = { cantidad, data: estadoClaseList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Satelital> {
    try {
      const satelital = await this.repositorioSatelital.findOne({
        relations: ['departaments'],
        where:
        { id }
      })
      if (satelital == null) {
        throw boom.notFound('Satelital no encontrada')
      }

      return satelital
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Satelital> {
    try {
      const satelital = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioSatelital.merge(satelital, changes)
      const result = await this.repositorioSatelital.save(satelital)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Satelital> {
    try {
      const satelital = await this.findOne(id)
      const response = this.repositorioSatelital.remove(satelital)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default UserSatelital
