import { IsDate, IsInt, Min } from 'class-validator'
import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { Municipio } from '../../Departments/Municipio'
import { EstadoCivil } from './EstadoCivil'
import { DocumentType } from '../ies/DocumentType'
import { DestinoEconomico } from './DestinoEconomico'
@Entity('catastros')
export class MatrizCatastro {
  @PrimaryColumn({
    type: 'numeric',
    name: 'numero_predial',
    nullable: false,
    primary: true
  })
    id: number

  @Column({ name: 'numero_predial_nacional', nullable: true, default: 0 })
    numeroPredialNacional: string

  @Column({ name: 'numero_predial_anterior', nullable: true, default: 0 })
    numeroPredialAnterio: string

  @ManyToOne(() => Municipio, municipio => municipio.catastros, { nullable: false, cascade: true })
  @JoinColumn({ name: 'sede' })
    municipio: Municipio

  @IsInt()
  @Min(1)
  @Column({ name: 'orden', nullable: false, default: 1 })
    orden: number

  @Column({ name: 'nombre', nullable: false })
  @Transform(({ value }) => (value).toString())
    nombre: string

  @ManyToOne(() => EstadoCivil, entidad => entidad.catastros, { nullable: false, cascade: true })
  @JoinColumn({ name: 'estado_civil' })
    estadoCivil: EstadoCivil

  @ManyToOne(() => DocumentType, doctype => doctype.catastros, { nullable: false, cascade: true })
  @JoinColumn({ name: 'tipo_documento' })
    tipoDoc: DocumentType

  @Column({ name: 'numero_documento', nullable: false })
    idDoc: string

  @Column({ name: 'direccion', nullable: false })
    direccion: string

  @Column({
    name: 'area_terreno',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    areaTerreno: number

  @ManyToOne(() => DestinoEconomico, entidad => entidad.catastros, { nullable: false, cascade: true })
  @JoinColumn({ name: 'destino_economico' })
    destinoEconomico: DestinoEconomico

  @Column({
    name: 'area_construida',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    areaCostruida: number

  @Column({
    name: 'avaluo',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    avaluo: number

  @Column({ name: 'vigencia', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    vigencia: Date

  @Column({ name: 'matricula_inmobiliaria', nullable: false, default: 0 })
    matriculaInmobiliaria: string

  @Column({ nullable: true })
    alerta: boolean = false

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

  @PrimaryColumn()
    entidad_id: number

  @ManyToOne(() => EntidadControl, entidad => entidad.obras, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_operation' })
    userOper: User

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date

  // @OneToMany(() => MatrizCatastroDetalle, mcatastro => mcatastro.catastro)
  //   catastrosDetalle: MatrizCatastroDetalle[]
}
