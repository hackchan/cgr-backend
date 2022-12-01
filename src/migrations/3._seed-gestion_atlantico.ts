import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933053 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 126,
        name: 'ALCALDIA DE BARRANQUILLA',
        nit: '890102018',
        doctec: true,
        cgn: '210108001',
        categoria: { id: 7 },
        subsector: { id: 23 },
        municipio: { id: 126 }
      },

      {
        id: 127,
        name: 'ALCALDIA DE BARANOA',
        nit: '890112371',
        doctec: true,
        cgn: '217808078',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 127 }
      },

      {
        id: 128,
        name: 'ALCALDIA DE CAMPO DE LA CRUZ',
        nit: '800094462',
        doctec: true,
        cgn: '213708137',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 128 }
      },

      {
        id: 129,
        name: 'ALCALDIA DE CANDELARIA',
        nit: '800094466',
        doctec: true,
        cgn: '214108141',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 129 }
      },

      {
        id: 130,
        name: 'ALCALDIA DE GALAPA',
        nit: '890102472',
        doctec: true,
        cgn: '219608296',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 130 }
      },

      {
        id: 131,
        name: 'ALCALDIA DE JUAN DE ACOSTA',
        nit: '800069901',
        doctec: true,
        cgn: '217208372',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 131 }
      },

      {
        id: 132,
        name: 'ALCALDIA DE LURUACO',
        nit: '890103003',
        doctec: true,
        cgn: '212108421',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 132 }
      },

      {
        id: 133,
        name: 'ALCALDIA DE MALAMBO',
        nit: '890114335',
        doctec: true,
        cgn: '213308433',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 133 }
      },

      {
        id: 134,
        name: 'ALCALDIA DE MANATI',
        nit: '800019218',
        doctec: true,
        cgn: '213608436',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 134 }
      },

      {
        id: 135,
        name: 'ALCALDIA DE PALMAR DE VARELA',
        nit: '800094449',
        doctec: true,
        cgn: '212008520',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 135 }
      },

      {
        id: 136,
        name: 'ALCALDIA DE PIOJO',
        nit: '800094457',
        doctec: true,
        cgn: '214908549',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 136 }
      },

      {
        id: 137,
        name: 'ALCALDIA DE POLONUEVO',
        nit: '800076751',
        doctec: true,
        cgn: '215808558',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 137 }
      },

      {
        id: 138,
        name: 'ALCALDIA DE PONEDERA',
        nit: '890116278',
        doctec: true,
        cgn: '216008560',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 138 }
      },

      {
        id: 139,
        name: 'ALCALDIA DE PUERTO COLOMBIA',
        nit: '800094386',
        doctec: true,
        cgn: '217308573',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 139 }
      },

      {
        id: 140,
        name: 'ALCALDIA DE REPELON',
        nit: '890103962',
        doctec: true,
        cgn: '210608606',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 140 }
      },

      {
        id: 141,
        name: 'ALCALDIA DE SABANAGRANDE',
        nit: '890115982',
        doctec: true,
        cgn: '213408634',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 141 }
      },

      {
        id: 142,
        name: 'ALCALDIA DE SABANALARGA',
        nit: '800094844',
        doctec: true,
        cgn: '213808638',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 142 }
      },

      {
        id: 143,
        name: 'ALCALDIA DE SANTA LUCIA',
        nit: '800019254',
        doctec: true,
        cgn: '217508675',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 143 }
      },

      {
        id: 144,
        name: 'ALCALDIA DE SANTO TOMAS',
        nit: '800116284',
        doctec: true,
        cgn: '218508685',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 144 }
      },

      {
        id: 145,
        name: 'ALCALDIA DE SOLEDAD',
        nit: '890106291',
        doctec: true,
        cgn: '215808758',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 145 }
      },

      {
        id: 146,
        name: 'ALCALDIA DE SUAN',
        nit: '890116159',
        doctec: true,
        cgn: '217008770',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 146 }
      },

      {
        id: 147,
        name: 'ALCALDIA DE TUBARA',
        nit: '800053552',
        doctec: true,
        cgn: '213208832',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 147 }
      },

      {
        id: 148,
        name: 'ALCALDIA DE USIACURI',
        nit: '800094378',
        doctec: true,
        cgn: '214908849',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 148 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
