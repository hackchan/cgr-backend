import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsUrl } from 'class-validator'
import { MatrizContratacion } from './MatrizContratacion'
import { TipoSoporte } from '../../Obras/TipoSoporte'
import { EntidadControl } from '../../../Entidad/EntidadControl'
@Entity()
export class SoportesContrato {
  @PrimaryGeneratedColumn()
    id: number

  @PrimaryColumn({ type: 'varchar', name: 'id_contrato' })
  @ManyToOne(() => MatrizContratacion, { nullable: false })
  @JoinColumn()
    contrato: MatrizContratacion

  @PrimaryColumn()
    entidad_id: number

  @ManyToOne(() => EntidadControl, entidad => entidad.obras, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl

  @Column({ nullable: false })
    name: string

  @IsUrl()
    ruta: string

  @ManyToOne(() => TipoSoporte, tipo => tipo.soportesContratos, { nullable: false })
  @JoinColumn({ name: 'tipo_soporte_id' })
    tipoSoporte: TipoSoporte
}
