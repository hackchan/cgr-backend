import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { EstadoObra } from '../Obras/EstadoObra'
import { OrigenRecurso } from '../Obras/OrigenRecurso'
@Entity('relacionpagos')
@Unique('relacionpagos_unique', ['id_contrato', 'entidad'])
export class MatrizRelacionPagos {
  @PrimaryGeneratedColumn()
    id: number

  @IsInt()
  @Min(2018)
  @Min(2999)
  @Column({ name: 'anio', nullable: false })
    anio: number

  @Column({ name: 'vigencia', nullable: false })
  @Transform(({ value }) => (value).toString())
    vigencia: string

  @Column({ name: 'cod_cuenta', nullable: false })
  @Transform(({ value }) => (value).toString())
    codCuenta: string

  @Column({ name: 'fuente_financiacion', nullable: false })
  @Transform(({ value }) => (value).toString())
    fuenteFinan: string

  @Column({ name: 'nombre_cuenta', nullable: false })
  @Transform(({ value }) => (value).toString())
    nombreCuenta: string

  @Column({ name: 'id_bpin', nullable: false })
  @Transform(value => value.toString, {
    toPlainOnly: true
  })
    idBpin: string

  @Column({ name: 'linea_estrategia_desarrollada', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    linea: string

  @ManyToOne(() => OrigenRecurso, (origen) => origen.obras, { nullable: false })
  @JoinColumn({ name: 'origen' })
    origen: OrigenRecurso

  @Column({ name: 'objeto_contrato', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    objetoContrato: string

  @Column({ name: 'clase_contrato', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    claseContrato: string

  @Column({
    name: 'valor_contrato',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorContrato: number

  @Column({ name: 'razon_social_contratista', nullable: true })
  @Transform(({ value }) => value.toUpperCase())
    razonSocialContratista: string

  @Column({ name: 'id_contratista', nullable: false })
  @Transform(({ value }) => (value).toString())
    idContratista: string

  @Column({ name: 'domicilio_contratista', nullable: false })
  @Transform(({ value }) => (value).toString())
    domicilioContratista: string

  @Column({ name: 'telefono_contratista', nullable: false })
  @Transform(({ value }) => (value).toString())
    telefonoContratista: string

  @Column({ name: 'email_contratista', nullable: false })
  @Transform(({ value }) => (value).toString())
    emailContratista: string

  @Column({ name: 'fecha_firma_contrato', type: 'date', nullable: false })
  @IsDate()
    fechaFirmaContrato: Date

  @Column({ name: 'forma_contratacion', nullable: false })
  @Transform(({ value }) => (value).toString())
    formaContratacion: string

  @Column({ name: 'fecha_registro_presupuestal', type: 'date', nullable: true })
  @IsDate()
    fechaRP: Date

  @Column({
    name: 'valor_registro_presupuestal',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorRP: number

  @Column({ name: 'cod_rubro_registro_presupuestal', nullable: false })
  @Transform(({ value }) => (value).toString())
    codRubroRP: string

  @Column({ name: 'fuente_financiacion_registro_presupuestal', nullable: false })
  @Transform(({ value }) => (value).toString())
    fuenteFinanRP: string

  @Column({ name: 'asignado_supervisor_interventor', nullable: false, default: 'N' })
  @Transform(({ value }) => (value).toString())
    isSupervisor: string

  @Column({ name: 'id_supervisor_interventor', nullable: false })
  @Transform(({ value }) => (value).toString())
    idInterventor: string

  @Column({ name: 'nombre_interventor', nullable: false })
  @Transform(({ value }) => (value).toString())
    nombreInterventor: string

  @Column({ name: 'tipo_vinculacion', nullable: false, default: 'N/A' })
  @Transform(({ value }) => (value).toString())
    tipoVinculacion: string

  @Column({ name: 'fecha_aprobacion_garantia_unica', type: 'date', nullable: true, default: '1900-01-01' })
  @IsDate()
    fechaAprobacion: Date

  @Column({ name: 'fecha_iniciacion_contrato', type: 'date', nullable: true, default: '1900-01-01' })
  @IsDate()
    fechaInicioContrato: Date

  @Column({ name: 'plazo_contrato', nullable: false, default: 0 })
    plazoContrato: number

  @Column({ name: 'unidad_ejecucion', nullable: false, default: 'N/A' })
  @Transform(({ value }) => (value).toString())
    unidadEjecucion: string

  @Column({ name: 'anticipo_contrato', nullable: false, default: 'N' })
  @Transform(({ value }) => (value).toString())
    anticipo: string

  @Column({
    name: 'valor_pagado_anticipo',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: true
  })
    valorPagadoAnticipo: number

  @Column({ name: 'fecha_pago_anticipo', type: 'date', nullable: true, default: '1900-01-01' })
  @IsDate()
    fechaPagoAnticipo: Date

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

  @IsInt()
  @Min(0)
  @Max(100)
  @Column({ name: 'cantidad_de_prorrogas', nullable: false, default: 0 })
    cantidadProrrogas: number

  @Column({ name: 'tiempo_prorrogas', nullable: false, default: 0 })
    tiempoProrrogas: number

  @IsInt()
  @Min(0)
  @Max(100)
  @Column({ name: 'cantidad_de_suspensiones', nullable: false, default: 0 })
    cantidadSuspenciones: number

  @Column({ name: 'tiempo_suspensiones', nullable: false, default: 0 })
    tiempoSuspenciones: number

  @Column({
    name: 'valor_total_pagos',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorTotalPagos: number

  @Column({ name: 'fecha_terminacion_contrato', type: 'date', nullable: true, default: '1900-01-01' })
  @IsDate()
    fechaTerminaContrato: Date

  @Column({ name: 'fecha_acta_liquidacion', type: 'date', nullable: true, default: '1900-01-01' })
  @IsDate()
    fechaActaLiquidacion: Date

  @ManyToOne(() => EstadoObra, (estado) => estado.obras, { nullable: false })
  @JoinColumn({ name: 'estado_contrato' })
    estado: EstadoObra

  @Column({ name: 'observaciones', nullable: false, default: 'N/A' })
  @Transform(({ value }) => (value).toString())
    observaciones: string

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
