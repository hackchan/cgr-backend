import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Soportes } from './Soportes'

@Entity()
export class TipoSoporte {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => Soportes, (soporte) => soporte.tipoSoporte)
    soportes: Soportes[]
}
