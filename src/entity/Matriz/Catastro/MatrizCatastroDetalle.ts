// import { IsInt, Min } from 'class-validator'
// import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
// import { User } from '../../UserManagement/User'
// import { ZonaEconomica } from './ZonaEconomica'
// import { ZonaFisica } from './ZonaFisica'
// import { Uso } from './Uso'
// import { Tipificacion } from './Tipificacion'
// import { MatrizCatastro } from './MatrizCatastro'
// import { EntidadControl } from '../../Entidad/EntidadControl'
// @Entity('catastro_detalle')
// @Unique('catastro_detalle_unique', ['catastro', 'entidad'])
// export class MatrizCatastroDetalle {
//   @PrimaryGeneratedColumn()
//     id: number

//   @ManyToOne(() => MatrizCatastro, proyect => proyect.catastrosDetalle, { nullable: false })
//   @JoinColumn({ name: 'numero_predial', referencedColumnName: 'noPredial' })
//     catastro: MatrizCatastro

//   @ManyToOne(() => ZonaEconomica, zonaeco => zonaeco.catastrosDetalle, { nullable: false, cascade: true })
//   @JoinColumn({ name: 'zona_economica' })
//     zonaEconomica: ZonaEconomica

//   @ManyToOne(() => ZonaFisica, zonafis => zonafis.catastrosDetalle, { nullable: false, cascade: true })
//   @JoinColumn({ name: 'zona_fisica' })
//     zonaFisica: ZonaFisica

//   @Column({
//     name: 'area_terreno',
//     type: 'decimal',
//     precision: 19,
//     scale: 2,
//     default: 0,
//     nullable: false
//   })
//     areaTerreno: number

//   @IsInt()
//   @Min(0)
//   @Column({ name: 'habitaciones', nullable: false, default: 0 })
//     habitaciones: number

//   @IsInt()
//   @Min(0)
//   @Column({ name: 'banos', nullable: false, default: 0 })
//     banos: number

//   @IsInt()
//   @Min(0)
//   @Column({ name: 'locales', nullable: false, default: 0 })
//     locales: number

//   @IsInt()
//   @Min(0)
//   @Column({ name: 'pisos', nullable: false, default: 0 })
//     pisos: number

//   @ManyToOne(() => Tipificacion, zonaeco => zonaeco.catastrosDetalle, { nullable: false, cascade: true })
//   @JoinColumn({ name: 'tipificacion' })
//     tipificacion: Tipificacion

//   @ManyToOne(() => Uso, uso => uso.catastrosDetalle, { nullable: false, cascade: true })
//   @JoinColumn({ name: 'uso' })
//     uso: Uso

//   @IsInt()
//   @Min(0)
//   @Column({ name: 'puntaje', nullable: false, default: 0 })
//     puntaje: number

//   @ManyToOne(() => EntidadControl, entidad => entidad.catastrosDetalle, { nullable: false })
//   @JoinColumn({ name: 'entidad_id' })
//     entidad: EntidadControl

//   @Column({
//     name: 'area_construida',
//     type: 'decimal',
//     precision: 19,
//     scale: 2,
//     default: 0,
//     nullable: false
//   })
//     areaConstruida: number

//   @Column({ nullable: true })
//     alerta: boolean = false

//   @ManyToOne(() => User, { nullable: true })
//   @JoinColumn({ name: 'user_operation' })
//     userOper: User

//   @CreateDateColumn()
//     createdAt: Date

//   @UpdateDateColumn()
//     updatedAt: Date
// }
