import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizHito } from './MatrizHitos'
@Entity()
export class Hito {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizHito, (hit) => hit.hito)
    hitos: MatrizHito[]
}
