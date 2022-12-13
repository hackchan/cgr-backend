import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, OneToMany, ManyToOne, OneToOne, PrimaryColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../../UserManagement/User'
import { MatrizCDPs } from '../RelacionCDPs/MatrizRelacionCDPs'
import { MatrizRelacionObligaciones } from '../RelacionObligaciones/MatrizRelacionObligaciones'
import { MatrizRelacionPagos } from '../RelacionPagos/MatrizRelacionPagos'
import { Vigencia } from './Vigencia'
import { TipoCompromiso } from './TipoCompromiso'
import { TipoGastos } from './TipoGasto'
@Entity('relacioncompromisos')
export class MatrizRelacionCompromisos {
  @PrimaryColumn({ name: 'id_compromiso' })
    idCompromiso: string

  @ManyToOne(() => MatrizCDPs, cdp => cdp.compromisos, { nullable: false })
  @JoinColumn([
    { name: 'id_cdp', referencedColumnName: 'idCdp' },
    { name: 'entidad_id', referencedColumnName: 'entidad_id' }])
    cdp: MatrizCDPs

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

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_operation' })
    userOper: User

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date

  // @ManyToOne(() => MatrizCDPs, (cdp) => cdp.compromisos, { nullable: true, cascade: true })
  // @JoinColumn({ name: 'id_cdp' })
  //   idCdp: MatrizCDPs

  @OneToOne(() => MatrizRelacionObligaciones, obli => obli.compromiso, { nullable: false, cascade: true })
  @JoinColumn([{ name: 'id_obligacion', referencedColumnName: 'idObligacion' },
    { name: 'entidad_id', referencedColumnName: 'entidad_id' }])
    obligacion: MatrizRelacionObligaciones

  @OneToMany(() => MatrizRelacionPagos, (pago) => pago.compromiso)
    pagos: MatrizRelacionPagos[]
}
