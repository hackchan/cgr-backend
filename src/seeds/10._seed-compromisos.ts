import { TipoCompromiso } from '../entity/Matriz/Presupuesto/RelacionCompromisos/TipoCompromiso'
import { TipoGastos } from '../entity/Matriz/Presupuesto/RelacionCompromisos/TipoGasto'
import { Vigencia } from '../entity/Matriz/Presupuesto/RelacionCompromisos/Vigencia'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932921272 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Vigencia, [
      {
        id: 1,
        name: 'ACTUAL'
      },
      {
        id: 2,
        name: 'RESERVAS'
      },
      {
        id: 3,
        name: 'CXP'
      }

    ])
    await queryRunner.manager.insert(TipoGastos, [
      {
        id: 1,
        name: 'FUNCIONAMIENTO'
      },
      {
        id: 2,
        name: 'INVERSION SERVICIO A LA DEUDA PUBLICA'
      }

    ])

    await queryRunner.manager.insert(TipoCompromiso, [
      {
        id: 1,
        name: 'CONTRATO'
      },
      {
        id: 2,
        name: 'TRASFERENCIA O GIRO'
      }
    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
