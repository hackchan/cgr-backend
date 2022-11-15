/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { AppDataSource } from '../../../db'
import { Repository, Like, Equal, In } from 'typeorm'
// import { DateUtils } from 'typeorm/util/DateUtils'
import { MatrizIes } from '../../../entity/Matriz/ies/MatrizIes'
// import { format, parse } from 'date-fns'

// import { validate } from 'class-validator'
import UserService from '../../user.services'

const serviceUser = new UserService()
class MatrizIESDTO {
  readonly repositorioMatrizIES: Repository<MatrizIes>

  constructor () {
    this.repositorioMatrizIES = AppDataSource.getRepository(MatrizIes)
  }

  getArrayAsChunks = (array: any, chunkSize: any): any[] => {
    const result = []
    const data = array.slice(0)
    while (data[0]) {
      result.push(data.splice(0, chunkSize))
    }
    return result
  }

  async create (data: any, userData: any): Promise<any> {
    try {
      const result = await this.repositorioMatrizIES.save(data, { chunk: 10, transaction: false })
      return result
    } catch (error) {
      try {
        const chunksArray = this.getArrayAsChunks(data, 10)
        for (const matChunk of chunksArray) {
          for (const mat of matChunk) {
            const matriculaItem = await this.repositorioMatrizIES.findOne({ where: { codigo: mat.codigo, entidad: { id: mat.entidad } } })
            if (matriculaItem == null) {
              const newMatricula = this.repositorioMatrizIES.create(mat)
              await this.repositorioMatrizIES.save(newMatricula)
            } else {
              this.repositorioMatrizIES.merge(matriculaItem, mat)
              await this.repositorioMatrizIES.save(matriculaItem)
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
      const result = await this.repositorioMatrizIES.upsert(data, {
        skipUpdateIfNoValuesChanged: true, // If true, postgres will skip the update if no values would be changed (reduces writes)
        conflictPaths: ['id', 'codigo'] // column(s) name that you would like to ON CONFLICT
      })
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (query: any, userData: any): Promise<any> {
    try {
      const user = await serviceUser.findOne(Number(userData.sub))
      const userJson = JSON.parse(JSON.stringify(user))
      const entidades = userJson.entidades.map((entidad: any) => {
        return entidad.id
      })

      const options: any = {
        relations: { entidad: true, sede: { department: true }, userOper: true, userAlert: true, semestre: true, tipoDoc: true, estrato: true, residencia: { department: true } },
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
          { semestreReportado: Like(`%${globalFilter}%`) },
          { codigo: Like(`%${globalFilter}%`) },
          { name: Like(`%${globalFilter}%`) },
          { numeroDoc: Like(`%${globalFilter}%`) },
          { programa: Like(`%${globalFilter}%`) },

          { valorSemestre: Like(`%${globalFilter}%`) },
          { recargo: Like(`%${globalFilter}%`) },
          { descuentos: Like(`%${globalFilter}%`) },
          { tipoDescuento: Like(`%${globalFilter}%`) },

          { diaCorte: Like(`%${globalFilter}%`) },
          { mesCorte: Like(`%${globalFilter}%`) },
          { anioCorte: Like(`%${globalFilter}%`) },

          { tipoDoc: { name: Like(`%${globalFilter}%`) } },
          { sede: { name: Like(`%${globalFilter}%`) } },
          { semestre: { name: Like(`%${globalFilter}%`) } },
          { residencia: { name: Like(`%${globalFilter}%`) } },
          { estrato: { name: Like(`%${globalFilter}%`) } },
          { entidad: { name: Like(`%${globalFilter}%`) } }
          // { municipioObra: { name: Like(`%${globalFilter}%`) } }

        ]
      }
      if (isFilters) {
        const pushWhere: any[] = []
        filtersColumn.forEach((obj: any) => {
          console.log('obj:', obj)
          const bus: any = {}
          if (obj.id === 'tipoDoc' || obj.id === 'sede' || obj.id === 'semestre' || obj.id === 'entidad' || obj.id === 'estrato' || obj.id === 'residencia') {
            pushWhere.push({ [obj.id]: { name: Like(`%${obj.value}%`) } })
          } else {
            if (obj.id === 'fechaSuscripcion' || obj.id === 'fechaInicio' || obj.id === 'fechaProgramadaTermina' || obj.id === 'fechaTermina') {
              bus[obj.id] = Equal(obj.value)
              pushWhere.push(bus)
            } else {
              bus[obj.id] = Like(`%${obj.value}%`)
              pushWhere.push(bus)
            }
          }
        })
        console.log('filter:', pushWhere)
        options.where = pushWhere
      }

      if (isSorting) {
        const sort: any = {}
        sortingColumn.forEach((obj: any) => {
          if (obj.id === 'tipoDoc' || obj.id === 'sede' || obj.id === 'semestre' || obj.id === 'entidad' || obj.id === 'estrato' || obj.id === 'residencia') {
            sort[obj.id] = { name: obj.desc === true ? 'DESC' : 'ASC' }
          } else {
            sort[obj.id] = obj.desc === true ? 'DESC' : 'ASC'
          }
        })

        options.order = sort
      }

      const obrasList = await this.repositorioMatrizIES.findAndCount(options)
      // const cantidad = await this.repositorioMatrizObra.count()
      const responseData = JSON.parse(JSON.stringify(obrasList[0]))
      const filterData = responseData.filter((mat: any) => {
        return mat.entidad.id.toString().includes(entidades)
      })

      const response = { cantidad: obrasList[1], data: filterData }
      // console.log(response)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<MatrizIes> {
    try {
      const obra = await this.repositorioMatrizIES.findOne({
        where:
        { id }
      })
      if (obra == null) {
        throw boom.notFound('Matricula no encontrada')
      }

      return obra
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<MatrizIes> {
    try {
      const obra = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioMatrizIES.merge(obra, changes)
      const result = await this.repositorioMatrizIES.save(obra)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<MatrizIes> {
    try {
      const obra = await this.findOne(id)
      const response = this.repositorioMatrizIES.remove(obra)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default MatrizIESDTO
