import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizRelacionCompromisos } from './MatrizRelacionCompromisos'

@Entity()
export class TipoGastos {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizRelacionCompromisos, (mf) => mf.tipoGastos)
    compromisos: MatrizRelacionCompromisos[]
}
