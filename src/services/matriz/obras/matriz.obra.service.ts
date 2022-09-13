/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like } from 'typeorm'
import { DateUtils } from 'typeorm/util/DateUtils'
import { MatrizObra } from '../../../entity/Matriz/Obras/MatrizObra'
import { format, parse } from 'date-fns'

// import { validate } from 'class-validator'

class MatrizObraDTO {
  readonly repositorioMatrizObra: Repository<MatrizObra>

  constructor () {
    this.repositorioMatrizObra = AppDataSource.getRepository(MatrizObra)
  }

  async create (data: object): Promise<MatrizObra> {
    try {
      const newObra = this.repositorioMatrizObra.create(data)
      const result = await this.repositorioMatrizObra.save(newObra)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any): Promise<any> {
    try {
      const options: any = {
        relations: { sector: true, origen: true, estado: true, entidad: true, municipioObra: true },
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
        options.where = [{ fechaSuscripcion: `${DateUtils.mixedDateToUtcDatetimeString(globalFilter)}` }]
        // options.where = [
        // { id: Like(`%${globalFilter}%`) },
        // { idBpin: Like(`%${globalFilter}%`) },
        // { idContrato: Like(`%${globalFilter}%`) },
        // { nombreProyecto: Like(`%${globalFilter}%`) },
        // { objetoProyecto: Like(`%${globalFilter}%`) },
        // { unidadFuncional: Like(`%${globalFilter}%`) },
        // { fechaSuscripcion: Like(`%${globalFilter}%`) },
        // { fechaInicio: `%${format(typeof globalFilter === 'string' ? parseISO('2019-02-11T14:00:00')(globalFilter).toUTCString() : globalFilter, 'yyyy-MM-dd')}%` },
        // { fechaProgramadaTermina: Like(`%${globalFilter}%`) },
        // { fechaTermina: Like(`%${globalFilter}%`) },
        // { valorContratoInicial: Like(`%${globalFilter}%`) },
        // { valorContratoFinal: Like(`%${globalFilter}%`) },
        // { avanceFisicoProgramado: Like(`%${globalFilter}%`) },
        // { avanceFisicoEjecutado: Like(`%${globalFilter}%`) },
        // { avanceFinancieroEjecutado: Like(`%${globalFilter}%`) },
        // { nroContrato: Like(`%${globalFilter}%`) },
        // { cantidadSuspenciones: Like(`%${globalFilter}%`) },
        // { cantidadProrrogas: Like(`%${globalFilter}%`) },
        // { tiempoSuspenciones: Like(`%${globalFilter}%`) },
        // { tiempoProrrogas: Like(`%${globalFilter}%`) },
        // { cantidadAdiciones: Like(`%${globalFilter}%`) },
        // { valorTotalAdiciones: Like(`%${globalFilter}%`) },
        // { valorComprometido: Like(`%${globalFilter}%`) },
        // { valorObligado: Like(`%${globalFilter}%`) },
        // { valorPagado: Like(`%${globalFilter}%`) },
        // { valorAnticipo: Like(`%${globalFilter}%`) },
        // { razonSocialContratista: Like(`%${globalFilter}%`) },
        // { idContratista: Like(`%${globalFilter}%`) },
        // { razonSocialNuevoContratista: Like(`%${globalFilter}%`) },
        // { idNuevoContratista: Like(`%${globalFilter}%`) },
        // { observaciones: Like(`%${globalFilter}%`) },
        // { linkSecop: Like(`%${globalFilter}%`) },

        // { nroContratoInterventoria: Like(`%${globalFilter}%`) },
        // { nombreInterventoria: Like(`%${globalFilter}%`) },
        // { idInterventoria: Like(`%${globalFilter}%`) },
        // { diaCorte: Like(`%${globalFilter}%`) },
        // { mesCorte: Like(`%${globalFilter}%`) },
        // { anioCorte: Like(`%${globalFilter}%`) },

        // { sector: { name: Like(`%${globalFilter}%`) } },
        // { origen: { name: Like(`%${globalFilter}%`) } },
        // { estado: { name: Like(`%${globalFilter}%`) } },
        // { entidad: { name: Like(`%${globalFilter}%`) } },
        // { municipioObra: { name: Like(`%${globalFilter}%`) } }

        // ]
      }

      if (isFilters) {
        console.log('filtersColumn:', filtersColumn)
        const pushWhere: any[] = []
        filtersColumn.forEach((obj: any) => {
          const bus: any = {}
          bus[obj.id] = obj.value
          pushWhere.push(bus)
        })
        options.where = pushWhere
      }

      // if (isSorting) {
      //   const sort: any = {}
      //   sortingColumn.forEach((obj: any) => {
      //     sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
      //   })

      //   options.order = sort
      // }
      console.log('Options-->', options)
      // const lasOptions = {
      //   relations: { sector: true, origen: true, estado: true, entidad: true, municipioObra: true },
      //   where: { fechaSuscripcion: DateUtils.mixedDateToUtcDatetimeString('2022-09-05') }
      // }
      // console.log(lasOptions)
      const obrasList = await this.repositorioMatrizObra.find(options)
      const cantidad = await this.repositorioMatrizObra.count()
      const response = { cantidad, data: obrasList }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<MatrizObra> {
    try {
      const obra = await this.repositorioMatrizObra.findOne({
        where:
        { id }
      })
      if (obra == null) {
        throw boom.notFound('Obra no encontrada')
      }

      return obra
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<MatrizObra> {
    try {
      const obra = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioMatrizObra.merge(obra, changes)
      const result = await this.repositorioMatrizObra.save(obra)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<MatrizObra> {
    try {
      const obra = await this.findOne(id)
      const response = this.repositorioMatrizObra.remove(obra)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default MatrizObraDTO
