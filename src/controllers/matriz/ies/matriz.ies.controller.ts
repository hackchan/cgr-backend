/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import MatrizIES from '../../../services/matriz/IES/matriz.ies.service'

const serviceIES = new MatrizIES()

export const getMatriculas = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceIES.findAll(req.query, req.user)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getMatricula = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceIES.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createMatricula = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const matricula = req.body
    console.log('Matricula a registrar:', matricula)
    const response = await serviceIES.create(matricula, req.user)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createUpdateMatriculas = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obra = req.body
    const response = await serviceIES.createUpdate(obra)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateMatricula = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceIES.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteMatricula = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceIES.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
