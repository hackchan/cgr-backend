import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933035 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 1087,
        name: 'PROVIDENCIA',
        active: true,
        isCapital: false,
        divipola: '88564',
        latitude: 13.3511096,
        longitude: -81.37388549,
        department: { id: 88 },
        tipo: { id: 3 }
      },

      {
        id: 1088,
        name: 'LETICIA',
        active: true,
        isCapital: true,
        divipola: '91001',
        latitude: -3.530058784,
        longitude: -70.04513691,
        department: { id: 91 },
        tipo: { id: 1 }
      },

      {
        id: 1096,
        name: 'PUERTO NARINO',
        active: true,
        isCapital: false,
        divipola: '91540',
        latitude: -3.631323222,
        longitude: -70.47199039,
        department: { id: 91 },
        tipo: { id: 1 }
      },

      {
        id: 1099,
        name: 'INIRIDA',
        active: true,
        isCapital: true,
        divipola: '94001',
        latitude: 3.516363079,
        longitude: -68.00834728,
        department: { id: 94 },
        tipo: { id: 1 }
      },

      {
        id: 1100,
        name: 'BARRANCOMINAS',
        active: true,
        isCapital: false,
        divipola: '94343',
        latitude: 3.140558454,
        longitude: -69.69713423,
        department: { id: 94 },
        tipo: { id: 1 }
      },

      {
        id: 1107,
        name: 'SAN JOSE DEL GUAVIARE',
        active: true,
        isCapital: true,
        divipola: '95001',
        latitude: 2.484286091,
        longitude: -71.91916993,
        department: { id: 95 },
        tipo: { id: 1 }
      },

      {
        id: 1108,
        name: 'CALAMAR',
        active: true,
        isCapital: false,
        divipola: '95015',
        latitude: 1.613634284,
        longitude: -73.0342639,
        department: { id: 95 },
        tipo: { id: 1 }
      },

      {
        id: 1109,
        name: 'EL RETORNO',
        active: true,
        isCapital: false,
        divipola: '95025',
        latitude: 2.143447362,
        longitude: -72.24364869,
        department: { id: 95 },
        tipo: { id: 1 }
      },

      {
        id: 1110,
        name: 'MIRAFLORES',
        active: true,
        isCapital: false,
        divipola: '95200',
        latitude: 1.363974932,
        longitude: -72.01810951,
        department: { id: 95 },
        tipo: { id: 1 }
      },

      {
        id: 1111,
        name: 'MITU',
        active: true,
        isCapital: true,
        divipola: '97001',
        latitude: 1.06148231,
        longitude: -70.46688401,
        department: { id: 97 },
        tipo: { id: 1 }
      },

      {
        id: 1112,
        name: 'CARURU',
        active: true,
        isCapital: false,
        divipola: '97161',
        latitude: 1.052762314,
        longitude: -71.33093035,
        department: { id: 97 },
        tipo: { id: 1 }
      },

      {
        id: 1114,
        name: 'TARAIRA',
        active: true,
        isCapital: false,
        divipola: '97666',
        latitude: -0.719822209,
        longitude: -69.90776202,
        department: { id: 97 },
        tipo: { id: 1 }
      },

      {
        id: 1117,
        name: 'PUERTO CARRENO',
        active: true,
        isCapital: true,
        divipola: '99001',
        latitude: 5.836529669,
        longitude: -68.14122234,
        department: { id: 99 },
        tipo: { id: 1 }
      },

      {
        id: 1118,
        name: 'LA PRIMAVERA',
        active: true,
        isCapital: false,
        divipola: '99524',
        latitude: 5.517593607,
        longitude: -69.62044054,
        department: { id: 99 },
        tipo: { id: 1 }
      },

      {
        id: 1119,
        name: 'SANTA ROSALIA',
        active: true,
        isCapital: false,
        divipola: '99624',
        latitude: 4.968581012,
        longitude: -70.65997097,
        department: { id: 99 },
        tipo: { id: 1 }
      },

      {
        id: 1120,
        name: 'CUMARIBO',
        active: true,
        isCapital: false,
        divipola: '99773',
        latitude: 4.262454746,
        longitude: -69.52140484,
        department: { id: 99 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
