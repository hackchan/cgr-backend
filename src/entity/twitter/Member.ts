import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Profile } from '../twitter/Profile'
@Entity()
export class Member {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    firstName: string

  @Column()
    lastName: string

  @OneToOne(() => Profile, profile => profile.member, {
    cascade: ['remove', 'insert'],
    nullable: false
    // eager: true,
    // onDelete: 'CASCADE'

  })
  @JoinColumn({ name: 'profile_id' })
    profile: Profile
}
