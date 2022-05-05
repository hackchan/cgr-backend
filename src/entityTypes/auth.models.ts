import { IBaseModelUUID } from './global/global.types'

export interface IAuthModel extends IBaseModelUUID {
  username: string
  password: string
  role: string[]
}
