import { Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsLatitude, IsLongitude } from 'class-validator'
import { Municipio } from './Municipio'
import { Satelital } from './Satelital'
@Entity('departamento')
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true, nullable: false })
  name: string

  @Column({ nullable: true, type: 'decimal', precision: 9, scale: 6, default: 0 })
  @IsLatitude()
  latitude: number

  @Column({ nullable: true, type: 'decimal', precision: 9, scale: 6, default: 0 })
  @IsLongitude()
  longitude: number

  @OneToMany(() => Municipio, (muni) => muni.department)
  municipios: Municipio[]

  @ManyToOne(() => Satelital, (sate) => sate.departaments, { nullable: true })
  @JoinColumn({ name: 'satelital_id' })
  satelital: Satelital
}
