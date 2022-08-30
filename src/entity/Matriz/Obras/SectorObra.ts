import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Obra } from './Obra'
@Entity()
export class SectorObra {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, unique: true })
  name: string

  @OneToMany(() => Obra, (obra) => obra.sector)
  obras: Obra[]
}
