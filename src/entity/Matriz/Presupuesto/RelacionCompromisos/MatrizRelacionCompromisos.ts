import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../../UserManagement/User'
import { EntidadControl } from '../../../Entidad/EntidadControl'
import { MatrizCDPs } from '../RelacionCDPs/MatrizRelacionCDPs'
import { MatrizRelacionObligaciones } from '../RelacionObligaciones/MatrizRelacionObligaciones'
import { MatrizRelacionPagos } from '../RelacionPagos/MatrizRelacionPagos'
import { Vigencia } from './Vigencia'
import { TipoCompromiso } from './TipoCompromiso'
import { TipoGastos } from './TipoGasto'
@Entity('relacioncompromisos')
@Unique('relacioncompromisos_unique', ['idCompromiso', 'entidad'])
export class MatrizRelacionCompromisos {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ name: 'id_compromiso', nullable: false })
    idCompromiso: string

  @Column({ name: 'fecha_compromiso', type: 'date', nullable: false })
  @IsDate()
    fechaCompromiso: Date

  @Column({
    name: 'valor_compromiso',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorCompromiso: number

  @Column({ name: 'detalle_compromiso', nullable: false })
  @Transform(({ value }) => (value).toString())
    detalleCompromiso: string

  @ManyToOne(() => TipoCompromiso, (pro) => pro.compromisos, { nullable: false, cascade: true })
  @JoinColumn({ name: 'tipoCompromiso' })
    tipoCompromiso: TipoCompromiso

  @IsInt()
  @Min(2018)
  @Max(2999)
  @Column({ name: 'anio', nullable: false })
    anio: number

  @ManyToOne(() => Vigencia, (pro) => pro.compromisos, { nullable: false, cascade: true })
  @JoinColumn({ name: 'vigencia' })
    vigencia: Vigencia

  @ManyToOne(() => TipoGastos, (pro) => pro.compromisos, { nullable: false, cascade: true })
  @JoinColumn({ name: 'tipo_gasto' })
    tipoGastos: TipoGastos

  @Column({ nullable: true })
    alerta: boolean = false

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

  @ManyToOne(() => EntidadControl, entidad => entidad.compromisos, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_operation' })
    userOper: User

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date

  @ManyToOne(() => MatrizCDPs, (cdp) => cdp.compromisos, { nullable: false, cascade: true })
  @JoinColumn({ name: 'id_cdp' })
    idCdp: MatrizCDPs

  @OneToOne(() => MatrizRelacionObligaciones, obli => obli.compromiso, { nullable: false, cascade: true })
  @JoinColumn({ name: 'id_obligacion' })
    obligacion: MatrizRelacionObligaciones

  @OneToMany(() => MatrizRelacionPagos, (pago) => pago.compromiso)
    pagos: MatrizRelacionPagos[]
}
