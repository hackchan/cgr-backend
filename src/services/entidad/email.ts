/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository, Like } from 'typeorm'
import { Email } from '../../entity/Entidad/Email'

// import { validate } from 'class-validator'

class EmailDTO {
  readonly repositorioEmail: Repository<Email>

  constructor () {
    this.repositorioEmail = AppDataSource.getRepository(Email)
  }

  async create (data: object): Promise<Email> {
    try {
      const newEmail = this.repositorioEmail.create(data)
      const result = await this.repositorioEmail.save(newEmail)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any): Promise<any> {
    try {
      const options: any = {
        relations: { entidad: true },
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
          { email: Like(`%${globalFilter}%`) },
          { register: Like(`%${globalFilter}%`) },
          { cgn: Like(`%${globalFilter}%`) },
          { entidad: { name: Like(`%${globalFilter}%`) } }
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

      const entidadList = await this.repositorioEmail.find(options)
      const cantidad = await this.repositorioEmail.count()
      const response = { cantidad, data: entidadList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Email> {
    try {
      const entidad = await this.repositorioEmail.findOne({
        where:
        { id }
      })
      if (entidad == null) {
        throw boom.notFound('Email no encontrado')
      }

      return entidad
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findEmail (email: string): Promise<Email> {
    try {
      const emailEncontrado = await this.repositorioEmail.findOne({
        relations: { entidad: true },
        where:
        { email, register: true }
      })
      if (emailEncontrado == null) {
        throw boom.notFound(`El email ${email} no está habilitado para registrarse en el sistema`)
      }

      return emailEncontrado
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Email> {
    try {
      const email = await this.findOne(id)
      this.repositorioEmail.merge(email, changes)
      const result = await this.repositorioEmail.save(email)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Email> {
    try {
      const email = await this.findOne(id)
      const response = this.repositorioEmail.remove(email)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default EmailDTO
