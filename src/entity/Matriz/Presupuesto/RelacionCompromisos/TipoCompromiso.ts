import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MatrizRelacionCompromisos } from './MatrizRelacionCompromisos'

@Entity()
export class TipoCompromiso {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @OneToMany(() => MatrizRelacionCompromisos, (mf) => mf.tipoCompromiso)
    compromisos: MatrizRelacionCompromisos[]
}
