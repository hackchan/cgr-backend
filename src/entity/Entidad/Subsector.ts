import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { Sector } from './Sector'
import { EntidadControl } from './EntidadControl'
@Entity()
export class Subsector {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false })
    name: string

  @ManyToOne(() => Sector, (sector) => sector.subsector, { nullable: false })
  @JoinColumn({ name: 'sector_id' })
    sector: Sector

  @OneToMany(() => EntidadControl, (entidad) => entidad.subsector)
    entidades: EntidadControl[]
}
