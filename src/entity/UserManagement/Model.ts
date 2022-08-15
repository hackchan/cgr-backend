import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BeforeInsert } from 'typeorm'
import { v4 as uuid } from 'uuid'

export abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'uuid' })
  uuid: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @BeforeInsert()
  createUUID (): void {
    this.uuid = uuid()
  }

  // toJSON (): void {
  //   return { ...this, id: undefined }
  // }
}
