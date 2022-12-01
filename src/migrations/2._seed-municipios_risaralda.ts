import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933032 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 832,
        name: 'PEREIRA',
        active: true,
        isCapital: true,
        divipola: '66001',
        latitude: 4.803662773,
        longitude: -75.79579093,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 833,
        name: 'APIA',
        active: true,
        isCapital: false,
        divipola: '66045',
        latitude: 5.139635357,
        longitude: -75.95353871,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 834,
        name: 'BALBOA',
        active: true,
        isCapital: false,
        divipola: '66075',
        latitude: 4.918349676,
        longitude: -75.94275386,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 835,
        name: 'BELEN DE UMBRIA',
        active: true,
        isCapital: false,
        divipola: '66088',
        latitude: 5.200398696,
        longitude: -75.86793893,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 836,
        name: 'DOSQUEBRADAS',
        active: true,
        isCapital: false,
        divipola: '66170',
        latitude: 4.842021144,
        longitude: -75.66993655,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 837,
        name: 'GUATICA',
        active: true,
        isCapital: false,
        divipola: '66318',
        latitude: 5.320295966,
        longitude: -75.80436659,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 838,
        name: 'LA CELIA',
        active: true,
        isCapital: false,
        divipola: '66383',
        latitude: 4.988127679,
        longitude: -76.00822678,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 839,
        name: 'LA VIRGINIA',
        active: true,
        isCapital: false,
        divipola: '66400',
        latitude: 4.904704187,
        longitude: -75.85208162,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 840,
        name: 'MARSELLA',
        active: true,
        isCapital: false,
        divipola: '66440',
        latitude: 4.942936185,
        longitude: -75.7532139,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 841,
        name: 'MISTRATO',
        active: true,
        isCapital: false,
        divipola: '66456',
        latitude: 5.414078141,
        longitude: -75.96135387,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 842,
        name: 'PUEBLO RICO',
        active: true,
        isCapital: false,
        divipola: '66572',
        latitude: 5.286295408,
        longitude: -76.07359421,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 843,
        name: 'QUINCHIA',
        active: true,
        isCapital: false,
        divipola: '66594',
        latitude: 5.323906864,
        longitude: -75.71339683,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 844,
        name: 'SANTA ROSA DE CABAL',
        active: true,
        isCapital: false,
        divipola: '66682',
        latitude: 4.833789828,
        longitude: -75.54950174,
        department: { id: 66 },
        tipo: { id: 1 }
      },

      {
        id: 845,
        name: 'SANTUARIO',
        active: true,
        isCapital: false,
        divipola: '66687',
        latitude: 5.076100313,
        longitude: -76.02286946,
        department: { id: 66 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
