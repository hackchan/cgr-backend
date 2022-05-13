import { IUserTypeModel } from './usertype.model'

export interface CreateUserTypeDTO extends Omit<IUserTypeModel, 'id'> {
}
