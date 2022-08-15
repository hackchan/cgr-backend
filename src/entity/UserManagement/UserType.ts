import { Entity, Column } from 'typeorm'

import { Model } from './Model'
import { MinLength, IsString } from 'class-validator'

@Entity('user_type')
export class UserType extends Model {
  @Column({ unique: true, nullable: false })
  @IsString()
  @MinLength(3)
  name: string

  @Column({ type: 'uuid' })
  uuid: string

  // @OneToMany(() => User)
  // users: User[]
}
