import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository } from 'typeorm'
import { Categoria } from '../../entity/Entidad/Categoria'

// import { validate } from 'class-validator'

class CategoriasDTO {
  readonly repositorioCategorias: Repository<Categoria>

  constructor () {
    this.repositorioCategorias = AppDataSource.getRepository(Categoria)
  }

  async create (data: object): Promise<Categoria> {
    try {
      const newCategory = this.repositorioCategorias.create(data)
      const result = await this.repositorioCategorias.save(newCategory)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll (): Promise<Categoria[]> {
    try {
      const options: any = {
        order: {
          id: 'ASC'
        }
      }
      const sateList = await this.repositorioCategorias.find(options)
      return sateList
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<Categoria> {
    try {
      const category = await this.repositorioCategorias.findOne({
        where:
        { id }
      })
      if (category == null) {
        throw boom.notFound('Categoria no encontrada')
      }

      return category
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: any): Promise<Categoria> {
    try {
      const satelital = await this.findOne(id)
      // const result = await this.repositorio.update({ id: tipoUser.id }, changes)
      this.repositorioCategorias.merge(satelital, changes)
      const result = await this.repositorioCategorias.save(satelital)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<Categoria> {
    try {
      const categoria = await this.findOne(id)
      const response = this.repositorioCategorias.remove(categoria)
      return await response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default CategoriasDTO
