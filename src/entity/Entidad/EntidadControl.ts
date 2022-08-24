import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from '../UserManagement/User'
import { Categoria } from './Categoria'
import { Email } from './Email'
import { Subsector } from './Subsector'
import { Telefono } from './Telefono'

@Entity()
export class EntidadControl {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, unique: true })
  nit: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: true })
  doctec: boolean=false

  @Column({ nullable: true })
  cgn: string

  @ManyToOne(() => Categoria, (categoria) => categoria.entidades, { nullable: true })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria

  @ManyToOne(() => Subsector, (subsector) => subsector.entidades, { nullable: false })
  @JoinColumn({ name: 'subsector_id' })
  subsector: Subsector

  @ManyToOne(() => User, { nullable: false, cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(() => Email, email => email.entidad, { cascade: true })
  emails: Email[]

  @OneToMany(() => Telefono, telefono => telefono.entidad, { cascade: true })
  telefonos: Telefono[]
}
