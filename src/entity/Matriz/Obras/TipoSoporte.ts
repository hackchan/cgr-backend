import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { SoportesObras } from './SoportesObras'
import { SoportesContrato } from '../Presupuesto/Contratacion/SoporteContrato'

@Entity()
export class TipoSoporte {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => SoportesObras, (soporte) => soporte.tipoSoporte)
    soportes: SoportesObras[]

  @OneToMany(() => SoportesContrato, (soporte) => soporte.tipoSoporte)
    soportesContratos: SoportesContrato[]
}
