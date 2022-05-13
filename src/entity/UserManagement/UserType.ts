import { Entity, Column, OneToMany } from 'typeorm'
import { User } from './User'
import { Model } from './Model'
import { MinLength, IsString } from 'class-validator'

@Entity()
export class UserType extends Model {
  @Column({ unique: true, nullable: false })
  @IsString()
  @MinLength(3)
  name: string

  @Column({ type: 'uuid' })
  uuid: string

  @OneToMany(() => User, user => user.tipo)
  users: User[]
}
