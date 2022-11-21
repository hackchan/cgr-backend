import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { Municipio } from './Municipio'
import { MatrizGeo } from '../Matriz/Obras/MatrizGeo'
@Entity('vereda')
export class Vereda {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false })
    name: string

  @Column({ nullable: false })
    active: boolean = true

  @Column({ nullable: false, unique: true })
    divipola: string

  @Column({ nullable: true, type: 'decimal', precision: 16, scale: 15, default: 0 })

    shapeLeng: number

  @Column({ nullable: true, type: 'decimal', precision: 16, scale: 15, default: 0 })
    shapeArea: number

  @ManyToOne(() => Municipio, muni => muni.veredas, { nullable: false, cascade: true })
  @JoinColumn({ name: 'municipio_id' })
    municipio: Municipio

  @OneToMany(() => MatrizGeo, geo => geo.vereda)
    coordenadas: MatrizGeo[]
}
