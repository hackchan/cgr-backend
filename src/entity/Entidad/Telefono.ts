import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { EntidadControl } from './EntidadControl'
@Entity()
export class Telefono {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    numero: string

  @Column({ nullable: true })
    contacto: string

  @Column({ nullable: true })
    cargo: string

  @ManyToOne(() => EntidadControl, entidad => entidad.telefonos, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl
}
