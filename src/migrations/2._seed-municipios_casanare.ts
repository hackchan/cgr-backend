import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933018 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 1055,
        name: 'YOPAL',
        active: true,
        isCapital: true,
        divipola: '85001',
        latitude: 5.242744761,
        longitude: -72.25802857,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1056,
        name: 'AGUAZUL',
        active: true,
        isCapital: false,
        divipola: '85010',
        latitude: 5.126121886,
        longitude: -72.54821017,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1057,
        name: 'CHAMEZA',
        active: true,
        isCapital: false,
        divipola: '85015',
        latitude: 5.228453404,
        longitude: -72.86496804,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1058,
        name: 'HATO COROZAL',
        active: true,
        isCapital: false,
        divipola: '85125',
        latitude: 6.03948032,
        longitude: -71.52445752,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1059,
        name: 'LA SALINA',
        active: true,
        isCapital: false,
        divipola: '85136',
        latitude: 6.178282373,
        longitude: -72.34693377,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1060,
        name: 'MANI',
        active: true,
        isCapital: false,
        divipola: '85139',
        latitude: 4.675769488,
        longitude: -72.21280273,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1061,
        name: 'MONTERREY',
        active: true,
        isCapital: false,
        divipola: '85162',
        latitude: 4.841308642,
        longitude: -72.8473434,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1062,
        name: 'NUNCHIA',
        active: true,
        isCapital: false,
        divipola: '85225',
        latitude: 5.529181235,
        longitude: -72.09251937,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1063,
        name: 'OROCUE',
        active: true,
        isCapital: false,
        divipola: '85230',
        latitude: 4.915139133,
        longitude: -71.59873966,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1064,
        name: 'PAZ DE ARIPORO',
        active: true,
        isCapital: false,
        divipola: '85250',
        latitude: 5.779915281,
        longitude: -70.86947037,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1065,
        name: 'PORE',
        active: true,
        isCapital: false,
        divipola: '85263',
        latitude: 5.663194953,
        longitude: -71.92580806,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1066,
        name: 'RECETOR',
        active: true,
        isCapital: false,
        divipola: '85279',
        latitude: 5.263068507,
        longitude: -72.77081831,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1067,
        name: 'SABANALARGA',
        active: true,
        isCapital: false,
        divipola: '85300',
        latitude: 4.81119011,
        longitude: -72.99580655,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1068,
        name: 'SACAMA',
        active: true,
        isCapital: false,
        divipola: '85315',
        latitude: 6.049906435,
        longitude: -72.21076163,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1069,
        name: 'SAN LUIS DE PALENQUE',
        active: true,
        isCapital: false,
        divipola: '85325',
        latitude: 5.274955665,
        longitude: -71.81749276,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1070,
        name: 'TAMARA',
        active: true,
        isCapital: false,
        divipola: '85400',
        latitude: 5.878927424,
        longitude: -72.20067822,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1071,
        name: 'TAURAMENA',
        active: true,
        isCapital: false,
        divipola: '85410',
        latitude: 4.697463691,
        longitude: -72.62922436,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1072,
        name: 'TRINIDAD',
        active: true,
        isCapital: false,
        divipola: '85430',
        latitude: 5.354527091,
        longitude: -71.25479519,
        department: { id: 85 },
        tipo: { id: 1 }
      },

      {
        id: 1073,
        name: 'VILLANUEVA',
        active: true,
        isCapital: false,
        divipola: '85440',
        latitude: 4.528307719,
        longitude: -72.82314281,
        department: { id: 85 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
