/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import SatelitalService from '../services/satelital.services'

const serviceSatelital = new SatelitalService()

export const getSatelitales = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceSatelital.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getSatelital = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSatelital.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createSatelital = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const satelital = req.body
    const response = await serviceSatelital.create(satelital)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateSatelital = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceSatelital.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteSatelital = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSatelital.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
