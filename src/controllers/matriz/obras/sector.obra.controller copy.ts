/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import OrigenSectorObra from '../../../services/matriz/obras/sector.obra.services'

const serviceSectorObra = new OrigenSectorObra()

export const getSectores = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceSectorObra.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSectorObra.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceSectorObra.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceSectorObra.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSectorObra.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
