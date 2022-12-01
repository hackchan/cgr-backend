import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933058 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1055,
        name: 'ALCALDIA DE YOPAL',
        nit: '891855017',
        doctec: true,
        cgn: '210185001',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 1055 }
      },

      {
        id: 1056,
        name: 'ALCALDIA DE AGUAZUL',
        nit: '891855200',
        doctec: true,
        cgn: '211085010',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 1056 }
      },

      {
        id: 1057,
        name: 'ALCALDIA DE CHAMEZA',
        nit: '800086017',
        doctec: true,
        cgn: '211585015',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1057 }
      },

      {
        id: 1058,
        name: 'ALCALDIA DE HATO COROZAL',
        nit: '800012638',
        doctec: true,
        cgn: '212585125',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1058 }
      },

      {
        id: 1059,
        name: 'ALCALDIA DE LA SALINA',
        nit: '800103657',
        doctec: true,
        cgn: '213685136',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1059 }
      },

      {
        id: 1060,
        name: 'ALCALDIA DE MANI',
        nit: '800008456',
        doctec: true,
        cgn: '213985139',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1060 }
      },

      {
        id: 1061,
        name: 'ALCALDIA DE MONTERREY',
        nit: '891857824',
        doctec: true,
        cgn: '216285162',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1061 }
      },

      {
        id: 1062,
        name: 'ALCALDIA DE NUNCHIA',
        nit: '800099425',
        doctec: true,
        cgn: '212585225',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1062 }
      },

      {
        id: 1063,
        name: 'ALCALDIA DE OROCUE',
        nit: '892099392',
        doctec: true,
        cgn: '213085230',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1063 }
      },

      {
        id: 1064,
        name: 'ALCALDIA DE PAZ DE ARIPORO',
        nit: '800103659',
        doctec: true,
        cgn: '215085250',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1064 }
      },

      {
        id: 1065,
        name: 'ALCALDIA DE PORE',
        nit: '800099429',
        doctec: true,
        cgn: '216385263',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1065 }
      },

      {
        id: 1066,
        name: 'ALCALDIA DE RECETOR',
        nit: '800103661',
        doctec: true,
        cgn: '217985279',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1066 }
      },

      {
        id: 1067,
        name: 'ALCALDIA DE SABANALARGA',
        nit: '891857823',
        doctec: true,
        cgn: '210085300',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1067 }
      },

      {
        id: 1068,
        name: 'ALCALDIA DE SACAMA',
        nit: '800103663',
        doctec: true,
        cgn: '211585315',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1068 }
      },

      {
        id: 1069,
        name: 'ALCALDIA DE SAN LUIS DE PALENQUE',
        nit: '800103720',
        doctec: true,
        cgn: '212585325',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1069 }
      },

      {
        id: 1070,
        name: 'ALCALDIA DE TAMARA',
        nit: '800099431',
        doctec: true,
        cgn: '210085400',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1070 }
      },

      {
        id: 1071,
        name: 'ALCALDIA DE TAURAMENA',
        nit: '800012873',
        doctec: true,
        cgn: '211085410',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 1071 }
      },

      {
        id: 1072,
        name: 'ALCALDIA DE TRINIDAD',
        nit: '891857861',
        doctec: true,
        cgn: '213085430',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1072 }
      },

      {
        id: 1073,
        name: 'ALCALDIA DE VILLANUEVA',
        nit: '892099475',
        doctec: true,
        cgn: '214085440',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 1073 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
