
import { IAuthModel } from './auth.models'

export interface AuthCreate extends Omit<IAuthModel, 'id'>{}
export interface AuthDTO extends Partial<AuthCreate> {

}
