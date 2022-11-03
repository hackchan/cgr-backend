import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MinLength, IsString } from 'class-validator'
import { User } from './User'
@Entity('user_type')
export class UserType {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
  @MinLength(3)
    name: string

  @OneToMany(() => User, user => user.tipo)
    users: User[]

  // @OneToMany(() => User)
  // users: User[]
}
