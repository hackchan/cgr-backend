/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../db'
import { Repository, Like } from 'typeorm'
import { Departamento } from '../entity/Departments/Departamento'
import { CreateUserDTO } from '../entityTypes/user.dto'

// import { validate } from 'class-validator'

class UserDepartment {
  readonly repositorioDepartment: Repository<Departamento>

  constructor () {
    this.repositorioDepartment = AppDataSource.getRepository(Departamento)
  }

  async create (data: CreateUserDTO): Promise<Departamento> {
    try {
      const newDepart = this.repositorioDepartment.create(data)
      const result = await this.repositorioDepartment.save(newDepart)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any): Promise<any> {
    try {
      const options: any = {
        relations: { satelital: true },
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
          { latitude: Like(`%${globalFilter}%`) },
          { longitude: Like(`%${globalFilter}%`) },
          { satelital: { name: Like(`%${globalFilter}%`) } }
        ]
      }

      // if (isFilters) {
      //   const pushWhere: any[] = []
      //   filtersColumn.forEach((obj: any) => {
      //     const bus: any = {}
      //     if (obj.id !== 'satelital') {
      //       bus[obj.id] = Like(`%${obj.value}%`)
      //       pushWhere.push(bus)
      //     } else {
      //       pushWhere.push({ [obj.id]: { name: Like(`%${obj.value}%`) } })
      //     }
      //   })

      //   options.where = pushWhere
      // }

      // if (isSorting) {
      //   const sort: any = {}
      //   sortingColumn.forEach((obj: any) => {
      //     if (obj.id !== 'satelital') {
      //       sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
      //     } else {
      //       sort[obj.id] = { name: obj.desc === true ? 'DESC' : 'ASC' }
      //     }
      //   })

      //   options.order = sort
      // }

      const departList = await this.repositorioDepartment.find(options)
      const cantidad = await this.repositorioDepartment.count()
      const response = { cantidad, data: departList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Departamento> {
    try {
      const department = await this.repositorioDepartment.findOne({
        where:
        { id }
      })
      if (department == null) {
        throw boom.notFound('Departamento no encontrado')
      }

      return department
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Departamento> {
    try {
      const department = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      console.log('departamento:', department)
      console.log('changes:', changes)
      this.repositorioDepartment.merge(department, changes)
      const result = await this.repositorioDepartment.save(department)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Departamento> {
    try {
      const department = await this.findOne(id)
      const response = this.repositorioDepartment.remove(department)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default UserDepartment
