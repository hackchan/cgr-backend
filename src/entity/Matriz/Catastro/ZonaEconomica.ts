import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { MatrizCatastroDetalle } from './MatrizCatastroDetalle'
@Entity()
export class ZonaEconomica {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @OneToMany(() => MatrizCatastroDetalle, mcatastro => mcatastro.zonaEconomica)
    catastrosDetalle: MatrizCatastroDetalle[]

  // @OneToMany(() => User)
  // users: User[]
}
