import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizFovis } from './MatrizFovis'

@Entity()
export class Programa {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizFovis, (mf) => mf.programa)
    subsidios: MatrizFovis[]
}
