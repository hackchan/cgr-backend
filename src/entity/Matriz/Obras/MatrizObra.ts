import { IsUrl, IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique, OneToMany } from 'typeorm'
import { Transform } from 'class-transformer'
import { Municipio } from '../../Departments/Municipio'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { EstadoObra } from '../../Matriz/Obras/EstadoObra'
import { SectorObra } from '../../Matriz/Obras/SectorObra'
import { OrigenRecurso } from '../../Matriz/Obras/OrigenRecurso'
import { User } from '../../UserManagement/User'
import { SoportesObras } from './SoportesObras'
import { MatrizHito } from './MatrizHitos'
@Entity()
@Unique('matrizObra_unique', ['idContrato', 'entidad'])
export class MatrizObra {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ name: 'id_bpin', nullable: false })
  @Transform(value => value.toString, {
    toPlainOnly: true
  })
    idBpin: string

  @Column({ name: 'id_contrato', nullable: false })
  @Transform(({ value }) => (value).toString())
    idContrato: string

  @Column({ name: 'nombre_proyecto', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreProyecto: string

  @Column({ name: 'objeto_proyecto', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    objetoProyecto: string

  @Column({ name: 'unidad_funcional_acuerdo_obra', nullable: false, default: 'N/A' })
  @Transform(({ value }) => value.toUpperCase())
    unidadFuncional: string

  @Column({ name: 'fecha_suscripcion', type: 'date', nullable: false })
  @IsDate()
    fechaSuscripcion: Date

  @Column({ name: 'fecha_inicio', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaInicio: Date

  @Column({ name: 'fecha_programada_terminacion', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaProgramadaTermina: Date

  @Column({ name: 'fecha_terminacion', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaTermina: Date

  @Column({
    name: 'valor_contrato_inicial',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorContratoInicial: number

  @Column({
    name: 'valor_contrato_final',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorContratoFinal: number

  @Column({ name: 'avance_fisico_programado', type: 'decimal', precision: 4, scale: 2, default: 0, nullable: false })
    avanceFisicoProgramado: number

  @Column({ name: 'avance_fisico_ejecutado', type: 'decimal', precision: 4, scale: 2, default: 0, nullable: false })
    avanceFisicoEjecutado: number

  @Column({ name: 'avance_financiero_ejecutado', type: 'decimal', precision: 4, scale: 2, default: 0, nullable: false })
    avanceFinancieroEjecutado: number

  @Column({ name: 'nro_contrato', nullable: false })
  @Transform(({ value }) => (value).toString())
    nroContrato: string

  @IsInt()
  @Min(0)
  @Max(100)
  @Column({ name: 'cantidad_de_suspensiones', nullable: false, default: 0 })
    cantidadSuspenciones: number

  @IsInt()
  @Min(0)
  @Max(100)
  @Column({ name: 'cantidad_de_prorrogas', nullable: false, default: 0 })
    cantidadProrrogas: number

  @Column({ name: 'tiempo_suspensiones', nullable: false, default: 0 })
    tiempoSuspenciones: number

  @Column({ name: 'tiempo_prorrogas', nullable: false, default: 0 })
    tiempoProrrogas: number

  @IsInt()
  @Min(0)
  @Max(100)
  @Column({ name: 'cantidad_adiciones', nullable: false, default: 0 })
    cantidadAdiciones: number

  @Column({
    name: 'valor_total_adiciones',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorTotalAdiciones: number

  @Column({
    name: 'valor_comprometido',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorComprometido: number

  @Column({
    name: 'valor_obligado',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorObligado: number

  @Column({
    name: 'valor_pagado',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorPagado: number

  @Column({
    name: 'valor_anticipo',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: true
  })
    valorAnticipo: number

  @Column({ name: 'razon_social_contratista', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    razonSocialContratista: string

  @Column({ name: 'id_contratista', nullable: false })
  @Transform(({ value }) => (value).toString())
    idContratista: string

  @Column({ name: 'razon_social_nuevo_contratista', nullable: true })
  @Transform(({ value }) => value.toUpperCase())
    razonSocialNuevoContratista: string

  @Column({ name: 'id_nuevo_contratista', nullable: true })
  @Transform(({ value }) => (value).toString())
    idNuevoContratista: string

  @Column({ name: 'observaciones', nullable: false, default: 'N/A' })
  @Transform(({ value }) => (value).toString())
    observaciones: string

  @Column({ name: 'link_secop', nullable: false, default: 'N/A' })
  @IsUrl()
    linkSecop: string

  @Column({ name: 'nro_contrato_interventoria', nullable: false })
  @Transform(({ value }) => (value).toString())
    nroContratoInterventoria: string

  @Column({ name: 'nombre_interventoria', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreInterventoria: string

  @Column({ name: 'id_interventoria', nullable: false })
  @Transform(({ value }) => (value).toString())
    idInterventoria: string

  @IsInt()
  @Min(1)
  @Max(31)
  @Column({ name: 'dia_corte', nullable: false })
    diaCorte: number

  @IsInt()
  @Min(1)
  @Max(12)
  @Column({ name: 'mes_corte', nullable: false })
    mesCorte: number

  @IsInt()
  @Min(1900)
  @Max(2999)
  @Column({ name: 'anio_corte', nullable: false })
    anioCorte: number

  @Column({ nullable: true })
    alerta: boolean = false

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

  @ManyToOne(() => SectorObra, (sector) => sector.obras, { nullable: false })
  @JoinColumn({ name: 'sector' })
    sector: SectorObra

  @ManyToOne(() => OrigenRecurso, (origen) => origen.obras, { nullable: false })
  @JoinColumn({ name: 'origen' })
    origen: OrigenRecurso

  @ManyToOne(() => EstadoObra, (estado) => estado.obras, { nullable: false })
  @JoinColumn({ name: 'estado' })
    estado: EstadoObra

  @ManyToOne(() => EntidadControl, entidad => entidad.obras, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @ManyToOne(() => Municipio, municipio => municipio.obras, { nullable: false, cascade: true })
  @JoinColumn({ name: 'municipio_obra' })
    municipioObra: Municipio

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_operation' })
    userOper: User

  @OneToMany(() => SoportesObras, (soporte) => soporte.obra)
    soportes: SoportesObras[]

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date

  @OneToMany(() => MatrizHito, (mat) => mat.obra)
    hitos: MatrizHito[]
}
