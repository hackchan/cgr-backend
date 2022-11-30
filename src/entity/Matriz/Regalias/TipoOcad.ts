import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizRegalias } from './MatrizRegalias'

@Entity()
export class TipoOcad {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizRegalias, (obra) => obra.tipo)
    proyectos: MatrizRegalias[]
}
