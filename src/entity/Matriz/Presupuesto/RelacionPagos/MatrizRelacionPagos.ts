import { IsDate } from 'class-validator'
import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../../UserManagement/User'
import { EntidadControl } from '../../../Entidad/EntidadControl'
import { MatrizRelacionCompromisos } from '../RelacionCompromisos/MatrizRelacionCompromisos'
import { MatrizContratacion } from '../Contratacion/MatrizContratacion'
@Entity('relacionpagos')
@Unique('relacionpagos_unique', ['idPago', 'entidad'])
export class MatrizRelacionPagos {
  // @PrimaryGeneratedColumn()
  //   id: number
  @PrimaryColumn({ name: 'id_pago' })
    idPago: string

  @Column({ name: 'fecha_pago', type: 'date', nullable: false })
  @IsDate()
    fechaPago: Date

  @Column({ name: 'detalle_pago', nullable: false })
  @Transform(({ value }) => (value).toString())
    detallePago: string

  @Column({ name: 'situacion_fondos', nullable: false, default: false })
  @Transform(({ value }) => (value).toString())
    situacionFondos: boolean

  @Column({
    name: 'valor_pago_presupuestal',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorPagoPresupuestal: number

  @Column({
    name: 'descuentos',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    descuentos: number

  @Column({
    name: 'neto_pagado',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    netoPagado: number

  @Column({ name: 'banco', nullable: false })
  @Transform(({ value }) => (value).toString())
    banco: string

  @Column({ name: 'no_cuenta', nullable: false })
  @Transform(({ value }) => (value).toString())
    cuenta: string

  @Column({ name: 'id_beneficiario', nullable: false })
  @Transform(({ value }) => (value).toString())
    idBeneficiario: string

  @Column({ name: 'nombre_beneficiario', nullable: false })
  @Transform(({ value }) => (value).toString())
    nombreBeneficiario: string

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

  @ManyToOne(() => MatrizRelacionCompromisos, compro => compro.pagos, { nullable: false, cascade: true })
  @JoinColumn({ name: 'id_compromiso' })
    compromiso: MatrizRelacionCompromisos

  @ManyToOne(() => MatrizContratacion, contrato => contrato.pagos, { nullable: false, cascade: true })
  @JoinColumn({ name: 'id_contrato' })
    contrato: MatrizContratacion
}
