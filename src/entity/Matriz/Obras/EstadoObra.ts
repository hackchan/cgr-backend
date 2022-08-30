import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Obra } from './Obra'
@Entity()
export class EstadoObra {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, unique: true })
  name: string

  @OneToMany(() => Obra, (obra) => obra.sector)
  obras: Obra[]
}
