import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { Categoria } from './Categoria'
import { Email } from './Email'
import { Subsector } from './Subsector'
import { Telefono } from './Telefono'
import { Municipio } from '../Departments/Municipio'

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

  @OneToMany(() => Email, email => email.entidad, { cascade: true })
  emails: Email[]

  @OneToMany(() => Telefono, telefono => telefono.entidad, { cascade: true })
  telefonos: Telefono[]

  @ManyToOne(() => Municipio, { nullable: false, cascade: true })
  @JoinColumn({ name: 'municipio_id' })
  municipio: Municipio
}
