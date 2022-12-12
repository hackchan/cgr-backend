/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import MatrizProyecto from '../../../services/matriz/presupuesto/matriz.proyecto.service'

const serviceProyecto = new MatrizProyecto()

export const getProyectos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceProyecto.findAll(req.query, req.user)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getProyecto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceProyecto.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createProyecto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obra = req.body
    const response = await serviceProyecto.create(obra)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createUpdateProyecto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obra = req.body
    const response = await serviceProyecto.createUpdate(obra)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateProyecto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceProyecto.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteProyecto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceProyecto.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
