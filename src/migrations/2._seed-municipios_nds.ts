import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933029 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 780,
        name: 'SAN JOSE DE CUCUTA',
        active: true,
        isCapital: true,
        divipola: '54001',
        latitude: 8.112041811,
        longitude: -72.48862641,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 781,
        name: 'ABREGO',
        active: true,
        isCapital: false,
        divipola: '54003',
        latitude: 8.019834481,
        longitude: -73.15850485,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 782,
        name: 'ARBOLEDAS',
        active: true,
        isCapital: false,
        divipola: '54051',
        latitude: 7.586048164,
        longitude: -72.91705315,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 783,
        name: 'BOCHALEMA',
        active: true,
        isCapital: false,
        divipola: '54099',
        latitude: 7.608509339,
        longitude: -72.65951909,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 784,
        name: 'BUCARASICA',
        active: true,
        isCapital: false,
        divipola: '54109',
        latitude: 8.079802239,
        longitude: -72.92919926,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 785,
        name: 'CACOTA',
        active: true,
        isCapital: false,
        divipola: '54125',
        latitude: 7.270560088,
        longitude: -72.65212153,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 786,
        name: 'CACHIRA',
        active: true,
        isCapital: false,
        divipola: '54128',
        latitude: 7.684188896,
        longitude: -73.12939481,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 787,
        name: 'CHINACOTA',
        active: true,
        isCapital: false,
        divipola: '54172',
        latitude: 7.583353136,
        longitude: -72.58390978,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 788,
        name: 'CHITAGA',
        active: true,
        isCapital: false,
        divipola: '54174',
        latitude: 7.05161677,
        longitude: -72.52544746,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 789,
        name: 'CONVENCION',
        active: true,
        isCapital: false,
        divipola: '54206',
        latitude: 8.873159895,
        longitude: -73.20007769,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 790,
        name: 'CUCUTILLA',
        active: true,
        isCapital: false,
        divipola: '54223',
        latitude: 7.502182366,
        longitude: -72.79703447,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 791,
        name: 'DURANIA',
        active: true,
        isCapital: false,
        divipola: '54239',
        latitude: 7.746993206,
        longitude: -72.67208072,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 792,
        name: 'EL CARMEN',
        active: true,
        isCapital: false,
        divipola: '54245',
        latitude: 8.867990035,
        longitude: -73.34585922,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 793,
        name: 'EL TARRA',
        active: true,
        isCapital: false,
        divipola: '54250',
        latitude: 8.678263671,
        longitude: -73.0317597,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 794,
        name: 'EL ZULIA',
        active: true,
        isCapital: false,
        divipola: '54261',
        latitude: 8.081200092,
        longitude: -72.63152118,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 795,
        name: 'GRAMALOTE',
        active: true,
        isCapital: false,
        divipola: '54313',
        latitude: 7.906522991,
        longitude: -72.80705582,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 796,
        name: 'HACARI',
        active: true,
        isCapital: false,
        divipola: '54344',
        latitude: 8.361831987,
        longitude: -73.0782633,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 797,
        name: 'HERRAN',
        active: true,
        isCapital: false,
        divipola: '54347',
        latitude: 7.493955781,
        longitude: -72.49269998,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 798,
        name: 'LABATECA',
        active: true,
        isCapital: false,
        divipola: '54377',
        latitude: 7.218372474,
        longitude: -72.48281514,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 799,
        name: 'LA ESPERANZA',
        active: true,
        isCapital: false,
        divipola: '54385',
        latitude: 7.695233593,
        longitude: -73.36139672,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 800,
        name: 'LA PLAYA',
        active: true,
        isCapital: false,
        divipola: '54398',
        latitude: 8.256757875,
        longitude: -73.18789327,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 801,
        name: 'LOS PATIOS',
        active: true,
        isCapital: false,
        divipola: '54405',
        latitude: 7.742291094,
        longitude: -72.52680784,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 802,
        name: 'LOURDES',
        active: true,
        isCapital: false,
        divipola: '54418',
        latitude: 7.963712759,
        longitude: -72.8467029,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 803,
        name: 'MUTISCUA',
        active: true,
        isCapital: false,
        divipola: '54480',
        latitude: 7.31694997,
        longitude: -72.76834584,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 804,
        name: 'OCANA',
        active: true,
        isCapital: false,
        divipola: '54498',
        latitude: 8.206637527,
        longitude: -73.33765033,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 805,
        name: 'PAMPLONA',
        active: true,
        isCapital: false,
        divipola: '54518',
        latitude: 7.379057623,
        longitude: -72.67590348,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 806,
        name: 'PAMPLONITA',
        active: true,
        isCapital: false,
        divipola: '54520',
        latitude: 7.48287886,
        longitude: -72.63515401,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 807,
        name: 'PUERTO SANTANDER',
        active: true,
        isCapital: false,
        divipola: '54553',
        latitude: 8.329138642,
        longitude: -72.41119066,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 808,
        name: 'RAGONVALIA',
        active: true,
        isCapital: false,
        divipola: '54599',
        latitude: 7.595355974,
        longitude: -72.50756622,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 809,
        name: 'SALAZAR',
        active: true,
        isCapital: false,
        divipola: '54660',
        latitude: 7.772747824,
        longitude: -72.86769959,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 810,
        name: 'SAN CALIXTO',
        active: true,
        isCapital: false,
        divipola: '54670',
        latitude: 8.414441404,
        longitude: -73.2176038,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 811,
        name: 'SAN CAYETANO',
        active: true,
        isCapital: false,
        divipola: '54673',
        latitude: 7.847872195,
        longitude: -72.60971203,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 812,
        name: 'SANTIAGO',
        active: true,
        isCapital: false,
        divipola: '54680',
        latitude: 7.889234454,
        longitude: -72.7182541,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 813,
        name: 'SARDINATA',
        active: true,
        isCapital: false,
        divipola: '54720',
        latitude: 8.215080767,
        longitude: -72.79580961,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 814,
        name: 'SILOS',
        active: true,
        isCapital: false,
        divipola: '54743',
        latitude: 7.180991879,
        longitude: -72.78617884,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 815,
        name: 'TEORAMA',
        active: true,
        isCapital: false,
        divipola: '54800',
        latitude: 8.760013794,
        longitude: -73.15714097,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 816,
        name: 'TIBU',
        active: true,
        isCapital: false,
        divipola: '54810',
        latitude: 8.713507237,
        longitude: -72.79925855,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 817,
        name: 'TOLEDO',
        active: true,
        isCapital: false,
        divipola: '54820',
        latitude: 7.225864961,
        longitude: -72.30593418,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 818,
        name: 'VILLA CARO',
        active: true,
        isCapital: false,
        divipola: '54871',
        latitude: 7.936293173,
        longitude: -72.98759418,
        department: { id: 54 },
        tipo: { id: 1 }
      },

      {
        id: 819,
        name: 'VILLA DEL ROSARIO',
        active: true,
        isCapital: false,
        divipola: '54874',
        latitude: 7.718635863,
        longitude: -72.48361176,
        department: { id: 54 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
