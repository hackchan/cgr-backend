
import { IUserModel } from './user.model'

export interface CreateUserDTO extends Omit<IUserModel, 'id'|'createdAt'|'updatedAt'> {
  tipoId: number
}

export interface UserDTO extends IUserModel {

}
export interface UpdateUserDTO extends Partial<IUserModel> {

}

// export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

// export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>> {
//   readonly tags: readonly string[]
// }
