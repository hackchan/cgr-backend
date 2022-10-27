import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933057 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 345,
        name: 'ALCALDIA DE FLORENCIA',
        nit: '800095728',
        doctec: true,
        cgn: '210118001',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 345 }
      },

      {
        id: 346,
        name: 'ALCALDIA DE ALBANIA',
        nit: '891190431',
        doctec: true,
        cgn: '212918029',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 346 }
      },

      {
        id: 347,
        name: 'ALCALDIA DE BELEN DE LOS ANDAQUIES',
        nit: '800095734',
        doctec: true,
        cgn: '219418094',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 347 }
      },

      {
        id: 348,
        name: 'ALCALDIA DE CARTAGENA DEL CHAIRA',
        nit: '800095754',
        doctec: true,
        cgn: '215018150',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 348 }
      },

      {
        id: 349,
        name: 'ALCALDIA DE CURILLO',
        nit: '800095757',
        doctec: true,
        cgn: '210518205',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 349 }
      },

      {
        id: 350,
        name: 'ALCALDIA DE EL DONCELLO',
        nit: '800095760',
        doctec: true,
        cgn: '214718247',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 350 }
      },

      {
        id: 351,
        name: 'ALCALDIA DE EL PAUJIL',
        nit: '800095763',
        doctec: true,
        cgn: '215618256',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 351 }
      },

      {
        id: 352,
        name: 'ALCALDIA DE LA MONTANITA',
        nit: '800095770',
        doctec: true,
        cgn: '211018410',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 352 }
      },

      {
        id: 353,
        name: 'ALCALDIA DE MILAN',
        nit: '800067452',
        doctec: true,
        cgn: '216018460',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 353 }
      },

      {
        id: 354,
        name: 'ALCALDIA DE MORELIA',
        nit: '800095773',
        doctec: true,
        cgn: '217918479',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 354 }
      },

      {
        id: 355,
        name: 'ALCALDIA DE PUERTO RICO',
        nit: '800095775',
        doctec: true,
        cgn: '219218592',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 355 }
      },

      {
        id: 356,
        name: 'ALCALDIA DE SAN JOSE DEL FRAGUA',
        nit: '800095782',
        doctec: true,
        cgn: '211018610',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 356 }
      },

      {
        id: 357,
        name: 'ALCALDIA DE SAN VICENTE DEL CAGUAN',
        nit: '800095785',
        doctec: true,
        cgn: '215318753',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 357 }
      },

      {
        id: 358,
        name: 'ALCALDIA DE SOLANO',
        nit: '800095786',
        doctec: true,
        cgn: '215618756',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 358 }
      },

      {
        id: 359,
        name: 'ALCALDIA DE SOLITA',
        nit: '800095788',
        doctec: true,
        cgn: '218518785',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 359 }
      },

      {
        id: 360,
        name: 'ALCALDIA DE VALPARAISO',
        nit: '800050407',
        doctec: true,
        cgn: '216018860',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 360 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
