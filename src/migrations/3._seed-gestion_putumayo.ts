import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933070 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1074,
        name: 'ALCALDIA DE MOCOA',
        nit: '800102891',
        doctec: true,
        cgn: '210186001',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1074 }
      },

      {
        id: 1075,
        name: 'ALCALDIA DE COLON',
        nit: '800018650',
        doctec: true,
        cgn: '211986219',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1075 }
      },

      {
        id: 1076,
        name: 'ALCALDIA DE ORITO',
        nit: '800102896',
        doctec: true,
        cgn: '212086320',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1076 }
      },

      {
        id: 1077,
        name: 'ALCALDIA DE PUERTO ASIS',
        nit: '891200461',
        doctec: true,
        cgn: '216886568',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1077 }
      },

      {
        id: 1078,
        name: 'ALCALDIA DE PUERTO CAICEDO',
        nit: '800229887',
        doctec: true,
        cgn: '216986569',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1078 }
      },

      {
        id: 1079,
        name: 'ALCALDIA DE PUERTO GUZMAN',
        nit: '800222489',
        doctec: true,
        cgn: '217186571',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1079 }
      },

      {
        id: 1080,
        name: 'ALCALDIA DE PUERTO LEGUIZAMO',
        nit: '891200513',
        doctec: true,
        cgn: '217386573',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1080 }
      },

      {
        id: 1081,
        name: 'ALCALDIA DE SIBUNDOY',
        nit: '891201645',
        doctec: true,
        cgn: '214986749',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1081 }
      },

      {
        id: 1082,
        name: 'ALCALDIA DE SAN FRANCISCO',
        nit: '800102903',
        doctec: true,
        cgn: '215586755',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1082 }
      },

      {
        id: 1083,
        name: 'ALCALDIA DE SAN MIGUEL',
        nit: '800252922',
        doctec: true,
        cgn: '215786757',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1083 }
      },

      {
        id: 1084,
        name: 'ALCALDIA DE SANTIAGO',
        nit: '800102906',
        doctec: true,
        cgn: '216086760',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1084 }
      },

      {
        id: 1085,
        name: 'ALCALDIA DE VALLE DEL GUAMUEZ',
        nit: '800102912',
        doctec: true,
        cgn: '216586865',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1085 }
      },

      {
        id: 1086,
        name: 'ALCALDIA DE VILLAGARZON',
        nit: '800054249',
        doctec: true,
        cgn: '218586885',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1086 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
