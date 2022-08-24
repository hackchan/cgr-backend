/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../utils/response'
import CategoriaService from '../../services/entidad/categoria.services'

const serviceCategoria = new CategoriaService()

export const getCategorias = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceCategoria.findAll()
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getCategoria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceCategoria.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createCategoria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceCategoria.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateCategoria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceCategoria.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteCategoria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceCategoria.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
