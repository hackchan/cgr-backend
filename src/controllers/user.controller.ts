/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import UserService from '../services/user.services'

const userService = new UserService()

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const respose = await userService.findOne(parseInt(id, 10))
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const respose = await userService.findAll()
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body
    console.log('user:', user)
    const respose = await userService.create(user)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await userService.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const respose = await userService.delete(parseInt(id, 10))
    success(req, res, respose, 200)
  } catch (error) {
    next(error)
  }
}
