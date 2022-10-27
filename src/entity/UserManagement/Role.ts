import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { RoleUser } from '../UserManagement/RoleUser'
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => RoleUser, rolUser => rolUser.user)
    roles: RoleUser[]
}
