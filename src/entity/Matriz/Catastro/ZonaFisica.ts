import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { MatrizCatastroDetalle } from './MatrizCatastroDetalle'
@Entity()
export class ZonaFisica {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @OneToMany(() => MatrizCatastroDetalle, mcatastro => mcatastro.zonaFisica)
    catastrosDetalle: MatrizCatastroDetalle[]

  // @OneToMany(() => User)
  // users: User[]
}
