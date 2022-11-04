/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository, Like, In } from 'typeorm'
import { EntidadControl } from '../../entity/Entidad/EntidadControl'

// import { validate } from 'class-validator'

class EntidadDTO {
  readonly repositorioEntidad: Repository<EntidadControl>

  constructor () {
    this.repositorioEntidad = AppDataSource.getRepository(EntidadControl)
  }

  async create (data: object): Promise<EntidadControl> {
    try {
      const newEntidad = this.repositorioEntidad.create(data)
      const result = await this.repositorioEntidad.save(newEntidad)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any): Promise<any> {
    try {
      const options: any = {
        relations: { subsector: { sector: true }, categoria: true, municipio: { department: true } },
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
          { nit: Like(`%${globalFilter}%`) },
          { name: Like(`%${globalFilter}%`) },
          { doctec: Like(`%${globalFilter}%`) },
          { cgn: Like(`%${globalFilter}%`) },
          { categoria: { name: Like(`%${globalFilter}%`) } },
          { subsector: { name: Like(`%${globalFilter}%`) } },
          {
            municipio: [{ name: Like(`%${globalFilter}%`) }]
          }
        ]
      }

      // if (isFilters) {
      //   const pushWhere: any[] = []
      //   filtersColumn.forEach((obj: any) => {
      //     const bus: any = {}
      //     bus[obj.id] = Like(`%${obj.value}%`)
      //     pushWhere.push(bus)
      //   })

      //   options.where = pushWhere
      // }

      // if (isSorting) {
      //   const sort: any = {}
      //   sortingColumn.forEach((obj: any) => {
      //     sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
      //   })

      //   options.order = sort
      // }

      const entidadList = await this.repositorioEntidad.find(options)
      const cantidad = await this.repositorioEntidad.count()
      const response = { cantidad, data: entidadList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findFilter (query: any): Promise<any> {
    try {
      const options = {
        where: { id: In(query) }
      }

      const response = await this.repositorioEntidad.find(options)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<EntidadControl> {
    try {
      const entidad = await this.repositorioEntidad.findOne({
        where:
        { id }
      })
      if (entidad == null) {
        throw boom.notFound('Entidad no encontrada')
      }

      return entidad
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<EntidadControl> {
    try {
      const sector = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioEntidad.merge(sector, changes)
      const result = await this.repositorioEntidad.save(sector)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<EntidadControl> {
    try {
      const entidad = await this.findOne(id)
      const response = this.repositorioEntidad.remove(entidad)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default EntidadDTO
