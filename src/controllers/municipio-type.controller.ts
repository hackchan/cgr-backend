/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import MunicipioService from '../services/municipio-type.services'

const serviceMunicipio = new MunicipioService()

export const getMunicipiosType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceMunicipio.findAll()
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getMunicipioType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceMunicipio.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createMunicipioType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const satelital = req.body
    const response = await serviceMunicipio.create(satelital)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateMunicipioType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceMunicipio.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteMunicipioType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceMunicipio.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
