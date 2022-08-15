import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Departamento } from './Departamento'
@Entity('satelital')
export class Satelital {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true, nullable: false })
  name: string

  @OneToMany(() => Departamento, (depart) => depart.satelital)
  departaments: Departamento[]
}
