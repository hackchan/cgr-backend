import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    name: string

  @ManyToMany(() => User, user => user.roles)
    users: User[]
}
