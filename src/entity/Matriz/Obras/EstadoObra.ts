import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizObra } from '../Obras/MatrizObra'
@Entity()
export class EstadoObra {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizObra, (obra) => obra.estado)
    obras: MatrizObra[]
}
