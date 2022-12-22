import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { IsUrl } from 'class-validator'
import { MatrizContratacion } from './MatrizContratacion'
import { TipoSoporte } from '../../Obras/TipoSoporte'
import { EntidadControl } from '../../../Entidad/EntidadControl'
@Entity()
export class SoportesContrato {
  @PrimaryGeneratedColumn()
    id: number

  @ManyToOne(() => MatrizContratacion, { nullable: false })
  @JoinColumn([
    { name: 'id_contrato', referencedColumnName: 'idContrato' },
    { name: 'id_bpin', referencedColumnName: 'id_bpin' },
    { name: 'entidad_id', referencedColumnName: 'entidad_id' }])
    contrato: MatrizContratacion
  // @ManyToOne(() => MatrizContratacion, { nullable: false })
  // @JoinColumn({ name: 'id_contrato' })
  //   idContrato: MatrizContratacion

  @ManyToOne(() => EntidadControl, entidad => entidad.soportes, { nullable: false })
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
