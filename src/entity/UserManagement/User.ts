import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { UserType } from './UserType'
import { Auth } from './Auth'
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ name: 'last_name', nullable: false })
  lastName: string

  @Column({ nullable: false, unique: true })
  phone: string

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: true })
  image?: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => Auth, auth => auth.user, { nullable: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  auth: Auth

  @ManyToOne(() => UserType, userType => userType.users, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'type_id' })
  tipo: UserType
}
