import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm'
import { Categoria } from './Categoria'
import { Email } from './Email'
import { Subsector } from './Subsector'
import { Telefono } from './Telefono'
import { Municipio } from '../Departments/Municipio'
import { MatrizObra } from '../Matriz/Obras/MatrizObra'
import { User } from '../UserManagement/User'
@Entity()
export class EntidadControl {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    nit: string

  @Column({ nullable: false })
    name: string

  @Column({ nullable: true })
    doctec: boolean = false

  @Column({ nullable: true })
    cgn: string

  @Column({ nullable: true, default: false })
    active: boolean

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

  @OneToMany(() => MatrizObra, obra => obra.entidad)
    obras: MatrizObra[]

  @ManyToMany(() => User, user => user.entidades)
    users: User[]
}
