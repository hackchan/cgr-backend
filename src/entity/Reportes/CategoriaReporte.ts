import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { IsString } from 'class-validator'
import { Reportes } from './Reportes'
import { Modelo } from './Modelo'
@Entity()
export class CategoriaReportes {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @ManyToOne(() => Modelo, modelo => modelo.categorias, { nullable: false, cascade: true })
  @JoinColumn({ name: 'modelo_id' })
    modelo: Modelo

  @OneToMany(() => Reportes, report => report.categoria)
    reportes: Reportes[]
}
