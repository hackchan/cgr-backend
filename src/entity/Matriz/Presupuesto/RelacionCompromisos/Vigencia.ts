import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizRelacionCompromisos } from './MatrizRelacionCompromisos'
import { MatrizCDPs } from '../RelacionCDPs/MatrizRelacionCDPs'
@Entity()
export class Vigencia {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizRelacionCompromisos, (mf) => mf.vigencia)
    compromisos: MatrizRelacionCompromisos[]

  @OneToMany(() => MatrizCDPs, (mf) => mf.vigencia)
    cdps: MatrizCDPs[]
}
