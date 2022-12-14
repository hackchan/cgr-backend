import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { MatrizCatastroDetalle } from './MatrizCatastroDetalle'
@Entity()
export class Uso {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @OneToMany(() => MatrizCatastroDetalle, mcatastro => mcatastro.uso)
    catastrosDetalle: MatrizCatastroDetalle[]

  // @OneToMany(() => User)
  // users: User[]
}
