import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { EntidadControl } from './EntidadControl'
@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, unique: true })
  name: string

  @OneToMany(() => EntidadControl, (entidad) => entidad.categoria)
  entidades: EntidadControl[]
}
