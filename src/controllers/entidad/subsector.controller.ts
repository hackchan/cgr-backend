/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../utils/response'
import SubsectorService from '../../services/entidad/subsector.services'

const serviceSubsector = new SubsectorService()

export const getSubsectores = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceSubsector.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getSubsector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSubsector.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createSubsector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceSubsector.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateSubsector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceSubsector.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteSubsubsector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSubsector.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
