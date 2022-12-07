import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933052 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1048,
        name: 'ALCALDIA DE ARAUCA',
        nit: '800102504',
        doctec: true,
        cgn: '210181001',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 1048 }
      },

      {
        id: 1049,
        name: 'ALCALDIA DE ARAUQUITA',
        nit: '892099494',
        doctec: true,
        cgn: '216581065',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1049 }
      },

      {
        id: 1050,
        name: 'ALCALDIA DE CRAVO NORTE',
        nit: '800014434',
        doctec: true,
        cgn: '212081220',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1050 }
      },

      {
        id: 1051,
        name: 'ALCALDIA DE FORTUL',
        nit: '800136069',
        doctec: true,
        cgn: '210081300',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1051 }
      },

      {
        id: 1052,
        name: 'ALCALDIA DE PUERTO RONDON',
        nit: '800102798',
        doctec: true,
        cgn: '219181591',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1052 }
      },

      {
        id: 1053,
        name: 'ALCALDIA DE SARAVENA',
        nit: '800102799',
        doctec: true,
        cgn: '213681736',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1053 }
      },

      {
        id: 1054,
        name: 'ALCALDIA DE TAME',
        nit: '800102801',
        doctec: true,
        cgn: '219481794',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1054 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
