import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { Reportes } from './Reportes'

@Entity()
export class Periodicidad {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @OneToMany(() => Reportes, report => report.periodicidad)
    reportes: Reportes[]
}
