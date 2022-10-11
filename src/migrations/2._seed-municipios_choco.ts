import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933021 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 575,
        name: 'QUIBDO',
        active: true,
        isCapital: true,
        divipola: '27001',
        latitude: 5.7543229,
        longitude: -76.65015147,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 576,
        name: 'ACANDI',
        active: true,
        isCapital: false,
        divipola: '27006',
        latitude: 8.383938499,
        longitude: -77.26560256,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 577,
        name: 'ALTO BAUDO',
        active: true,
        isCapital: false,
        divipola: '27025',
        latitude: 5.636740989,
        longitude: -77.0842154,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 578,
        name: 'ATRATO',
        active: true,
        isCapital: false,
        divipola: '27050',
        latitude: 5.525825084,
        longitude: -76.65064357,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 579,
        name: 'BAGADO',
        active: true,
        isCapital: false,
        divipola: '27073',
        latitude: 5.503119772,
        longitude: -76.19796907,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 580,
        name: 'BAHIA SOLANO',
        active: true,
        isCapital: false,
        divipola: '27075',
        latitude: 6.162762775,
        longitude: -77.41653534,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 581,
        name: 'BAJO BAUDO',
        active: true,
        isCapital: false,
        divipola: '27077',
        latitude: 4.492865435,
        longitude: -77.08271352,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 582,
        name: 'BOJAYA',
        active: true,
        isCapital: false,
        divipola: '27099',
        latitude: 6.474666885,
        longitude: -77.09933025,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 583,
        name: 'EL CANTON DEL SAN PABLO',
        active: true,
        isCapital: false,
        divipola: '27135',
        latitude: 5.359661967,
        longitude: -76.77255624,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 584,
        name: 'CARMEN DEL DARIEN',
        active: true,
        isCapital: false,
        divipola: '27150',
        latitude: 7.033646541,
        longitude: -76.97423016,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 585,
        name: 'CERTEGUI',
        active: true,
        isCapital: false,
        divipola: '27160',
        latitude: 5.389828229,
        longitude: -76.52264237,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 586,
        name: 'CONDOTO',
        active: true,
        isCapital: false,
        divipola: '27205',
        latitude: 5.070586101,
        longitude: -76.50701751,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 587,
        name: 'EL CARMEN DE ATRATO',
        active: true,
        isCapital: false,
        divipola: '27245',
        latitude: 5.810938364,
        longitude: -76.19189442,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 588,
        name: 'EL LITORAL DEL SAN JUAN',
        active: true,
        isCapital: false,
        divipola: '27250',
        latitude: 4.272940191,
        longitude: -76.98785828,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 589,
        name: 'ISTMINA',
        active: true,
        isCapital: false,
        divipola: '27361',
        latitude: 4.586818665,
        longitude: -77.00090737,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 590,
        name: 'JURADO',
        active: true,
        isCapital: false,
        divipola: '27372',
        latitude: 7.103338868,
        longitude: -77.67973662,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 591,
        name: 'LLORO',
        active: true,
        isCapital: false,
        divipola: '27413',
        latitude: 5.585101179,
        longitude: -76.38544449,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 592,
        name: 'MEDIO ATRATO',
        active: true,
        isCapital: false,
        divipola: '27425',
        latitude: 6.033880098,
        longitude: -76.6734697,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 593,
        name: 'MEDIO BAUDO',
        active: true,
        isCapital: false,
        divipola: '27430',
        latitude: 5.110392243,
        longitude: -76.99593075,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 594,
        name: 'MEDIO SAN JUAN',
        active: true,
        isCapital: false,
        divipola: '27450',
        latitude: 4.621182739,
        longitude: -76.80861843,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 595,
        name: 'NOVITA',
        active: true,
        isCapital: false,
        divipola: '27491',
        latitude: 4.853386627,
        longitude: -76.61823669,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 596,
        name: 'NUQUI',
        active: true,
        isCapital: false,
        divipola: '27495',
        latitude: 5.591359844,
        longitude: -77.33057439,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 597,
        name: 'RIO IRO',
        active: true,
        isCapital: false,
        divipola: '27580',
        latitude: 5.190995015,
        longitude: -76.41996151,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 598,
        name: 'RIO QUITO',
        active: true,
        isCapital: false,
        divipola: '27600',
        latitude: 5.567533337,
        longitude: -76.81157084,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 599,
        name: 'RIOSUCIO',
        active: true,
        isCapital: false,
        divipola: '27615',
        latitude: 7.389887937,
        longitude: -77.24067483,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 600,
        name: 'SAN JOSE DEL PALMAR',
        active: true,
        isCapital: false,
        divipola: '27660',
        latitude: 4.958741345,
        longitude: -76.28002361,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 601,
        name: 'SIPI',
        active: true,
        isCapital: false,
        divipola: '27745',
        latitude: 4.594415157,
        longitude: -76.54194459,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 602,
        name: 'TADO',
        active: true,
        isCapital: false,
        divipola: '27787',
        latitude: 5.26610158,
        longitude: -76.33109547,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 603,
        name: 'UNGUIA',
        active: true,
        isCapital: false,
        divipola: '27800',
        latitude: 8.117281079,
        longitude: -77.10372723,
        department: { id: 27 },
        tipo: { id: 1 }
      },

      {
        id: 604,
        name: 'UNION PANAMERICANA',
        active: true,
        isCapital: false,
        divipola: '27810',
        latitude: 5.281599258,
        longitude: -76.61962746,
        department: { id: 27 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
