/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import MatrizContratacion from '../../../services/matriz/presupuesto/matriz.contratacion.service'

const serviceContratacion = new MatrizContratacion()

export const getContratos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceContratacion.findAll(req.query, req.user)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, entidadId, idBpin } = req.params
    const response = await serviceContratacion.findOne(id, parseInt(entidadId, 10), idBpin)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obra = req.body
    const response = await serviceContratacion.create(obra)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createUpdateContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obra = req.body
    const response = await serviceContratacion.createUpdate(obra)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, entidadId, idBpin } = req.query
    // const id = req.query?.id
    const changes = req.body
    const respose = await serviceContratacion.update(id, entidadId, idBpin, changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteContrato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('delete:', req.query)
    const { id, entidadId, idBpin } = req.query
    const response = await serviceContratacion.delete(id, entidadId, idBpin)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
