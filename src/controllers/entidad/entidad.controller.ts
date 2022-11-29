/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../utils/response'
import EntidadService from '../../services/entidad/entidad.services'

const serviceEntidad = new EntidadService()

export const getEntidades = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceEntidad.findAll(req.query, req.user)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getEntidad = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEntidad.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createEntidad = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceEntidad.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateEntidad = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceEntidad.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteEntidad = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEntidad.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
