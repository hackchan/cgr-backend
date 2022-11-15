import boom from '@hapi/boom'
import { Request, Response, NextFunction } from 'express'
import config from '../config'
// import { PayloadListDTO } from '../entityTypes/payload.dto'
// import { IPayload } from '../entityTypes/payload.model'
export async function checkApiKey (req: Request, _res: Response, next: any): Promise<void> {
  const apiKey = req.headers.api
  if (apiKey !== config.api.key) {
    return next(boom.unauthorized())
  }
  next()
}

export function checkRoles (...roles: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const payload: any = req.user
    const listaRolesUser = payload.role.map((rol: any) => {
      return rol.name
    })
    if (roles.some((value: any) => listaRolesUser.includes(value)) === true) {
      next()
    } else {
      next(boom.forbidden('Se requieren permisos de Administrador'))
    }
    // return rol.name.toUpperCase()
  }
}
