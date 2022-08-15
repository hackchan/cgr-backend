import { IBaseModel } from './global/global.types'

export interface IAuthModel extends IBaseModel{
  username: string
  password: string
  role: string[]
  recoveryToken?: string

}
