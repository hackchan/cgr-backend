
import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933011 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [

      {
        id: 846,
        name: 'BUCARAMANGA',
        active: true,
        isCapital: true,
        divipola: '68001',
        latitude: 7.155833544,
        longitude: -73.11156997,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 847,
        name: 'AGUADA',
        active: true,
        isCapital: false,
        divipola: '68013',
        latitude: 6.182208476,
        longitude: -73.53038541,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 848,
        name: 'ALBANIA',
        active: true,
        isCapital: false,
        divipola: '68020',
        latitude: 5.788190519,
        longitude: -73.79236929,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 849,
        name: 'ARATOCA',
        active: true,
        isCapital: false,
        divipola: '68051',
        latitude: 6.716766585,
        longitude: -73.01162697,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 850,
        name: 'BARBOSA',
        active: true,
        isCapital: false,
        divipola: '68077',
        latitude: 5.955617327,
        longitude: -73.62345229,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 851,
        name: 'BARICHARA',
        active: true,
        isCapital: false,
        divipola: '68079',
        latitude: 6.647062543,
        longitude: -73.21518466,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 852,
        name: 'BARRANCABERMEJA',
        active: true,
        isCapital: false,
        divipola: '68081',
        latitude: 7.054074558,
        longitude: -73.78211646,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 853,
        name: 'BETULIA',
        active: true,
        isCapital: false,
        divipola: '68092',
        latitude: 7.033255886,
        longitude: -73.37872388,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 854,
        name: 'BOLIVAR',
        active: true,
        isCapital: false,
        divipola: '68101',
        latitude: 6.181715586,
        longitude: -73.92065703,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 855,
        name: 'CABRERA',
        active: true,
        isCapital: false,
        divipola: '68121',
        latitude: 6.562543673,
        longitude: -73.25034892,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 856,
        name: 'CALIFORNIA',
        active: true,
        isCapital: false,
        divipola: '68132',
        latitude: 7.331565443,
        longitude: -72.95131825,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 857,
        name: 'CAPITANEJO',
        active: true,
        isCapital: false,
        divipola: '68147',
        latitude: 6.520200095,
        longitude: -72.67435203,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 858,
        name: 'CARCASI',
        active: true,
        isCapital: false,
        divipola: '68152',
        latitude: 6.659675274,
        longitude: -72.56968434,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 859,
        name: 'CEPITA',
        active: true,
        isCapital: false,
        divipola: '68160',
        latitude: 6.752465533,
        longitude: -72.92924629,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 860,
        name: 'CERRITO',
        active: true,
        isCapital: false,
        divipola: '68162',
        latitude: 6.903923173,
        longitude: -72.64536324,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 861,
        name: 'CHARALA',
        active: true,
        isCapital: false,
        divipola: '68167',
        latitude: 6.35099819,
        longitude: -73.06101382,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 862,
        name: 'CHARTA',
        active: true,
        isCapital: false,
        divipola: '68169',
        latitude: 7.282973001,
        longitude: -72.97829057,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 863,
        name: 'CHIMA',
        active: true,
        isCapital: false,
        divipola: '68176',
        latitude: 6.361627641,
        longitude: -73.40172144,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 864,
        name: 'CHIPATA',
        active: true,
        isCapital: false,
        divipola: '68179',
        latitude: 6.067944658,
        longitude: -73.63239132,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 865,
        name: 'CIMITARRA',
        active: true,
        isCapital: false,
        divipola: '68190',
        latitude: 6.40972961,
        longitude: -74.17030427,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 866,
        name: 'CONCEPCION',
        active: true,
        isCapital: false,
        divipola: '68207',
        latitude: 6.76062337,
        longitude: -72.61815735,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 867,
        name: 'CONFINES',
        active: true,
        isCapital: false,
        divipola: '68209',
        latitude: 6.342314443,
        longitude: -73.25014013,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 868,
        name: 'CONTRATACION',
        active: true,
        isCapital: false,
        divipola: '68211',
        latitude: 6.303116611,
        longitude: -73.50211527,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 869,
        name: 'COROMORO',
        active: true,
        isCapital: false,
        divipola: '68217',
        latitude: 6.234735779,
        longitude: -72.98176803,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 870,
        name: 'CURITI',
        active: true,
        isCapital: false,
        divipola: '68229',
        latitude: 6.608966483,
        longitude: -73.05897888,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 871,
        name: 'EL CARMEN DE CHUCURI',
        active: true,
        isCapital: false,
        divipola: '68235',
        latitude: 6.664260002,
        longitude: -73.56475288,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 872,
        name: 'EL GUACAMAYO',
        active: true,
        isCapital: false,
        divipola: '68245',
        latitude: 6.236115743,
        longitude: -73.4977605,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 873,
        name: 'EL PENON',
        active: true,
        isCapital: false,
        divipola: '68250',
        latitude: 6.123389691,
        longitude: -74.00040397,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 874,
        name: 'EL PLAYON',
        active: true,
        isCapital: false,
        divipola: '68255',
        latitude: 7.524284721,
        longitude: -73.18158192,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 875,
        name: 'ENCINO',
        active: true,
        isCapital: false,
        divipola: '68264',
        latitude: 6.079061224,
        longitude: -73.06206665,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 876,
        name: 'ENCISO',
        active: true,
        isCapital: false,
        divipola: '68266',
        latitude: 6.65824115,
        longitude: -72.68027939,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 877,
        name: 'FLORIAN',
        active: true,
        isCapital: false,
        divipola: '68271',
        latitude: 5.801106291,
        longitude: -73.95524931,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 878,
        name: 'FLORIDABLANCA',
        active: true,
        isCapital: false,
        divipola: '68276',
        latitude: 7.079704598,
        longitude: -73.0679925,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 879,
        name: 'GALAN',
        active: true,
        isCapital: false,
        divipola: '68296',
        latitude: 6.671810994,
        longitude: -73.32467124,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 880,
        name: 'GAMBITA',
        active: true,
        isCapital: false,
        divipola: '68298',
        latitude: 5.924383558,
        longitude: -73.31939934,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 881,
        name: 'GIRON',
        active: true,
        isCapital: false,
        divipola: '68307',
        latitude: 6.976734127,
        longitude: -73.205267,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 882,
        name: 'GUACA',
        active: true,
        isCapital: false,
        divipola: '68318',
        latitude: 6.9434341,
        longitude: -72.82369873,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 883,
        name: 'GUADALUPE',
        active: true,
        isCapital: false,
        divipola: '68320',
        latitude: 6.233278248,
        longitude: -73.40977445,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 884,
        name: 'GUAPOTA',
        active: true,
        isCapital: false,
        divipola: '68322',
        latitude: 6.319299865,
        longitude: -73.33115275,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 885,
        name: 'GUAVATA',
        active: true,
        isCapital: false,
        divipola: '68324',
        latitude: 5.944894844,
        longitude: -73.72173671,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 886,
        name: 'GUEPSA',
        active: true,
        isCapital: false,
        divipola: '68327',
        latitude: 6.04656148,
        longitude: -73.57847854,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 887,
        name: 'HATO',
        active: true,
        isCapital: false,
        divipola: '68344',
        latitude: 6.559878299,
        longitude: -73.36178841,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 888,
        name: 'JESUS MARIA',
        active: true,
        isCapital: false,
        divipola: '68368',
        latitude: 5.872705896,
        longitude: -73.78997419,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 889,
        name: 'JORDAN',
        active: true,
        isCapital: false,
        divipola: '68370',
        latitude: 6.710814846,
        longitude: -73.1211236,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 890,
        name: 'LA BELLEZA',
        active: true,
        isCapital: false,
        divipola: '68377',
        latitude: 5.895724341,
        longitude: -74.04676575,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 891,
        name: 'LANDAZURI',
        active: true,
        isCapital: false,
        divipola: '68385',
        latitude: 6.385234814,
        longitude: -73.78760899,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 892,
        name: 'LA PAZ',
        active: true,
        isCapital: false,
        divipola: '68397',
        latitude: 6.21737437,
        longitude: -73.62977195,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 893,
        name: 'LEBRIJA',
        active: true,
        isCapital: false,
        divipola: '68406',
        latitude: 7.204060063,
        longitude: -73.29138097,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 894,
        name: 'LOS SANTOS',
        active: true,
        isCapital: false,
        divipola: '68418',
        latitude: 6.812162934,
        longitude: -73.10785086,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 895,
        name: 'MACARAVITA',
        active: true,
        isCapital: false,
        divipola: '68425',
        latitude: 6.513745303,
        longitude: -72.58536492,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 896,
        name: 'MALAGA',
        active: true,
        isCapital: false,
        divipola: '68432',
        latitude: 6.720222349,
        longitude: -72.73841091,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 897,
        name: 'MATANZA',
        active: true,
        isCapital: false,
        divipola: '68444',
        latitude: 7.348778319,
        longitude: -73.05438997,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 898,
        name: 'MOGOTES',
        active: true,
        isCapital: false,
        divipola: '68464',
        latitude: 6.492532315,
        longitude: -72.95834772,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 899,
        name: 'MOLAGAVITA',
        active: true,
        isCapital: false,
        divipola: '68468',
        latitude: 6.643290559,
        longitude: -72.81916274,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 900,
        name: 'OCAMONTE',
        active: true,
        isCapital: false,
        divipola: '68498',
        latitude: 6.355368858,
        longitude: -73.12211833,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 901,
        name: 'OIBA',
        active: true,
        isCapital: false,
        divipola: '68500',
        latitude: 6.225596216,
        longitude: -73.27961515,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 902,
        name: 'ONZAGA',
        active: true,
        isCapital: false,
        divipola: '68502',
        latitude: 6.335194548,
        longitude: -72.81205838,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 903,
        name: 'PALMAR',
        active: true,
        isCapital: false,
        divipola: '68522',
        latitude: 6.525876964,
        longitude: -73.28247337,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 904,
        name: 'PALMAS DEL SOCORRO',
        active: true,
        isCapital: false,
        divipola: '68524',
        latitude: 6.391750107,
        longitude: -73.28273174,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 905,
        name: 'PARAMO',
        active: true,
        isCapital: false,
        divipola: '68533',
        latitude: 6.416631131,
        longitude: -73.17148232,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 906,
        name: 'PIEDECUESTA',
        active: true,
        isCapital: false,
        divipola: '68547',
        latitude: 6.97082104,
        longitude: -73.01481196,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 907,
        name: 'PINCHOTE',
        active: true,
        isCapital: false,
        divipola: '68549',
        latitude: 6.513892626,
        longitude: -73.17570986,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 908,
        name: 'PUENTE NACIONAL',
        active: true,
        isCapital: false,
        divipola: '68572',
        latitude: 5.831129906,
        longitude: -73.67841815,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 909,
        name: 'PUERTO PARRA',
        active: true,
        isCapital: false,
        divipola: '68573',
        latitude: 6.685278856,
        longitude: -73.95761256,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 910,
        name: 'PUERTO WILCHES',
        active: true,
        isCapital: false,
        divipola: '68575',
        latitude: 7.398198257,
        longitude: -73.8354696,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 911,
        name: 'RIONEGRO',
        active: true,
        isCapital: false,
        divipola: '68615',
        latitude: 7.474226085,
        longitude: -73.37246417,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 912,
        name: 'SABANA DE TORRES',
        active: true,
        isCapital: false,
        divipola: '68655',
        latitude: 7.4065422,
        longitude: -73.57131807,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 913,
        name: 'SAN ANDRES',
        active: true,
        isCapital: false,
        divipola: '68669',
        latitude: 6.796483063,
        longitude: -72.81613202,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 914,
        name: 'SAN BENITO',
        active: true,
        isCapital: false,
        divipola: '68673',
        latitude: 6.076525355,
        longitude: -73.55295302,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 915,
        name: 'SAN GIL',
        active: true,
        isCapital: false,
        divipola: '68679',
        latitude: 6.550778765,
        longitude: -73.11887911,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 916,
        name: 'SAN JOAQUIN',
        active: true,
        isCapital: false,
        divipola: '68682',
        latitude: 6.459879823,
        longitude: -72.85471883,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 917,
        name: 'SAN JOSE DE MIRANDA',
        active: true,
        isCapital: false,
        divipola: '68684',
        latitude: 6.629400185,
        longitude: -72.73976423,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 918,
        name: 'SAN MIGUEL',
        active: true,
        isCapital: false,
        divipola: '68686',
        latitude: 6.568121541,
        longitude: -72.64322497,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 919,
        name: 'SAN VICENTE DE CHUCURI',
        active: true,
        isCapital: false,
        divipola: '68689',
        latitude: 6.894292346,
        longitude: -73.53900334,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 920,
        name: 'SANTA BARBARA',
        active: true,
        isCapital: false,
        divipola: '68705',
        latitude: 6.988084711,
        longitude: -72.89608933,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 921,
        name: 'SANTA HELENA DEL OPON',
        active: true,
        isCapital: false,
        divipola: '68720',
        latitude: 6.40890734,
        longitude: -73.58206609,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 922,
        name: 'SIMACOTA',
        active: true,
        isCapital: false,
        divipola: '68745',
        latitude: 6.494231551,
        longitude: -73.45910992,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 923,
        name: 'SOCORRO',
        active: true,
        isCapital: false,
        divipola: '68755',
        latitude: 6.462088241,
        longitude: -73.24436001,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 924,
        name: 'SUAITA',
        active: true,
        isCapital: false,
        divipola: '68770',
        latitude: 6.101499739,
        longitude: -73.36225795,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 925,
        name: 'SUCRE',
        active: true,
        isCapital: false,
        divipola: '68773',
        latitude: 5.983203734,
        longitude: -73.95936235,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 926,
        name: 'SURATA',
        active: true,
        isCapital: false,
        divipola: '68780',
        latitude: 7.475402063,
        longitude: -72.98779966,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 927,
        name: 'TONA',
        active: true,
        isCapital: false,
        divipola: '68820',
        latitude: 7.170891099,
        longitude: -72.93970443,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 928,
        name: 'VALLE DE SAN JOSE',
        active: true,
        isCapital: false,
        divipola: '68855',
        latitude: 6.434578919,
        longitude: -73.10997171,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 929,
        name: 'VELEZ',
        active: true,
        isCapital: false,
        divipola: '68861',
        latitude: 6.00741043,
        longitude: -73.69057256,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 930,
        name: 'VETAS',
        active: true,
        isCapital: false,
        divipola: '68867',
        latitude: 7.322219563,
        longitude: -72.88156901,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 931,
        name: 'VILLANUEVA',
        active: true,
        isCapital: false,
        divipola: '68872',
        latitude: 6.685867326,
        longitude: -73.16396916,
        department: { id: 68 },
        tipo: { id: 1 }
      },

      {
        id: 932,
        name: 'ZAPATOCA',
        active: true,
        isCapital: false,
        divipola: '68895',
        latitude: 6.813725566,
        longitude: -73.30975044,
        department: { id: 68 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
