import { Entity, Column, OneToOne, BeforeInsert } from 'typeorm'
import { User } from './User'
import { Model } from './Model'
import bcrypt from 'bcrypt'
@Entity('auth')
export class Auth extends Model {
  @Column({ unique: true, nullable: false })
    username: string

  @Column({ nullable: false })
    password: string

  @Column({ nullable: true })
    apikey: string

  @Column('simple-array', { default: '', nullable: false })
    role: string[]

  @Column({ nullable: true, name: 'recovery_token' })
    recoveryToken: string

  @OneToOne(() => User, user => user.auth, { onDelete: 'CASCADE' })
    user: User

  @BeforeInsert()
  async hashPassword (): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10)
  }

  toJSON (): void {
    return { ...this, password: undefined, recoveryToken: undefined }
  }
}
