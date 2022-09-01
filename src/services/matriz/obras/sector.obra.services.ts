/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like } from 'typeorm'
import { SectorObra } from '../../../entity/Matriz/Obras/SectorObra'

// import { validate } from 'class-validator'

class SectorObraDTO {
  readonly repositorioSectorObra: Repository<SectorObra>

  constructor () {
    this.repositorioSectorObra = AppDataSource.getRepository(SectorObra)
  }

  async create (data: object): Promise<SectorObra> {
    try {
      const newSector = this.repositorioSectorObra.create(data)
      const result = await this.repositorioSectorObra.save(newSector)
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

      const estadoObraList = await this.repositorioSectorObra.find(options)
      const cantidad = await this.repositorioSectorObra.count()
      const response = { cantidad, data: estadoObraList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<SectorObra> {
    try {
      const sector = await this.repositorioSectorObra.findOne({
        where:
        { id }
      })
      if (sector == null) {
        throw boom.notFound('Sector Obra no encontrado')
      }

      return sector
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<SectorObra> {
    try {
      const sector = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioSectorObra.merge(sector, changes)
      const result = await this.repositorioSectorObra.save(sector)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<SectorObra> {
    try {
      const sector = await this.findOne(id)
      const response = this.repositorioSectorObra.remove(sector)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default SectorObraDTO
