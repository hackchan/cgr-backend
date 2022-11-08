import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { MatrizIes } from './MatrizIes'
@Entity()
export class Estrato {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @OneToMany(() => MatrizIes, mobra => mobra.estrato)
    matriculas: MatrizIes[]

  // @OneToMany(() => User)
  // users: User[]
}
