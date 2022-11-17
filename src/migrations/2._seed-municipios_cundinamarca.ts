import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933023 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 458,
        name: 'BOGOTA',
        active: true,
        isCapital: true,
        divipola: '11001',
        latitude: 4.316107698,
        longitude: -74.1810727,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 459,
        name: 'AGUA DE DIOS',
        active: true,
        isCapital: false,
        divipola: '25001',
        latitude: 4.372744676,
        longitude: -74.67111051,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 460,
        name: 'ALBAN',
        active: true,
        isCapital: false,
        divipola: '25019',
        latitude: 4.891121638,
        longitude: -74.44278432,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 461,
        name: 'ANAPOIMA',
        active: true,
        isCapital: false,
        divipola: '25035',
        latitude: 4.559962881,
        longitude: -74.5256953,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 462,
        name: 'ANOLAIMA',
        active: true,
        isCapital: false,
        divipola: '25040',
        latitude: 4.789313614,
        longitude: -74.46194256,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 463,
        name: 'ARBELAEZ',
        active: true,
        isCapital: false,
        divipola: '25053',
        latitude: 4.232786985,
        longitude: -74.39576291,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 464,
        name: 'BELTRAN',
        active: true,
        isCapital: false,
        divipola: '25086',
        latitude: 4.791721105,
        longitude: -74.71491399,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 465,
        name: 'BITUIMA',
        active: true,
        isCapital: false,
        divipola: '25095',
        latitude: 4.847821091,
        longitude: -74.52862766,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 466,
        name: 'BOJACA',
        active: true,
        isCapital: false,
        divipola: '25099',
        latitude: 4.705576252,
        longitude: -74.3354077,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 467,
        name: 'CABRERA',
        active: true,
        isCapital: false,
        divipola: '25120',
        latitude: 3.91861924,
        longitude: -74.44615606,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 468,
        name: 'CACHIPAY',
        active: true,
        isCapital: false,
        divipola: '25123',
        latitude: 4.723063341,
        longitude: -74.45919528,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 469,
        name: 'CAJICA',
        active: true,
        isCapital: false,
        divipola: '25126',
        latitude: 4.930402779,
        longitude: -74.02985115,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 470,
        name: 'CAPARRAPI',
        active: true,
        isCapital: false,
        divipola: '25148',
        latitude: 5.381501399,
        longitude: -74.52123595,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 471,
        name: 'CAQUEZA',
        active: true,
        isCapital: false,
        divipola: '25151',
        latitude: 4.402259457,
        longitude: -73.94482435,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 472,
        name: 'CARMEN DE CARUPA',
        active: true,
        isCapital: false,
        divipola: '25154',
        latitude: 5.338856556,
        longitude: -73.92614817,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 473,
        name: 'CHAGUANI',
        active: true,
        isCapital: false,
        divipola: '25168',
        latitude: 4.95425175,
        longitude: -74.63090139,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 474,
        name: 'CHIA',
        active: true,
        isCapital: false,
        divipola: '25175',
        latitude: 4.857823671,
        longitude: -74.03809539,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 475,
        name: 'CHIPAQUE',
        active: true,
        isCapital: false,
        divipola: '25178',
        latitude: 4.463746629,
        longitude: -74.04605246,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 476,
        name: 'CHOACHI',
        active: true,
        isCapital: false,
        divipola: '25181',
        latitude: 4.578183896,
        longitude: -73.95290054,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 477,
        name: 'CHOCONTA',
        active: true,
        isCapital: false,
        divipola: '25183',
        latitude: 5.118419271,
        longitude: -73.68068583,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 478,
        name: 'COGUA',
        active: true,
        isCapital: false,
        divipola: '25200',
        latitude: 5.103127532,
        longitude: -73.97536559,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 479,
        name: 'COTA',
        active: true,
        isCapital: false,
        divipola: '25214',
        latitude: 4.76754674,
        longitude: -74.1415583,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 480,
        name: 'CUCUNUBA',
        active: true,
        isCapital: false,
        divipola: '25224',
        latitude: 5.230308105,
        longitude: -73.78001885,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 481,
        name: 'EL COLEGIO',
        active: true,
        isCapital: false,
        divipola: '25245',
        latitude: 4.556947085,
        longitude: -74.42658478,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 482,
        name: 'EL PENON',
        active: true,
        isCapital: false,
        divipola: '25258',
        latitude: 5.261728244,
        longitude: -74.30830564,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 483,
        name: 'EL ROSAL',
        active: true,
        isCapital: false,
        divipola: '25260',
        latitude: 4.879723016,
        longitude: -74.23802273,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 484,
        name: 'FACATATIVA',
        active: true,
        isCapital: false,
        divipola: '25269',
        latitude: 4.834052334,
        longitude: -74.3380229,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 485,
        name: 'FOMEQUE',
        active: true,
        isCapital: false,
        divipola: '25279',
        latitude: 4.528568462,
        longitude: -73.79705267,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 486,
        name: 'FOSCA',
        active: true,
        isCapital: false,
        divipola: '25281',
        latitude: 4.316280072,
        longitude: -73.95286784,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 487,
        name: 'FUNZA',
        active: true,
        isCapital: false,
        divipola: '25286',
        latitude: 4.743996711,
        longitude: -74.19865992,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 488,
        name: 'FUQUENE',
        active: true,
        isCapital: false,
        divipola: '25288',
        latitude: 5.416288902,
        longitude: -73.77059829,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 489,
        name: 'FUSAGASUGA',
        active: true,
        isCapital: false,
        divipola: '25290',
        latitude: 4.323534028,
        longitude: -74.38859114,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 490,
        name: 'GACHALA',
        active: true,
        isCapital: false,
        divipola: '25293',
        latitude: 4.65495513,
        longitude: -73.51055381,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 491,
        name: 'GACHANCIPA',
        active: true,
        isCapital: false,
        divipola: '25295',
        latitude: 5.01001953,
        longitude: -73.87671759,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 492,
        name: 'GACHETA',
        active: true,
        isCapital: false,
        divipola: '25297',
        latitude: 4.867551134,
        longitude: -73.61773287,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 493,
        name: 'GAMA',
        active: true,
        isCapital: false,
        divipola: '25299',
        latitude: 4.723573464,
        longitude: -73.60054441,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 494,
        name: 'GIRARDOT',
        active: true,
        isCapital: false,
        divipola: '25307',
        latitude: 4.338154518,
        longitude: -74.81143922,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 495,
        name: 'GRANADA',
        active: true,
        isCapital: false,
        divipola: '25312',
        latitude: 4.523484884,
        longitude: -74.33724619,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 496,
        name: 'GUACHETA',
        active: true,
        isCapital: false,
        divipola: '25317',
        latitude: 5.387291542,
        longitude: -73.69328234,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 497,
        name: 'GUADUAS',
        active: true,
        isCapital: false,
        divipola: '25320',
        latitude: 5.173554764,
        longitude: -74.64014651,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 498,
        name: 'GUASCA',
        active: true,
        isCapital: false,
        divipola: '25322',
        latitude: 4.801276832,
        longitude: -73.84643485,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 499,
        name: 'GUATAQUI',
        active: true,
        isCapital: false,
        divipola: '25324',
        latitude: 4.516381655,
        longitude: -74.78257788,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 500,
        name: 'GUATAVITA',
        active: true,
        isCapital: false,
        divipola: '25326',
        latitude: 4.91158717,
        longitude: -73.78648564,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 501,
        name: 'GUAYABAL DE SIQUIMA',
        active: true,
        isCapital: false,
        divipola: '25328',
        latitude: 4.866310254,
        longitude: -74.4767709,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 502,
        name: 'GUAYABETAL',
        active: true,
        isCapital: false,
        divipola: '25335',
        latitude: 4.231875945,
        longitude: -73.83543981,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 503,
        name: 'GUTIERREZ',
        active: true,
        isCapital: false,
        divipola: '25339',
        latitude: 4.166089563,
        longitude: -74.0246527,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 504,
        name: 'JERUSALEN',
        active: true,
        isCapital: false,
        divipola: '25368',
        latitude: 4.571350254,
        longitude: -74.68915854,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 505,
        name: 'JUNIN',
        active: true,
        isCapital: false,
        divipola: '25372',
        latitude: 4.705170789,
        longitude: -73.69247873,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 506,
        name: 'LA CALERA',
        active: true,
        isCapital: false,
        divipola: '25377',
        latitude: 4.700785443,
        longitude: -73.92939921,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 507,
        name: 'LA MESA',
        active: true,
        isCapital: false,
        divipola: '25386',
        latitude: 4.650773167,
        longitude: -74.47321717,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 508,
        name: 'LA PALMA',
        active: true,
        isCapital: false,
        divipola: '25394',
        latitude: 5.333400646,
        longitude: -74.40807863,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 509,
        name: 'LA PENA',
        active: true,
        isCapital: false,
        divipola: '25398',
        latitude: 5.20459882,
        longitude: -74.40786611,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 510,
        name: 'LA VEGA',
        active: true,
        isCapital: false,
        divipola: '25402',
        latitude: 4.978619842,
        longitude: -74.33936061,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 511,
        name: 'LENGUAZAQUE',
        active: true,
        isCapital: false,
        divipola: '25407',
        latitude: 5.303637171,
        longitude: -73.68153228,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 512,
        name: 'MACHETA',
        active: true,
        isCapital: false,
        divipola: '25426',
        latitude: 5.040349198,
        longitude: -73.61738241,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 513,
        name: 'MADRID',
        active: true,
        isCapital: false,
        divipola: '25430',
        latitude: 4.75156751,
        longitude: -74.2896305,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 514,
        name: 'MANTA',
        active: true,
        isCapital: false,
        divipola: '25436',
        latitude: 4.976881151,
        longitude: -73.56313741,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 515,
        name: 'MEDINA',
        active: true,
        isCapital: false,
        divipola: '25438',
        latitude: 4.484437919,
        longitude: -73.40598487,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 516,
        name: 'MOSQUERA',
        active: true,
        isCapital: false,
        divipola: '25473',
        latitude: 4.672714223,
        longitude: -74.23573194,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 517,
        name: 'NARINO',
        active: true,
        isCapital: false,
        divipola: '25483',
        latitude: 4.407952015,
        longitude: -74.80565317,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 518,
        name: 'NEMOCON',
        active: true,
        isCapital: false,
        divipola: '25486',
        latitude: 5.093705358,
        longitude: -73.88380238,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 519,
        name: 'NILO',
        active: true,
        isCapital: false,
        divipola: '25488',
        latitude: 4.294780933,
        longitude: -74.614695,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 520,
        name: 'NIMAIMA',
        active: true,
        isCapital: false,
        divipola: '25489',
        latitude: 5.121445325,
        longitude: -74.39737048,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 521,
        name: 'NOCAIMA',
        active: true,
        isCapital: false,
        divipola: '25491',
        latitude: 5.066110761,
        longitude: -74.38975476,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 522,
        name: 'VENECIA',
        active: true,
        isCapital: false,
        divipola: '25506',
        latitude: 4.063342074,
        longitude: -74.45259796,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 523,
        name: 'PACHO',
        active: true,
        isCapital: false,
        divipola: '25513',
        latitude: 5.168367634,
        longitude: -74.16336544,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 524,
        name: 'PAIME',
        active: true,
        isCapital: false,
        divipola: '25518',
        latitude: 5.387647345,
        longitude: -74.16395696,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 525,
        name: 'PANDI',
        active: true,
        isCapital: false,
        divipola: '25524',
        latitude: 4.180497268,
        longitude: -74.4711213,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 526,
        name: 'PARATEBUENO',
        active: true,
        isCapital: false,
        divipola: '25530',
        latitude: 4.368158959,
        longitude: -73.2416614,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 527,
        name: 'PASCA',
        active: true,
        isCapital: false,
        divipola: '25535',
        latitude: 4.293733611,
        longitude: -74.27396924,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 528,
        name: 'PUERTO SALGAR',
        active: true,
        isCapital: false,
        divipola: '25572',
        latitude: 5.619752748,
        longitude: -74.5801923,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 529,
        name: 'PULI',
        active: true,
        isCapital: false,
        divipola: '25580',
        latitude: 4.691336253,
        longitude: -74.68074404,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 530,
        name: 'QUEBRADANEGRA',
        active: true,
        isCapital: false,
        divipola: '25592',
        latitude: 5.09998103,
        longitude: -74.4945107,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 531,
        name: 'QUETAME',
        active: true,
        isCapital: false,
        divipola: '25594',
        latitude: 4.334589044,
        longitude: -73.85264561,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 532,
        name: 'QUIPILE',
        active: true,
        isCapital: false,
        divipola: '25596',
        latitude: 4.726907976,
        longitude: -74.55359926,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 533,
        name: 'APULO',
        active: true,
        isCapital: false,
        divipola: '25599',
        latitude: 4.537711619,
        longitude: -74.59124656,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 534,
        name: 'RICAURTE',
        active: true,
        isCapital: false,
        divipola: '25612',
        latitude: 4.307363489,
        longitude: -74.72943403,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 535,
        name: 'SAN ANTONIO DEL TEQUENDAMA',
        active: true,
        isCapital: false,
        divipola: '25645',
        latitude: 4.599741357,
        longitude: -74.34490342,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 536,
        name: 'SAN BERNARDO',
        active: true,
        isCapital: false,
        divipola: '25649',
        latitude: 4.140958464,
        longitude: -74.35397692,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 537,
        name: 'SAN CAYETANO',
        active: true,
        isCapital: false,
        divipola: '25653',
        latitude: 5.314600423,
        longitude: -74.07232077,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 538,
        name: 'SAN FRANCISCO',
        active: true,
        isCapital: false,
        divipola: '25658',
        latitude: 4.964100703,
        longitude: -74.27217129,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 539,
        name: 'SAN JUAN DE RIOSECO',
        active: true,
        isCapital: false,
        divipola: '25662',
        latitude: 4.814537831,
        longitude: -74.61525985,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 540,
        name: 'SASAIMA',
        active: true,
        isCapital: false,
        divipola: '25718',
        latitude: 4.946805263,
        longitude: -74.41230921,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 541,
        name: 'SESQUILE',
        active: true,
        isCapital: false,
        divipola: '25736',
        latitude: 5.000633875,
        longitude: -73.77206544,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 542,
        name: 'SIBATE',
        active: true,
        isCapital: false,
        divipola: '25740',
        latitude: 4.465970004,
        longitude: -74.26328963,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 543,
        name: 'SILVANIA',
        active: true,
        isCapital: false,
        divipola: '25743',
        latitude: 4.436967141,
        longitude: -74.37050903,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 544,
        name: 'SIMIJACA',
        active: true,
        isCapital: false,
        divipola: '25745',
        latitude: 5.509773128,
        longitude: -73.84519164,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 545,
        name: 'SOACHA',
        active: true,
        isCapital: false,
        divipola: '25754',
        latitude: 4.581866267,
        longitude: -74.24029696,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 546,
        name: 'SOPO',
        active: true,
        isCapital: false,
        divipola: '25758',
        latitude: 4.888060112,
        longitude: -73.96587528,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 547,
        name: 'SUBACHOQUE',
        active: true,
        isCapital: false,
        divipola: '25769',
        latitude: 4.970358034,
        longitude: -74.15689923,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 548,
        name: 'SUESCA',
        active: true,
        isCapital: false,
        divipola: '25772',
        latitude: 5.122728461,
        longitude: -73.82427313,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 549,
        name: 'SUPATA',
        active: true,
        isCapital: false,
        divipola: '25777',
        latitude: 5.061692703,
        longitude: -74.23138328,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 550,
        name: 'SUSA',
        active: true,
        isCapital: false,
        divipola: '25779',
        latitude: 5.440092358,
        longitude: -73.82392529,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 551,
        name: 'SUTATAUSA',
        active: true,
        isCapital: false,
        divipola: '25781',
        latitude: 5.242909347,
        longitude: -73.85540343,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 552,
        name: 'TABIO',
        active: true,
        isCapital: false,
        divipola: '25785',
        latitude: 4.951520046,
        longitude: -74.08449648,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 553,
        name: 'TAUSA',
        active: true,
        isCapital: false,
        divipola: '25793',
        latitude: 5.170527212,
        longitude: -73.95819594,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 554,
        name: 'TENA',
        active: true,
        isCapital: false,
        divipola: '25797',
        latitude: 4.666608192,
        longitude: -74.36764956,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 555,
        name: 'TENJO',
        active: true,
        isCapital: false,
        divipola: '25799',
        latitude: 4.838548601,
        longitude: -74.14680287,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 556,
        name: 'TIBACUY',
        active: true,
        isCapital: false,
        divipola: '25805',
        latitude: 4.321357899,
        longitude: -74.48667274,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 557,
        name: 'TIBIRITA',
        active: true,
        isCapital: false,
        divipola: '25807',
        latitude: 5.084102682,
        longitude: -73.51362546,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 558,
        name: 'TOCAIMA',
        active: true,
        isCapital: false,
        divipola: '25815',
        latitude: 4.452072974,
        longitude: -74.64864406,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 559,
        name: 'TOCANCIPA',
        active: true,
        isCapital: false,
        divipola: '25817',
        latitude: 4.968852913,
        longitude: -73.92887021,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 560,
        name: 'TOPAIPI',
        active: true,
        isCapital: false,
        divipola: '25823',
        latitude: 5.355688386,
        longitude: -74.28963994,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 561,
        name: 'UBALA',
        active: true,
        isCapital: false,
        divipola: '25839',
        latitude: 4.803805182,
        longitude: -73.47654604,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 562,
        name: 'UBAQUE',
        active: true,
        isCapital: false,
        divipola: '25841',
        latitude: 4.500754182,
        longitude: -73.97564545,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 563,
        name: 'VILLA DE SAN DIEGO DE UBATE',
        active: true,
        isCapital: false,
        divipola: '25843',
        latitude: 5.316080652,
        longitude: -73.82010566,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 564,
        name: 'UNE',
        active: true,
        isCapital: false,
        divipola: '25845',
        latitude: 4.244611163,
        longitude: -74.11187304,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 565,
        name: 'UTICA',
        active: true,
        isCapital: false,
        divipola: '25851',
        latitude: 5.192795708,
        longitude: -74.47780003,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 566,
        name: 'VERGARA',
        active: true,
        isCapital: false,
        divipola: '25862',
        latitude: 5.131267542,
        longitude: -74.30979229,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 567,
        name: 'VIANI',
        active: true,
        isCapital: false,
        divipola: '25867',
        latitude: 4.914040619,
        longitude: -74.54936655,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 568,
        name: 'VILLAGOMEZ',
        active: true,
        isCapital: false,
        divipola: '25871',
        latitude: 5.270694636,
        longitude: -74.19074375,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 569,
        name: 'VILLAPINZON',
        active: true,
        isCapital: false,
        divipola: '25873',
        latitude: 5.227298709,
        longitude: -73.57725921,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 570,
        name: 'VILLETA',
        active: true,
        isCapital: false,
        divipola: '25875',
        latitude: 5.011670402,
        longitude: -74.48764746,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 571,
        name: 'VIOTA',
        active: true,
        isCapital: false,
        divipola: '25878',
        latitude: 4.436054105,
        longitude: -74.48543339,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 572,
        name: 'YACOPI',
        active: true,
        isCapital: false,
        divipola: '25885',
        latitude: 5.591910157,
        longitude: -74.36480865,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 573,
        name: 'ZIPACON',
        active: true,
        isCapital: false,
        divipola: '25898',
        latitude: 4.75432173,
        longitude: -74.38673444,
        department: { id: 25 },
        tipo: { id: 1 }
      },

      {
        id: 574,
        name: 'ZIPAQUIRA',
        active: true,
        isCapital: false,
        divipola: '25899',
        latitude: 5.06631685,
        longitude: -74.04960323,
        department: { id: 25 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
