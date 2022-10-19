import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Subsector } from './Subsector'
@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @Column({ nullable: false, unique: true })
    initial: string

  @OneToMany(() => Subsector, (subsector) => subsector.sector)
    subsector: Subsector[]
}
