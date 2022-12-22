/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like } from 'typeorm'
import { FormaContrato } from '../../../entity/Matriz/Presupuesto/Contratacion/FormaContrato'

// import { validate } from 'class-validator'

class FormaContratoDTO {
  readonly repositorioFormaContrato: Repository<FormaContrato>

  constructor () {
    this.repositorioFormaContrato = AppDataSource.getRepository(FormaContrato)
  }

  async create (data: object): Promise<FormaContrato> {
    try {
      const newSector = this.repositorioFormaContrato.create(data)
      const result = await this.repositorioFormaContrato.save(newSector)
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

      const formaList = await this.repositorioFormaContrato.find(options)
      const cantidad = await this.repositorioFormaContrato.count()
      const response = { cantidad, data: formaList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<FormaContrato> {
    try {
      const forma = await this.repositorioFormaContrato.findOne({
        where:
        { id }
      })
      if (forma == null) {
        throw boom.notFound('Forma Contrato no encontrado')
      }

      return forma
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<FormaContrato> {
    try {
      const forma = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioFormaContrato.merge(forma, changes)
      const result = await this.repositorioFormaContrato.save(forma)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<FormaContrato> {
    try {
      const forma = await this.findOne(id)
      const response = this.repositorioFormaContrato.remove(forma)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default FormaContratoDTO
