/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import ClaseContrato from '../../../services/matriz/presupuesto/clase.contrato.services'

const serviceClaseContrato = new ClaseContrato()

export const getClasesContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceClaseContrato.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getClaseContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceClaseContrato.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createClaseContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceClaseContrato.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateClaseContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceClaseContrato.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteClaseContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceClaseContrato.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
