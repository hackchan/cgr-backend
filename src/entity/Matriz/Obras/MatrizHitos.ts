import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Transform } from 'class-transformer'
import { Hito } from './Hito'
import { MatrizObra } from './MatrizObra'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { User } from '../../UserManagement/User'

@Entity()
export class MatrizHito {
  @PrimaryColumn({ type: 'varchar', name: 'id_obra' })
  @ManyToOne(() => MatrizObra, { nullable: false })
  @JoinColumn()
    obra: MatrizObra

  @PrimaryColumn()
    entidad_id: number

  @ManyToOne(() => EntidadControl, entidad => entidad.obras, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @ManyToOne(() => Hito, (hito) => hito.hitos, { nullable: false })
  @JoinColumn({ name: 'hito' })
    hito: Hito

  @Column({ name: 'fecha_hito', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaHito: Date

  @Column({ name: 'detalle_hito', nullable: false, default: 'N/A' })
  @Transform(({ value }) => (value).toString())
    detalle: string

  @Column({
    name: 'valor_adiciones_hito',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorAdiciones: number

  @IsInt()
  @Min(0)
  @Max(30000)
  @Column({ name: 'dias_hito', nullable: false, default: 0 })
    dias: number

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

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_operation' })
    userOper: User

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
