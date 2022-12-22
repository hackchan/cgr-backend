/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import FormaContrato from '../../../services/matriz/presupuesto/forma.contrato.services'

const serviceFormaContrato = new FormaContrato()

export const getFormasContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceFormaContrato.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getFormaContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceFormaContrato.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createFormaContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceFormaContrato.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateFormaContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceFormaContrato.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteFormaContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceFormaContrato.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
