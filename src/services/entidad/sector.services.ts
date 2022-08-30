/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository, Like } from 'typeorm'
import { Sector } from '../../entity/Entidad/Sector'

// import { validate } from 'class-validator'

class SectorDTO {
  readonly repositorioSector: Repository<Sector>

  constructor () {
    this.repositorioSector = AppDataSource.getRepository(Sector)
  }

  async create (data: object): Promise<Sector> {
    try {
      const newSector = this.repositorioSector.create(data)
      const result = await this.repositorioSector.save(newSector)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  // async findAll (): Promise<Sector[]> {
  //   try {
  //     const options: any = {
  //       order: {
  //         id: 'ASC'
  //       }
  //     }
  //     const sectorList = await this.repositorioSector.find(options)
  //     return sectorList
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }

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

      const sectorList = await this.repositorioSector.find(options)
      const cantidad = await this.repositorioSector.count()
      const response = { cantidad, data: sectorList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Sector> {
    try {
      const sector = await this.repositorioSector.findOne({
        where:
        { id }
      })
      if (sector == null) {
        throw boom.notFound('Sector no encontrada')
      }

      return sector
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Sector> {
    try {
      const sector = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioSector.merge(sector, changes)
      const result = await this.repositorioSector.save(sector)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Sector> {
    try {
      const sector = await this.findOne(id)
      const response = this.repositorioSector.remove(sector)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default SectorDTO
