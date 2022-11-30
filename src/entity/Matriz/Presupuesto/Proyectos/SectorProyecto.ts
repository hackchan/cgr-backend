import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizProyectos } from './MatrizProyectos'

@Entity()
export class SectorProyecto {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizProyectos, (mf) => mf.sector)
    proyectos: MatrizProyectos[]
}
