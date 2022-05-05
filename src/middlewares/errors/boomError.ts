import { error } from '../../utils/response'
import { Request, Response, NextFunction } from 'express'
export async function boomErroHandler (err: any, req: Request, res: Response, next: NextFunction): Promise<void> {
  if (err.isBoom === true) {
    const {
      output: { statusCode, payload }
    } = err
    error(req, res, payload, statusCode)
  } else {
    next(err)
  }
}
