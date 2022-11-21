import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Transform } from 'class-transformer'
import { Hito } from './Hito'
import { MatrizObra } from './MatrizObra'
import { User } from '../../UserManagement/User'
@Entity()
export class MatrizHito {
  @PrimaryGeneratedColumn()
    id: number

  @ManyToOne(() => MatrizObra, matObra => matObra.hitos, { nullable: false, cascade: true })
  @JoinColumn({ name: 'obra_id' })
    obra: MatrizObra

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
  @Min(2999)
  @Column({ name: 'anio_corte', nullable: false })
    anioCorte: number

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_operation' })
    userOper: User

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date
}
