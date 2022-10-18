import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizObra } from './MatrizObra'

@Entity()
export class TipoSoporte {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, unique: true })
  name: string

  @OneToMany(() => MatrizObra, (obra) => obra.sector)
  obras: MatrizObra[]
}
