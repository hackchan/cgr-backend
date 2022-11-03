import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import { Member } from './Member'
import { HashTag } from './HashTag'
@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    content: string

  @ManyToOne(() => Member, member => member.tweets, { nullable: false })
  @JoinColumn({ name: 'member_id' })
    member: Member

  @ManyToMany(() => HashTag, hashtag => hashtag.tweets, { cascade: true })
  @JoinTable()
    hashtags: HashTag[]
}
