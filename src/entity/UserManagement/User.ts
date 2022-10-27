import { Entity, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { UserType } from './UserType'
import { Auth } from './Auth'
import { Model } from './Model'
import { RoleUser } from '../UserManagement/RoleUser'
import { UserEntidad } from '../UserManagement/UserEntidad'

@Entity('user')
export class User extends Model {
  @Column({ nullable: false })
    name: string

  @Column({ name: 'last_name', nullable: false })
    lastName: string

  @Column({ nullable: false, unique: true })
    phone: string

  @Column({ nullable: false, unique: true })
    email: string

  @Column({ nullable: true })
    image?: string

  @Column({ nullable: false, default: false })
    active: boolean

  @OneToOne(() => Auth, { cascade: true, onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'auth_id' })
    auth: Auth

  @ManyToOne(() => UserType, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE', cascade: true })
  @JoinColumn({ name: 'type_id' })
    tipo: UserType

  @OneToMany(() => RoleUser, rolUser => rolUser.user)
    roles: RoleUser[]

  @OneToMany(() => UserEntidad, userEntidad => userEntidad.user)
    entidades: UserEntidad[]
}
