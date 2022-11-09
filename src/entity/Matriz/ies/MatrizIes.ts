import { IsInt, Min, Max } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { Municipio } from '../../Departments/Municipio'
import { User } from '../../UserManagement/User'
import { Estrato } from './Estrato'
import { Semestre } from './Semestre'
import { DocumentType } from './DocumentType'
import { EntidadControl } from '../../Entidad/EntidadControl'
@Entity()
@Unique('matrizIes_unique', ['codigo', 'entidad', 'semestreReportado'])
export class MatrizIes {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ name: 'semestre_reportado', nullable: false })
    semestreReportado: number

  @Column({ name: 'codigo', nullable: false })

    codigo: string

  @Column({ name: 'nombre_estudiante', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    name: string

  @ManyToOne(() => DocumentType, doctype => doctype.matriculas, { nullable: false, cascade: true })
  @JoinColumn({ name: 'tipo_documento' })
    tipoDoc: DocumentType

  @Column({ name: 'no_documento', nullable: false })
    numeroDoc: string

  @Column({ name: 'programa', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    programa: string

  @ManyToOne(() => Municipio, municipio => municipio.obras, { nullable: false, cascade: true })
  @JoinColumn({ name: 'sede' })
    sede: Municipio

  @ManyToOne(() => Semestre, seme => seme.matriculas, { nullable: false, cascade: true })
  @JoinColumn({ name: 'semestre' })
    semestre: Semestre

  @Column({
    name: 'valor_semestre_sin_descuentos',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorSemestre: number

  @Column({
    name: 'recargo',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    recargo: number

  @Column({
    name: 'descuentos',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    descuentos: number

  @Column({ name: 'tipo_de_descuento', nullable: false, default: 'NO APLICA' })
  @Transform(({ value }) => value.toUpperCase())
    tipoDescuento: string

  @ManyToOne(() => Municipio, municipio => municipio.matriculas, { nullable: false, cascade: true })
  @JoinColumn({ name: 'residencia' })
    residencia: Municipio

  @IsInt()
  @Min(1)
  @Column({ name: 'creditos_semestre', nullable: false, default: 1 })
    creditos: number

  @ManyToOne(() => Estrato, municipio => municipio.matriculas, { nullable: false, cascade: true })
  @JoinColumn({ name: 'estrato' })
    estrato: Estrato

  @IsInt()
  @Min(1)
  @Max(31)
  @Column({ name: 'dia_corte', nullable: true })
    diaCorte: number

  @IsInt()
  @Min(1)
  @Max(12)
  @Column({ name: 'mes_corte', nullable: true })
    mesCorte: number

  @IsInt()
  @Min(1900)
  @Min(2999)
  @Column({ name: 'anio_corte', nullable: true })
    anioCorte: number

  @Column({ nullable: true })
    alerta: boolean = false

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

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
}
