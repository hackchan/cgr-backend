import { IsInt, Min, Max } from 'class-validator'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'

@Entity('LibroMayorBalance')
@Unique('LibroMayorBalance_unique', ['codigoContable', 'entidad'])
export class MatrizLibroMayor {
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

  @Column({
    name: 'saldo_db_anterior',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    saldoDBAnterior: number

  @Column({
    name: 'movimiento_db_periodo',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    movimientoDBPeriodo: number

  @Column({
    name: 'saldo_final_db',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    saldoFinalDB: number

  @Column({
    name: 'saldo_cr_anterior',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    saldoCRAnterior: number

  @Column({
    name: 'movimiento_cr_periodo',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    movimientoCRPeriodo: number

  @Column({
    name: 'saldo_final_cr',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    saldoFinalCR: number

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

  @ManyToOne(() => EntidadControl, entidad => entidad.balances, { nullable: false })
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
