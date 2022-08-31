/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import EstadoObrasService from '../../../services/matriz/obras/estado.obra.services'

const serviceEstadoObras = new EstadoObrasService()

export const getEstadoObras = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceEstadoObras.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getEstadoObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEstadoObras.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createEstadoObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceEstadoObras.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateEstadoObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceEstadoObras.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteEstadoObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEstadoObras.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
