import { IsDate, IsInt, Min, Max } from 'class-validator'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm'
import { Transform } from 'class-transformer'
import { User } from '../../UserManagement/User'
import { EntidadControl } from '../../Entidad/EntidadControl'
import { Municipio } from '../../Departments/Municipio'
import { EstadoCivil } from './EstadoCivil'
import { DocumentType } from '../ies/DocumentType'
import { DestinoEconomico } from './DestinoEconomico'
@Entity('catastro')
@Unique('catastro_unique', ['codigoContable', 'entidad'])
export class MatrizCatastro {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ name: 'numero_predial', nullable: false, default: 0 })
    matriculaInmobiliaria: string

  @IsInt()
  @Min(1)
  @Column({ name: 'zona_fisica', nullable: false, default: 1 })
    zonaFisica: number

  @IsInt()
  @Min(1)
  @Column({ name: 'zona_economica', nullable: false, default: 1 })
    zonaEconomica: number

  @IsInt()
  @Min(0)
  @Column({ name: 'area_terreno', nullable: false, default: 1 })
    areaTerreno: number

  @IsInt()
  @Min(1)
  @Column({ name: 'habitaciones', nullable: false, default: 1 })
    habitaciones: number

  @IsInt()
  @Min(1)
  @Column({ name: 'banos', nullable: false, default: 1 })
    banos: number

  @IsInt()
  @Min(1)
  @Column({ name: 'locales', nullable: false, default: 1 })
    locales: number

  @IsInt()
  @Min(1)
  @Column({ name: 'pisos', nullable: false, default: 1 })
    pisos: number

  @IsInt()
  @Min(1)
  @Column({ name: 'tipificacion', nullable: false, default: 1 })
    tipificacion: number

  @IsInt()
  @Min(1)
  @Column({ name: 'uso', nullable: false, default: 1 })
    uso: number

  @IsInt()
  @Min(1)
  @Column({ name: 'puntaje', nullable: false, default: 1 })
    puntaje: number

  @IsInt()
  @Min(1)
  @Column({ name: 'puntaje', nullable: false, default: 1 })
    area_construida: number

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
