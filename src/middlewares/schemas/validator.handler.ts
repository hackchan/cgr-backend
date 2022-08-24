/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { Request, Response, NextFunction } from 'express'
export function validatorHandler (schema: any, property: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data: object = req[property as keyof object]
    console.log('data:', data)
    const { error } = schema.validate(data)
    console.log(error)
    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}
