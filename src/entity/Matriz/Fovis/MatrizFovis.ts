import { IsDate } from 'class-validator'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { Municipio } from '../../Departments/Municipio'
import { Programa } from './Programa'
import { FuenteFinanciamiento } from './FuenteFinanciamiento'
import { EstadoSolicitud } from './EstadoSolicitud'
import { RangoIngresos } from './RangoIngresos'
import { ZonaSolicitud } from './Zona'
import { DocumentType } from '../ies/DocumentType'
@Entity('fovis')
@Unique('fovis_unique', ['radicadoPostulacion', 'entidad'])
export class MatrizFovis {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ name: 'radicado_postulacion', nullable: false })
    radicadoPostulacion: string

  @Column({ name: 'fecha_postulacion', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaPostulacion: Date

  @Column({ name: 'fecha_aprobacion', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaAprobacion: Date

  @Column({ name: 'fecha_pago', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaPago: Date

  @Column({ name: 'nit_ccf', nullable: false, unique: true })
    nitCCF: string

  @Column({ name: 'nombre_ccf', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreCCF: string

  @ManyToOne(() => EstadoSolicitud, (ff) => ff.subsidios, { nullable: false, cascade: true })
  @JoinColumn({ name: 'estado_solicitud' })
    estadoSolicitud: EstadoSolicitud

  @ManyToOne(() => DocumentType, doctype => doctype.subsidios, { nullable: false, cascade: true })
  @JoinColumn({ name: 'tipo_documento' })
    tipoDoc: DocumentType

  @Column({ name: 'nombre_afiliado', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreAfiliado: string

  @Column({ name: 'id_afiliado', nullable: false })
  @Transform(({ value }) => (value).toString())
    idAfiliado: string

  @ManyToOne(() => ZonaSolicitud, (ff) => ff.subsidios, { nullable: false, cascade: true })
  @JoinColumn({ name: 'zona' })
    zona: ZonaSolicitud

  @ManyToOne(() => RangoIngresos, (ff) => ff.subsidios, { nullable: false, cascade: true })
  @JoinColumn({ name: 'rango_ingreso' })
    rangoIngreso: RangoIngresos

  @ManyToOne(() => FuenteFinanciamiento, (ff) => ff.subsidios, { nullable: false, cascade: true })
  @JoinColumn({ name: 'fuente_financiamiento' })
    fuenteFinanciamiento: FuenteFinanciamiento

  @ManyToOne(() => Programa, (pro) => pro.subsidios, { nullable: false, cascade: true })
  @JoinColumn({ name: 'programa' })
    programa: Programa

  @ManyToOne(() => Municipio, municipio => municipio.obrasFovis, { nullable: false, cascade: true })
  @JoinColumn({ name: 'municipio_obra' })
    municipio: Municipio

  @Column({
    name: 'valor_beneficio',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorBeneficio: number

  @Column({ nullable: true })
    alerta: boolean = false

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

  @ManyToOne(() => EntidadControl, entidad => entidad.postulaciones, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_operation' })
    userOper: User

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
