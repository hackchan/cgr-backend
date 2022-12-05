import { IsDate, IsInt, Min, Max, IsUrl } from 'class-validator'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { TipoOcad } from './TipoOcad'
@Entity('regalias')
@Unique('regalias_unique', ['idBpin', 'entidad'])
export class MatrizRegalias {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ name: 'id_bpin', nullable: false })
    idBpin: string

  @Column({ name: 'fecha_aprob_banco', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaAprobBanco: Date

  @Column({ name: 'nombre_acad', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreAcad: string

  @IsInt()
  @Min(2000)
  @Max(2999)
  @Column({ name: 'anio_aprobacion', nullable: false })
    anioAprobacion: number

  @Column({ name: 'fecha_migrac_gesproy_sgr', type: 'date', nullable: false, default: '1900-01-01' })
  @IsDate()
    fechaMigracion: Date

  @Column({ name: 'nombre_proyecto', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreProyecto: string

  @Column({ name: 'proceso_adjudicacion', nullable: false })
    isProcesoAdjudicacion: boolean = false

  @Column({ name: 'adjudicado', nullable: false })
    adjudicado: boolean = false

  @Column({ name: 'publicado_en_secop', nullable: false })
    publicadoSecop: boolean = false

  @Column({ name: 'identificador_secop', nullable: false })
    identificadorSecop: string

  @Column({ name: 'link_secop', nullable: false, default: 'N/A' })
  @IsUrl()
    linkSecop: string

  @ManyToOne(() => TipoOcad, (tipo) => tipo.proyectos, { nullable: false })
  @JoinColumn({ name: 'estado' })
    tipo: TipoOcad

  @Column({ nullable: true })
    alerta: boolean = false

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_alerta' })
    userAlert: User

  @ManyToOne(() => EntidadControl, entidad => entidad.regalias, { nullable: false })
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
