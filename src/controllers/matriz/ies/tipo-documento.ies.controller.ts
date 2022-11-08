/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import TipoDocService from '../../../services/matriz/IES/tipo-documento.ies.services'

const serviceTipoDoc = new TipoDocService()

export const getTipodocs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceTipoDoc.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getTipoDoc = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceTipoDoc.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createTipoDoc = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceTipoDoc.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateTipoDoc = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceTipoDoc.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteTipoDoc = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceTipoDoc.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
