/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import DepartmentService from '../services/department.services'

const serviceDepartment = new DepartmentService()

export const getDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceDepartment.findAll(req.query)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceDepartment.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const satelital = req.body
    const response = await serviceDepartment.create(satelital)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceDepartment.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceDepartment.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
