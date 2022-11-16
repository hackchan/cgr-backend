/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../utils/response'
import EmailService from '../../services/entidad/email'

const serviceEmail = new EmailService()

export const getEmails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceEmail.findAll(req.user)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const getEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEmail.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const createEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoria = req.body
    const response = await serviceEmail.create(categoria)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const updateEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await serviceEmail.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await serviceEmail.delete(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
