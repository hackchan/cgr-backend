/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import boom from '@hapi/boom'
import { Request, Response, NextFunction } from 'express'
export function validatorHandler (schema: any, property: string) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const data: object = req[property as keyof object]
    const { error } = schema.validate(data, { abortEarly: false })
    console.log(error)
    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}
