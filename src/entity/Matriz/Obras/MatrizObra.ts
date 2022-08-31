import { IsUrl, IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Municipio } from '../../Departments/Municipio'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { EstadoObra } from '../../Matriz/Obras/EstadoObra'
import { SectorObra } from '../../Matriz/Obras/SectorObra'
import { OrigenRecurso } from '../../Matriz/Obras/OrigenRecurso'

@Entity()
export class MatrizObra {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'id_bpin', nullable: false })
  idBpin: string

  @Column({ name: 'id_contrato', nullable: false, unique: true })
  idContrato: string

  @Column({ name: 'nombre_proyecto', nullable: false })
  nombreProyecto: string

  @Column({ name: 'objeto_proyecto', nullable: false })
  objetoProyecto: string

  @Column({ name: 'unidad_funcional_acuerdo_obra', nullable: true, default: 'N/A' })
  unidadFuncional: string

  @Column({ name: 'fecha_suscripcion', nullable: false })
  @IsDate()
  fechaSuscripcion: Date

  @Column({ name: 'fecha_inicio', nullable: true, default: '1900-01-01' })
  fechaInicio: Date

  @Column({ name: 'fecha_programada_terminacion', nullable: true, default: '1900-01-01' })
  fechaProgramadaTermina: Date

  @Column({ name: 'fecha_terminacion', nullable: true, default: '1900-01-01' })
  fechaTermina: Date

  @Column({ name: 'valor_contrato_inicial', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
  valorContratoInicial: number

  @Column({ name: 'valor_contrato_final', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
  valorContratoFinal: number

  @Column({ name: 'avance_fisico_programado', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
  avanceFisicoProgramado: number

  @Column({ name: 'avance_fisico_ejecutado', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
  avanceFisicoEjecutado: number

  @Column({ name: 'avance_financiero_ejecutado', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
  avanceFinancieroEjecutado: number

  @Column({ name: 'nro_contrato', nullable: false })
  nroContrato: string

  @IsInt()
  @Min(0)
  @Max(100)
  @Column({ name: 'cantidad_de_suspensiones', nullable: true, default: 0 })
  cantidadSuspenciones: number

  @IsInt()
  @Min(0)
  @Max(100)
  @Column({ name: 'cantidad_de_prorrogas', nullable: true, default: 0 })
  cantidadProrrogas: number

  @Column({ name: 'tiempo_suspensiones', nullable: true, default: 0 })
  tiempoSuspenciones: number

  @Column({ name: 'tiempo_prorrogas', nullable: true, default: 0 })
  tiempoProrrogas: number

  @IsInt()
  @Min(0)
  @Max(100)
  @Column({ name: 'cantidad_adiciones', nullable: true, default: 0 })
  cantidadAdiciones: number

  @Column({ name: 'valor_total_adiciones', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: true })
  valorTotalAdiciones: number

  @Column({ name: 'valor_comprometido', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
  valorComprometido: number

  @Column({ name: 'valor_obligado', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
  valorObligado: number

  @Column({ name: 'valor_pagado', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: false })
  valorPagado: number

  @Column({ name: 'valor_anticipo', type: 'decimal', precision: 10, scale: 2, default: 0, nullable: true })
  valorAnticipo: number

  @Column({ name: 'razon_social_contratista', nullable: false })
  razonSocialContratista: string

  @IsInt()
  @Column({ name: 'id_contratista', nullable: false })
  idContratista: number

  @Column({ name: 'razon_social_nuevo_contratista', nullable: true })
  razonSocialNuevoContratista: string

  @IsInt()
  @Column({ name: 'id_nuevo_contratista', nullable: true })
  idNuevoContratista: number

  @Column({ name: 'observaciones', nullable: true })
  observaciones: string

  @Column({ name: 'link_secop', nullable: true })
  @IsUrl()
  linkSecop: string

  @Column({ name: 'nro_contrato_interventoria', nullable: false })
  nroContratoInterventoria: string

  @Column({ name: 'nombre_interventoria', nullable: false })
  nombreInterventoria: string

  @IsInt()
  @Column({ name: 'id_interventoria', nullable: false })
  idInterventoria: number

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
  @Min(2999)
  @Column({ name: 'anio_corte', nullable: false })
  anioCorte: number

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
}
