import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Unique } from 'typeorm'
import { IsEmail } from 'class-validator'
import { EntidadControl } from './EntidadControl'
@Entity()
@Unique('email_unique', ['email', 'entidad'])
export class Email {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false })
  @IsEmail()
    email: string

  @Column({ nullable: false })
    register: boolean = false

  @ManyToOne(() => EntidadControl, entidad => entidad.emails, { nullable: false, cascade: true })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl
}
