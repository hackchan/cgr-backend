import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933075 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1087,
        name: 'ALCALDIA DE PROVIDENCIA',
        nit: '800103021',
        doctec: true,
        cgn: '216488564',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 1087 }
      },

      {
        id: 1088,
        name: 'ALCALDIA DE LETICIA',
        nit: '899999302',
        doctec: true,
        cgn: '210191001',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 1088 }
      },

      {
        id: 1096,
        name: 'ALCALDIA DE PUERTO NARINO',
        nit: '800103161',
        doctec: true,
        cgn: '214091540',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1096 }
      },

      {
        id: 1099,
        name: 'ALCALDIA DE INIRIDA',
        nit: '892099105',
        doctec: true,
        cgn: '210194001',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1099 }
      },

      {
        id: 1100,
        name: 'ALCALDIA DE BARRANCOMINAS',
        nit: '901362662',
        doctec: true,
        cgn: '923272927',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1100 }
      },

      {
        id: 1107,
        name: 'ALCALDIA DE SAN JOSE DEL GUAVIARE',
        nit: '800103180',
        doctec: true,
        cgn: '210195001',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1107 }
      },

      {
        id: 1108,
        name: 'ALCALDIA DE CALAMAR',
        nit: '800191431',
        doctec: true,
        cgn: '211595015',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1108 }
      },

      {
        id: 1109,
        name: 'ALCALDIA DE EL RETORNO',
        nit: '800191427',
        doctec: true,
        cgn: '212595025',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1109 }
      },

      {
        id: 1110,
        name: 'ALCALDIA DE MIRAFLORES',
        nit: '800103198',
        doctec: true,
        cgn: '210095200',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1110 }
      },

      {
        id: 1111,
        name: 'ALCALDIA DE MITU',
        nit: '892099233',
        doctec: true,
        cgn: '210197001',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1111 }
      },

      {
        id: 1112,
        name: 'ALCALDIA DE CARURU',
        nit: '832000605',
        doctec: true,
        cgn: '216197161',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1112 }
      },

      {
        id: 1114,
        name: 'ALCALDIA DE TARAIRA',
        nit: '832000219',
        doctec: true,
        cgn: '216697666',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1114 }
      },

      {
        id: 1117,
        name: 'ALCALDIA DE PUERTO CARRENO',
        nit: '892099305',
        doctec: true,
        cgn: '210199001',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1117 }
      },

      {
        id: 1118,
        name: 'ALCALDIA DE LA PRIMAVERA',
        nit: '800103308',
        doctec: true,
        cgn: '212499524',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1118 }
      },

      {
        id: 1119,
        name: 'ALCALDIA DE SANTA ROSALIA',
        nit: '800103318',
        doctec: true,
        cgn: '212499624',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1119 }
      },

      {
        id: 1120,
        name: 'ALCALDIA DE CUMARIBO',
        nit: '842000017',
        doctec: true,
        cgn: '217399773',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 1120 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
