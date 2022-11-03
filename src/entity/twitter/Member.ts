import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { Profile } from '../twitter/Profile'
import { Tweet } from '../twitter/Tweet'
@Entity()
export class Member {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    firstName: string

  @Column()
    lastName: string

  @OneToOne(() => Profile, profile => profile.member, {
    cascade: true,
    nullable: false

  })

  @JoinColumn({ name: 'profile_id' })
    profile: Profile

  @OneToMany(() => Tweet, tweets => tweets.member, { cascade: true })
    tweets: Tweet[]
}
