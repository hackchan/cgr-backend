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
    const { id, entidadId } = req.params
    const response = await serviceProyecto.findOne(id, parseInt(entidadId, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getProyectoByEntidad = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('entro a obtener proyectos de una entidad')
    console.log('reg.params:', req.params)
    console.log('reg.users:', req.user)
    console.log('reg.query:', req.query)
    const { id } = req.params
    const response = await serviceProyecto.findProyectsByEntidadId(parseInt(id, 10))
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
    const { id, entidadId } = req.query
    // const id = req.query?.id
    const changes = req.body
    const respose = await serviceProyecto.update(id, entidadId, changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteProyecto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('delete:', req.query)
    const { id, entidadId } = req.query
    const response = await serviceProyecto.delete(id, entidadId)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
