import { Entity, Column, ManyToOne, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import { UserType } from './UserType'
import { Auth } from './Auth'
import { Model } from './Model'
import { EntidadControl } from '../Entidad/EntidadControl'
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

  @OneToOne(() => Auth, { cascade: true, onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'auth_id' })
    auth: Auth

  @ManyToOne(() => UserType, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE', cascade: true })
  @JoinColumn({ name: 'type_id' })
    tipo: UserType

  @ManyToMany(() => EntidadControl)
  @JoinTable()
    entidades: EntidadControl[]
}
