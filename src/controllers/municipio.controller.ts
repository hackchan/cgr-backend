/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import MunicipioService from '../services/municipio.services'

const serviceMunicipio = new MunicipioService()

export const getMunicipios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceMunicipio.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getMunicipio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceMunicipio.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createMunicipio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const satelital = req.body
    const response = await serviceMunicipio.create(satelital)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateMunicipio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceMunicipio.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteMunicipio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceMunicipio.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
