/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../../utils/response'
import OrigenRecursoService from '../../../services/matriz/obras/origen.recurso.services'

const serviceOrigenRecurso = new OrigenRecursoService()

export const getOrigenRecursos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceOrigenRecurso.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getOrigenRecurso = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceOrigenRecurso.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createOrigenRecurso = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceOrigenRecurso.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateOrigenRecurso = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceOrigenRecurso.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteOrigenRecurso = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceOrigenRecurso.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
