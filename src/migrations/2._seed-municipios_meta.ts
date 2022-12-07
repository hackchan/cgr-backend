import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933027 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 687,
        name: 'VILLAVICENCIO',
        active: true,
        isCapital: true,
        divipola: '50001',
        latitude: 4.09166877,
        longitude: -73.49291595,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 688,
        name: 'ACACIAS',
        active: true,
        isCapital: false,
        divipola: '50006',
        latitude: 3.943383008,
        longitude: -73.57135162,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 689,
        name: 'BARRANCA DE UPIA',
        active: true,
        isCapital: false,
        divipola: '50110',
        latitude: 4.519076127,
        longitude: -72.99548981,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 690,
        name: 'CABUYARO',
        active: true,
        isCapital: false,
        divipola: '50124',
        latitude: 4.315244759,
        longitude: -72.95268896,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 691,
        name: 'CASTILLA LA NUEVA',
        active: true,
        isCapital: false,
        divipola: '50150',
        latitude: 3.805154089,
        longitude: -73.53886668,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 692,
        name: 'CUBARRAL',
        active: true,
        isCapital: false,
        divipola: '50223',
        latitude: 3.834631516,
        longitude: -74.06232494,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 693,
        name: 'CUMARAL',
        active: true,
        isCapital: false,
        divipola: '50226',
        latitude: 4.232526389,
        longitude: -73.31477539,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 694,
        name: 'EL CALVARIO',
        active: true,
        isCapital: false,
        divipola: '50245',
        latitude: 4.353769888,
        longitude: -73.71441684,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 695,
        name: 'EL CASTILLO',
        active: true,
        isCapital: false,
        divipola: '50251',
        latitude: 3.60282633,
        longitude: -73.89445238,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 696,
        name: 'EL DORADO',
        active: true,
        isCapital: false,
        divipola: '50270',
        latitude: 3.706969785,
        longitude: -73.83161892,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 697,
        name: 'FUENTE DE ORO',
        active: true,
        isCapital: false,
        divipola: '50287',
        latitude: 3.382370124,
        longitude: -73.59625429,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 698,
        name: 'GRANADA',
        active: true,
        isCapital: false,
        divipola: '50313',
        latitude: 3.441051399,
        longitude: -73.7611547,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 699,
        name: 'GUAMAL',
        active: true,
        isCapital: false,
        divipola: '50318',
        latitude: 3.947775585,
        longitude: -73.95983864,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 700,
        name: 'MAPIRIPAN',
        active: true,
        isCapital: false,
        divipola: '50325',
        latitude: 3.117523361,
        longitude: -71.93805692,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 701,
        name: 'MESETAS',
        active: true,
        isCapital: false,
        divipola: '50330',
        latitude: 3.154771201,
        longitude: -74.12454824,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 702,
        name: 'LA MACARENA',
        active: true,
        isCapital: false,
        divipola: '50350',
        latitude: 2.161863917,
        longitude: -74.09488076,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 703,
        name: 'URIBE',
        active: true,
        isCapital: false,
        divipola: '50370',
        latitude: 3.047726858,
        longitude: -74.43066134,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 704,
        name: 'LEJANIAS',
        active: true,
        isCapital: false,
        divipola: '50400',
        latitude: 3.614714873,
        longitude: -74.09628467,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 705,
        name: 'PUERTO CONCORDIA',
        active: true,
        isCapital: false,
        divipola: '50450',
        latitude: 2.752260112,
        longitude: -72.7210941,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 706,
        name: 'PUERTO GAITAN',
        active: true,
        isCapital: false,
        divipola: '50568',
        latitude: 4.005034467,
        longitude: -71.63157429,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 707,
        name: 'PUERTO LOPEZ',
        active: true,
        isCapital: false,
        divipola: '50573',
        latitude: 4.014298921,
        longitude: -72.64570499,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 708,
        name: 'PUERTO LLERAS',
        active: true,
        isCapital: false,
        divipola: '50577',
        latitude: 3.193092925,
        longitude: -73.23671436,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 709,
        name: 'PUERTO RICO',
        active: true,
        isCapital: false,
        divipola: '50590',
        latitude: 2.758083657,
        longitude: -73.13780171,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 710,
        name: 'RESTREPO',
        active: true,
        isCapital: false,
        divipola: '50606',
        latitude: 4.204310977,
        longitude: -73.50226037,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 711,
        name: 'SAN CARLOS DE GUAROA',
        active: true,
        isCapital: false,
        divipola: '50680',
        latitude: 3.84761678,
        longitude: -73.27583401,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 712,
        name: 'SAN JUAN DE ARAMA',
        active: true,
        isCapital: false,
        divipola: '50683',
        latitude: 3.289851171,
        longitude: -73.81635243,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 713,
        name: 'SAN JUANITO',
        active: true,
        isCapital: false,
        divipola: '50686',
        latitude: 4.471346322,
        longitude: -73.66041355,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 714,
        name: 'SAN MARTIN',
        active: true,
        isCapital: false,
        divipola: '50689',
        latitude: 3.515860962,
        longitude: -72.65672742,
        department: { id: 50 },
        tipo: { id: 1 }
      },

      {
        id: 715,
        name: 'VISTAHERMOSA',
        active: true,
        isCapital: false,
        divipola: '50711',
        latitude: 2.811616698,
        longitude: -73.66652234,
        department: { id: 50 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
