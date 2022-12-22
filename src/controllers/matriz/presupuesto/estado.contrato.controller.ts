/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import EstadoContrato from '../../../services/matriz/presupuesto/estado.contrato.services'

const serviceEstadoContrato = new EstadoContrato()

export const getEstadosContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceEstadoContrato.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getEstadoContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEstadoContrato.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createEstadoContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceEstadoContrato.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateEstadoContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceEstadoContrato.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteEstadoContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEstadoContrato.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
