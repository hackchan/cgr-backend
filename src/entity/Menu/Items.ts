import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsString } from 'class-validator'
import { SubMenu } from './SubMenu'
@Entity()
export class Items {
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
    subitems: boolean

  @Column({ nullable: false, default: false })
    isSeparador: boolean

  @Column({ nullable: true })
  @IsString()
    path: string

  @Column('simple-array', { nullable: true })
    roles: string[]

  @ManyToOne(() => SubMenu, submenu => submenu.items, { nullable: true, cascade: true })
  @JoinColumn({ name: 'submenu_id' })
    subMenu: SubMenu
}
