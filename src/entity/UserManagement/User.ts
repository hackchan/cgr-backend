import { Entity, Column, ManyToOne, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import { UserType } from './UserType'
import { Auth } from './Auth'
import { Model } from './Model'
import { Role } from './Role'
import { EntidadControl } from '../Entidad/EntidadControl'
import { Videos } from '../blog/Videos'
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

  @OneToOne(() => Auth, { nullable: false, cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'auth_id' })
    auth: Auth

  @ManyToOne(() => UserType, usertype => usertype.users, { nullable: false, cascade: true })
  @JoinColumn({ name: 'type_id' })
    tipo: UserType

  @ManyToMany(() => Role, role => role.users, { cascade: true, nullable: false })
  @JoinTable()
    roles: Role[]

  @ManyToMany(() => EntidadControl, entidad => entidad.users, { cascade: true, nullable: false })
  @JoinTable()
    entidades: EntidadControl[]

  @ManyToMany(() => Videos, video => video.users, { cascade: true, nullable: false })
  @JoinTable()
    videos: Videos[]
}
