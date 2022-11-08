import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsUrl } from 'class-validator'
import { MatrizObra } from './MatrizObra'
import { TipoSoporte } from './TipoSoporte'
@Entity()
export class SoportesObras {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false })
    name: string

  @IsUrl()
    ruta: string

  @ManyToOne(() => MatrizObra, obra => obra.soportes, { nullable: false })
  @JoinColumn({ name: 'obra_id' })
    obra: MatrizObra

  @ManyToOne(() => TipoSoporte, tipo => tipo.soportes, { nullable: false })
  @JoinColumn({ name: 'tipo_soporte_id' })
    tipoSoporte: TipoSoporte
}
