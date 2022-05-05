import { Request, Response } from 'express'

export async function logError (err: any, req: Request, res: Response, next: any): Promise<void> {
  console.log(err)
  next(err)
}
