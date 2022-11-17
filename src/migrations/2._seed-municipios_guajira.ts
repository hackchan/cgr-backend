import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933024 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 642,
        name: 'RIOHACHA',
        active: true,
        isCapital: true,
        divipola: '44001',
        latitude: 11.24297214,
        longitude: -72.95876315,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 643,
        name: 'ALBANIA',
        active: true,
        isCapital: false,
        divipola: '44035',
        latitude: 11.22869049,
        longitude: -72.53209657,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 644,
        name: 'BARRANCAS',
        active: true,
        isCapital: false,
        divipola: '44078',
        latitude: 10.94871677,
        longitude: -72.69696879,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 645,
        name: 'DIBULLA',
        active: true,
        isCapital: false,
        divipola: '44090',
        latitude: 11.09029715,
        longitude: -73.43568788,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 646,
        name: 'DISTRACCION',
        active: true,
        isCapital: false,
        divipola: '44098',
        latitude: 10.92505107,
        longitude: -72.94444027,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 647,
        name: 'EL MOLINO',
        active: true,
        isCapital: false,
        divipola: '44110',
        latitude: 10.63669646,
        longitude: -72.8858431,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 648,
        name: 'FONSECA',
        active: true,
        isCapital: false,
        divipola: '44279',
        latitude: 10.8283716,
        longitude: -72.8018178,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 649,
        name: 'HATONUEVO',
        active: true,
        isCapital: false,
        divipola: '44378',
        latitude: 11.09905582,
        longitude: -72.73842427,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 650,
        name: 'LA JAGUA DEL PILAR',
        active: true,
        isCapital: false,
        divipola: '44420',
        latitude: 10.4580941,
        longitude: -73.07209193,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 651,
        name: 'MAICAO',
        active: true,
        isCapital: false,
        divipola: '44430',
        latitude: 11.38157764,
        longitude: -72.29500818,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 652,
        name: 'MANAURE',
        active: true,
        isCapital: false,
        divipola: '44560',
        latitude: 11.60554263,
        longitude: -72.57160392,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 653,
        name: 'SAN JUAN DEL CESAR',
        active: true,
        isCapital: false,
        divipola: '44650',
        latitude: 10.81311496,
        longitude: -73.08659986,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 654,
        name: 'URIBIA',
        active: true,
        isCapital: false,
        divipola: '44847',
        latitude: 11.99971986,
        longitude: -71.74882662,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 655,
        name: 'URUMITA',
        active: true,
        isCapital: false,
        divipola: '44855',
        latitude: 10.4947021,
        longitude: -72.98623991,
        department: { id: 44 },
        tipo: { id: 1 }
      },

      {
        id: 656,
        name: 'VILLANUEVA',
        active: true,
        isCapital: false,
        divipola: '44874',
        latitude: 10.58364755,
        longitude: -72.97520286,
        department: { id: 44 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
