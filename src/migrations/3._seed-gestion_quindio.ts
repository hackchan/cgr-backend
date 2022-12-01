import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933071 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 820,
        name: 'ALCALDIA DE ARMENIA',
        nit: '890000464',
        doctec: true,
        cgn: '210163001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 820 }
      },

      {
        id: 821,
        name: 'ALCALDIA DE BUENAVISTA',
        nit: '890001879',
        doctec: true,
        cgn: '211163111',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 821 }
      },

      {
        id: 822,
        name: 'ALCALDIA DE CALARCA',
        nit: '890000441',
        doctec: true,
        cgn: '213063130',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 822 }
      },

      {
        id: 823,
        name: 'ALCALDIA DE CIRCASIA',
        nit: '890001044',
        doctec: true,
        cgn: '219063190',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 823 }
      },

      {
        id: 824,
        name: 'ALCALDIA DE CORDOBA',
        nit: '890001061',
        doctec: true,
        cgn: '211263212',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 824 }
      },

      {
        id: 825,
        name: 'ALCALDIA DE FILANDIA',
        nit: '890001339',
        doctec: true,
        cgn: '217263272',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 825 }
      },

      {
        id: 826,
        name: 'ALCALDIA DE GENOVA',
        nit: '890000864',
        doctec: true,
        cgn: '210263302',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 826 }
      },

      {
        id: 827,
        name: 'ALCALDIA DE LA TEBAIDA',
        nit: '890000564',
        doctec: true,
        cgn: '210163401',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 827 }
      },

      {
        id: 828,
        name: 'ALCALDIA DE MONTENEGRO',
        nit: '890000858',
        doctec: true,
        cgn: '217063470',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 828 }
      },

      {
        id: 829,
        name: 'ALCALDIA DE PIJAO',
        nit: '890001181',
        doctec: true,
        cgn: '214863548',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 829 }
      },

      {
        id: 830,
        name: 'ALCALDIA DE QUIMBAYA',
        nit: '890000613',
        doctec: true,
        cgn: '219463594',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 830 }
      },

      {
        id: 831,
        name: 'ALCALDIA DE SALENTO',
        nit: '890001127',
        doctec: true,
        cgn: '219063690',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 831 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
