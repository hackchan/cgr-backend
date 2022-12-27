/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like, Equal, Between } from 'typeorm'
import { MatrizContratacion } from '../../../entity/Matriz/Presupuesto/Contratacion/MatrizContratacion'
import UserService from '../../user.services'

const serviceUser = new UserService()
// import { validate } from 'class-validator'

class MatrizContratacionDTO {
  readonly repositorioMatrizContratacion: Repository<MatrizContratacion>

  constructor () {
    this.repositorioMatrizContratacion = AppDataSource.getRepository(MatrizContratacion)
  }

  getArrayAsChunks = (array: any, chunkSize: any): any[] => {
    const result = []
    const data = array.slice(0)
    while (data[0]) {
      result.push(data.splice(0, chunkSize))
    }
    return result
  }

  async create (data: any): Promise<any> {
    try {
      console.log('la datilla:', data)
      const result = await this.repositorioMatrizContratacion.save(data, { chunk: 10, transaction: false })
      return result
    } catch (error) {
      try {
        const chunksArray = this.getArrayAsChunks(data, 10)
        for (const obraChunk of chunksArray) {
          for (const obra of obraChunk) {
            // const obraItem = await this.repositorioMatrizProyecto.findOne({ where: { idBpin: obra.idBpin, entidad: obra.entidad } })
            // const obraItem = await this.findOne(obra.idBpin, obra.entidad)
            const obraItem = await this.repositorioMatrizContratacion.findOne({
              where: { idContrato: obra.idContrato, entidad_id: obra.entidad_id, id_bpin: obra.id_bpin }
            })
            if (obraItem === null) {
              const newObra = this.repositorioMatrizContratacion.create(obra)
              await this.repositorioMatrizContratacion.save(newObra)
            } else {
              delete obra.entidad
              delete obra.entidad_id
              delete obra.idBpin
              this.repositorioMatrizContratacion.merge(obraItem, obra)
              await this.repositorioMatrizContratacion.save(obraItem)
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

  async createUpdate (data: []): Promise<any> {
    try {
      // const newObra = this.repositorioMatrizObra.create(data)
      const result = await this.repositorioMatrizContratacion.upsert(data, {
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
      const options: any = {
        relations: { proyecto: { entidad: true }, fuenteRecurso: true, formaContratacion: true, claseContrato: true, estado: true, userOper: true, userAlert: true },
        where: {},
        order: { updatedAt: 'DESC' }
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
          { idContrato: Like(`%${globalFilter}%`) },
          { id_bpin: Like(`%${globalFilter}%`) },
          { linea: Like(`%${globalFilter}%`) },
          { objetoContrato: Like(`%${globalFilter}%`) },
          { valorContrato: Like(`%${globalFilter}%`) },
          { razonSocialContratista: Like(`%${globalFilter}%`) },
          { idContratista: Like(`%${globalFilter}%`) },
          { domicilioContratista: Like(`%${globalFilter}%`) },
          { telefonoContratista: Like(`%${globalFilter}%`) },
          { emailContratista: Like(`%${globalFilter}%`) },
          { valorRP: Like(`%${globalFilter}%`) },
          { codRubroRP: Like(`%${globalFilter}%`) },
          { fuenteFinanRP: Like(`%${globalFilter}%`) },
          { idInterventor: Like(`%${globalFilter}%`) },
          { nombreInterventor: Like(`%${globalFilter}%`) },
          { tipoVinculacion: Like(`%${globalFilter}%`) },
          { plazoContrato: Like(`%${globalFilter}%`) },
          { unidadEjecucion: Like(`%${globalFilter}%`) },
          { valorPagodoAnticipo: Like(`%${globalFilter}%`) },
          { cantidadAdiciones: Like(`%${globalFilter}%`) },
          { valorTotalAdiciones: Like(`%${globalFilter}%`) },
          { cantidadProrrogas: Like(`%${globalFilter}%`) },
          { tiempoProrrogas: Like(`%${globalFilter}%`) },
          { cantidadSuspenciones: Like(`%${globalFilter}%`) },
          { tiempoSuspenciones: Like(`%${globalFilter}%`) },
          { valorTotalPagos: Like(`%${globalFilter}%`) },
          { observaciones: Like(`%${globalFilter}%`) },

          { fuenteRecurso: { name: Like(`%${globalFilter}%`) } },
          { claseContrato: { name: Like(`%${globalFilter}%`) } },
          { formaContratacion: { name: Like(`%${globalFilter}%`) } },
          { estado: { name: Like(`%${globalFilter}%`) } }
          // { entidad: { name: Like(`%${globalFilter}%`) } }

        ]
      }

      if (isFilters) {
        const pushWhere: any[] = []
        filtersColumn.forEach((obj: any) => {
          console.log('obj:', obj)
          const bus: any = {}
          if (obj.id === 'fuenteRecurso' || obj.id === 'claseContrato' || obj.id === 'formaContratacion' || obj.id === 'estado') {
            pushWhere.push({ [obj.id]: { name: Like(`%${obj.value}%`) } })
          } else if (obj.id === 'alerta' || obj.id === 'isSupervisor' || obj.id === 'anticipo') {
            pushWhere.push({ [obj.id]: Equal(obj.value === 'SI') })
          } else {
            if (obj.id === 'fechaFirmaContrato' || obj.id === 'fechaRP' || obj.id === 'fechaAprobacion' || obj.id === 'fechaInicioContrato' || obj.id === 'fechaPagoAnticipo' || obj.id === 'fechaTerminaContrato' || obj.id === 'fechaActaLiquidacion' || obj.id === 'updatedAt') {
              if (obj?.value[0] !== null && obj?.value[0] !== null && obj?.value[0]?.length > 0 && obj?.value[1]?.length > 0) {
                if (obj.value[0] === obj.value[1]) {
                  bus[obj.id] = Like(`%${obj.value[0].split('T')[0]}%`)
                } else {
                  bus[obj.id] = Between(obj.value[0].split('T')[0], obj.value[1].split('T')[0])
                }
                pushWhere.push(bus)
              } else if (obj?.value[0] !== null) {
                bus[obj.id] = Like(`%${obj.value[0].split('T')[0]}%`)
                pushWhere.push(bus)
              }
            } else {
              bus[obj.id] = Like(`%${obj.value}%`)
              pushWhere.push(bus)
            }
          }
        })

        if (pushWhere.length > 0) {
          options.where = pushWhere
        }
      }

      if (isSorting) {
        const sort: any = {}
        sortingColumn.forEach((obj: any) => {
          if (obj.id === 'fuenteRecurso' || obj.id === 'claseContrato' || obj.id === 'formaContratacion' || obj.id === 'estado') {
            sort[obj.id] = { name: obj.desc === true ? 'DESC' : 'ASC' }
          } else {
            sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
          }
        })

        options.order = sort
      }

      const obrasList = await this.repositorioMatrizContratacion.findAndCount(options)
      const responseData = JSON.parse(JSON.stringify(obrasList[0]))
      const dataFinish = responseData
      // if (userData) {
      //   const resUser = await serviceUser.findEntidadesByUserId(userData.sub)
      //   const entidadesArray = resUser.entidades.map((entidad: any) => {
      //     return entidad.id
      //   })
      //   const filterData = responseData.filter((mat: any) => {
      //     return entidadesArray.includes(mat.entidad.id)
      //   })
      //   dataFinish = userData.isAdmin ? responseData : filterData
      // }
      const response = { cantidad: obrasList[1], data: dataFinish }

      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: string, entidadId: number, IdBpin: string): Promise<MatrizContratacion> {
    try {
      const obra = await this.repositorioMatrizContratacion.findOne({
        where: { idContrato: id, entidad_id: entidadId, id_bpin: IdBpin }
      })
      if (obra == null) {
        throw boom.notFound('Contrato no encontrado')
      }

      return obra
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: any, entidadId: any, IdBpin: any, changes: any): Promise<MatrizContratacion> {
    try {
      const obra = await this.findOne(id, entidadId, IdBpin)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioMatrizContratacion.merge(obra, changes)
      const result = await this.repositorioMatrizContratacion.save(obra)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: any, entidadId: any, IdBpin: any): Promise<MatrizContratacion> {
    try {
      const obra = await this.findOne(id, entidadId, IdBpin)
      const response = this.repositorioMatrizContratacion.remove(obra)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default MatrizContratacionDTO
