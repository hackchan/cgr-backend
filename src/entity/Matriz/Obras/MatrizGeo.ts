import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsLatitude, IsLongitude, IsInt, Min, Max } from 'class-validator'
import { Transform } from 'class-transformer'
import { Vereda } from '../../Departments/Vereda'
import { User } from '../../UserManagement/User'
import { MatrizObra } from './MatrizObra'
@Entity()
export class MatrizGeo {
  @PrimaryGeneratedColumn()
    id: number

  @ManyToOne(() => MatrizObra, matObra => matObra.hitos, { nullable: false, cascade: true })
  @JoinColumn({ name: 'obra_id' })
    obra: MatrizObra

  @IsInt()
  @Min(0)
  @Max(1000)
  @Column({ name: 'nro_vertice', nullable: false, default: 0 })
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
