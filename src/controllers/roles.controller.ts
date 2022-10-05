/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import RolesService from '../services/roles.service'

const rolesService = new RolesService()
export const createRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body
    const respose = await rolesService.create(user)
    success(req, res, respose, 201)
  } catch (error) {
    next(error)
  }
}

export const getRoles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const respose = await rolesService.findAll(req.body)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const getRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const respose = await rolesService.findOne(parseInt(id, 10))
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const updateRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await rolesService.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const respose = await rolesService.delete(parseInt(id, 10))
    success(req, res, respose, 200)
  } catch (error) {
    next(error)
  }
}
