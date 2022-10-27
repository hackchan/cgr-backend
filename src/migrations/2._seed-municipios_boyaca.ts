import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933015 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 195,
        name: 'TUNJA',
        active: true,
        isCapital: true,
        divipola: '15001',
        latitude: 5.518472615,
        longitude: -73.37801856,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 196,
        name: 'ALMEIDA',
        active: true,
        isCapital: false,
        divipola: '15022',
        latitude: 4.954825081,
        longitude: -73.38813425,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 197,
        name: 'AQUITANIA',
        active: true,
        isCapital: false,
        divipola: '15047',
        latitude: 5.437416373,
        longitude: -72.87149471,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 198,
        name: 'ARCABUCO',
        active: true,
        isCapital: false,
        divipola: '15051',
        latitude: 5.73526424,
        longitude: -73.42793109,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 199,
        name: 'BELEN',
        active: true,
        isCapital: false,
        divipola: '15087',
        latitude: 6.005059265,
        longitude: -72.89369887,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 200,
        name: 'BERBEO',
        active: true,
        isCapital: false,
        divipola: '15090',
        latitude: 5.230936356,
        longitude: -73.12731944,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 201,
        name: 'BETEITIVA',
        active: true,
        isCapital: false,
        divipola: '15092',
        latitude: 5.920858933,
        longitude: -72.84857876,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 202,
        name: 'BOAVITA',
        active: true,
        isCapital: false,
        divipola: '15097',
        latitude: 6.337515626,
        longitude: -72.62021239,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 203,
        name: 'BOYACA',
        active: true,
        isCapital: false,
        divipola: '15104',
        latitude: 5.439856216,
        longitude: -73.38136994,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 204,
        name: 'BRICENO',
        active: true,
        isCapital: false,
        divipola: '15106',
        latitude: 5.673229265,
        longitude: -73.92660705,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 205,
        name: 'BUENAVISTA',
        active: true,
        isCapital: false,
        divipola: '15109',
        latitude: 5.489399419,
        longitude: -73.95066255,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 206,
        name: 'BUSBANZA',
        active: true,
        isCapital: false,
        divipola: '15114',
        latitude: 5.843483731,
        longitude: -72.87574623,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 207,
        name: 'CALDAS',
        active: true,
        isCapital: false,
        divipola: '15131',
        latitude: 5.575990669,
        longitude: -73.88057508,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 208,
        name: 'CAMPOHERMOSO',
        active: true,
        isCapital: false,
        divipola: '15135',
        latitude: 5.006862536,
        longitude: -73.1446703,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 209,
        name: 'CERINZA',
        active: true,
        isCapital: false,
        divipola: '15162',
        latitude: 5.962013698,
        longitude: -72.96447288,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 210,
        name: 'CHINAVITA',
        active: true,
        isCapital: false,
        divipola: '15172',
        latitude: 5.202971639,
        longitude: -73.34048074,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 211,
        name: 'CHIQUINQUIRA',
        active: true,
        isCapital: false,
        divipola: '15176',
        latitude: 5.622488024,
        longitude: -73.80424531,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 212,
        name: 'CHISCAS',
        active: true,
        isCapital: false,
        divipola: '15180',
        latitude: 6.68911806,
        longitude: -72.41795675,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 213,
        name: 'CHITA',
        active: true,
        isCapital: false,
        divipola: '15183',
        latitude: 6.091468485,
        longitude: -72.43903174,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 214,
        name: 'CHITARAQUE',
        active: true,
        isCapital: false,
        divipola: '15185',
        latitude: 5.984394625,
        longitude: -73.42582375,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 215,
        name: 'CHIVATA',
        active: true,
        isCapital: false,
        divipola: '15187',
        latitude: 5.556830465,
        longitude: -73.26061715,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 216,
        name: 'CIENEGA',
        active: true,
        isCapital: false,
        divipola: '15189',
        latitude: 5.393059633,
        longitude: -73.28205772,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 217,
        name: 'COMBITA',
        active: true,
        isCapital: false,
        divipola: '15204',
        latitude: 5.667822366,
        longitude: -73.32137049,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 218,
        name: 'COPER',
        active: true,
        isCapital: false,
        divipola: '15212',
        latitude: 5.452461072,
        longitude: -74.05996578,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 219,
        name: 'CORRALES',
        active: true,
        isCapital: false,
        divipola: '15215',
        latitude: 5.82454582,
        longitude: -72.84544845,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 220,
        name: 'COVARACHIA',
        active: true,
        isCapital: false,
        divipola: '15218',
        latitude: 6.519521476,
        longitude: -72.74020421,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 221,
        name: 'CUBARA',
        active: true,
        isCapital: false,
        divipola: '15223',
        latitude: 6.886954878,
        longitude: -72.18156285,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 222,
        name: 'CUCAITA',
        active: true,
        isCapital: false,
        divipola: '15224',
        latitude: 5.527104109,
        longitude: -73.44598646,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 223,
        name: 'CUITIVA',
        active: true,
        isCapital: false,
        divipola: '15226',
        latitude: 5.58775449,
        longitude: -72.93953686,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 224,
        name: 'CHIQUIZA',
        active: true,
        isCapital: false,
        divipola: '15232',
        latitude: 5.643075648,
        longitude: -73.44562391,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 225,
        name: 'CHIVOR',
        active: true,
        isCapital: false,
        divipola: '15236',
        latitude: 4.871181606,
        longitude: -73.36142379,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 226,
        name: 'DUITAMA',
        active: true,
        isCapital: false,
        divipola: '15238',
        latitude: 5.890602515,
        longitude: -73.06709484,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 227,
        name: 'EL COCUY',
        active: true,
        isCapital: false,
        divipola: '15244',
        latitude: 6.353363177,
        longitude: -72.41923752,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 228,
        name: 'EL ESPINO',
        active: true,
        isCapital: false,
        divipola: '15248',
        latitude: 6.508240556,
        longitude: -72.48049625,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 229,
        name: 'FIRAVITOBA',
        active: true,
        isCapital: false,
        divipola: '15272',
        latitude: 5.67367659,
        longitude: -73.01983352,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 230,
        name: 'FLORESTA',
        active: true,
        isCapital: false,
        divipola: '15276',
        latitude: 5.85899211,
        longitude: -72.92499827,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 231,
        name: 'GACHANTIVA',
        active: true,
        isCapital: false,
        divipola: '15293',
        latitude: 5.744105975,
        longitude: -73.5426552,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 232,
        name: 'GAMEZA',
        active: true,
        isCapital: false,
        divipola: '15296',
        latitude: 5.799050256,
        longitude: -72.72964765,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 233,
        name: 'GARAGOA',
        active: true,
        isCapital: false,
        divipola: '15299',
        latitude: 5.089466651,
        longitude: -73.31430272,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 234,
        name: 'GUACAMAYAS',
        active: true,
        isCapital: false,
        divipola: '15317',
        latitude: 6.445438546,
        longitude: -72.51635332,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 235,
        name: 'GUATEQUE',
        active: true,
        isCapital: false,
        divipola: '15322',
        latitude: 5.01450831,
        longitude: -73.48812352,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 236,
        name: 'GUAYATA',
        active: true,
        isCapital: false,
        divipola: '15325',
        latitude: 4.931424341,
        longitude: -73.49663372,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 237,
        name: 'GUICAN DE LA SIERRA',
        active: true,
        isCapital: false,
        divipola: '15332',
        latitude: 6.566991765,
        longitude: -72.25599334,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 238,
        name: 'IZA',
        active: true,
        isCapital: false,
        divipola: '15362',
        latitude: 5.617366016,
        longitude: -72.96986504,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 239,
        name: 'JENESANO',
        active: true,
        isCapital: false,
        divipola: '15367',
        latitude: 5.38916272,
        longitude: -73.40087021,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 240,
        name: 'JERICO',
        active: true,
        isCapital: false,
        divipola: '15368',
        latitude: 6.155633662,
        longitude: -72.58523093,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 241,
        name: 'LABRANZAGRANDE',
        active: true,
        isCapital: false,
        divipola: '15377',
        latitude: 5.541378132,
        longitude: -72.5903846,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 242,
        name: 'LA CAPILLA',
        active: true,
        isCapital: false,
        divipola: '15380',
        latitude: 5.113167102,
        longitude: -73.45923708,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 243,
        name: 'LA VICTORIA',
        active: true,
        isCapital: false,
        divipola: '15401',
        latitude: 5.507008121,
        longitude: -74.24162727,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 244,
        name: 'LA UVITA',
        active: true,
        isCapital: false,
        divipola: '15403',
        latitude: 6.265126191,
        longitude: -72.55551085,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 245,
        name: 'VILLA DE LEYVA',
        active: true,
        isCapital: false,
        divipola: '15407',
        latitude: 5.665762424,
        longitude: -73.514948,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 246,
        name: 'MACANAL',
        active: true,
        isCapital: false,
        divipola: '15425',
        latitude: 4.980176495,
        longitude: -73.29413695,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 247,
        name: 'MARIPI',
        active: true,
        isCapital: false,
        divipola: '15442',
        latitude: 5.569810633,
        longitude: -74.02003127,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 248,
        name: 'MIRAFLORES',
        active: true,
        isCapital: false,
        divipola: '15455',
        latitude: 5.150953297,
        longitude: -73.17896722,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 249,
        name: 'MONGUA',
        active: true,
        isCapital: false,
        divipola: '15464',
        latitude: 5.710937981,
        longitude: -72.63402875,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 250,
        name: 'MONGUI',
        active: true,
        isCapital: false,
        divipola: '15466',
        latitude: 5.697352228,
        longitude: -72.83298664,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 251,
        name: 'MONIQUIRA',
        active: true,
        isCapital: false,
        divipola: '15469',
        latitude: 5.863370485,
        longitude: -73.55852538,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 252,
        name: 'MOTAVITA',
        active: true,
        isCapital: false,
        divipola: '15476',
        latitude: 5.606192449,
        longitude: -73.37734267,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 253,
        name: 'MUZO',
        active: true,
        isCapital: false,
        divipola: '15480',
        latitude: 5.539429272,
        longitude: -74.11177139,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 254,
        name: 'NOBSA',
        active: true,
        isCapital: false,
        divipola: '15491',
        latitude: 5.778759851,
        longitude: -72.93268324,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 255,
        name: 'NUEVO COLON',
        active: true,
        isCapital: false,
        divipola: '15494',
        latitude: 5.354701485,
        longitude: -73.44873424,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 256,
        name: 'OICATA',
        active: true,
        isCapital: false,
        divipola: '15500',
        latitude: 5.610787844,
        longitude: -73.27991905,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 257,
        name: 'OTANCHE',
        active: true,
        isCapital: false,
        divipola: '15507',
        latitude: 5.753787787,
        longitude: -74.19719423,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 258,
        name: 'PACHAVITA',
        active: true,
        isCapital: false,
        divipola: '15511',
        latitude: 5.148323877,
        longitude: -73.39951219,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 259,
        name: 'PAEZ',
        active: true,
        isCapital: false,
        divipola: '15514',
        latitude: 5.095211035,
        longitude: -73.00435863,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 260,
        name: 'PAIPA',
        active: true,
        isCapital: false,
        divipola: '15516',
        latitude: 5.762027786,
        longitude: -73.13777442,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 261,
        name: 'PAJARITO',
        active: true,
        isCapital: false,
        divipola: '15518',
        latitude: 5.382328949,
        longitude: -72.69672674,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 262,
        name: 'PANQUEBA',
        active: true,
        isCapital: false,
        divipola: '15522',
        latitude: 6.443299758,
        longitude: -72.46182431,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 263,
        name: 'PAUNA',
        active: true,
        isCapital: false,
        divipola: '15531',
        latitude: 5.688801559,
        longitude: -74.00504122,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 264,
        name: 'PAYA',
        active: true,
        isCapital: false,
        divipola: '15533',
        latitude: 5.621242742,
        longitude: -72.3692906,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 265,
        name: 'PAZ DE RIO',
        active: true,
        isCapital: false,
        divipola: '15537',
        latitude: 6.030008561,
        longitude: -72.75988018,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 266,
        name: 'PESCA',
        active: true,
        isCapital: false,
        divipola: '15542',
        latitude: 5.498483324,
        longitude: -73.07837993,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 267,
        name: 'PISBA',
        active: true,
        isCapital: false,
        divipola: '15550',
        latitude: 5.768131812,
        longitude: -72.43993232,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 268,
        name: 'PUERTO BOYACA',
        active: true,
        isCapital: false,
        divipola: '15572',
        latitude: 5.953466654,
        longitude: -74.4528581,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 269,
        name: 'QUIPAMA',
        active: true,
        isCapital: false,
        divipola: '15580',
        latitude: 5.595729831,
        longitude: -74.26857067,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 270,
        name: 'RAMIRIQUI',
        active: true,
        isCapital: false,
        divipola: '15599',
        latitude: 5.319934092,
        longitude: -73.310779,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 271,
        name: 'RAQUIRA',
        active: true,
        isCapital: false,
        divipola: '15600',
        latitude: 5.496268621,
        longitude: -73.62894438,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 272,
        name: 'RONDON',
        active: true,
        isCapital: false,
        divipola: '15621',
        latitude: 5.379947879,
        longitude: -73.19650995,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 273,
        name: 'SABOYA',
        active: true,
        isCapital: false,
        divipola: '15632',
        latitude: 5.699926051,
        longitude: -73.74799466,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 274,
        name: 'SACHICA',
        active: true,
        isCapital: false,
        divipola: '15638',
        latitude: 5.573464882,
        longitude: -73.543102,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 275,
        name: 'SAMACA',
        active: true,
        isCapital: false,
        divipola: '15646',
        latitude: 5.47053997,
        longitude: -73.5211756,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 276,
        name: 'SAN EDUARDO',
        active: true,
        isCapital: false,
        divipola: '15660',
        latitude: 5.234614686,
        longitude: -73.04914067,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 277,
        name: 'SAN JOSE DE PARE',
        active: true,
        isCapital: false,
        divipola: '15664',
        latitude: 5.994154088,
        longitude: -73.54386522,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 278,
        name: 'SAN LUIS DE GACENO',
        active: true,
        isCapital: false,
        divipola: '15667',
        latitude: 4.798203543,
        longitude: -73.13397018,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 279,
        name: 'SAN MATEO',
        active: true,
        isCapital: false,
        divipola: '15673',
        latitude: 6.395388812,
        longitude: -72.55184862,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 280,
        name: 'SAN MIGUEL DE SEMA',
        active: true,
        isCapital: false,
        divipola: '15676',
        latitude: 5.532326922,
        longitude: -73.74715898,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 281,
        name: 'SAN PABLO DE BORBUR',
        active: true,
        isCapital: false,
        divipola: '15681',
        latitude: 5.677345066,
        longitude: -74.11403749,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 282,
        name: 'SANTANA',
        active: true,
        isCapital: false,
        divipola: '15686',
        latitude: 6.057614971,
        longitude: -73.48974828,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 283,
        name: 'SANTA MARIA',
        active: true,
        isCapital: false,
        divipola: '15690',
        latitude: 4.823002556,
        longitude: -73.25377506,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 284,
        name: 'SANTA ROSA DE VITERBO',
        active: true,
        isCapital: false,
        divipola: '15693',
        latitude: 5.892950301,
        longitude: -72.9917278,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 285,
        name: 'SANTA SOFIA',
        active: true,
        isCapital: false,
        divipola: '15696',
        latitude: 5.731602716,
        longitude: -73.60366287,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 286,
        name: 'SATIVANORTE',
        active: true,
        isCapital: false,
        divipola: '15720',
        latitude: 6.13211793,
        longitude: -72.73032415,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 287,
        name: 'SATIVASUR',
        active: true,
        isCapital: false,
        divipola: '15723',
        latitude: 6.083405978,
        longitude: -72.72410815,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 288,
        name: 'SIACHOQUE',
        active: true,
        isCapital: false,
        divipola: '15740',
        latitude: 5.498747701,
        longitude: -73.21681778,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 289,
        name: 'SOATA',
        active: true,
        isCapital: false,
        divipola: '15753',
        latitude: 6.323088045,
        longitude: -72.69604089,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 290,
        name: 'SOCOTA',
        active: true,
        isCapital: false,
        divipola: '15755',
        latitude: 5.906513772,
        longitude: -72.53646361,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 291,
        name: 'SOCHA',
        active: true,
        isCapital: false,
        divipola: '15757',
        latitude: 5.960498836,
        longitude: -72.68239784,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 292,
        name: 'SOGAMOSO',
        active: true,
        isCapital: false,
        divipola: '15759',
        latitude: 5.646672053,
        longitude: -72.8709565,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 293,
        name: 'SOMONDOCO',
        active: true,
        isCapital: false,
        divipola: '15761',
        latitude: 4.970974064,
        longitude: -73.42878785,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 294,
        name: 'SORA',
        active: true,
        isCapital: false,
        divipola: '15762',
        latitude: 5.580573191,
        longitude: -73.44371838,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 295,
        name: 'SOTAQUIRA',
        active: true,
        isCapital: false,
        divipola: '15763',
        latitude: 5.763010553,
        longitude: -73.24352232,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 296,
        name: 'SORACA',
        active: true,
        isCapital: false,
        divipola: '15764',
        latitude: 5.494890461,
        longitude: -73.31899997,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 297,
        name: 'SUSACON',
        active: true,
        isCapital: false,
        divipola: '15774',
        latitude: 6.215200578,
        longitude: -72.71575634,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 298,
        name: 'SUTAMARCHAN',
        active: true,
        isCapital: false,
        divipola: '15776',
        latitude: 5.640030759,
        longitude: -73.62598773,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 299,
        name: 'SUTATENZA',
        active: true,
        isCapital: false,
        divipola: '15778',
        latitude: 5.030711335,
        longitude: -73.41224401,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 300,
        name: 'TASCO',
        active: true,
        isCapital: false,
        divipola: '15790',
        latitude: 5.882294313,
        longitude: -72.72626817,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 301,
        name: 'TENZA',
        active: true,
        isCapital: false,
        divipola: '15798',
        latitude: 5.071413139,
        longitude: -73.42479699,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 302,
        name: 'TIBANA',
        active: true,
        isCapital: false,
        divipola: '15804',
        latitude: 5.301116649,
        longitude: -73.3932521,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 303,
        name: 'TIBASOSA',
        active: true,
        isCapital: false,
        divipola: '15806',
        latitude: 5.747329389,
        longitude: -73.01114724,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 304,
        name: 'TINJACA',
        active: true,
        isCapital: false,
        divipola: '15808',
        latitude: 5.577566497,
        longitude: -73.67614572,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 305,
        name: 'TIPACOQUE',
        active: true,
        isCapital: false,
        divipola: '15810',
        latitude: 6.42035349,
        longitude: -72.69463583,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 306,
        name: 'TOCA',
        active: true,
        isCapital: false,
        divipola: '15814',
        latitude: 5.580254287,
        longitude: -73.1606969,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 307,
        name: 'TOGUI',
        active: true,
        isCapital: false,
        divipola: '15816',
        latitude: 5.921830062,
        longitude: -73.48921806,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 308,
        name: 'TOPAGA',
        active: true,
        isCapital: false,
        divipola: '15820',
        latitude: 5.765350303,
        longitude: -72.83672958,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 309,
        name: 'TOTA',
        active: true,
        isCapital: false,
        divipola: '15822',
        latitude: 5.501297215,
        longitude: -72.99633297,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 310,
        name: 'TUNUNGUA',
        active: true,
        isCapital: false,
        divipola: '15832',
        latitude: 5.720301516,
        longitude: -73.94330927,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 311,
        name: 'TURMEQUE',
        active: true,
        isCapital: false,
        divipola: '15835',
        latitude: 5.305697418,
        longitude: -73.50908714,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 312,
        name: 'TUTA',
        active: true,
        isCapital: false,
        divipola: '15837',
        latitude: 5.678126998,
        longitude: -73.17343053,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 313,
        name: 'TUTAZA',
        active: true,
        isCapital: false,
        divipola: '15839',
        latitude: 6.078051903,
        longitude: -72.85707832,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 314,
        name: 'UMBITA',
        active: true,
        isCapital: false,
        divipola: '15842',
        latitude: 5.217241368,
        longitude: -73.46338477,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 315,
        name: 'VENTAQUEMADA',
        active: true,
        isCapital: false,
        divipola: '15861',
        latitude: 5.383385481,
        longitude: -73.52097942,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 316,
        name: 'VIRACACHA',
        active: true,
        isCapital: false,
        divipola: '15879',
        latitude: 5.440558216,
        longitude: -73.26627456,
        department: { id: 15 },
        tipo: { id: 1 }
      },

      {
        id: 317,
        name: 'ZETAQUIRA',
        active: true,
        isCapital: false,
        divipola: '15897',
        latitude: 5.285635983,
        longitude: -73.16763091,
        department: { id: 15 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
