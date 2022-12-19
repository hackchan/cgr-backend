import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Diccionario {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ nullable: false, unique: true })
    columna: string

  @Column({ nullable: false })
    descripcion: string

  @Column({ nullable: false })
    tipo: string

  @Column({ nullable: false })
    ejemplo: string

  @Column({ nullable: false })
    observacion: string
}
