import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933019 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 361,
        name: 'POPAYAN',
        active: true,
        isCapital: true,
        divipola: '19001',
        latitude: 2.471704362,
        longitude: -76.59194419,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 362,
        name: 'ALMAGUER',
        active: true,
        isCapital: false,
        divipola: '19022',
        latitude: 1.912440521,
        longitude: -76.83494519,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 363,
        name: 'ARGELIA',
        active: true,
        isCapital: false,
        divipola: '19050',
        latitude: 2.329337283,
        longitude: -77.26314906,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 364,
        name: 'BALBOA',
        active: true,
        isCapital: false,
        divipola: '19075',
        latitude: 2.084732945,
        longitude: -77.2088133,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 365,
        name: 'BOLIVAR',
        active: true,
        isCapital: false,
        divipola: '19100',
        latitude: 1.853951938,
        longitude: -76.96337454,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 366,
        name: 'BUENOS AIRES',
        active: true,
        isCapital: false,
        divipola: '19110',
        latitude: 2.988923885,
        longitude: -76.62158951,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 367,
        name: 'CAJIBIO',
        active: true,
        isCapital: false,
        divipola: '19130',
        latitude: 2.643209848,
        longitude: -76.70138914,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 368,
        name: 'CALDONO',
        active: true,
        isCapital: false,
        divipola: '19137',
        latitude: 2.803845691,
        longitude: -76.42719377,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 369,
        name: 'CALOTO',
        active: true,
        isCapital: false,
        divipola: '19142',
        latitude: 3.062875557,
        longitude: -76.32127977,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 370,
        name: 'CORINTO',
        active: true,
        isCapital: false,
        divipola: '19212',
        latitude: 3.136753606,
        longitude: -76.20964569,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 371,
        name: 'EL TAMBO',
        active: true,
        isCapital: false,
        divipola: '19256',
        latitude: 2.534488312,
        longitude: -77.00511207,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 372,
        name: 'FLORENCIA',
        active: true,
        isCapital: false,
        divipola: '19290',
        latitude: 1.69453474,
        longitude: -77.08735723,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 373,
        name: 'GUACHENE',
        active: true,
        isCapital: false,
        divipola: '19300',
        latitude: 3.144389993,
        longitude: -76.39234811,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 374,
        name: 'GUAPI',
        active: true,
        isCapital: false,
        divipola: '19318',
        latitude: 2.41326696,
        longitude: -77.69047531,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 375,
        name: 'INZA',
        active: true,
        isCapital: false,
        divipola: '19355',
        latitude: 2.499058783,
        longitude: -76.13762531,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 376,
        name: 'JAMBALO',
        active: true,
        isCapital: false,
        divipola: '19364',
        latitude: 2.84981013,
        longitude: -76.31124919,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 377,
        name: 'LA SIERRA',
        active: true,
        isCapital: false,
        divipola: '19392',
        latitude: 2.187473572,
        longitude: -76.78228032,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 378,
        name: 'LA VEGA',
        active: true,
        isCapital: false,
        divipola: '19397',
        latitude: 2.053933426,
        longitude: -76.7588062,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 379,
        name: 'LOPEZ DE MICAY',
        active: true,
        isCapital: false,
        divipola: '19418',
        latitude: 2.95819877,
        longitude: -77.24212158,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 380,
        name: 'MERCADERES',
        active: true,
        isCapital: false,
        divipola: '19450',
        latitude: 1.793825164,
        longitude: -77.18060381,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 381,
        name: 'MIRANDA',
        active: true,
        isCapital: false,
        divipola: '19455',
        latitude: 3.228235212,
        longitude: -76.21670827,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 382,
        name: 'MORALES',
        active: true,
        isCapital: false,
        divipola: '19473',
        latitude: 2.773663981,
        longitude: -76.74605152,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 383,
        name: 'PADILLA',
        active: true,
        isCapital: false,
        divipola: '19513',
        latitude: 3.194730618,
        longitude: -76.3362418,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 384,
        name: 'PAEZ',
        active: true,
        isCapital: false,
        divipola: '19517',
        latitude: 2.733887702,
        longitude: -75.99368264,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 385,
        name: 'PATIA',
        active: true,
        isCapital: false,
        divipola: '19532',
        latitude: 2.157983906,
        longitude: -77.0465762,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 386,
        name: 'PIAMONTE',
        active: true,
        isCapital: false,
        divipola: '19533',
        latitude: 1.054128816,
        longitude: -76.4443271,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 387,
        name: 'PIENDAMO - TUNIA',
        active: true,
        isCapital: false,
        divipola: '19548',
        latitude: 2.702420026,
        longitude: -76.53770455,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 388,
        name: 'PUERTO TEJADA',
        active: true,
        isCapital: false,
        divipola: '19573',
        latitude: 3.266724205,
        longitude: -76.41846353,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 389,
        name: 'PURACE',
        active: true,
        isCapital: false,
        divipola: '19585',
        latitude: 2.262153618,
        longitude: -76.44826938,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 390,
        name: 'ROSAS',
        active: true,
        isCapital: false,
        divipola: '19622',
        latitude: 2.260421954,
        longitude: -76.74582033,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 391,
        name: 'SAN SEBASTIAN',
        active: true,
        isCapital: false,
        divipola: '19693',
        latitude: 1.856261815,
        longitude: -76.71652424,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 392,
        name: 'SANTANDER DE QUILICHAO',
        active: true,
        isCapital: false,
        divipola: '19698',
        latitude: 2.984467338,
        longitude: -76.49873145,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 393,
        name: 'SANTA ROSA',
        active: true,
        isCapital: false,
        divipola: '19701',
        latitude: 1.52002179,
        longitude: -76.53876281,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 394,
        name: 'SILVIA',
        active: true,
        isCapital: false,
        divipola: '19743',
        latitude: 2.651291894,
        longitude: -76.35057356,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 395,
        name: 'SOTARA PAISPAMBA',
        active: true,
        isCapital: false,
        divipola: '19760',
        latitude: 2.231820541,
        longitude: -76.61146633,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 396,
        name: 'SUAREZ',
        active: true,
        isCapital: false,
        divipola: '19780',
        latitude: 2.936865997,
        longitude: -76.7458243,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 397,
        name: 'SUCRE',
        active: true,
        isCapital: false,
        divipola: '19785',
        latitude: 2.057735184,
        longitude: -76.90993965,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 398,
        name: 'TIMBIO',
        active: true,
        isCapital: false,
        divipola: '19807',
        latitude: 2.369625312,
        longitude: -76.71051932,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 399,
        name: 'TIMBIQUI',
        active: true,
        isCapital: false,
        divipola: '19809',
        latitude: 2.699475127,
        longitude: -77.49131577,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 400,
        name: 'TORIBIO',
        active: true,
        isCapital: false,
        divipola: '19821',
        latitude: 2.975771999,
        longitude: -76.20331566,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 401,
        name: 'TOTORO',
        active: true,
        isCapital: false,
        divipola: '19824',
        latitude: 2.475213085,
        longitude: -76.39675937,
        department: { id: 19 },
        tipo: { id: 1 }
      },

      {
        id: 402,
        name: 'VILLA RICA',
        active: true,
        isCapital: false,
        divipola: '19845',
        latitude: 3.180627317,
        longitude: -76.46445558,
        department: { id: 19 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
