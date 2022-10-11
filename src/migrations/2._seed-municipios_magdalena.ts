import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933026 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 657,
        name: 'SANTA MARTA',
        active: true,
        isCapital: true,
        divipola: '47001',
        latitude: 11.12189436,
        longitude: -73.88527855,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 658,
        name: 'ALGARROBO',
        active: true,
        isCapital: false,
        divipola: '47030',
        latitude: 10.25356475,
        longitude: -74.10323027,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 659,
        name: 'ARACATACA',
        active: true,
        isCapital: false,
        divipola: '47053',
        latitude: 10.64490877,
        longitude: -73.87972257,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 660,
        name: 'ARIGUANI',
        active: true,
        isCapital: false,
        divipola: '47058',
        latitude: 9.834264955,
        longitude: -74.08460085,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 661,
        name: 'CERRO DE SAN ANTONIO',
        active: true,
        isCapital: false,
        divipola: '47161',
        latitude: 10.3132933,
        longitude: -74.80834413,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 662,
        name: 'CHIVOLO',
        active: true,
        isCapital: false,
        divipola: '47170',
        latitude: 10.09951961,
        longitude: -74.52606667,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 663,
        name: 'CIENAGA',
        active: true,
        isCapital: false,
        divipola: '47189',
        latitude: 10.85754552,
        longitude: -74.02500493,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 664,
        name: 'CONCORDIA',
        active: true,
        isCapital: false,
        divipola: '47205',
        latitude: 10.23284801,
        longitude: -74.77810175,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 665,
        name: 'EL BANCO',
        active: true,
        isCapital: false,
        divipola: '47245',
        latitude: 9.114930635,
        longitude: -73.98105491,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 666,
        name: 'EL PINON',
        active: true,
        isCapital: false,
        divipola: '47258',
        latitude: 10.34310988,
        longitude: -74.67817756,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 667,
        name: 'EL RETEN',
        active: true,
        isCapital: false,
        divipola: '47268',
        latitude: 10.65961696,
        longitude: -74.3251597,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 668,
        name: 'FUNDACION',
        active: true,
        isCapital: false,
        divipola: '47288',
        latitude: 10.45937818,
        longitude: -73.88406518,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 669,
        name: 'GUAMAL',
        active: true,
        isCapital: false,
        divipola: '47318',
        latitude: 9.248004673,
        longitude: -74.13968085,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 670,
        name: 'NUEVA GRANADA',
        active: true,
        isCapital: false,
        divipola: '47460',
        latitude: 9.735998134,
        longitude: -74.32840222,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 671,
        name: 'PEDRAZA',
        active: true,
        isCapital: false,
        divipola: '47541',
        latitude: 10.15429546,
        longitude: -74.83178091,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 672,
        name: 'PIJINO DEL CARMEN',
        active: true,
        isCapital: false,
        divipola: '47545',
        latitude: 9.530748654,
        longitude: -74.1447657,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 673,
        name: 'PIVIJAY',
        active: true,
        isCapital: false,
        divipola: '47551',
        latitude: 10.43303399,
        longitude: -74.41251197,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 674,
        name: 'PLATO',
        active: true,
        isCapital: false,
        divipola: '47555',
        latitude: 9.76945611,
        longitude: -74.60181576,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 675,
        name: 'PUEBLOVIEJO',
        active: true,
        isCapital: false,
        divipola: '47570',
        latitude: 10.84758901,
        longitude: -74.36057942,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 676,
        name: 'REMOLINO',
        active: true,
        isCapital: false,
        divipola: '47605',
        latitude: 10.64860351,
        longitude: -74.58106823,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 677,
        name: 'SABANAS DE SAN ANGEL',
        active: true,
        isCapital: false,
        divipola: '47660',
        latitude: 10.10533028,
        longitude: -74.2644392,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 678,
        name: 'SALAMINA',
        active: true,
        isCapital: false,
        divipola: '47675',
        latitude: 10.51538178,
        longitude: -74.72296972,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 679,
        name: 'SAN SEBASTIAN DE BUENAVISTA',
        active: true,
        isCapital: false,
        divipola: '47692',
        latitude: 9.380680272,
        longitude: -74.19797988,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 680,
        name: 'SAN ZENON',
        active: true,
        isCapital: false,
        divipola: '47703',
        latitude: 9.306869548,
        longitude: -74.35851644,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 681,
        name: 'SANTA ANA',
        active: true,
        isCapital: false,
        divipola: '47707',
        latitude: 9.503097215,
        longitude: -74.44419381,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 682,
        name: 'SANTA BARBARA DE PINTO',
        active: true,
        isCapital: false,
        divipola: '47720',
        latitude: 9.484388135,
        longitude: -74.66521178,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 683,
        name: 'SITIONUEVO',
        active: true,
        isCapital: false,
        divipola: '47745',
        latitude: 10.89027616,
        longitude: -74.62966038,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 684,
        name: 'TENERIFE',
        active: true,
        isCapital: false,
        divipola: '47798',
        latitude: 9.924701267,
        longitude: -74.73263001,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 685,
        name: 'ZAPAYAN',
        active: true,
        isCapital: false,
        divipola: '47960',
        latitude: 10.11779893,
        longitude: -74.69115456,
        department: { id: 47 },
        tipo: { id: 1 }
      },

      {
        id: 686,
        name: 'ZONA BANANERA',
        active: true,
        isCapital: false,
        divipola: '47980',
        latitude: 10.79634658,
        longitude: -74.17798317,
        department: { id: 47 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
