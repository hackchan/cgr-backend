import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizObra } from '../Obras/MatrizObra'
@Entity()
export class OrigenRecurso {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizObra, (obra) => obra.sector)
    obras: MatrizObra[]
}
