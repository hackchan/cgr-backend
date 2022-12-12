import { ClaseContrato } from '../entity/Matriz/Presupuesto/Contratacion/ClaseContrato'
import { EstadoContrato } from '../entity/Matriz/Presupuesto/Contratacion/EstadoContrato'
import { FormaContrato } from '../entity/Matriz/Presupuesto/Contratacion/FormaContrato'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933439 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(ClaseContrato, [
      {
        id: 1,
        name: 'INTERVENTORIA'
      },
      {
        id: 2,
        name: 'OBRA'
      },
      {
        id: 3,
        name: 'SUMINISTRO'
      }

    ])
    await queryRunner.manager.insert(EstadoContrato, [
      {
        id: 1,
        name: 'EN EJECUCION'
      },
      {
        id: 2,
        name: 'SUSPENDIDO'
      },
      {
        id: 3,
        name: 'REASIGNACION'
      },
      {
        id: 4,
        name: 'FINALIZADO'
      },
      {
        id: 5,
        name: 'LIQUIDADO'
      }

    ])

    await queryRunner.manager.insert(FormaContrato, [
      {
        id: 1,
        name: 'DIRECTA'
      },
      {
        id: 2,
        name: 'CONCURSO DE MERITO'
      },
      {
        id: 3,
        name: 'SUBASTA INVERSA'
      },
      {
        id: 4,
        name: 'SELECCION ABREVIADA'
      },
      {
        id: 5,
        name: 'LICITACION PUBLICA'
      },
      {
        id: 6,
        name: 'MINIMA CUANTIA'
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
