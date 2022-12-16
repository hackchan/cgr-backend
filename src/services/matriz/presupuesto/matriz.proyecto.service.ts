/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like, Equal, MoreThanOrEqual, Between } from 'typeorm'
import { format } from 'date-fns'
import { MatrizProyectos } from '../../../entity/Matriz/Presupuesto/Proyectos/MatrizProyectos'
import UserService from '../../user.services'

const serviceUser = new UserService()
// import { validate } from 'class-validator'

class MatrizProyectoDTO {
  readonly repositorioMatrizProyecto: Repository<MatrizProyectos>

  constructor () {
    this.repositorioMatrizProyecto = AppDataSource.getRepository(MatrizProyectos)
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
      const result = await this.repositorioMatrizProyecto.save(data, { chunk: 10, transaction: false })
      return result
    } catch (error) {
      try {
        const chunksArray = this.getArrayAsChunks(data, 10)
        for (const obraChunk of chunksArray) {
          for (const obra of obraChunk) {
            const obraItem = await this.repositorioMatrizProyecto.findOne({ where: { idBpin: obra.idBpin, entidad: { id: obra.entidad } } })
            if (obraItem == null) {
              const newObra = this.repositorioMatrizProyecto.create(obra)
              await this.repositorioMatrizProyecto.save(newObra)
            } else {
              this.repositorioMatrizProyecto.merge(obraItem, obra)
              await this.repositorioMatrizProyecto.save(obraItem)
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
      const result = await this.repositorioMatrizProyecto.upsert(data, {
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
        relations: { sector: true, entidad: true, userOper: true, userAlert: true },
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
          { nombreProyecto: Like(`%${globalFilter}%`) },
          { valorProyecto: Like(`%${globalFilter}%`) },
          { duracionProyecto: Like(`%${globalFilter}%`) },
          { dependenciaProyecto: Like(`%${globalFilter}%`) },
          { descripcion: Like(`%${globalFilter}%`) },
          { programaPlanDesarrollo: Like(`%${globalFilter}%`) },
          { observaciones: Like(`%${globalFilter}%`) },
          { reactivacionEconomica: Like(`%${globalFilter}%`) },
          { objetivoGeneral: Like(`%${globalFilter}%`) },
          { sector: { name: Like(`%${globalFilter}%`) } },
          { entidad: { name: Like(`%${globalFilter}%`) } }

        ]
      }

      if (isFilters) {
        const pushWhere: any[] = []
        filtersColumn.forEach((obj: any) => {
          console.log('obj:', obj)
          const bus: any = {}
          if (obj.id === 'sector' || obj.id === 'entidad') {
            pushWhere.push({ [obj.id]: { name: Like(`%${obj.value}%`) } })
          } else if (obj.id === 'alerta') {
            console.log('alerta:', obj.value)
            pushWhere.push({ [obj.id]: Equal(obj.value === 'SI') })
          } else {
            if (obj.id === 'fechaInicioEjecucion' || obj.id === 'fechaCierreEjecucion' || obj.id === 'updatedAt') {
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
          if (obj.id === 'sector' || obj.id === 'entidad') {
            sort[obj.id] = { name: obj.desc === true ? 'DESC' : 'ASC' }
          } else {
            sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
          }
        })

        options.order = sort
      }

      const obrasList = await this.repositorioMatrizProyecto.findAndCount(options)
      const responseData = JSON.parse(JSON.stringify(obrasList[0]))
      let dataFinish = responseData
      if (userData) {
        const resUser = await serviceUser.findEntidadesByUserId(userData.sub)
        const entidadesArray = resUser.entidades.map((entidad: any) => {
          return entidad.id
        })
        const filterData = responseData.filter((mat: any) => {
          return entidadesArray.includes(mat.entidad.id)
        })
        dataFinish = userData.isAdmin ? responseData : filterData
      }
      const response = { cantidad: obrasList[1], data: dataFinish }

      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: string): Promise<MatrizProyectos> {
    try {
      const obra = await this.repositorioMatrizProyecto.findOne({
        where:
        { idBpin: id }
      })
      if (obra == null) {
        throw boom.notFound('Proyecto no encontrado')
      }

      return obra
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: string, changes: any): Promise<MatrizProyectos> {
    try {
      const obra = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioMatrizProyecto.merge(obra, changes)
      const result = await this.repositorioMatrizProyecto.save(obra)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: string): Promise<MatrizProyectos> {
    try {
      const obra = await this.findOne(id)
      const response = this.repositorioMatrizProyecto.remove(obra)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default MatrizProyectoDTO
