import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm'
import { Transform } from 'class-transformer'
import { Detalle } from './Detalle'
@Entity('subdetalle')

export class SubDetalle {
  @PrimaryColumn({ name: 'id_subdetalle' })
    idSubdetalle: string

  @ManyToOne(() => Detalle, { nullable: false, cascade: true })
  @JoinColumn()
    detalle: Detalle

  @Column({ name: 'nombre_subdetalle', nullable: false })
  @Transform(({ value }) => value.toUpperCase())
    nombreSubdetalle: string
}
