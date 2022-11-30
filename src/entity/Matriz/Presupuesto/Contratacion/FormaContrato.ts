import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizContratacion } from './MatrizContratacion'

@Entity()
export class FormaContrato {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizContratacion, (mf) => mf.formaContratacion)
    contratos: MatrizContratacion[]
}
