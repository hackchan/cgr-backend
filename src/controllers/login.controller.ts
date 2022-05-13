/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import jwt = require('jsonwebtoken')
import { PayloadDTO } from '../entityTypes/payload.dto'
import { ListUsers } from '../entityTypes/user.dto'
import config from '../config'
// import UserService from '../services/user.services'

// const userService = new UserService()

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: ListUsers = JSON.parse(JSON.stringify(req.user))
    if (user === null) {
      throw new Error('Usuario o clave invalida')
    } else {
      const payload: PayloadDTO = {
        sub: user.id,
        role: user.auth.role
      }

      const token = jwt.sign(payload, config.api.jwt ?? '')
      success(req, res, { user, token })
    }

    // const respose = await userService.findOne(parseInt(id, 10))
  } catch (error) {
    next(error)
  }
}
