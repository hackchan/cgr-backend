/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like, Equal } from 'typeorm'
import { DateUtils } from 'typeorm/util/DateUtils'
import { MatrizObra } from '../../../entity/Matriz/Obras/MatrizObra'
import { format, parse } from 'date-fns'
import UserService from '../../user.services'

const serviceUser = new UserService()
// import { validate } from 'class-validator'

class MatrizObraDTO {
  readonly repositorioMatrizObra: Repository<MatrizObra>

  constructor () {
    this.repositorioMatrizObra = AppDataSource.getRepository(MatrizObra)
  }

  getArrayAsChunks = (array: any, chunkSize: any): any[] => {
    const result = []
    const data = array.slice(0)
    while (data[0]) {
      result.push(data.splice(0, chunkSize))
    }
    return result
  }

  // async create (data: MatrizObra[]): Promise<MatrizObra> {
  //   try {
  //     for (let contrato of data) {
  //         const obra = await this.repositorioMatrizObra.findOne({where:{ idContrato:contrato.idContrato }
  //         if(obra === null){

  //         }
  //     })
  //     }

  //   }
  // }

  // async create (data: any[]): Promise<any> {
  //   try {
  //     const chunksArray = this.getArrayAsChunks(data, 10)
  //     for (const obraChunk of chunksArray) {
  //       for (const obra of obraChunk) {
  //         const obraItem = await this.repositorioMatrizObra.findOne({ where: { idContrato: obra.idContrato, entidad: { id: obra.entidad } } })
  //         if (obraItem == null) {
  //           const newObra = this.repositorioMatrizObra.create(obra)
  //           await this.repositorioMatrizObra.save(newObra)
  //         } else {
  //           this.repositorioMatrizObra.merge(obraItem, obra)
  //           await this.repositorioMatrizObra.save(obraItem)
  //         }
  //       }
  //     }
  //     return 'archivo procesado con exito'
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }

  async create (data: any): Promise<any> {
    try {
      const result = await this.repositorioMatrizObra.save(data, { chunk: 10, transaction: false })
      return result
    } catch (error) {
      try {
        const chunksArray = this.getArrayAsChunks(data, 10)
        for (const obraChunk of chunksArray) {
          for (const obra of obraChunk) {
            const obraItem = await this.repositorioMatrizObra.findOne({ where: { idContrato: obra.idContrato, entidad: { id: obra.entidad } } })
            if (obraItem == null) {
              const newObra = this.repositorioMatrizObra.create(obra)
              await this.repositorioMatrizObra.save(newObra)
            } else {
              this.repositorioMatrizObra.merge(obraItem, obra)
              await this.repositorioMatrizObra.save(obraItem)
            }
          }
        }
        return 'archivo procesado con exito'
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }

  // async create (data: []): Promise<any> {
  //   try {
  //     const chunksArray = this.getArrayAsChunks(data, 10)

  //     chunksArray.map(async oneChunk => {
  //       await this.repositorioMatrizObra
  //         .createQueryBuilder()
  //         .add(data)
  //     })
  //     return 'Se inserto correctamente'
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }

  async createUpdate (data: []): Promise<any> {
    try {
      // const newObra = this.repositorioMatrizObra.create(data)
      const result = await this.repositorioMatrizObra.upsert(data, {
        skipUpdateIfNoValuesChanged: true, // If true, postgres will skip the update if no values would be changed (reduces writes)
        conflictPaths: ['id', 'idContrato'] // column(s) name that you would like to ON CONFLICT
      })
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any, userData: any): Promise<any> {
    try {
      // const user = await serviceUser.findOne(Number(userData.sub))
      // const userJson = JSON.parse(JSON.stringify(user))
      // const entidades = userJson.entidades.map((entidad: any) => {
      //   return entidad.id
      // })
      const options: any = {
        relations: { sector: true, origen: true, estado: true, entidad: true, municipioObra: { department: true }, userOper: true, userAlert: true, soportes: true },
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
        console.log('filters:', filters)
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
          { idBpin: Like(`%${globalFilter}%`) },
          { idContrato: Like(`%${globalFilter}%`) },
          { nombreProyecto: Like(`%${globalFilter}%`) },
          { objetoProyecto: Like(`%${globalFilter}%`) },
          { unidadFuncional: Like(`%${globalFilter}%`) },
          // { fechaSuscripcion: `${DateUtils.mixedDateToUtcDatetimeString(globalFilter)}` },
          // { fechaSuscripcion: Like(`%${globalFilter}%`) },
          // { fechaInicio: `%${format(typeof globalFilter === 'string' ? parseISO('2019-02-11T14:00:00')(globalFilter).toUTCString() : globalFilter, 'yyyy-MM-dd')}%` },
          // { fechaProgramadaTermina: Like(`%${globalFilter}%`) },
          // { fechaTermina: Like(`%${globalFilter}%`) },
          { valorContratoInicial: Like(`%${globalFilter}%`) },
          { valorContratoFinal: Like(`%${globalFilter}%`) },
          { avanceFisicoProgramado: Like(`%${globalFilter}%`) },
          { avanceFisicoEjecutado: Like(`%${globalFilter}%`) },
          { avanceFinancieroEjecutado: Like(`%${globalFilter}%`) },
          { nroContrato: Like(`%${globalFilter}%`) },
          { cantidadSuspenciones: Like(`%${globalFilter}%`) },
          { cantidadProrrogas: Like(`%${globalFilter}%`) },
          { tiempoSuspenciones: Like(`%${globalFilter}%`) },
          { tiempoProrrogas: Like(`%${globalFilter}%`) },
          { cantidadAdiciones: Like(`%${globalFilter}%`) },
          { valorTotalAdiciones: Like(`%${globalFilter}%`) },
          { valorComprometido: Like(`%${globalFilter}%`) },
          { valorObligado: Like(`%${globalFilter}%`) },
          { valorPagado: Like(`%${globalFilter}%`) },
          { valorAnticipo: Like(`%${globalFilter}%`) },
          { razonSocialContratista: Like(`%${globalFilter}%`) },
          { idContratista: Like(`%${globalFilter}%`) },
          { razonSocialNuevoContratista: Like(`%${globalFilter}%`) },
          { idNuevoContratista: Like(`%${globalFilter}%`) },
          { observaciones: Like(`%${globalFilter}%`) },
          { linkSecop: Like(`%${globalFilter}%`) },

          { nroContratoInterventoria: Like(`%${globalFilter}%`) },
          { nombreInterventoria: Like(`%${globalFilter}%`) },
          { idInterventoria: Like(`%${globalFilter}%`) },
          { diaCorte: Like(`%${globalFilter}%`) },
          { mesCorte: Like(`%${globalFilter}%`) },
          { anioCorte: Like(`%${globalFilter}%`) },

          { sector: { name: Like(`%${globalFilter}%`) } },
          { origen: { name: Like(`%${globalFilter}%`) } },
          { estado: { name: Like(`%${globalFilter}%`) } },
          { entidad: { name: Like(`%${globalFilter}%`) } },
          { municipioObra: { name: Like(`%${globalFilter}%`) } }

        ]
      }
      if (isFilters) {
        const pushWhere: any[] = []
        filtersColumn.forEach((obj: any) => {
          console.log('obj:', obj)
          const bus: any = {}
          if (obj.id === 'sector' || obj.id === 'origen' || obj.id === 'estado' || obj.id === 'entidad' || obj.id === 'municipioObra') {
            pushWhere.push({ [obj.id]: { name: Like(`%${obj.value}%`) } })
          } else {
            if (obj.id === 'fechaSuscripcion' || obj.id === 'fechaInicio' || obj.id === 'fechaProgramadaTermina' || obj.id === 'fechaTermina') {
              bus[obj.id] = Equal(obj.value)
              pushWhere.push(bus)
            } else {
              bus[obj.id] = `${obj.value}`
              pushWhere.push(bus)
            }
          }
        })
        options.where = pushWhere
      }

      if (isSorting) {
        const sort: any = {}
        sortingColumn.forEach((obj: any) => {
          if (obj.id === 'sector' || obj.id === 'origen' || obj.id === 'estado' || obj.id === 'entidad' || obj.id === 'municipioObra') {
            sort[obj.id] = { name: obj.desc === true ? 'DESC' : 'ASC' }
          } else {
            sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
          }
        })

        options.order = sort
      }

      const obrasList = await this.repositorioMatrizObra.findAndCount(options)
      // const cantidad = await this.repositorioMatrizObra.count()
      const responseData = JSON.parse(JSON.stringify(obrasList[0]))
      const filterData = responseData.filter((mat: any) => {
        return userData.entidadesArray.includes(mat.entidad.id)
      })
      const dataFinish = userData.isAdmin ? responseData : filterData
      const response = { cantidad: obrasList[1], data: dataFinish }
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
