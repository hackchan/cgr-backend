import boom from '@hapi/boom'
import { Request, Response } from 'express'
import config from '../config'
export async function checkApiKey (req: Request, _res: Response, next: any): Promise<void> {
  const apiKey = req.headers.api
  if (apiKey !== config.api.key) {
    return next(boom.unauthorized())
  }
  next()
}
