import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsString } from 'class-validator'

import { Reportes } from './Reportes'
@Entity()
export class SubReportes {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @ManyToOne(() => Reportes, report => report.subreportes, { nullable: true, cascade: true })
  @JoinColumn({ name: 'reporte_id' })
    reportes: Reportes
}
