/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import MatrizObra from '../../../services/matriz/obras/matriz.obra.service'

const serviceObra = new MatrizObra()

export const getObras = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceObra.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceObra.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obra = req.body
    const response = await serviceObra.create(obra)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createUpdateObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obra = req.body
    const response = await serviceObra.createUpdate(obra)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceObra.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteObra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceObra.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
