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
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
