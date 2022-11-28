import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { SectorObra } from '../Obras/SectorObra'
@Entity('programasproyectos')
@Unique('matrizProgramproyect_unique', ['bpin', 'entidad'])
export class MatrizProyecto {
  @PrimaryGeneratedColumn()
    id: number

  @IsInt()
  @Min(2018)
  @Min(2999)
  @Column({ name: 'anio', nullable: false })
    anio: number

  @Column({ name: 'id_bpin', nullable: false })
  @Transform(value => value.toString, {
    toPlainOnly: true
  })
    idBpin: string

  @Column({ name: 'nombre_proyecto', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreProyecto: string

  @Column({
    name: 'valor_proyecto',
    type: 'decimal',
    precision: 19,
    scale: 2,
    default: 0,
    nullable: false
  })
    valorProyecto: number

  @Column({ name: 'duracion_proyecto', nullable: false, default: 0 })
    duracionProyecto: number

  @Column({ name: 'dependencia_responsable_proyecto', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    dependenciaProyecto: string

  @Column({ name: 'descripcion', nullable: false, default: 'N/A' })
  @Transform(({ value }) => (value).toString())
    descripcion: string

  @Column({ name: 'objetivo_general_proyecto', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    objetivoGeneral: string

  @ManyToOne(() => SectorObra, (sector) => sector.obras, { nullable: false })
  @JoinColumn({ name: 'sector' })
    sector: SectorObra

  @Column({ name: 'programa_plan_desarrollo_municipal', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    programaPlanDesarrollo: string

  @Column({ name: 'fecha_inicio_ejecucion_proyecto', type: 'date', nullable: false })
  @IsDate()
    fechaInicioEjecucion: Date

  @Column({ name: 'fecha_cierre_ejecucion_proyecto', type: 'date', nullable: true, default: '1900-01-01' })
  @IsDate()
    fechaCierreEjecucion: Date

  @Column({ name: 'observaciones', nullable: false, default: 'N/A' })
  @Transform(({ value }) => (value).toString())
    observaciones: string

  @Column({ nullable: true, default: false })
    reactivacionEconomica: boolean = false

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
}
