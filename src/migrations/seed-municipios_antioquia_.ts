
import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933012 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 1,
        name: 'MEDELLIN',
        active: true,
        isCapital: true,
        divipola: '05001',
        latitude: 6.257590259,
        longitude: -75.61103107,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 2,
        name: 'ABEJORRAL',
        active: true,
        isCapital: false,
        divipola: '05002',
        latitude: 5.803728154,
        longitude: -75.43847353,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 3,
        name: 'ABRIAQUI',
        active: true,
        isCapital: false,
        divipola: '05004',
        latitude: 6.627569378,
        longitude: -76.08597756,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 4,
        name: 'ALEJANDRIA',
        active: true,
        isCapital: false,
        divipola: '05021',
        latitude: 6.365534125,
        longitude: -75.09059702,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 5,
        name: 'AMAGA',
        active: true,
        isCapital: false,
        divipola: '05030',
        latitude: 6.032921994,
        longitude: -75.7080031,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 6,
        name: 'AMALFI',
        active: true,
        isCapital: false,
        divipola: '05031',
        latitude: 6.977788843,
        longitude: -74.9812393,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 7,
        name: 'ANDES',
        active: true,
        isCapital: false,
        divipola: '05034',
        latitude: 5.604993248,
        longitude: -75.94128391,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 8,
        name: 'ANGELOPOLIS',
        active: true,
        isCapital: false,
        divipola: '05036',
        latitude: 6.121430303,
        longitude: -75.71594966,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 9,
        name: 'ANGOSTURA',
        active: true,
        isCapital: false,
        divipola: '05038',
        latitude: 6.861498764,
        longitude: -75.358316,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 10,
        name: 'ANORI',
        active: true,
        isCapital: false,
        divipola: '05040',
        latitude: 7.193110778,
        longitude: -75.10848954,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 11,
        name: 'SANTA FE DE ANTIOQUIA',
        active: true,
        isCapital: false,
        divipola: '05042',
        latitude: 6.535711576,
        longitude: -75.90426658,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 12,
        name: 'ANZA',
        active: true,
        isCapital: false,
        divipola: '05044',
        latitude: 6.293546613,
        longitude: -75.91736927,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 13,
        name: 'APARTADO',
        active: true,
        isCapital: false,
        divipola: '05045',
        latitude: 7.86047815,
        longitude: -76.58236264,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 14,
        name: 'ARBOLETES',
        active: true,
        isCapital: false,
        divipola: '05051',
        latitude: 8.611395262,
        longitude: -76.41478317,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 15,
        name: 'ARGELIA',
        active: true,
        isCapital: false,
        divipola: '05055',
        latitude: 5.708114524,
        longitude: -75.09469795,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 16,
        name: 'ARMENIA',
        active: true,
        isCapital: true,
        divipola: '05059',
        latitude: 6.163683758,
        longitude: -75.80995528,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 17,
        name: 'BARBOSA',
        active: true,
        isCapital: false,
        divipola: '05079',
        latitude: 6.443417935,
        longitude: -75.32924085,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 18,
        name: 'BELMIRA',
        active: true,
        isCapital: false,
        divipola: '05086',
        latitude: 6.665853953,
        longitude: -75.68621659,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 19,
        name: 'BELLO',
        active: true,
        isCapital: false,
        divipola: '05088',
        latitude: 6.358841086,
        longitude: -75.58973588,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 20,
        name: 'BETANIA',
        active: true,
        isCapital: false,
        divipola: '05091',
        latitude: 5.727081285,
        longitude: -75.98689107,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 21,
        name: 'BETULIA',
        active: true,
        isCapital: false,
        divipola: '05093',
        latitude: 6.185783612,
        longitude: -75.95649246,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 22,
        name: 'CIUDAD BOLIVAR',
        active: true,
        isCapital: false,
        divipola: '05101',
        latitude: 5.840995666,
        longitude: -76.01065253,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 23,
        name: 'BRICENO',
        active: true,
        isCapital: false,
        divipola: '05107',
        latitude: 7.111788462,
        longitude: -75.56223474,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 24,
        name: 'BURITICA',
        active: true,
        isCapital: false,
        divipola: '05113',
        latitude: 6.80906489,
        longitude: -75.91206595,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 25,
        name: 'CACERES',
        active: true,
        isCapital: false,
        divipola: '05120',
        latitude: 7.665155105,
        longitude: -75.22369744,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 26,
        name: 'CAICEDO',
        active: true,
        isCapital: false,
        divipola: '05125',
        latitude: 6.423463639,
        longitude: -75.99351498,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 27,
        name: 'CALDAS',
        active: true,
        isCapital: false,
        divipola: '05129',
        latitude: 6.054446841,
        longitude: -75.62642674,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 28,
        name: 'CAMPAMENTO',
        active: true,
        isCapital: false,
        divipola: '05134',
        latitude: 7.036017478,
        longitude: -75.28766178,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 29,
        name: 'CANASGORDAS',
        active: true,
        isCapital: false,
        divipola: '05138',
        latitude: 6.814950023,
        longitude: -76.02689632,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 30,
        name: 'CARACOLI',
        active: true,
        isCapital: false,
        divipola: '05142',
        latitude: 6.33797388,
        longitude: -74.73354817,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 31,
        name: 'CARAMANTA',
        active: true,
        isCapital: false,
        divipola: '05145',
        latitude: 5.555275296,
        longitude: -75.63082096,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 32,
        name: 'CAREPA',
        active: true,
        isCapital: false,
        divipola: '05147',
        latitude: 7.757967437,
        longitude: -76.64374657,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 33,
        name: 'EL CARMEN DE VIBORAL',
        active: true,
        isCapital: false,
        divipola: '05148',
        latitude: 5.978078841,
        longitude: -75.2635361,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 34,
        name: 'CAROLINA',
        active: true,
        isCapital: false,
        divipola: '05150',
        latitude: 6.754821442,
        longitude: -75.30590654,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 35,
        name: 'CAUCASIA',
        active: true,
        isCapital: false,
        divipola: '05154',
        latitude: 7.867941792,
        longitude: -75.03501824,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 36,
        name: 'CHIGORODO',
        active: true,
        isCapital: false,
        divipola: '05172',
        latitude: 7.631665644,
        longitude: -76.63964213,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 37,
        name: 'CISNEROS',
        active: true,
        isCapital: false,
        divipola: '05190',
        latitude: 6.550065431,
        longitude: -75.08254116,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 38,
        name: 'COCORNA',
        active: true,
        isCapital: false,
        divipola: '05197',
        latitude: 6.005593074,
        longitude: -75.16015403,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 39,
        name: 'CONCEPCION',
        active: true,
        isCapital: false,
        divipola: '05206',
        latitude: 6.376106187,
        longitude: -75.21785901,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 40,
        name: 'CONCORDIA',
        active: true,
        isCapital: false,
        divipola: '05209',
        latitude: 6.057468678,
        longitude: -75.90014678,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 41,
        name: 'COPACABANA',
        active: true,
        isCapital: false,
        divipola: '05212',
        latitude: 6.351882893,
        longitude: -75.50075633,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 42,
        name: 'DABEIBA',
        active: true,
        isCapital: false,
        divipola: '05234',
        latitude: 6.992243782,
        longitude: -76.31426328,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 43,
        name: 'DONMATIAS',
        active: true,
        isCapital: false,
        divipola: '05237',
        latitude: 6.492403905,
        longitude: -75.42227687,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 44,
        name: 'EBEJICO',
        active: true,
        isCapital: false,
        divipola: '05240',
        latitude: 6.326444922,
        longitude: -75.78331175,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 45,
        name: 'EL BAGRE',
        active: true,
        isCapital: false,
        divipola: '05250',
        latitude: 7.704633351,
        longitude: -74.66427726,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 46,
        name: 'ENTRERRIOS',
        active: true,
        isCapital: false,
        divipola: '05264',
        latitude: 6.594656004,
        longitude: -75.55913083,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 47,
        name: 'ENVIGADO',
        active: true,
        isCapital: false,
        divipola: '05266',
        latitude: 6.154394922,
        longitude: -75.54686779,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 48,
        name: 'FREDONIA',
        active: true,
        isCapital: false,
        divipola: '05282',
        latitude: 5.887702934,
        longitude: -75.67926242,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 49,
        name: 'FRONTINO',
        active: true,
        isCapital: false,
        divipola: '05284',
        latitude: 6.691364773,
        longitude: -76.33199656,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 50,
        name: 'GIRALDO',
        active: true,
        isCapital: false,
        divipola: '05306',
        latitude: 6.663095863,
        longitude: -75.94804663,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 51,
        name: 'GIRARDOTA',
        active: true,
        isCapital: false,
        divipola: '05308',
        latitude: 6.379745895,
        longitude: -75.44795744,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 52,
        name: 'GOMEZ PLATA',
        active: true,
        isCapital: false,
        divipola: '05310',
        latitude: 6.709562839,
        longitude: -75.19270291,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 53,
        name: 'GRANADA',
        active: true,
        isCapital: false,
        divipola: '05313',
        latitude: 6.123380721,
        longitude: -75.12763646,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 54,
        name: 'GUADALUPE',
        active: true,
        isCapital: false,
        divipola: '05315',
        latitude: 6.861576325,
        longitude: -75.22591303,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 55,
        name: 'GUARNE',
        active: true,
        isCapital: false,
        divipola: '05318',
        latitude: 6.266625703,
        longitude: -75.43730801,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 56,
        name: 'GUATAPE',
        active: true,
        isCapital: false,
        divipola: '05321',
        latitude: 6.236329826,
        longitude: -75.15651272,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 57,
        name: 'HELICONIA',
        active: true,
        isCapital: false,
        divipola: '05347',
        latitude: 6.214511788,
        longitude: -75.74971002,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 58,
        name: 'HISPANIA',
        active: true,
        isCapital: false,
        divipola: '05353',
        latitude: 5.797039002,
        longitude: -75.90669203,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 59,
        name: 'ITAGUI',
        active: true,
        isCapital: false,
        divipola: '05360',
        latitude: 6.179279438,
        longitude: -75.6142037,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 60,
        name: 'ITUANGO',
        active: true,
        isCapital: false,
        divipola: '05361',
        latitude: 7.341549718,
        longitude: -75.67842277,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 61,
        name: 'JARDIN',
        active: true,
        isCapital: false,
        divipola: '05364',
        latitude: 5.574444339,
        longitude: -75.81842575,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 62,
        name: 'JERICO',
        active: true,
        isCapital: false,
        divipola: '05368',
        latitude: 5.769820536,
        longitude: -75.76488256,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 63,
        name: 'LA CEJA',
        active: true,
        isCapital: false,
        divipola: '05376',
        latitude: 5.992524843,
        longitude: -75.43086935,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 64,
        name: 'LA ESTRELLA',
        active: true,
        isCapital: false,
        divipola: '05380',
        latitude: 6.137595883,
        longitude: -75.64895499,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 65,
        name: 'LA PINTADA',
        active: true,
        isCapital: false,
        divipola: '05390',
        latitude: 5.746583958,
        longitude: -75.60220206,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 66,
        name: 'LA UNION',
        active: true,
        isCapital: false,
        divipola: '05400',
        latitude: 5.940434685,
        longitude: -75.35429023,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 67,
        name: 'LIBORINA',
        active: true,
        isCapital: false,
        divipola: '05411',
        latitude: 6.723990935,
        longitude: -75.78300046,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 68,
        name: 'MACEO',
        active: true,
        isCapital: false,
        divipola: '05425',
        latitude: 6.534573585,
        longitude: -74.71410854,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 69,
        name: 'MARINILLA',
        active: true,
        isCapital: false,
        divipola: '05440',
        latitude: 6.18520515,
        longitude: -75.30487933,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 70,
        name: 'MONTEBELLO',
        active: true,
        isCapital: false,
        divipola: '05467',
        latitude: 5.916853903,
        longitude: -75.51972693,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 71,
        name: 'MURINDO',
        active: true,
        isCapital: false,
        divipola: '05475',
        latitude: 6.828773855,
        longitude: -76.70861349,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 72,
        name: 'MUTATA',
        active: true,
        isCapital: false,
        divipola: '05480',
        latitude: 7.329557848,
        longitude: -76.4630657,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 73,
        name: 'NARINO',
        active: true,
        isCapital: false,
        divipola: '05483',
        latitude: 5.581275312,
        longitude: -75.19457019,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 74,
        name: 'NECOCLI',
        active: true,
        isCapital: false,
        divipola: '05490',
        latitude: 8.493728551,
        longitude: -76.67699588,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 75,
        name: 'NECHI',
        active: true,
        isCapital: false,
        divipola: '05495',
        latitude: 7.983477394,
        longitude: -74.65844186,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 76,
        name: 'OLAYA',
        active: true,
        isCapital: false,
        divipola: '05501',
        latitude: 6.611418083,
        longitude: -75.77567097,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 77,
        name: 'PENOL',
        active: true,
        isCapital: false,
        divipola: '05541',
        latitude: 6.232396368,
        longitude: -75.22350906,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 78,
        name: 'PEQUE',
        active: true,
        isCapital: false,
        divipola: '05543',
        latitude: 7.044180058,
        longitude: -75.88968843,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 79,
        name: 'PUEBLORRICO',
        active: true,
        isCapital: false,
        divipola: '05576',
        latitude: 5.80970186,
        longitude: -75.86076667,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 80,
        name: 'PUERTO BERRIO',
        active: true,
        isCapital: false,
        divipola: '05579',
        latitude: 6.481922267,
        longitude: -74.5287421,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 81,
        name: 'PUERTO NARE',
        active: true,
        isCapital: false,
        divipola: '05585',
        latitude: 6.126539139,
        longitude: -74.70317722,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 82,
        name: 'PUERTO TRIUNFO',
        active: true,
        isCapital: false,
        divipola: '05591',
        latitude: 5.954830151,
        longitude: -74.6861918,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 83,
        name: 'REMEDIOS',
        active: true,
        isCapital: false,
        divipola: '05604',
        latitude: 6.997267375,
        longitude: -74.55865652,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 84,
        name: 'RETIRO',
        active: true,
        isCapital: false,
        divipola: '05607',
        latitude: 6.053444254,
        longitude: -75.51573805,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 85,
        name: 'RIONEGRO',
        active: true,
        isCapital: false,
        divipola: '05615',
        latitude: 6.150785807,
        longitude: -75.41076052,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 86,
        name: 'SABANALARGA',
        active: true,
        isCapital: false,
        divipola: '05628',
        latitude: 6.901000506,
        longitude: -75.79222754,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 87,
        name: 'SABANETA',
        active: true,
        isCapital: false,
        divipola: '05631',
        latitude: 6.138305183,
        longitude: -75.60880599,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 88,
        name: 'SALGAR',
        active: true,
        isCapital: false,
        divipola: '05642',
        latitude: 5.970502334,
        longitude: -75.98137251,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 89,
        name: 'SAN ANDRES DE CUERQUIA',
        active: true,
        isCapital: false,
        divipola: '05647',
        latitude: 6.918427233,
        longitude: -75.6657758,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 90,
        name: 'SAN CARLOS',
        active: true,
        isCapital: false,
        divipola: '05649',
        latitude: 6.193789659,
        longitude: -74.90732769,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 91,
        name: 'SAN FRANCISCO',
        active: true,
        isCapital: false,
        divipola: '05652',
        latitude: 5.840093731,
        longitude: -74.98176334,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 92,
        name: 'SAN JERONIMO',
        active: true,
        isCapital: false,
        divipola: '05656',
        latitude: 6.438300409,
        longitude: -75.70310727,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 93,
        name: 'SAN JOSE DE LA MONTANA',
        active: true,
        isCapital: false,
        divipola: '05658',
        latitude: 6.823258913,
        longitude: -75.67770826,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 94,
        name: 'SAN JUAN DE URABA',
        active: true,
        isCapital: false,
        divipola: '05659',
        latitude: 8.707141583,
        longitude: -76.53248234,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 95,
        name: 'SAN LUIS',
        active: true,
        isCapital: false,
        divipola: '05660',
        latitude: 6.024205956,
        longitude: -75.0076674,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 96,
        name: 'SAN PEDRO DE LOS MILAGROS',
        active: true,
        isCapital: false,
        divipola: '05664',
        latitude: 6.458666308,
        longitude: -75.5624839,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 97,
        name: 'SAN PEDRO DE URABA',
        active: true,
        isCapital: false,
        divipola: '05665',
        latitude: 8.37915695,
        longitude: -76.31664233,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 98,
        name: 'SAN RAFAEL',
        active: true,
        isCapital: false,
        divipola: '05667',
        latitude: 6.31074453,
        longitude: -74.99858652,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 99,
        name: 'SAN ROQUE',
        active: true,
        isCapital: false,
        divipola: '05670',
        latitude: 6.466165211,
        longitude: -74.9450732,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 100,
        name: 'SAN VICENTE FERRER',
        active: true,
        isCapital: false,
        divipola: '05674',
        latitude: 6.310387522,
        longitude: -75.32740163,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 101,
        name: 'SANTA BARBARA',
        active: true,
        isCapital: false,
        divipola: '05679',
        latitude: 5.878984956,
        longitude: -75.58330371,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 102,
        name: 'SANTA ROSA DE OSOS',
        active: true,
        isCapital: false,
        divipola: '05686',
        latitude: 6.675827825,
        longitude: -75.43814333,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 103,
        name: 'SANTO DOMINGO',
        active: true,
        isCapital: false,
        divipola: '05690',
        latitude: 6.481044132,
        longitude: -75.14260097,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 104,
        name: 'EL SANTUARIO',
        active: true,
        isCapital: false,
        divipola: '05697',
        latitude: 6.124209495,
        longitude: -75.25212278,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 105,
        name: 'SEGOVIA',
        active: true,
        isCapital: false,
        divipola: '05736',
        latitude: 7.26692339,
        longitude: -74.62163926,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 106,
        name: 'SONSON',
        active: true,
        isCapital: false,
        divipola: '05756',
        latitude: 5.826388779,
        longitude: -74.83637623,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 107,
        name: 'SOPETRAN',
        active: true,
        isCapital: false,
        divipola: '05761',
        latitude: 6.520164552,
        longitude: -75.74580903,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 108,
        name: 'TAMESIS',
        active: true,
        isCapital: false,
        divipola: '05789',
        latitude: 5.673758571,
        longitude: -75.70979974,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 109,
        name: 'TARAZA',
        active: true,
        isCapital: false,
        divipola: '05790',
        latitude: 7.488875998,
        longitude: -75.40189438,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 110,
        name: 'TARSO',
        active: true,
        isCapital: false,
        divipola: '05792',
        latitude: 5.871064557,
        longitude: -75.82871144,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 111,
        name: 'TITIRIBI',
        active: true,
        isCapital: false,
        divipola: '05809',
        latitude: 6.058349971,
        longitude: -75.79966005,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 112,
        name: 'TOLEDO',
        active: true,
        isCapital: false,
        divipola: '05819',
        latitude: 7.016397069,
        longitude: -75.71363382,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 113,
        name: 'TURBO',
        active: true,
        isCapital: false,
        divipola: '05837',
        latitude: 8.173851745,
        longitude: -76.5740377,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 114,
        name: 'URAMITA',
        active: true,
        isCapital: false,
        divipola: '05842',
        latitude: 6.913916924,
        longitude: -76.13318514,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 115,
        name: 'URRAO',
        active: true,
        isCapital: false,
        divipola: '05847',
        latitude: 6.33534134,
        longitude: -76.25906482,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 116,
        name: 'VALDIVIA',
        active: true,
        isCapital: false,
        divipola: '05854',
        latitude: 7.265404213,
        longitude: -75.40094502,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 117,
        name: 'VALPARAISO',
        active: true,
        isCapital: false,
        divipola: '05856',
        latitude: 5.651937802,
        longitude: -75.63083412,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 118,
        name: 'VEGACHI',
        active: true,
        isCapital: false,
        divipola: '05858',
        latitude: 6.836535122,
        longitude: -74.7540302,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 119,
        name: 'VENECIA',
        active: true,
        isCapital: false,
        divipola: '05861',
        latitude: 5.956576355,
        longitude: -75.77722423,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 120,
        name: 'VIGIA DEL FUERTE',
        active: true,
        isCapital: false,
        divipola: '05873',
        latitude: 6.453351334,
        longitude: -76.69504802,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 121,
        name: 'YALI',
        active: true,
        isCapital: false,
        divipola: '05885',
        latitude: 6.716870679,
        longitude: -74.75565002,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 122,
        name: 'YARUMAL',
        active: true,
        isCapital: false,
        divipola: '05887',
        latitude: 6.9881309,
        longitude: -75.45439957,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 123,
        name: 'YOLOMBO',
        active: true,
        isCapital: false,
        divipola: '05890',
        latitude: 6.64442786,
        longitude: -75.02990266,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 124,
        name: 'YONDO',
        active: true,
        isCapital: false,
        divipola: '05893',
        latitude: 6.925159318,
        longitude: -74.15824041,
        department: { id: 5 },
        tipo: { id: 1 }
      },

      {
        id: 125,
        name: 'ZARAGOZA',
        active: true,
        isCapital: false,
        divipola: '05895',
        latitude: 7.474004006,
        longitude: -74.85848326,
        department: { id: 5 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
