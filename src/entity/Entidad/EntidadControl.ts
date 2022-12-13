import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, ManyToMany, OneToOne, JoinTable } from 'typeorm'
import { Categoria } from './Categoria'
import { Email } from './Email'
import { Subsector } from './Subsector'
import { Telefono } from './Telefono'
import { Municipio } from '../Departments/Municipio'
import { MatrizObra } from '../Matriz/Obras/MatrizObra'
import { MatrizProyectos } from '../Matriz/Presupuesto/Proyectos/MatrizProyectos'
import { MatrizIes } from '../Matriz/ies/MatrizIes'
import { MatrizFovis } from '../Matriz/Fovis/MatrizFovis'
import { MatrizCatastro } from '../Matriz/Catastro/MatrizCatastro'
import { MatrizContratacion } from '../Matriz/Presupuesto/Contratacion/MatrizContratacion'
import { MatrizRelacionPagos } from '../Matriz/Presupuesto/RelacionPagos/MatrizRelacionPagos'
import { SoportesContrato } from '../Matriz/Presupuesto/Contratacion/SoporteContrato'
import { MatrizRelacionObligaciones } from '../Matriz/Presupuesto/RelacionObligaciones/MatrizRelacionObligaciones'
import { MatrizCDPs } from '../Matriz/Presupuesto/RelacionCDPs/MatrizRelacionCDPs'
import { MatrizRegalias } from '../Matriz/Regalias/MatrizRegalias'
import { MatrizAxiliarSaldos } from '../Matriz/ContableFinanciera/MatrizAuxiliarSaldos'
import { MatrizLibroMayor } from '../Matriz/ContableFinanciera/MatrizLibroMayorBalance'
import { MatrizSituacionFinanciera } from '../Matriz/ContableFinanciera/SituacionFinanciera'
import { Maestro } from '../Prueba/Maestro'

import { User } from '../UserManagement/User'
import { Reportes } from '../Reportes/Reportes'
import { RepLegal } from './RepLegal'
@Entity()
export class EntidadControl {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    nit: string

  @Column({ nullable: false })
    name: string

  @Column({ nullable: true })
    doctec: boolean = false

  @Column({ nullable: true })
    cgn: string

  @Column({ nullable: true, default: false })
    active: boolean

  @ManyToOne(() => Categoria, (categoria) => categoria.entidades, { nullable: true })
  @JoinColumn({ name: 'categoria_id' })
    categoria: Categoria

  @ManyToOne(() => Subsector, (subsector) => subsector.entidades, { nullable: false })
  @JoinColumn({ name: 'subsector_id' })
    subsector: Subsector

  @OneToMany(() => Email, email => email.entidad)
    emails: Email[]

  @OneToMany(() => Telefono, telefono => telefono.entidad)
    telefonos: Telefono[]

  @OneToOne(() => RepLegal, rep => rep.entidad)
    repLegal: RepLegal

  @ManyToOne(() => Municipio, { nullable: false, cascade: true })
  @JoinColumn({ name: 'municipio_id' })
    municipio: Municipio

  @OneToMany(() => MatrizObra, obra => obra.entidad)
    obras: MatrizObra[]

  @OneToMany(() => MatrizIes, proyecto => proyecto.entidad)
    matriculas: MatrizIes[]

  @OneToMany(() => MatrizFovis, proyecto => proyecto.entidad)
    postulaciones: MatrizFovis[]

  @ManyToMany(() => User, user => user.entidades)
    users: User[]

  @ManyToMany(() => Reportes, reporte => reporte.entidad, { cascade: true, nullable: true })
  @JoinTable()
    reportes: Reportes[]

  @OneToMany(() => MatrizCatastro, proyecto => proyecto.entidad)
    catastros: MatrizCatastro[]

  @OneToMany(() => MatrizProyectos, proyecto => proyecto.entidad)
    proyectos: MatrizProyectos[]

  @OneToMany(() => SoportesContrato, soporte => soporte.entidad)
    soportes: SoportesContrato[]

  @OneToMany(() => MatrizRelacionPagos, proyecto => proyecto.entidad)
    pagos: MatrizRelacionPagos[]

  // @OneToMany(() => MatrizRelacionCompromisos, proyecto => proyecto.entidad)
  //   compromisos: MatrizRelacionCompromisos[]

  @OneToMany(() => MatrizRelacionObligaciones, proyecto => proyecto.entidad)
    obligaciones: MatrizRelacionObligaciones[]

  @OneToMany(() => MatrizCDPs, proyecto => proyecto.entidad)
    cdps: MatrizCDPs[]

  @OneToMany(() => MatrizRegalias, proyecto => proyecto.entidad)
    regalias: MatrizRegalias[]

  @OneToMany(() => MatrizAxiliarSaldos, proyecto => proyecto.entidad)
    saldos: MatrizAxiliarSaldos[]

  @OneToMany(() => MatrizLibroMayor, proyecto => proyecto.entidad)
    balances: MatrizLibroMayor[]

  @OneToMany(() => MatrizSituacionFinanciera, proyecto => proyecto.entidad)
    situacion: MatrizSituacionFinanciera[]

  @OneToMany(() => Maestro, proyecto => proyecto.entidad)
    maestros: Maestro[]
}
