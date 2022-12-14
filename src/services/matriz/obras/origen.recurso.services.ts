/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like } from 'typeorm'
import { OrigenRecurso } from '../../../entity/Matriz/Obras/OrigenRecurso'

// import { validate } from 'class-validator'

class OrigenRecursoDTO {
  readonly repositorioOrigenRecurso: Repository<OrigenRecurso>

  constructor () {
    this.repositorioOrigenRecurso = AppDataSource.getRepository(OrigenRecurso)
  }

  async create (data: object): Promise<OrigenRecurso> {
    try {
      const newOrigenRecurso = this.repositorioOrigenRecurso.create(data)
      const result = await this.repositorioOrigenRecurso.save(newOrigenRecurso)
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
          { name: Like(`%${globalFilter}%`) },
          { initial: Like(`%${globalFilter}%`) }
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

      const estadoObraList = await this.repositorioOrigenRecurso.find(options)
      const cantidad = await this.repositorioOrigenRecurso.count()
      const response = { cantidad, data: estadoObraList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<OrigenRecurso> {
    try {
      const sector = await this.repositorioOrigenRecurso.findOne({
        where:
        { id }
      })
      if (sector == null) {
        throw boom.notFound('Origen de Recurso no encontrado')
      }

      return sector
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<OrigenRecurso> {
    try {
      const origen = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioOrigenRecurso.merge(origen, changes)
      const result = await this.repositorioOrigenRecurso.save(origen)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<OrigenRecurso> {
    try {
      const sector = await this.findOne(id)
      const response = this.repositorioOrigenRecurso.remove(sector)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default OrigenRecursoDTO
