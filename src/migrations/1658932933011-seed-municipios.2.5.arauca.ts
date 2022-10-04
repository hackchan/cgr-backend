
import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933049 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [

      {
        id: 1048,
        name: 'ARAUCA',
        active: true,
        isCapital: true,
        divipola: '81001',
        latitude: 6.796280825,
        longitude: -70.50921153,
        department: { id: 81 },
        tipo: { id: 1 }
      },

      {
        id: 1049,
        name: 'ARAUQUITA',
        active: true,
        isCapital: false,
        divipola: '81065',
        latitude: 6.799338394,
        longitude: -71.29827429,
        department: { id: 81 },
        tipo: { id: 1 }
      },

      {
        id: 1050,
        name: 'CRAVO NORTE',
        active: true,
        isCapital: false,
        divipola: '81220',
        latitude: 6.39654349,
        longitude: -70.07381197,
        department: { id: 81 },
        tipo: { id: 1 }
      },

      {
        id: 1051,
        name: 'FORTUL',
        active: true,
        isCapital: false,
        divipola: '81300',
        latitude: 6.750907234,
        longitude: -71.79124241,
        department: { id: 81 },
        tipo: { id: 1 }
      },

      {
        id: 1052,
        name: 'PUERTO RONDON',
        active: true,
        isCapital: false,
        divipola: '81591',
        latitude: 6.411761829,
        longitude: -70.96678964,
        department: { id: 81 },
        tipo: { id: 1 }
      },

      {
        id: 1053,
        name: 'SARAVENA',
        active: true,
        isCapital: false,
        divipola: '81736',
        latitude: 6.906941714,
        longitude: -71.85070757,
        department: { id: 81 },
        tipo: { id: 1 }
      },

      {
        id: 1054,
        name: 'TAME',
        active: true,
        isCapital: false,
        divipola: '81794',
        latitude: 6.390650479,
        longitude: -71.79178647,
        department: { id: 81 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
