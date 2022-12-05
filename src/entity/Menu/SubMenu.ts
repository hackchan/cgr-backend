import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { Menu } from './Menu'
import { Items } from './Items'
@Entity()
export class SubMenu {
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

  @Column({ nullable: false, default: false })
    isItem: boolean

  @Column({ nullable: false, default: false })
    isSeparador: boolean

  @Column({ nullable: true })
  @IsString()
    path: string

  @Column('simple-array', { nullable: true })
    roles: string[]

  @ManyToOne(() => Menu, menus => menus.subMenus, { nullable: true, cascade: true })
  @JoinColumn({ name: 'menu_id' })
    menu: Menu

  @OneToMany(() => Items, submenu => submenu.subMenu)
    items: Items[]
}
