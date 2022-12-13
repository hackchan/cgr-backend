import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../../UserManagement/User'
import { EntidadControl } from '../../../Entidad/EntidadControl'
import { MatrizRelacionCompromisos } from '../RelacionCompromisos/MatrizRelacionCompromisos'
import { Vigencia } from '../RelacionCompromisos/Vigencia'
@Entity('relacioncdps')

export class MatrizCDPs {
  @PrimaryColumn({ name: 'id_cdp' })
    idCdp: string

  @PrimaryColumn()
    entidad_id: number

  @ManyToOne(() => EntidadControl, entidad => entidad.proyectos, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @Column({ name: 'fecha_cdp', type: 'date', nullable: false })
  @IsDate()
    fechaCdp: Date

  @Column({
    name: 'valor_cdp',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorCdp: number

  @Column({ name: 'detallle_cdp', nullable: false })
  @Transform(({ value }) => (value).toString())
    detalleCdp: string

  @IsInt()
  @Min(2018)
  @Max(2999)
  @Column({ name: 'anio', nullable: false })
    anio: number

  @ManyToOne(() => Vigencia, (pro) => pro.cdps, { nullable: false, cascade: true })
  @JoinColumn({ name: 'vigencia' })
    vigencia: Vigencia

  @Column({ name: 'cod_cuenta', nullable: false })
  @Transform(({ value }) => (value).toString())
    codCuenta: string

  @Column({ name: 'fuente_financiacion', nullable: false })
  @Transform(({ value }) => (value).toString())
    fuenteFin: string

  @Column({ name: 'nombre_cuenta', nullable: false })
  @Transform(({ value }) => (value).toString())
    nombreCuenta: string

  @Column({ name: 'macro_campo_nivel_agregado', nullable: false })
  @Transform(({ value }) => (value).toString())
    macroCampoNA: string

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

  @OneToMany(() => MatrizRelacionCompromisos, (compro) => compro.cdp)
    compromisos: MatrizRelacionCompromisos[]
}
