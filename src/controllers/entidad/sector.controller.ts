/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../utils/response'
import SectorService from '../../services/entidad/sector.services'

const serviceSector = new SectorService()

export const getSectores = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceSector.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSector.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceSector.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceSector.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteSubsector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSector.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
