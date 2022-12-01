import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933077 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1006,
        name: 'ALCALDIA DE CALI',
        nit: '890399011',
        doctec: true,
        cgn: '210176001',
        categoria: { id: 7 },
        subsector: { id: 23 },
        municipio: { id: 1006 }
      },

      {
        id: 1007,
        name: 'ALCALDIA DE ALCALA',
        nit: '891901079',
        doctec: true,
        cgn: '212076020',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1007 }
      },

      {
        id: 1008,
        name: 'ALCALDIA DE ANDALUCIA',
        nit: '891900443',
        doctec: true,
        cgn: '213676036',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1008 }
      },

      {
        id: 1009,
        name: 'ALCALDIA DE ANSERMANUEVO',
        nit: '800100532',
        doctec: true,
        cgn: '214176041',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1009 }
      },

      {
        id: 1010,
        name: 'ALCALDIA DE ARGELIA',
        nit: '891901019',
        doctec: true,
        cgn: '215476054',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1010 }
      },

      {
        id: 1011,
        name: 'ALCALDIA DE BOLIVAR',
        nit: '891900945',
        doctec: true,
        cgn: '210076100',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1011 }
      },

      {
        id: 1012,
        name: 'ALCALDIA DE BUENAVENTURA',
        nit: '890399045',
        doctec: true,
        cgn: '210976109',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 1012 }
      },

      {
        id: 1013,
        name: 'ALCALDIA DE GUADALAJARA DE BUGA',
        nit: '891380033',
        doctec: true,
        cgn: '211176111',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 1013 }
      },

      {
        id: 1014,
        name: 'ALCALDIA DE BUGALAGRANDE',
        nit: '891900353',
        doctec: true,
        cgn: '211376113',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 1014 }
      },

      {
        id: 1015,
        name: 'ALCALDIA DE CAICEDONIA',
        nit: '891900660',
        doctec: true,
        cgn: '212276122',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1015 }
      },

      {
        id: 1016,
        name: 'ALCALDIA DE CALIMA',
        nit: '890309611',
        doctec: true,
        cgn: '212676126',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1016 }
      },

      {
        id: 1017,
        name: 'ALCALDIA DE CANDELARIA',
        nit: '891380038',
        doctec: true,
        cgn: '213076130',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 1017 }
      },

      {
        id: 1018,
        name: 'ALCALDIA DE CARTAGO',
        nit: '891900493',
        doctec: true,
        cgn: '214776147',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 1018 }
      },

      {
        id: 1019,
        name: 'ALCALDIA DE DAGUA',
        nit: '800100514',
        doctec: true,
        cgn: '213376233',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1019 }
      },

      {
        id: 1020,
        name: 'ALCALDIA DE EL AGUILA',
        nit: '800100518',
        doctec: true,
        cgn: '214376243',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1020 }
      },

      {
        id: 1021,
        name: 'ALCALDIA DE EL CAIRO',
        nit: '800100515',
        doctec: true,
        cgn: '214676246',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1021 }
      },

      {
        id: 1022,
        name: 'ALCALDIA DE EL CERRITO',
        nit: '800100533',
        doctec: true,
        cgn: '214876248',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 1022 }
      },

      {
        id: 1023,
        name: 'ALCALDIA DE EL DOVIO',
        nit: '891901223',
        doctec: true,
        cgn: '215076250',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1023 }
      },

      {
        id: 1024,
        name: 'ALCALDIA DE FLORIDA',
        nit: '800100519',
        doctec: true,
        cgn: '217576275',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1024 }
      },

      {
        id: 1025,
        name: 'ALCALDIA DE GINEBRA',
        nit: '800100520',
        doctec: true,
        cgn: '210676306',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1025 }
      },

      {
        id: 1026,
        name: 'ALCALDIA DE GUACARI',
        nit: '891380089',
        doctec: true,
        cgn: '211876318',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1026 }
      },

      {
        id: 1027,
        name: 'ALCALDIA DE JAMUNDI',
        nit: '890399046',
        doctec: true,
        cgn: '216476364',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 1027 }
      },

      {
        id: 1028,
        name: 'ALCALDIA DE LA CUMBRE',
        nit: '800100521',
        doctec: true,
        cgn: '217776377',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1028 }
      },

      {
        id: 1029,
        name: 'ALCALDIA DE LA UNION',
        nit: '891901109',
        doctec: true,
        cgn: '210076400',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1029 }
      },

      {
        id: 1030,
        name: 'ALCALDIA DE LA VICTORIA',
        nit: '800100524',
        doctec: true,
        cgn: '210376403',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1030 }
      },

      {
        id: 1031,
        name: 'ALCALDIA DE OBANDO',
        nit: '891900902',
        doctec: true,
        cgn: '219776497',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1031 }
      },

      {
        id: 1032,
        name: 'ALCALDIA DE PALMIRA',
        nit: '891380007',
        doctec: true,
        cgn: '212076520',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 1032 }
      },

      {
        id: 1033,
        name: 'ALCALDIA DE PRADERA',
        nit: '891380115',
        doctec: true,
        cgn: '216376563',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1033 }
      },

      {
        id: 1034,
        name: 'ALCALDIA DE RESTREPO',
        nit: '891902191',
        doctec: true,
        cgn: '210676606',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1034 }
      },

      {
        id: 1035,
        name: 'ALCALDIA DE RIOFRIO',
        nit: '891900357',
        doctec: true,
        cgn: '211676616',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1035 }
      },

      {
        id: 1036,
        name: 'ALCALDIA DE ROLDANILLO',
        nit: '891900289',
        doctec: true,
        cgn: '212276622',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1036 }
      },

      {
        id: 1037,
        name: 'ALCALDIA DE SAN PEDRO',
        nit: '800100526',
        doctec: true,
        cgn: '217076670',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1037 }
      },

      {
        id: 1038,
        name: 'ALCALDIA DE SEVILLA',
        nit: '800100527',
        doctec: true,
        cgn: '213676736',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1038 }
      },

      {
        id: 1039,
        name: 'ALCALDIA DE TORO',
        nit: '891900985',
        doctec: true,
        cgn: '212376823',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1039 }
      },

      {
        id: 1040,
        name: 'ALCALDIA DE TRUJILLO',
        nit: '891900764',
        doctec: true,
        cgn: '212876828',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1040 }
      },

      {
        id: 1041,
        name: 'ALCALDIA DE TULUA',
        nit: '891900272',
        doctec: true,
        cgn: '213476834',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 1041 }
      },

      {
        id: 1042,
        name: 'ALCALDIA DE ULLOA',
        nit: '800100529',
        doctec: true,
        cgn: '214576845',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1042 }
      },

      {
        id: 1043,
        name: 'ALCALDIA DE VERSALLES',
        nit: '891901155',
        doctec: true,
        cgn: '216376863',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1043 }
      },

      {
        id: 1044,
        name: 'ALCALDIA DE VIJES',
        nit: '800243022',
        doctec: true,
        cgn: '216976869',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1044 }
      },

      {
        id: 1045,
        name: 'ALCALDIA DE YOTOCO',
        nit: '800100531',
        doctec: true,
        cgn: '219076890',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1045 }
      },

      {
        id: 1046,
        name: 'ALCALDIA DE YUMBO',
        nit: '890399025',
        doctec: true,
        cgn: '219276892',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 1046 }
      },

      {
        id: 1047,
        name: 'ALCALDIA DE ZARZAL',
        nit: '891900624',
        doctec: true,
        cgn: '219576895',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 1047 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
