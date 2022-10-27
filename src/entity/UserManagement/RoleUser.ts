import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { User } from './User'
import { Role } from './Role'
@Entity('role_user')
export class RoleUser {
  @PrimaryGeneratedColumn()
    id: number

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date

  @ManyToOne(() => User, (user) => user.roles)
    user: User

  @ManyToOne(() => Role, (role) => role.roles)
    role: Role
}
