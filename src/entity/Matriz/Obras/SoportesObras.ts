import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsUrl } from 'class-validator'
import { MatrizObra } from './MatrizObra'
import { TipoSoporte } from './TipoSoporte'
import { EntidadControl } from '../../Entidad/EntidadControl'
@Entity()
export class SoportesObras {
  @PrimaryColumn({ type: 'varchar', name: 'id_obra' })
  @ManyToOne(() => MatrizObra, { nullable: false })
  @JoinColumn()
    obra: MatrizObra

  @PrimaryColumn()
    entidad_id: number

  @ManyToOne(() => EntidadControl, entidad => entidad.obras, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @Column({ nullable: false })
    name: string

  @IsUrl()
    ruta: string

  @ManyToOne(() => TipoSoporte, tipo => tipo.soportes, { nullable: false })
  @JoinColumn({ name: 'tipo_soporte_id' })
    tipoSoporte: TipoSoporte
}
