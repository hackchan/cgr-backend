/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import EstratoService from '../../../services/matriz/IES/estrato.ies.services'

const serviceEstrato = new EstratoService()

export const getEstratos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceEstrato.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getEstrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEstrato.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createEstrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceEstrato.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateEstrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceEstrato.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteEstrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEstrato.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
