/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../utils/response'
import MemberService from '../services/twitter/twitter.service'

const memberService = new MemberService()

export const createMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const member = req.body
    const respose = await memberService.createOnetoOne(member)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const getMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await memberService.findOnetoOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}

export const deleteMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const respose = await memberService.delete(parseInt(id, 10))
    success(req, res, respose, 200)
  } catch (error) {
    next(error)
  }
}
