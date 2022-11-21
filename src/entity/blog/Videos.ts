import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'
import { IsUrl } from 'class-validator'
import { User } from '../UserManagement/User'
@Entity()
export class Videos {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    title: string

  @Column({ name: 'image', nullable: false })
  @IsUrl()
    image: string

  @Column({ name: 'video', nullable: false })
  @IsUrl()
    video: string

  @ManyToMany(() => User, user => user.videos)
    users: User[]
}
