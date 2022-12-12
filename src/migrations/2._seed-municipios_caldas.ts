import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933016 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 318,
        name: 'MANIZALES',
        active: true,
        isCapital: true,
        divipola: '17001',
        latitude: 5.08343301,
        longitude: -75.50727881,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 319,
        name: 'AGUADAS',
        active: true,
        isCapital: false,
        divipola: '17013',
        latitude: 5.616204006,
        longitude: -75.4554471,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 320,
        name: 'ANSERMA',
        active: true,
        isCapital: false,
        divipola: '17042',
        latitude: 5.20029922,
        longitude: -75.75289078,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 321,
        name: 'ARANZAZU',
        active: true,
        isCapital: false,
        divipola: '17050',
        latitude: 5.265539969,
        longitude: -75.47392619,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 322,
        name: 'BELALCAZAR',
        active: true,
        isCapital: false,
        divipola: '17088',
        latitude: 4.99467728,
        longitude: -75.81225989,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 323,
        name: 'CHINCHINA',
        active: true,
        isCapital: false,
        divipola: '17174',
        latitude: 4.974340569,
        longitude: -75.65954686,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 324,
        name: 'FILADELFIA',
        active: true,
        isCapital: false,
        divipola: '17272',
        latitude: 5.285743777,
        longitude: -75.58978784,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 325,
        name: 'LA DORADA',
        active: true,
        isCapital: false,
        divipola: '17380',
        latitude: 5.410515691,
        longitude: -74.72114262,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 326,
        name: 'LA MERCED',
        active: true,
        isCapital: false,
        divipola: '17388',
        latitude: 5.393185716,
        longitude: -75.55791071,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 327,
        name: 'MANZANARES',
        active: true,
        isCapital: false,
        divipola: '17433',
        latitude: 5.23295391,
        longitude: -75.15263447,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 328,
        name: 'MARMATO',
        active: true,
        isCapital: false,
        divipola: '17442',
        latitude: 5.492632029,
        longitude: -75.60209955,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 329,
        name: 'MARQUETALIA',
        active: true,
        isCapital: false,
        divipola: '17444',
        latitude: 5.309142491,
        longitude: -75.04117892,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 330,
        name: 'MARULANDA',
        active: true,
        isCapital: false,
        divipola: '17446',
        latitude: 5.235585244,
        longitude: -75.28316648,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 331,
        name: 'NEIRA',
        active: true,
        isCapital: false,
        divipola: '17486',
        latitude: 5.183358589,
        longitude: -75.50692977,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 332,
        name: 'NORCASIA',
        active: true,
        isCapital: false,
        divipola: '17495',
        latitude: 5.638062349,
        longitude: -74.85492707,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 333,
        name: 'PACORA',
        active: true,
        isCapital: false,
        divipola: '17513',
        latitude: 5.500035035,
        longitude: -75.48245057,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 334,
        name: 'PALESTINA',
        active: true,
        isCapital: false,
        divipola: '17524',
        latitude: 5.050342543,
        longitude: -75.66176266,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 335,
        name: 'PENSILVANIA',
        active: true,
        isCapital: false,
        divipola: '17541',
        latitude: 5.407187836,
        longitude: -75.16683996,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 336,
        name: 'RIOSUCIO',
        active: true,
        isCapital: false,
        divipola: '17614',
        latitude: 5.442275418,
        longitude: -75.75220499,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 337,
        name: 'RISARALDA',
        active: true,
        isCapital: false,
        divipola: '17616',
        latitude: 5.097563816,
        longitude: -75.73335166,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 338,
        name: 'SALAMINA',
        active: true,
        isCapital: false,
        divipola: '17653',
        latitude: 5.370332425,
        longitude: -75.40962177,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 339,
        name: 'SAMANA',
        active: true,
        isCapital: false,
        divipola: '17662',
        latitude: 5.519692873,
        longitude: -74.99718577,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 340,
        name: 'SAN JOSE',
        active: true,
        isCapital: false,
        divipola: '17665',
        latitude: 5.083424513,
        longitude: -75.8101789,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 341,
        name: 'SUPIA',
        active: true,
        isCapital: false,
        divipola: '17777',
        latitude: 5.45295802,
        longitude: -75.64035705,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 342,
        name: 'VICTORIA',
        active: true,
        isCapital: false,
        divipola: '17867',
        latitude: 5.447542859,
        longitude: -74.83622502,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 343,
        name: 'VILLAMARIA',
        active: true,
        isCapital: false,
        divipola: '17873',
        latitude: 4.940211591,
        longitude: -75.43544014,
        department: { id: 17 },
        tipo: { id: 1 }
      },

      {
        id: 344,
        name: 'VITERBO',
        active: true,
        isCapital: false,
        divipola: '17877',
        latitude: 5.047822054,
        longitude: -75.879297,
        department: { id: 17 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
