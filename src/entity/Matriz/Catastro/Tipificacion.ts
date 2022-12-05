import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { MatrizCatastroDetalle } from './MatrizCatastroDetalle'
@Entity()
export class Tipificacion {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @OneToMany(() => MatrizCatastroDetalle, mcatastro => mcatastro.tipificacion)
    catastrosDetalle: MatrizCatastroDetalle[]

  // @OneToMany(() => User)
  // users: User[]
}
