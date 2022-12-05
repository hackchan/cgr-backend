import { SectorProyecto } from '../entity/Matriz/Presupuesto/Proyectos/SectorProyecto'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932921220 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(SectorProyecto, [
      {
        id: 1,
        name: 'SALUD'
      },
      {
        id: 2,
        name: 'JUSTICIA'
      },
      {
        id: 3,
        name: 'INFRAESTRUCTURA'
      },
      {
        id: 4,
        name: 'EDUCACION, CIENCIA Y TECNOLOGIA'
      },
      {
        id: 5,
        name: 'COMERCIO Y DESARROLLO REGIONAl'
      },
      {
        id: 6,
        name: 'AGUA POTABLE Y SANIAMIENTO BASICO'
      },
      {
        id: 7,
        name: 'MITIGACION DEL RIESGO'
      },
      {
        id: 8,
        name: 'TRANSPORTE'
      },
      {
        id: 9,
        name: 'VIVIENDA'
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
