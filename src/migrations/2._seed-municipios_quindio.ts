import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933031 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 820,
        name: 'ARMENIA',
        active: true,
        isCapital: false,
        divipola: '63001',
        latitude: 4.499501128,
        longitude: -75.72489985,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 821,
        name: 'BUENAVISTA',
        active: true,
        isCapital: false,
        divipola: '63111',
        latitude: 4.366632382,
        longitude: -75.74403734,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 822,
        name: 'CALARCA',
        active: true,
        isCapital: false,
        divipola: '63130',
        latitude: 4.467879428,
        longitude: -75.65674719,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 823,
        name: 'CIRCASIA',
        active: true,
        isCapital: false,
        divipola: '63190',
        latitude: 4.604845344,
        longitude: -75.66688449,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 824,
        name: 'CORDOBA',
        active: true,
        isCapital: false,
        divipola: '63212',
        latitude: 4.395975176,
        longitude: -75.65132308,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 825,
        name: 'FILANDIA',
        active: true,
        isCapital: false,
        divipola: '63272',
        latitude: 4.669325347,
        longitude: -75.67146941,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 826,
        name: 'GENOVA',
        active: true,
        isCapital: false,
        divipola: '63302',
        latitude: 4.180107773,
        longitude: -75.76056695,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 827,
        name: 'LA TEBAIDA',
        active: true,
        isCapital: false,
        divipola: '63401',
        latitude: 4.426884849,
        longitude: -75.81927335,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 828,
        name: 'MONTENEGRO',
        active: true,
        isCapital: false,
        divipola: '63470',
        latitude: 4.521890945,
        longitude: -75.81806594,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 829,
        name: 'PIJAO',
        active: true,
        isCapital: false,
        divipola: '63548',
        latitude: 4.30397934,
        longitude: -75.68330417,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 830,
        name: 'QUIMBAYA',
        active: true,
        isCapital: false,
        divipola: '63594',
        latitude: 4.610273497,
        longitude: -75.79205087,
        department: { id: 63 },
        tipo: { id: 1 }
      },

      {
        id: 831,
        name: 'SALENTO',
        active: true,
        isCapital: false,
        divipola: '63690',
        latitude: 4.611314654,
        longitude: -75.53092112,
        department: { id: 63 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
