import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'
import { Tweet } from './Tweet'
@Entity()
export class HashTag {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    tag: string

  @ManyToMany(() => Tweet, tweet => tweet.hashtags, { nullable: false })
    tweets: Tweet[]
}
