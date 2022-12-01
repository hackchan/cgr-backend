import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933013 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 126,
        name: 'BARRANQUILLA',
        active: true,
        isCapital: true,
        divipola: '08001',
        latitude: 10.98152051,
        longitude: -74.82771544,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 127,
        name: 'BARANOA',
        active: true,
        isCapital: false,
        divipola: '08078',
        latitude: 10.79329302,
        longitude: -74.92219491,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 128,
        name: 'CAMPO DE LA CRUZ',
        active: true,
        isCapital: false,
        divipola: '08137',
        latitude: 10.38405079,
        longitude: -74.88466039,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 129,
        name: 'CANDELARIA',
        active: true,
        isCapital: false,
        divipola: '08141',
        latitude: 10.48902047,
        longitude: -74.87756627,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 130,
        name: 'GALAPA',
        active: true,
        isCapital: false,
        divipola: '08296',
        latitude: 10.89771991,
        longitude: -74.88708788,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 131,
        name: 'JUAN DE ACOSTA',
        active: true,
        isCapital: false,
        divipola: '08372',
        latitude: 10.82306503,
        longitude: -75.07841904,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 132,
        name: 'LURUACO',
        active: true,
        isCapital: false,
        divipola: '08421',
        latitude: 10.63503116,
        longitude: -75.15402741,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 133,
        name: 'MALAMBO',
        active: true,
        isCapital: false,
        divipola: '08433',
        latitude: 10.84828864,
        longitude: -74.80617555,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 134,
        name: 'MANATI',
        active: true,
        isCapital: false,
        divipola: '08436',
        latitude: 10.45414555,
        longitude: -74.98477367,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 135,
        name: 'PALMAR DE VARELA',
        active: true,
        isCapital: false,
        divipola: '08520',
        latitude: 10.69481208,
        longitude: -74.7701509,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 136,
        name: 'PIOJO',
        active: true,
        isCapital: false,
        divipola: '08549',
        latitude: 10.74078959,
        longitude: -75.14366034,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 137,
        name: 'POLONUEVO',
        active: true,
        isCapital: false,
        divipola: '08558',
        latitude: 10.76740141,
        longitude: -74.85414844,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 138,
        name: 'PONEDERA',
        active: true,
        isCapital: false,
        divipola: '08560',
        latitude: 10.59465102,
        longitude: -74.79847316,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 139,
        name: 'PUERTO COLOMBIA',
        active: true,
        isCapital: false,
        divipola: '08573',
        latitude: 11.0044226,
        longitude: -74.9074058,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 140,
        name: 'REPELON',
        active: true,
        isCapital: false,
        divipola: '08606',
        latitude: 10.50757051,
        longitude: -75.12188053,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 141,
        name: 'SABANAGRANDE',
        active: true,
        isCapital: false,
        divipola: '08634',
        latitude: 10.79894015,
        longitude: -74.7687966,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 142,
        name: 'SABANALARGA',
        active: true,
        isCapital: false,
        divipola: '08638',
        latitude: 10.62250777,
        longitude: -74.95510542,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 143,
        name: 'SANTA LUCIA',
        active: true,
        isCapital: false,
        divipola: '08675',
        latitude: 10.35364192,
        longitude: -74.96541179,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 144,
        name: 'SANTO TOMAS',
        active: true,
        isCapital: false,
        divipola: '08685',
        latitude: 10.75562656,
        longitude: -74.78726468,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 145,
        name: 'SOLEDAD',
        active: true,
        isCapital: false,
        divipola: '08758',
        latitude: 10.9069066,
        longitude: -74.7784249,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 146,
        name: 'SUAN',
        active: true,
        isCapital: false,
        divipola: '08770',
        latitude: 10.31085035,
        longitude: -74.90713308,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 147,
        name: 'TUBARA',
        active: true,
        isCapital: false,
        divipola: '08832',
        latitude: 10.90721938,
        longitude: -74.98423293,
        department: { id: 8 },
        tipo: { id: 1 }
      },

      {
        id: 148,
        name: 'USIACURI',
        active: true,
        isCapital: false,
        divipola: '08849',
        latitude: 10.74052266,
        longitude: -74.98267413,
        department: { id: 8 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
