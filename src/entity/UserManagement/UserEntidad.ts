import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { User } from './User'
import { EntidadControl } from '../Entidad/EntidadControl'
@Entity('user_entidad')
export class UserEntidad {
  @PrimaryGeneratedColumn()
    id: number

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date

  @ManyToOne(() => User, (user) => user)
    user: User

  @ManyToOne(() => EntidadControl, (entidad) => entidad)
    entidad: EntidadControl
}
