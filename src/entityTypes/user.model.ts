import { IBaseModel } from './global/global.types'
import { IAuthModel } from './auth.models'
import { IUserTypeModel } from './usertype.model'
export interface IUserModel extends IBaseModel {

  name: string
  lastName: string
  phone: string
  email: string
  image?: string
  createdAt: Date
  updatedAt: Date
  auth: IAuthModel
  tipo: IUserTypeModel

}
