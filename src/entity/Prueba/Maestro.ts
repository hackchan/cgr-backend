// import { Column, Entity, ManyToOne, JoinColumn, Unique, PrimaryColumn } from 'typeorm'
// import { Transform } from 'class-transformer'

// import { EntidadControl } from '../Entidad/EntidadControl'

// @Entity('maestro')
// // @Unique('matrizProgramproyect_unique', ['idBpin', 'entidad'])
// // @Index(['id', 'entidad'], { unique: true })
// // @Index((relation: MatrizContratacion) => [relation.idContrato, relation.entidad], { unique: true })
// export class Maestro {
//   @PrimaryColumn({ name: 'id_bpin' })
//     idBpin: string

//   // @Column({ primary: true, generated: false })
//   @PrimaryColumn()
//     entidad_id: number

//   @ManyToOne(() => EntidadControl, (entidad) => entidad.maestros, { nullable: false, cascade: true })
//   @JoinColumn({ name: 'entidad_id' })
//     entidad: EntidadControl

//   @Column({ name: 'nombre_proyecto', nullable: false })
//   @Transform(({ value }) => value.toUpperCase())
//     nombreProyecto: string
// }
