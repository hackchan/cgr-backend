import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933037 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 1006,
        name: 'CALI',
        active: true,
        isCapital: true,
        divipola: '76001',
        latitude: 3.399043723,
        longitude: -76.57649259,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1007,
        name: 'ALCALA',
        active: true,
        isCapital: false,
        divipola: '76020',
        latitude: 4.6788971,
        longitude: -75.78297932,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1008,
        name: 'ANDALUCIA',
        active: true,
        isCapital: false,
        divipola: '76036',
        latitude: 4.153314228,
        longitude: -76.16063341,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1009,
        name: 'ANSERMANUEVO',
        active: true,
        isCapital: false,
        divipola: '76041',
        latitude: 4.795927292,
        longitude: -76.02963049,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1010,
        name: 'ARGELIA',
        active: true,
        isCapital: false,
        divipola: '76054',
        latitude: 4.704287864,
        longitude: -76.14164999,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1011,
        name: 'BOLIVAR',
        active: true,
        isCapital: false,
        divipola: '76100',
        latitude: 4.393118861,
        longitude: -76.34982039,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1012,
        name: 'BUENAVENTURA',
        active: true,
        isCapital: false,
        divipola: '76109',
        latitude: 3.493340766,
        longitude: -77.11872832,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1013,
        name: 'GUADALAJARA DE BUGA',
        active: true,
        isCapital: false,
        divipola: '76111',
        latitude: 3.819854318,
        longitude: -75.98312419,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1014,
        name: 'BUGALAGRANDE',
        active: true,
        isCapital: false,
        divipola: '76113',
        latitude: 4.196852991,
        longitude: -76.0896103,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1015,
        name: 'CAICEDONIA',
        active: true,
        isCapital: false,
        divipola: '76122',
        latitude: 4.308997973,
        longitude: -75.83672567,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1016,
        name: 'CALIMA',
        active: true,
        isCapital: false,
        divipola: '76126',
        latitude: 3.923271619,
        longitude: -76.64260484,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1017,
        name: 'CANDELARIA',
        active: true,
        isCapital: false,
        divipola: '76130',
        latitude: 3.382091564,
        longitude: -76.38317663,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1018,
        name: 'CARTAGO',
        active: true,
        isCapital: false,
        divipola: '76147',
        latitude: 4.70684716,
        longitude: -75.91790846,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1019,
        name: 'DAGUA',
        active: true,
        isCapital: false,
        divipola: '76233',
        latitude: 3.649822218,
        longitude: -76.72039347,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1020,
        name: 'EL AGUILA',
        active: true,
        isCapital: false,
        divipola: '76243',
        latitude: 4.917562873,
        longitude: -76.06601001,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1021,
        name: 'EL CAIRO',
        active: true,
        isCapital: false,
        divipola: '76246',
        latitude: 4.756063701,
        longitude: -76.21502826,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1022,
        name: 'EL CERRITO',
        active: true,
        isCapital: false,
        divipola: '76248',
        latitude: 3.656072873,
        longitude: -76.30841784,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1023,
        name: 'EL DOVIO',
        active: true,
        isCapital: false,
        divipola: '76250',
        latitude: 4.539979729,
        longitude: -76.28762701,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1024,
        name: 'FLORIDA',
        active: true,
        isCapital: false,
        divipola: '76275',
        latitude: 3.304104295,
        longitude: -76.16477307,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1025,
        name: 'GINEBRA',
        active: true,
        isCapital: false,
        divipola: '76306',
        latitude: 3.74410441,
        longitude: -76.19082004,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1026,
        name: 'GUACARI',
        active: true,
        isCapital: false,
        divipola: '76318',
        latitude: 3.759414991,
        longitude: -76.34518277,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1027,
        name: 'JAMUNDI',
        active: true,
        isCapital: false,
        divipola: '76364',
        latitude: 3.213892389,
        longitude: -76.62760418,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1028,
        name: 'LA CUMBRE',
        active: true,
        isCapital: false,
        divipola: '76377',
        latitude: 3.694303106,
        longitude: -76.58989905,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1029,
        name: 'LA UNION',
        active: true,
        isCapital: false,
        divipola: '76400',
        latitude: 4.537937391,
        longitude: -76.10328983,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1030,
        name: 'LA VICTORIA',
        active: true,
        isCapital: false,
        divipola: '76403',
        latitude: 4.483511142,
        longitude: -75.96677303,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1031,
        name: 'OBANDO',
        active: true,
        isCapital: false,
        divipola: '76497',
        latitude: 4.597588666,
        longitude: -75.9491997,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1032,
        name: 'PALMIRA',
        active: true,
        isCapital: false,
        divipola: '76520',
        latitude: 3.558392876,
        longitude: -76.22779972,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1033,
        name: 'PRADERA',
        active: true,
        isCapital: false,
        divipola: '76563',
        latitude: 3.42063665,
        longitude: -76.17841841,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1034,
        name: 'RESTREPO',
        active: true,
        isCapital: false,
        divipola: '76606',
        latitude: 3.806494973,
        longitude: -76.53489853,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1035,
        name: 'RIOFRIO',
        active: true,
        isCapital: false,
        divipola: '76616',
        latitude: 4.109500298,
        longitude: -76.37105443,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1036,
        name: 'ROLDANILLO',
        active: true,
        isCapital: false,
        divipola: '76622',
        latitude: 4.443571848,
        longitude: -76.16824249,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1037,
        name: 'SAN PEDRO',
        active: true,
        isCapital: false,
        divipola: '76670',
        latitude: 3.98143244,
        longitude: -76.20836168,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1038,
        name: 'SEVILLA',
        active: true,
        isCapital: false,
        divipola: '76736',
        latitude: 4.193411919,
        longitude: -75.88818163,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1039,
        name: 'TORO',
        active: true,
        isCapital: false,
        divipola: '76823',
        latitude: 4.638421279,
        longitude: -76.08106176,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1040,
        name: 'TRUJILLO',
        active: true,
        isCapital: false,
        divipola: '76828',
        latitude: 4.233268116,
        longitude: -76.34292699,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1041,
        name: 'TULUA',
        active: true,
        isCapital: false,
        divipola: '76834',
        latitude: 4.02840797,
        longitude: -76.03250379,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1042,
        name: 'ULLOA',
        active: true,
        isCapital: false,
        divipola: '76845',
        latitude: 4.707718947,
        longitude: -75.77835903,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1043,
        name: 'VERSALLES',
        active: true,
        isCapital: false,
        divipola: '76863',
        latitude: 4.644242641,
        longitude: -76.25924483,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1044,
        name: 'VIJES',
        active: true,
        isCapital: false,
        divipola: '76869',
        latitude: 3.74365889,
        longitude: -76.47064718,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1045,
        name: 'YOTOCO',
        active: true,
        isCapital: false,
        divipola: '76890',
        latitude: 3.904130354,
        longitude: -76.39080435,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1046,
        name: 'YUMBO',
        active: true,
        isCapital: false,
        divipola: '76892',
        latitude: 3.595913669,
        longitude: -76.5109879,
        department: { id: 76 },
        tipo: { id: 1 }
      },

      {
        id: 1047,
        name: 'ZARZAL',
        active: true,
        isCapital: false,
        divipola: '76895',
        latitude: 4.35359875,
        longitude: -76.05065336,
        department: { id: 76 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
