import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import UserService from '../services/user.services'

const userService = new UserService()
export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = req.body
    console.log('user:', user)
    const respose = await userService.create(user)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}
