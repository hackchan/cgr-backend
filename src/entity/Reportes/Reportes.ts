import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm'
import { IsString, IsInt, Min, Max } from 'class-validator'
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

  @IsInt()
  @Min(1)
  @Max(31)
  @Column({ name: 'dia_corte', nullable: false })
    diaEntrega: number

  @OneToMany(() => SubReportes, catego => catego.reportes)
    subreportes: SubReportes[]

  @ManyToMany(() => EntidadControl, entidad => entidad.reportes)
    entidad: EntidadControl[]
}
