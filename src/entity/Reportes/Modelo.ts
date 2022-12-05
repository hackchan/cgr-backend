import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { CategoriaReportes } from './CategoriaReporte'
@Entity()
export class Modelo {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @OneToMany(() => CategoriaReportes, catego => catego.modelo)
    categorias: CategoriaReportes[]
}
