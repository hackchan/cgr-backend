import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm'
import { IsString, IsDate } from 'class-validator'
import { CategoriaReportes } from './CategoriaReporte'
import { Periodicidad } from './Periodicidad'
import { SubReportes } from './SubReporte'
import { EntidadControl } from '../Entidad/EntidadControl'
@Entity()
export class Reportes {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @ManyToOne(() => Periodicidad, entidad => entidad.reportes, { nullable: false, cascade: true })
  @JoinColumn({ name: 'periodicidad_id' })
    periodicidad: Periodicidad

  @ManyToOne(() => CategoriaReportes, catego => catego.reportes, { nullable: false, cascade: true })
  @JoinColumn({ name: 'categoria_id' })
    categoria: CategoriaReportes

  @Column({ name: 'disposicion', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    disposicion: Date

  @OneToMany(() => SubReportes, catego => catego.reportes)
    subreportes: SubReportes[]

  @ManyToMany(() => EntidadControl, entidad => entidad.reportes)
    entidad: EntidadControl[]
}
