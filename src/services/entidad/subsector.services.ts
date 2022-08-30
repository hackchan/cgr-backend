/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository, Like } from 'typeorm'
import { Subsector } from '../../entity/Entidad/Subsector'

// import { validate } from 'class-validator'

class SectorDTO {
  readonly repositorioSubsector: Repository<Subsector>

  constructor () {
    this.repositorioSubsector = AppDataSource.getRepository(Subsector)
  }

  async create (data: object): Promise<Subsector> {
    try {
      const newSubsector = this.repositorioSubsector.create(data)
      const result = await this.repositorioSubsector.save(newSubsector)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any): Promise<any> {
    try {
      const options: any = {
        relations: { sector: true },
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
          { sector: { name: Like(`%${globalFilter}%`) } }
        ]
      }

      if (isFilters) {
        const pushWhere: any[] = []
        filtersColumn.forEach((obj: any) => {
          const bus: any = {}
          if (obj.id !== 'sector') {
            bus[obj.id] = Like(`%${obj.value}%`)
            pushWhere.push(bus)
          } else {
            pushWhere.push({ [obj.id]: { name: Like(`%${obj.value}%`) } })
          }
        })
        // filtersColumn.forEach((obj: any) => {
        //   const bus: any = {}
        //   bus[obj.id] = Like(`%${obj.value}%`)
        //   pushWhere.push(bus)
        // })

        options.where = pushWhere
      }

      if (isSorting) {
        const sort: any = {}
        sortingColumn.forEach((obj: any) => {
          if (obj.id !== 'sector') {
            sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
          } else {
            sort[obj.id] = { name: obj.desc === true ? 'DESC' : 'ASC' }
          }
        })
        options.order = sort
      }

      const sectorList = await this.repositorioSubsector.find(options)
      const cantidad = await this.repositorioSubsector.count()
      const response = { cantidad, data: sectorList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Subsector> {
    try {
      const subsector = await this.repositorioSubsector.findOne({
        // relations: { sector: true },
        where:
        { id }
      })
      if (subsector == null) {
        throw boom.notFound('Subsector no encontrado')
      }

      return subsector
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Subsector> {
    try {
      const subsector = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioSubsector.merge(subsector, changes)
      const result = await this.repositorioSubsector.save(subsector)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Subsector> {
    try {
      const subsector = await this.findOne(id)
      const response = this.repositorioSubsector.remove(subsector)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default SectorDTO
