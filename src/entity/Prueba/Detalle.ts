import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm'
import { Transform } from 'class-transformer'
import { Maestro } from './Maestro'
@Entity('detalle')

export class Detalle {
  @PrimaryColumn({ name: 'id_detalle' })
    idDetalle: string

  @ManyToOne(() => Maestro, { nullable: false, cascade: true })
  @JoinColumn([{ name: 'id_bpin', referencedColumnName: 'idBpin' }, { name: 'entidad_id', referencedColumnName: 'entidad_id' }])
    maestro: Maestro

  @Column({ name: 'nombre_proyecto', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreDetalle: string
}
