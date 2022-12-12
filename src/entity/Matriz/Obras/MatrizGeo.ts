import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsLatitude, IsLongitude, IsInt, Min, Max } from 'class-validator'
import { Transform } from 'class-transformer'
import { Vereda } from '../../Departments/Vereda'
import { User } from '../../UserManagement/User'
import { MatrizObra } from './MatrizObra'
import { EntidadControl } from '../../Entidad/EntidadControl'
@Entity()
export class MatrizGeo {
  @PrimaryColumn({ type: 'varchar', name: 'id_obra' })
  @ManyToOne(() => MatrizObra, { nullable: false })
  @JoinColumn()
    obra: MatrizObra

  @PrimaryColumn()
    entidad_id: number

  @ManyToOne(() => EntidadControl, entidad => entidad.obras, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @IsInt()
  @Min(1)
  @Max(1000)
  @Column({ name: 'nro_vertice', nullable: true, default: 0 })
    vertice: number

  @ManyToOne(() => Vereda, (vereda) => vereda.coordenadas, { nullable: false, cascade: true })
  @JoinColumn({ name: 'vereda_obra' })
    vereda: Vereda

  @IsLatitude()
    latitude: number

  @Column({ nullable: true, type: 'decimal', precision: 9, scale: 6, default: 0 })
  @IsLongitude()
    longitude: number

  @Column({ name: 'descripcion', nullable: false, default: 'N/A' })
  @Transform(({ value }) => (value).toString())
    descripcion: string

  @IsInt()
  @Min(1)
  @Max(31)
  @Column({ name: 'dia_corte', nullable: true })
    diaCorte: number

  @IsInt()
  @Min(1)
  @Max(12)
  @Column({ name: 'mes_corte', nullable: true })
    mesCorte: number

  @IsInt()
  @Min(1900)
  @Max(2999)
  @Column({ name: 'anio_corte', nullable: true })
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
