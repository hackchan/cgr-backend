import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { User } from './User'
@Entity()
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true, nullable: false })
  username: string

  @Column({ nullable: false })
  password: string

  @Column('simple-array', { default: '', nullable: false })
  role: string[]

  @OneToOne(() => User, user => user.auth, { cascade: true, nullable: false, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User
}
