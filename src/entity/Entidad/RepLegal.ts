import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { EntidadControl } from '../Entidad/EntidadControl'
@Entity()
export class RepLegal {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @Column({ nullable: false, unique: false })
    cargo: string

  @Column({ nullable: true, unique: true })
    telefono: string

  @OneToOne(() => EntidadControl, { nullable: false, cascade: true })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl
}
