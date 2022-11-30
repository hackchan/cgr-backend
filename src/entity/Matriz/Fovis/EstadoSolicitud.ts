import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizFovis } from './MatrizFovis'

@Entity()
export class EstadoSolicitud {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizFovis, (mf) => mf.estadoSolicitud)
    subsidios: MatrizFovis[]
}
