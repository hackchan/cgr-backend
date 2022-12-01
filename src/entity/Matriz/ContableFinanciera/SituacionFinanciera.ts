import { IsInt, Min, Max } from 'class-validator'
import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'

@Entity('EstadoFinanciera')
@Unique('EstadoFinanciera_unique', ['codigoContable', 'entidad'])
export class MatrizSituacionFinanciera {
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
    name: 'saldo',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    saldo: number

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
