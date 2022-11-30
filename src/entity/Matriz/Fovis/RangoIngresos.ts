import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizFovis } from './MatrizFovis'

@Entity()
export class RangoIngresos {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizFovis, (mf) => mf.rangoIngreso)
    subsidios: MatrizFovis[]
}
