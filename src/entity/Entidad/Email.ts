import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IsEmail } from 'class-validator'
import { EntidadControl } from './EntidadControl'
@Entity()
export class Email {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
  @IsEmail()
    email: string

  @Column({ nullable: false })
    register: boolean = false

  @ManyToOne(() => EntidadControl, entidad => entidad.emails, { nullable: false })
  @JoinColumn({ name: 'entidad_id' })
    entidad: EntidadControl
}
