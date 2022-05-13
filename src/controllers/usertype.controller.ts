/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import UserTypeService from '../services/usertype.service'

const userTypeService = new UserTypeService()
export const createUserType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body
    console.log('user:', user)
    const respose = await userTypeService.create(user)
    success(req, res, respose, 201)
  } catch (error) {
    next(error)
  }
}

export const getUserTypes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const respose = await userTypeService.findAll()
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const getUserType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const respose = await userTypeService.findOne(parseInt(id, 10))
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const updateUserType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await userTypeService.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteUserType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const respose = await userTypeService.delete(parseInt(id, 10))
    success(req, res, respose, 204)
  } catch (error) {
    next(error)
  }
}
