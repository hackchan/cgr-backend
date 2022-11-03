import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933017 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 345,
        name: 'FLORENCIA',
        active: true,
        isCapital: true,
        divipola: '18001',
        latitude: 1.749138704,
        longitude: -75.55823906,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 346,
        name: 'ALBANIA',
        active: true,
        isCapital: false,
        divipola: '18029',
        latitude: 1.22786549,
        longitude: -75.88232651,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 347,
        name: 'BELEN DE LOS ANDAQUIES',
        active: true,
        isCapital: false,
        divipola: '18094',
        latitude: 1.536174657,
        longitude: -75.90947504,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 348,
        name: 'CARTAGENA DEL CHAIRA',
        active: true,
        isCapital: false,
        divipola: '18150',
        latitude: 0.647693081,
        longitude: -74.27235499,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 349,
        name: 'CURILLO',
        active: true,
        isCapital: false,
        divipola: '18205',
        latitude: 1.115379292,
        longitude: -75.97328452,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 350,
        name: 'EL DONCELLO',
        active: true,
        isCapital: false,
        divipola: '18247',
        latitude: 1.713734697,
        longitude: -75.26878109,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 351,
        name: 'EL PAUJIL',
        active: true,
        isCapital: false,
        divipola: '18256',
        latitude: 1.476630016,
        longitude: -75.20231825,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 352,
        name: 'LA MONTANITA',
        active: true,
        isCapital: false,
        divipola: '18410',
        latitude: 1.302860442,
        longitude: -75.23572732,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 353,
        name: 'MILAN',
        active: true,
        isCapital: false,
        divipola: '18460',
        latitude: 1.146692554,
        longitude: -75.38664764,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 354,
        name: 'MORELIA',
        active: true,
        isCapital: false,
        divipola: '18479',
        latitude: 1.38299611,
        longitude: -75.67381123,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 355,
        name: 'PUERTO RICO',
        active: true,
        isCapital: false,
        divipola: '18592',
        latitude: 2.018940891,
        longitude: -75.07308627,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 356,
        name: 'SAN JOSE DEL FRAGUA',
        active: true,
        isCapital: false,
        divipola: '18610',
        latitude: 1.304702314,
        longitude: -76.11000594,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 357,
        name: 'SAN VICENTE DEL CAGUAN',
        active: true,
        isCapital: false,
        divipola: '18753',
        latitude: 1.308465061,
        longitude: -74.19746971,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 358,
        name: 'SOLANO',
        active: true,
        isCapital: false,
        divipola: '18756',
        latitude: 0.096131862,
        longitude: -72.32036402,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 359,
        name: 'SOLITA',
        active: true,
        isCapital: false,
        divipola: '18785',
        latitude: 0.943939454,
        longitude: -75.64668544,
        department: { id: 18 },
        tipo: { id: 1 }
      },

      {
        id: 360,
        name: 'VALPARAISO',
        active: true,
        isCapital: false,
        divipola: '18860',
        latitude: 1.07534915,
        longitude: -75.73779004,
        department: { id: 18 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
