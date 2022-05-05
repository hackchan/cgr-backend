import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

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
}
