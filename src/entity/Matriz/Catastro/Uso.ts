import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { MatrizCatastro } from './MatrizCatastro'
@Entity()
export class Uso {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @OneToMany(() => MatrizCatastro, mcatastro => mcatastro.estadoCivil)
    catastros: MatrizCatastro[]

  // @OneToMany(() => User)
  // users: User[]
}