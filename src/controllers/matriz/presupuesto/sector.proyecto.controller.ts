/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import SectorProyecto from '../../../services/matriz/presupuesto/sector.proyecto.services'

const serviceSectorProyecto = new SectorProyecto()

export const getSectores = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceSectorProyecto.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSectorProyecto.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceSectorProyecto.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceSectorProyecto.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteSector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSectorProyecto.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
