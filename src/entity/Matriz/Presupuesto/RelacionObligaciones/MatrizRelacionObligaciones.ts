import { IsDate } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../../UserManagement/User'
import { EntidadControl } from '../../../Entidad/EntidadControl'
import { MatrizRelacionCompromisos } from '../RelacionCompromisos/MatrizRelacionCompromisos'

@Entity('relacionobligaciones')
@Unique('relacionobligaciones_unique', ['idObligacion', 'entidad'])
export class MatrizRelacionObligaciones {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ name: 'id_obligacion', nullable: false })
    idObligacion: string

  @Column({ name: 'fecha_obligacion', type: 'date', nullable: false })
  @IsDate()
    fechaObligacion: Date

  @Column({
    name: 'valor_obligacion',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorObligacion: number

  @Column({ name: 'cod_presupuestal', nullable: false })
  @Transform(({ value }) => (value).toString())
    codPresupuestal: string

  @Column({ name: 'nombre_rubro', nullable: false })
  @Transform(({ value }) => (value).toString())
    nombreRubro: string

  @Column({ nullable: true })
    alerta: boolean = false

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

  @ManyToOne(() => EntidadControl, entidad => entidad.obligaciones, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_operation' })
    userOper: User

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date

  @OneToOne(() => MatrizRelacionCompromisos, obli => obli.obligacion)
    compromiso: MatrizRelacionCompromisos
}
