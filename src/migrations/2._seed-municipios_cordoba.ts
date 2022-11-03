import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933022 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 428,
        name: 'MONTERIA',
        active: true,
        isCapital: true,
        divipola: '23001',
        latitude: 8.584698016,
        longitude: -75.95055079,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 429,
        name: 'AYAPEL',
        active: true,
        isCapital: false,
        divipola: '23068',
        latitude: 8.265768688,
        longitude: -75.04868436,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 430,
        name: 'BUENAVISTA',
        active: true,
        isCapital: false,
        divipola: '23079',
        latitude: 8.191397953,
        longitude: -75.43382532,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 431,
        name: 'CANALETE',
        active: true,
        isCapital: false,
        divipola: '23090',
        latitude: 8.7240958,
        longitude: -76.23779081,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 432,
        name: 'CERETE',
        active: true,
        isCapital: false,
        divipola: '23162',
        latitude: 8.895667051,
        longitude: -75.87842391,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 433,
        name: 'CHIMA',
        active: true,
        isCapital: false,
        divipola: '23168',
        latitude: 9.11024941,
        longitude: -75.65237351,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 434,
        name: 'CHINU',
        active: true,
        isCapital: false,
        divipola: '23182',
        latitude: 9.053287104,
        longitude: -75.37387363,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 435,
        name: 'CIENAGA DE ORO',
        active: true,
        isCapital: false,
        divipola: '23189',
        latitude: 8.841811894,
        longitude: -75.60779829,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 436,
        name: 'COTORRA',
        active: true,
        isCapital: false,
        divipola: '23300',
        latitude: 9.071460219,
        longitude: -75.75459276,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 437,
        name: 'LA APARTADA',
        active: true,
        isCapital: false,
        divipola: '23350',
        latitude: 8.052218422,
        longitude: -75.28816022,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 438,
        name: 'LORICA',
        active: true,
        isCapital: false,
        divipola: '23417',
        latitude: 9.165034998,
        longitude: -75.90978124,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 439,
        name: 'LOS CORDOBAS',
        active: true,
        isCapital: false,
        divipola: '23419',
        latitude: 8.823307063,
        longitude: -76.3430552,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 440,
        name: 'MOMIL',
        active: true,
        isCapital: false,
        divipola: '23464',
        latitude: 9.265461621,
        longitude: -75.65090876,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 441,
        name: 'MONTELIBANO',
        active: true,
        isCapital: false,
        divipola: '23466',
        latitude: 7.866432635,
        longitude: -75.87533926,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 442,
        name: 'MONITOS',
        active: true,
        isCapital: false,
        divipola: '23500',
        latitude: 9.190515343,
        longitude: -76.11931709,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 443,
        name: 'PLANETA RICA',
        active: true,
        isCapital: false,
        divipola: '23555',
        latitude: 8.181108488,
        longitude: -75.68923803,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 444,
        name: 'PUEBLO NUEVO',
        active: true,
        isCapital: false,
        divipola: '23570',
        latitude: 8.481339568,
        longitude: -75.40516154,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 445,
        name: 'PUERTO ESCONDIDO',
        active: true,
        isCapital: false,
        divipola: '23574',
        latitude: 8.988667731,
        longitude: -76.19405912,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 446,
        name: 'PUERTO LIBERTADOR',
        active: true,
        isCapital: false,
        divipola: '23580',
        latitude: 7.711515736,
        longitude: -75.77123224,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 447,
        name: 'PURISIMA DE LA CONCEPCION',
        active: true,
        isCapital: false,
        divipola: '23586',
        latitude: 9.282386127,
        longitude: -75.72129392,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 448,
        name: 'SAHAGUN',
        active: true,
        isCapital: false,
        divipola: '23660',
        latitude: 8.799007016,
        longitude: -75.42925664,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 449,
        name: 'SAN ANDRES DE SOTAVENTO',
        active: true,
        isCapital: false,
        divipola: '23670',
        latitude: 9.121296353,
        longitude: -75.52091711,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 450,
        name: 'SAN ANTERO',
        active: true,
        isCapital: false,
        divipola: '23672',
        latitude: 9.359667489,
        longitude: -75.78700252,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 451,
        name: 'SAN BERNARDO DEL VIENTO',
        active: true,
        isCapital: false,
        divipola: '23675',
        latitude: 9.330098329,
        longitude: -75.97623858,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 452,
        name: 'SAN CARLOS',
        active: true,
        isCapital: false,
        divipola: '23678',
        latitude: 8.706464263,
        longitude: -75.69251825,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 453,
        name: 'SAN JOSE DE URE',
        active: true,
        isCapital: false,
        divipola: '23682',
        latitude: 7.753054395,
        longitude: -75.5672474,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 454,
        name: 'SAN PELAYO',
        active: true,
        isCapital: false,
        divipola: '23686',
        latitude: 8.987777392,
        longitude: -75.90958771,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 455,
        name: 'TIERRALTA',
        active: true,
        isCapital: false,
        divipola: '23807',
        latitude: 7.813896829,
        longitude: -76.16846678,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 456,
        name: 'TUCHIN',
        active: true,
        isCapital: false,
        divipola: '23815',
        latitude: 9.224630803,
        longitude: -75.54410593,
        department: { id: 23 },
        tipo: { id: 1 }
      },

      {
        id: 457,
        name: 'VALENCIA',
        active: true,
        isCapital: false,
        divipola: '23855',
        latitude: 8.219904128,
        longitude: -76.2213286,
        department: { id: 23 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
