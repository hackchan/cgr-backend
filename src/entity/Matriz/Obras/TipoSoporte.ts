import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { SoportesObras } from './SoportesObras'

@Entity()
export class TipoSoporte {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => SoportesObras, (soporte) => soporte.tipoSoporte)
    soportes: SoportesObras[]
}
