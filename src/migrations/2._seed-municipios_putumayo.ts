import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933030 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 1074,
        name: 'MOCOA',
        active: true,
        isCapital: true,
        divipola: '86001',
        latitude: 1.26070915,
        longitude: -76.66584349,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1075,
        name: 'COLON',
        active: true,
        isCapital: false,
        divipola: '86219',
        latitude: 1.204815876,
        longitude: -76.97376805,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1076,
        name: 'ORITO',
        active: true,
        isCapital: false,
        divipola: '86320',
        latitude: 0.673756323,
        longitude: -76.94313923,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1077,
        name: 'PUERTO ASIS',
        active: true,
        isCapital: false,
        divipola: '86568',
        latitude: 0.433884539,
        longitude: -76.52158203,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1078,
        name: 'PUERTO CAICEDO',
        active: true,
        isCapital: false,
        divipola: '86569',
        latitude: 0.70416861,
        longitude: -76.49864415,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1079,
        name: 'PUERTO GUZMAN',
        active: true,
        isCapital: false,
        divipola: '86571',
        latitude: 0.746432215,
        longitude: -75.88022979,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1080,
        name: 'PUERTO LEGUIZAMO',
        active: true,
        isCapital: false,
        divipola: '86573',
        latitude: 0.05947197,
        longitude: -75.06479327,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1081,
        name: 'SIBUNDOY',
        active: true,
        isCapital: false,
        divipola: '86749',
        latitude: 1.228746922,
        longitude: -76.91307585,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1082,
        name: 'SAN FRANCISCO',
        active: true,
        isCapital: false,
        divipola: '86755',
        latitude: 1.136071096,
        longitude: -76.84726661,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1083,
        name: 'SAN MIGUEL',
        active: true,
        isCapital: false,
        divipola: '86757',
        latitude: 0.272449048,
        longitude: -76.84510459,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1084,
        name: 'SANTIAGO',
        active: true,
        isCapital: false,
        divipola: '86760',
        latitude: 1.036021482,
        longitude: -76.97751684,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1085,
        name: 'VALLE DEL GUAMUEZ',
        active: true,
        isCapital: false,
        divipola: '86865',
        latitude: 0.42012589,
        longitude: -76.77067026,
        department: { id: 86 },
        tipo: { id: 1 }
      },

      {
        id: 1086,
        name: 'VILLAGARZON',
        active: true,
        isCapital: false,
        divipola: '86885',
        latitude: 0.911149515,
        longitude: -76.74495447,
        department: { id: 86 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
