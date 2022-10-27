import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933036 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 959,
        name: 'IBAGUE',
        active: true,
        isCapital: true,
        divipola: '73001',
        latitude: 4.451921427,
        longitude: -75.252591,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 960,
        name: 'ALPUJARRA',
        active: true,
        isCapital: false,
        divipola: '73024',
        latitude: 3.390015064,
        longitude: -74.94078233,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 961,
        name: 'ALVARADO',
        active: true,
        isCapital: false,
        divipola: '73026',
        latitude: 4.582625784,
        longitude: -74.98630686,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 962,
        name: 'AMBALEMA',
        active: true,
        isCapital: false,
        divipola: '73030',
        latitude: 4.803365246,
        longitude: -74.80998676,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 963,
        name: 'ANZOATEGUI',
        active: true,
        isCapital: false,
        divipola: '73043',
        latitude: 4.623390454,
        longitude: -75.20165423,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 964,
        name: 'ARMERO',
        active: true,
        isCapital: false,
        divipola: '73055',
        latitude: 5.006758956,
        longitude: -74.84750095,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 965,
        name: 'ATACO',
        active: true,
        isCapital: false,
        divipola: '73067',
        latitude: 3.37749064,
        longitude: -75.61373257,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 966,
        name: 'CAJAMARCA',
        active: true,
        isCapital: false,
        divipola: '73124',
        latitude: 4.406971283,
        longitude: -75.49745918,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 967,
        name: 'CARMEN DE APICALA',
        active: true,
        isCapital: false,
        divipola: '73148',
        latitude: 4.123416795,
        longitude: -74.74700246,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 968,
        name: 'CASABIANCA',
        active: true,
        isCapital: false,
        divipola: '73152',
        latitude: 5.007003948,
        longitude: -75.19457703,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 969,
        name: 'CHAPARRAL',
        active: true,
        isCapital: false,
        divipola: '73168',
        latitude: 3.743693084,
        longitude: -75.58986634,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 970,
        name: 'COELLO',
        active: true,
        isCapital: false,
        divipola: '73200',
        latitude: 4.315603867,
        longitude: -74.91470256,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 971,
        name: 'COYAIMA',
        active: true,
        isCapital: false,
        divipola: '73217',
        latitude: 3.775490271,
        longitude: -75.14720213,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 972,
        name: 'CUNDAY',
        active: true,
        isCapital: false,
        divipola: '73226',
        latitude: 3.98252395,
        longitude: -74.68936908,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 973,
        name: 'DOLORES',
        active: true,
        isCapital: false,
        divipola: '73236',
        latitude: 3.597863274,
        longitude: -74.80256674,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 974,
        name: 'ESPINAL',
        active: true,
        isCapital: false,
        divipola: '73268',
        latitude: 4.166476969,
        longitude: -74.89352941,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 975,
        name: 'FALAN',
        active: true,
        isCapital: false,
        divipola: '73270',
        latitude: 5.079256598,
        longitude: -74.95703372,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 976,
        name: 'FLANDES',
        active: true,
        isCapital: false,
        divipola: '73275',
        latitude: 4.242813257,
        longitude: -74.83708638,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 977,
        name: 'FRESNO',
        active: true,
        isCapital: false,
        divipola: '73283',
        latitude: 5.186694812,
        longitude: -75.05228995,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 978,
        name: 'GUAMO',
        active: true,
        isCapital: false,
        divipola: '73319',
        latitude: 4.076501341,
        longitude: -74.97657287,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 979,
        name: 'HERVEO',
        active: true,
        isCapital: false,
        divipola: '73347',
        latitude: 5.068553783,
        longitude: -75.24322959,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 980,
        name: 'HONDA',
        active: true,
        isCapital: false,
        divipola: '73349',
        latitude: 5.179416561,
        longitude: -74.78303094,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 981,
        name: 'ICONONZO',
        active: true,
        isCapital: false,
        divipola: '73352',
        latitude: 4.133276369,
        longitude: -74.53964257,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 982,
        name: 'LERIDA',
        active: true,
        isCapital: false,
        divipola: '73408',
        latitude: 4.866034592,
        longitude: -74.92337178,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 983,
        name: 'LIBANO',
        active: true,
        isCapital: false,
        divipola: '73411',
        latitude: 4.877936755,
        longitude: -75.04763076,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 984,
        name: 'SAN SEBASTIAN DE MARIQUITA',
        active: true,
        isCapital: false,
        divipola: '73443',
        latitude: 5.235322593,
        longitude: -74.90668089,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 985,
        name: 'MELGAR',
        active: true,
        isCapital: false,
        divipola: '73449',
        latitude: 4.193215498,
        longitude: -74.60517497,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 986,
        name: 'MURILLO',
        active: true,
        isCapital: false,
        divipola: '73461',
        latitude: 4.826734468,
        longitude: -75.21993987,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 987,
        name: 'NATAGAIMA',
        active: true,
        isCapital: false,
        divipola: '73483',
        latitude: 3.540518203,
        longitude: -75.12200999,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 988,
        name: 'ORTEGA',
        active: true,
        isCapital: false,
        divipola: '73504',
        latitude: 3.937793962,
        longitude: -75.27824314,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 989,
        name: 'PALOCABILDO',
        active: true,
        isCapital: false,
        divipola: '73520',
        latitude: 5.094035737,
        longitude: -75.0184505,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 990,
        name: 'PIEDRAS',
        active: true,
        isCapital: false,
        divipola: '73547',
        latitude: 4.433764446,
        longitude: -74.99879938,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 991,
        name: 'PLANADAS',
        active: true,
        isCapital: false,
        divipola: '73555',
        latitude: 3.09897343,
        longitude: -75.81684413,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 992,
        name: 'PRADO',
        active: true,
        isCapital: false,
        divipola: '73563',
        latitude: 3.729166649,
        longitude: -74.87247706,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 993,
        name: 'PURIFICACION',
        active: true,
        isCapital: false,
        divipola: '73585',
        latitude: 3.854281614,
        longitude: -74.87451155,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 994,
        name: 'RIOBLANCO',
        active: true,
        isCapital: false,
        divipola: '73616',
        latitude: 3.468077548,
        longitude: -75.85481103,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 995,
        name: 'RONCESVALLES',
        active: true,
        isCapital: false,
        divipola: '73622',
        latitude: 4.097861181,
        longitude: -75.59428027,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 996,
        name: 'ROVIRA',
        active: true,
        isCapital: false,
        divipola: '73624',
        latitude: 4.216730954,
        longitude: -75.34758364,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 997,
        name: 'SALDANA',
        active: true,
        isCapital: false,
        divipola: '73671',
        latitude: 3.912542787,
        longitude: -75.01859762,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 998,
        name: 'SAN ANTONIO',
        active: true,
        isCapital: false,
        divipola: '73675',
        latitude: 3.926088268,
        longitude: -75.50991004,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 999,
        name: 'SAN LUIS',
        active: true,
        isCapital: false,
        divipola: '73678',
        latitude: 4.057271684,
        longitude: -75.16320806,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 1000,
        name: 'SANTA ISABEL',
        active: true,
        isCapital: false,
        divipola: '73686',
        latitude: 4.740827622,
        longitude: -75.20069946,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 1001,
        name: 'SUAREZ',
        active: true,
        isCapital: false,
        divipola: '73770',
        latitude: 3.969210629,
        longitude: -74.84448738,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 1002,
        name: 'VALLE DE SAN JUAN',
        active: true,
        isCapital: false,
        divipola: '73854',
        latitude: 4.182125647,
        longitude: -75.17148237,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 1003,
        name: 'VENADILLO',
        active: true,
        isCapital: false,
        divipola: '73861',
        latitude: 4.70988172,
        longitude: -74.92089886,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 1004,
        name: 'VILLAHERMOSA',
        active: true,
        isCapital: false,
        divipola: '73870',
        latitude: 4.965753461,
        longitude: -75.15592969,
        department: { id: 73 },
        tipo: { id: 1 }
      },

      {
        id: 1005,
        name: 'VILLARRICA',
        active: true,
        isCapital: false,
        divipola: '73873',
        latitude: 3.854384097,
        longitude: -74.61896623,
        department: { id: 73 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
