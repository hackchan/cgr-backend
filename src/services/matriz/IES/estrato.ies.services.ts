/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like } from 'typeorm'
import { Estrato } from '../../../entity/Matriz/ies/Estrato'

// import { validate } from 'class-validator'

class EstratoDTO {
  readonly repositorioEstrato: Repository<Estrato>

  constructor () {
    this.repositorioEstrato = AppDataSource.getRepository(Estrato)
  }

  async create (data: object): Promise<Estrato> {
    try {
      const estrato = this.repositorioEstrato.create(data)
      const result = await this.repositorioEstrato.save(estrato)
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

      const Estratos = await this.repositorioEstrato.find(options)
      const cantidad = await this.repositorioEstrato.count()
      const response = { cantidad, data: Estratos }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Estrato> {
    try {
      const estrato = await this.repositorioEstrato.findOne({
        where:
        { id }
      })
      if (estrato == null) {
        throw boom.notFound('Estrato no encontrado')
      }

      return estrato
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Estrato> {
    try {
      const estrato = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioEstrato.merge(estrato, changes)
      const result = await this.repositorioEstrato.save(estrato)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Estrato> {
    try {
      const estrato = await this.findOne(id)
      const response = this.repositorioEstrato.remove(estrato)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default EstratoDTO
