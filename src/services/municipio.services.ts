/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../db'
import { Repository, Like } from 'typeorm'
import { Municipio } from '../entity/Departments/Municipio'
import { CreateUserDTO } from '../entityTypes/user.dto'

// import { validate } from 'class-validator'

class UserMunicipio {
  readonly repositorioMunicipio: Repository<Municipio>

  constructor () {
    this.repositorioMunicipio = AppDataSource.getRepository(Municipio)
  }

  async create (data: CreateUserDTO): Promise<Municipio> {
    try {
      const municipio = this.repositorioMunicipio.create(data)
      const result = await this.repositorioMunicipio.save(municipio)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  // async findAll (): Promise<Municipio[]> {
  //   try {
  //     const municipioList = await this.repositorioMunicipio.find({ relations: ['tipo', 'department'] })
  //     console.log('municipioList:', municipioList)
  //     return municipioList
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }
  async findAll (query: any): Promise<any> {
    try {
      const options: any = {
        relations: { department: true, tipo: true },
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
        options.where = [{ id: Like(`%${globalFilter}%`) },
          { name: Like(`%${globalFilter}%`) },
          { latitude: Like(`%${globalFilter}%`) },
          { longitude: Like(`%${globalFilter}%`) },
          { isCapital: Like(`%${globalFilter}%`) },
          { department: { name: Like(`%${globalFilter}%`) } },
          { tipo: { name: Like(`%${globalFilter}%`) } }]
      }

      if (isFilters) {
        // const pushWhere: any[] = []
        // filtersColumn.forEach((obj: any) => {
        //   const bus: any = {}
        //   if (obj.id !== 'department' || obj.id !== 'tipo') {
        //     bus[obj.id] = Like(`%${obj.value}%`)
        //     pushWhere.push(bus)
        //   } else {
        //     pushWhere.push({ [obj.id]: { name: Like(`%${obj.value}%`) } })
        //   }
        // })

        // options.where = pushWhere
      }

      if (isSorting) {
        // const sort: any = {}
        // sortingColumn.forEach((obj: any) => {
        //   if (obj.id !== 'department' || obj.id !== 'tipo') {
        //     sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
        //   } else {
        //     sort[obj.id] = { name: obj.desc === true ? 'DESC' : 'ASC' }
        //   }
        // })

        // options.order = sort
      }

      const departList = await this.repositorioMunicipio.find(options)
      const cantidad = await this.repositorioMunicipio.count()
      const response = { cantidad, data: departList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Municipio> {
    try {
      const municipio = await this.repositorioMunicipio.findOne({
        // relations: ['tipo'],
        // relations: ['satelital'],
        where:
        { id }
      })
      if (municipio == null) {
        throw boom.notFound('Municipio no encontrado')
      }

      return municipio
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Municipio> {
    try {
      const municipio = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioMunicipio.merge(municipio, changes)
      const result = await this.repositorioMunicipio.save(municipio)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Municipio> {
    try {
      const municipio = await this.findOne(id)
      const response = this.repositorioMunicipio.remove(municipio)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default UserMunicipio
