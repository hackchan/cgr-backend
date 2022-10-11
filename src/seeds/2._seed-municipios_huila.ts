import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933025 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 605,
        name: 'NEIVA',
        active: true,
        isCapital: true,
        divipola: '41001',
        latitude: 2.993360046,
        longitude: -75.27236232,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 606,
        name: 'ACEVEDO',
        active: true,
        isCapital: false,
        divipola: '41006',
        latitude: 1.709114446,
        longitude: -75.99664184,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 607,
        name: 'AGRADO',
        active: true,
        isCapital: false,
        divipola: '41013',
        latitude: 2.26975042,
        longitude: -75.71632236,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 608,
        name: 'AIPE',
        active: true,
        isCapital: false,
        divipola: '41016',
        latitude: 3.243441923,
        longitude: -75.27670655,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 609,
        name: 'ALGECIRAS',
        active: true,
        isCapital: false,
        divipola: '41020',
        latitude: 2.49785068,
        longitude: -75.29134946,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 610,
        name: 'ALTAMIRA',
        active: true,
        isCapital: false,
        divipola: '41026',
        latitude: 2.07922808,
        longitude: -75.76858288,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 611,
        name: 'BARAYA',
        active: true,
        isCapital: false,
        divipola: '41078',
        latitude: 3.135423634,
        longitude: -74.95797796,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 612,
        name: 'CAMPOALEGRE',
        active: true,
        isCapital: false,
        divipola: '41132',
        latitude: 2.658666675,
        longitude: -75.32943803,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 613,
        name: 'COLOMBIA',
        active: true,
        isCapital: false,
        divipola: '41206',
        latitude: 3.262763564,
        longitude: -74.78516117,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 614,
        name: 'ELIAS',
        active: true,
        isCapital: false,
        divipola: '41244',
        latitude: 2.022053305,
        longitude: -75.94430521,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 615,
        name: 'GARZON',
        active: true,
        isCapital: false,
        divipola: '41298',
        latitude: 2.172441496,
        longitude: -75.57131243,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 616,
        name: 'GIGANTE',
        active: true,
        isCapital: false,
        divipola: '41306',
        latitude: 2.371781539,
        longitude: -75.51699754,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 617,
        name: 'GUADALUPE',
        active: true,
        isCapital: false,
        divipola: '41319',
        latitude: 1.984394016,
        longitude: -75.69693549,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 618,
        name: 'HOBO',
        active: true,
        isCapital: false,
        divipola: '41349',
        latitude: 2.541654161,
        longitude: -75.44781083,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 619,
        name: 'IQUIRA',
        active: true,
        isCapital: false,
        divipola: '41357',
        latitude: 2.691517773,
        longitude: -75.67383141,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 620,
        name: 'ISNOS',
        active: true,
        isCapital: false,
        divipola: '41359',
        latitude: 1.945591321,
        longitude: -76.18204722,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 621,
        name: 'LA ARGENTINA',
        active: true,
        isCapital: false,
        divipola: '41378',
        latitude: 2.156287619,
        longitude: -76.00679451,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 622,
        name: 'LA PLATA',
        active: true,
        isCapital: false,
        divipola: '41396',
        latitude: 2.328076586,
        longitude: -76.00117299,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 623,
        name: 'NATAGA',
        active: true,
        isCapital: false,
        divipola: '41483',
        latitude: 2.576066285,
        longitude: -75.78693757,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 624,
        name: 'OPORAPA',
        active: true,
        isCapital: false,
        divipola: '41503',
        latitude: 2.061191362,
        longitude: -76.04110289,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 625,
        name: 'PAICOL',
        active: true,
        isCapital: false,
        divipola: '41518',
        latitude: 2.40689827,
        longitude: -75.72803027,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 626,
        name: 'PALERMO',
        active: true,
        isCapital: false,
        divipola: '41524',
        latitude: 2.914491967,
        longitude: -75.44066118,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 627,
        name: 'PALESTINA',
        active: true,
        isCapital: false,
        divipola: '41530',
        latitude: 1.68458076,
        longitude: -76.1478559,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 628,
        name: 'PITAL',
        active: true,
        isCapital: false,
        divipola: '41548',
        latitude: 2.259601773,
        longitude: -75.8319516,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 629,
        name: 'PITALITO',
        active: true,
        isCapital: false,
        divipola: '41551',
        latitude: 1.848217185,
        longitude: -76.05217643,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 630,
        name: 'RIVERA',
        active: true,
        isCapital: false,
        divipola: '41615',
        latitude: 2.79286115,
        longitude: -75.23536868,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 631,
        name: 'SALADOBLANCO',
        active: true,
        isCapital: false,
        divipola: '41660',
        latitude: 2.100382849,
        longitude: -76.22897871,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 632,
        name: 'SAN AGUSTIN',
        active: true,
        isCapital: false,
        divipola: '41668',
        latitude: 1.924165493,
        longitude: -76.4165655,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 633,
        name: 'SANTA MARIA',
        active: true,
        isCapital: false,
        divipola: '41676',
        latitude: 2.926265937,
        longitude: -75.63359786,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 634,
        name: 'SUAZA',
        active: true,
        isCapital: false,
        divipola: '41770',
        latitude: 1.870992095,
        longitude: -75.80798471,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 635,
        name: 'TARQUI',
        active: true,
        isCapital: false,
        divipola: '41791',
        latitude: 2.130280544,
        longitude: -75.87534845,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 636,
        name: 'TESALIA',
        active: true,
        isCapital: false,
        divipola: '41797',
        latitude: 2.526855132,
        longitude: -75.68259642,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 637,
        name: 'TELLO',
        active: true,
        isCapital: false,
        divipola: '41799',
        latitude: 3.030611777,
        longitude: -75.08536553,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 638,
        name: 'TERUEL',
        active: true,
        isCapital: false,
        divipola: '41801',
        latitude: 2.851852692,
        longitude: -75.75988934,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 639,
        name: 'TIMANA',
        active: true,
        isCapital: false,
        divipola: '41807',
        latitude: 1.950715226,
        longitude: -75.91757649,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 640,
        name: 'VILLAVIEJA',
        active: true,
        isCapital: false,
        divipola: '41872',
        latitude: 3.287057875,
        longitude: -75.13838292,
        department: { id: 41 },
        tipo: { id: 1 }
      },

      {
        id: 641,
        name: 'YAGUARA',
        active: true,
        isCapital: false,
        divipola: '41885',
        latitude: 2.646563339,
        longitude: -75.51592645,
        department: { id: 41 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
