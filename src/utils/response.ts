import { Request, Response } from 'express'
export const success = (_req: Request, res: Response, message: any = '', status = 200): void => {
  res.status(status).send({
    error: false,
    status,
    body: message
  })
}

export const error = (_req: Request, res: Response, error: any = 'Internal server error', status = 500): void => {
  res.status(status).send({
    error,
    status,
    body: false
  })
}
