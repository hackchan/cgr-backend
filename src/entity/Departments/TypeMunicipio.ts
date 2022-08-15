import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Municipio } from './Municipio'
@Entity('tipe_municipio')
export class TypeMunicipio {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true, nullable: false })
  name: string

  @OneToMany(() => Municipio, (municipio) => municipio.tipo)
  municipios: Municipio[]
}
