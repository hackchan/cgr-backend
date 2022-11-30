import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Departamento } from './Departamento'
import { TypeMunicipio } from './TypeMunicipio'
import { IsLatitude, IsLongitude } from 'class-validator'
import { MatrizObra } from '../Matriz/Obras/MatrizObra'
import { MatrizIes } from '../Matriz/ies/MatrizIes'
import { MatrizFovis } from '../Matriz/Fovis/MatrizFovis'
import { EntidadControl } from '../Entidad/EntidadControl'
import { Vereda } from '../Departments/Vereda'
@Entity('municipio')
export class Municipio {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false })
    name: string

  @Column({ nullable: false })
    active: boolean = false

  @Column({ nullable: false })
    isCapital: boolean = false

  @Column({ nullable: false, unique: true })
    divipola: string

  @Column({ nullable: true, type: 'decimal', precision: 9, scale: 6, default: 0 })
  @IsLatitude()
    latitude: number

  @Column({ nullable: true, type: 'decimal', precision: 9, scale: 6, default: 0 })
  @IsLongitude()
    longitude: number

  @OneToMany(() => Vereda, (vereda) => vereda.municipio)
    veredas: Vereda[]

  @ManyToOne(() => Departamento, depart => depart.municipios, { nullable: false })
  @JoinColumn({ name: 'depart_id' })
    department: Departamento

  @ManyToOne(() => TypeMunicipio, type => type.municipios, { nullable: true })
  @JoinColumn({ name: 'type_id' })
    tipo: TypeMunicipio

  @OneToMany(() => MatrizObra, mobra => mobra.municipioObra)
    obras: MatrizObra[]

  @OneToMany(() => MatrizIes, ies => ies.sede)
    matriculas: MatrizIes[]

  @OneToMany(() => EntidadControl, entidad => entidad.municipio)
    entidades: EntidadControl[]

  @OneToMany(() => MatrizFovis, mobra => mobra.municipio)
    obrasFovis: MatrizFovis[]
}
