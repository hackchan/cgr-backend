/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import SemestreService from '../../../services/matriz/IES/semestre.ies.services'

const serviceSemestre = new SemestreService()

export const getSemestres = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceSemestre.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getSemestre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSemestre.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createSemestre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceSemestre.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateSemestre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceSemestre.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteSemestre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceSemestre.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
