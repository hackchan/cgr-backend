import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizContratacion } from './MatrizContratacion'

@Entity()
export class EstadoContrato {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizContratacion, (mf) => mf.estado)
    contratos: MatrizContratacion[]
}
