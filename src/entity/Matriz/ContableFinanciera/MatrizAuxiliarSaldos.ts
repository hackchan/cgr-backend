import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'

@Entity('auxiliarsaldos')
@Unique('auxiliarsaldos_unique', ['codigoContable', 'entidad'])
export class MatrizAxiliarSaldos {
  @PrimaryGeneratedColumn()
    id: number

  @IsInt()
  @Min(2017)
  @Max(2999)
  @Column({ name: 'anio', nullable: false })
    anio: number

  @IsInt()
  @Column({ name: 'codigo_contable', nullable: false, default: 0 })
    codigoContable: number

  @Column({ name: 'descripcion', nullable: false })
  @Transform(({ value }) => (value).toString())
    descripcion: string

  @Column({ name: 'fecha', type: 'date', nullable: false })
  @IsDate()
    fecha: Date

  @Column({ name: 'comprobante', nullable: false })
  @Transform(({ value }) => (value).toString())
    comprobante: string

  @Column({ name: 'numero', nullable: false })
    numero: number

  @Column({ name: 'cheque_transferencia', nullable: false })
  @Transform(({ value }) => (value).toString())
    cheque: string

  @Column({ name: 'doc_ref', nullable: false })
  @Transform(({ value }) => (value).toString())
    docRef: string

  @Column({ name: 'centro_costos', nullable: false })
  @Transform(({ value }) => (value).toString())
    centroCosto: string

  @Column({ name: 'descripcion_registro_contable', nullable: false })
  @Transform(({ value }) => (value).toString())
    descRegContable: string

  @Column({ name: 'tercero', nullable: false })
  @Transform(({ value }) => (value).toString())
    tercero: string

  @Column({ name: 'id_tercero', nullable: false })
  @Transform(({ value }) => (value).toString())
    idTercero: string

  @Column({
    name: 'debitos',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    debitos: number

  @Column({
    name: 'creditos',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    creditos: number

  @Column({ name: 'macro_campo_nivel_agregado', nullable: false })
  @Transform(({ value }) => (value).toString())
    macroCampoNA: string

  @Column({ nullable: true })
    alerta: boolean = false

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

  @ManyToOne(() => EntidadControl, entidad => entidad.saldos, { nullable: false })
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
