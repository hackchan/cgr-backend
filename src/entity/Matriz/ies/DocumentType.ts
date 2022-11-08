import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MinLength, IsString } from 'class-validator'
import { MatrizIes } from './MatrizIes'
@Entity('document_type')
export class DocumentType {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ unique: true, nullable: false })
  @IsString()
  @MinLength(3)
    name: string

  @OneToMany(() => MatrizIes, mobra => mobra.tipoDoc)
    matriculas: MatrizIes[]
}
