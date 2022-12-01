import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933020 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 403,
        name: 'VALLEDUPAR',
        active: true,
        isCapital: true,
        divipola: '20001',
        latitude: 10.21890277,
        longitude: -73.45784764,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 404,
        name: 'AGUACHICA',
        active: true,
        isCapital: false,
        divipola: '20011',
        latitude: 8.248735219,
        longitude: -73.6227405,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 405,
        name: 'AGUSTIN CODAZZI',
        active: true,
        isCapital: false,
        divipola: '20013',
        latitude: 9.949215908,
        longitude: -73.22358244,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 406,
        name: 'ASTREA',
        active: true,
        isCapital: false,
        divipola: '20032',
        latitude: 9.510727925,
        longitude: -73.94214641,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 407,
        name: 'BECERRIL',
        active: true,
        isCapital: false,
        divipola: '20045',
        latitude: 9.727732939,
        longitude: -73.25250522,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 408,
        name: 'BOSCONIA',
        active: true,
        isCapital: false,
        divipola: '20060',
        latitude: 9.946391309,
        longitude: -73.86628815,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 409,
        name: 'CHIMICHAGUA',
        active: true,
        isCapital: false,
        divipola: '20175',
        latitude: 9.27797765,
        longitude: -73.84697903,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 410,
        name: 'CHIRIGUANA',
        active: true,
        isCapital: false,
        divipola: '20178',
        latitude: 9.426648354,
        longitude: -73.54797894,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 411,
        name: 'CURUMANI',
        active: true,
        isCapital: false,
        divipola: '20228',
        latitude: 9.238771332,
        longitude: -73.48810861,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 412,
        name: 'EL COPEY',
        active: true,
        isCapital: false,
        divipola: '20238',
        latitude: 10.19995356,
        longitude: -73.91282064,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 413,
        name: 'EL PASO',
        active: true,
        isCapital: false,
        divipola: '20250',
        latitude: 9.683474681,
        longitude: -73.73833778,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 414,
        name: 'GAMARRA',
        active: true,
        isCapital: false,
        divipola: '20295',
        latitude: 8.337726622,
        longitude: -73.70649199,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 415,
        name: 'GONZALEZ',
        active: true,
        isCapital: false,
        divipola: '20310',
        latitude: 8.405516522,
        longitude: -73.37537309,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 416,
        name: 'LA GLORIA',
        active: true,
        isCapital: false,
        divipola: '20383',
        latitude: 8.588002247,
        longitude: -73.61602384,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 417,
        name: 'LA JAGUA DE IBIRICO',
        active: true,
        isCapital: false,
        divipola: '20400',
        latitude: 9.52099808,
        longitude: -73.32249338,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 418,
        name: 'MANAURE BALCON DEL CESAR',
        active: true,
        isCapital: false,
        divipola: '20443',
        latitude: 10.38027852,
        longitude: -73.00706275,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 419,
        name: 'PAILITAS',
        active: true,
        isCapital: false,
        divipola: '20517',
        latitude: 8.938916143,
        longitude: -73.57247213,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 420,
        name: 'PELAYA',
        active: true,
        isCapital: false,
        divipola: '20550',
        latitude: 8.764116734,
        longitude: -73.63295546,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 421,
        name: 'PUEBLO BELLO',
        active: true,
        isCapital: false,
        divipola: '20570',
        latitude: 10.41736874,
        longitude: -73.61450632,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 422,
        name: 'RIO DE ORO',
        active: true,
        isCapital: false,
        divipola: '20614',
        latitude: 8.201070245,
        longitude: -73.48750127,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 423,
        name: 'LA PAZ',
        active: true,
        isCapital: false,
        divipola: '20621',
        latitude: 10.24440562,
        longitude: -73.07824569,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 424,
        name: 'SAN ALBERTO',
        active: true,
        isCapital: false,
        divipola: '20710',
        latitude: 7.769815987,
        longitude: -73.47218888,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 425,
        name: 'SAN DIEGO',
        active: true,
        isCapital: false,
        divipola: '20750',
        latitude: 10.16952712,
        longitude: -73.2879827,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 426,
        name: 'SAN MARTIN',
        active: true,
        isCapital: false,
        divipola: '20770',
        latitude: 7.937788454,
        longitude: -73.54436312,
        department: { id: 20 },
        tipo: { id: 1 }
      },

      {
        id: 427,
        name: 'TAMALAMEQUE',
        active: true,
        isCapital: false,
        divipola: '20787',
        latitude: 8.902075012,
        longitude: -73.7633962,
        department: { id: 20 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
