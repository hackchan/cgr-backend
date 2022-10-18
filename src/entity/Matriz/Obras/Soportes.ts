import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsUrl } from 'class-validator'
import { MatrizObra } from './MatrizObra'

@Entity()
export class Soportes {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @IsUrl()
  ruta: string

  @ManyToOne(() => SectorObra, (sector) => sector.obras, { nullable: false })
  @JoinColumn({ name: 'sector' })
    tipoSoporte: SectorObra

}
