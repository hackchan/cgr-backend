import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { User } from './User'
@Entity()
export class UserType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true, nullable: false })
  name: string

  @OneToMany(() => User, user => user.tipo)
  users: User[]
}
