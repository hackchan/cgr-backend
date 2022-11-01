import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { Member } from './Member'
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    followers: number

  @Column()
    following: number

  @OneToOne(() => Member, member => member.profile, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete'
  })
    member: Member
}
