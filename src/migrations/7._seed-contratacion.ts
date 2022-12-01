import { ClaseContrato } from '../entity/Matriz/Presupuesto/Contratacion/ClaseContrato'
import { EstadoContrato } from '../entity/Matriz/Presupuesto/Contratacion/EstadoContrato'
import { FormaContrato } from '../entity/Matriz/Presupuesto/Contratacion/FormaContrato'
import { SectorProyecto } from '../entity/Matriz/Presupuesto/Proyectos/SectorProyecto'
import { TipoCompromiso } from '../entity/Matriz/Presupuesto/RelacionCompromisos/TipoCompromiso'
import { TipoGastos } from '../entity/Matriz/Presupuesto/RelacionCompromisos/TipoGasto'
import { Vigencia } from '../entity/Matriz/Presupuesto/RelacionCompromisos/Vigencia'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933211 implements MigrationInterface {
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
        name: 'SUMINISTROS'
      }

    ])
    await queryRunner.manager.insert(EstadoContrato, [
      {
        id: 1,
        name: 'EN EJECUCION'
      }

    ])

    await queryRunner.manager.insert(FormaContrato, [
      {
        id: 1,
        name: 'DIRECTA'
      },
      {
        id: 2,
        name: 'SUBASTA'
      },
      {
        id: 3,
        name: 'INVERSA'
      }

    ])
    await queryRunner.manager.insert(SectorProyecto, [
      {
        id: 1,
        name: 'SALUD'
      }

    ])
    await queryRunner.manager.insert(TipoCompromiso, [
      {
        id: 1,
        name: 'CONTRATO'
      },
      {
        id: 2,
        name: 'TRANSFERENCIA'
      },
      {
        id: 3,
        name: 'GIRO'
      }

    ])
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
        name: 'INVERSION'
      },
      {
        id: 3,
        name: 'SERVICIO A LA DEUDA PUBLICA'
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
