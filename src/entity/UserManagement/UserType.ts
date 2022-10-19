import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { MinLength, IsString } from 'class-validator'

@Entity('user_type')
export class UserType {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
  @MinLength(3)
    name: string

  // @OneToMany(() => User)
  // users: User[]
}
