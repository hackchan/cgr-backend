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

  @OneToOne(() => Profile, { cascade: true })
  @JoinColumn()
    Profile: Profile
}
