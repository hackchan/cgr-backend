import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { SubMenu } from './SubMenu'
@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
    name: string

  @Column({ nullable: true })
  @IsString()
    icono: string

  @Column({ nullable: false, default: false })
    active: boolean

  @Column('simple-array', { nullable: true })
    roles: string[]

  @OneToMany(() => SubMenu, submenu => submenu.menu)
    subMenus: SubMenu[]
}
