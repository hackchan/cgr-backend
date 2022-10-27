import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933060 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 403,
        name: 'ALCALDIA DE VALLEDUPAR',
        nit: '800098911',
        doctec: true,
        cgn: '210120001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 403 }
      },

      {
        id: 404,
        name: 'ALCALDIA DE AGUACHICA',
        nit: '800096561',
        doctec: true,
        cgn: '211120011',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 404 }
      },

      {
        id: 405,
        name: 'ALCALDIA DE AGUSTIN CODAZZI',
        nit: '800096558',
        doctec: true,
        cgn: '211320013',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 405 }
      },

      {
        id: 406,
        name: 'ALCALDIA DE ASTREA',
        nit: '892301541',
        doctec: true,
        cgn: '213220032',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 406 }
      },

      {
        id: 407,
        name: 'ALCALDIA DE BECERRIL',
        nit: '800096576',
        doctec: true,
        cgn: '214520045',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 407 }
      },

      {
        id: 408,
        name: 'ALCALDIA DE BOSCONIA',
        nit: '892301130',
        doctec: true,
        cgn: '216020060',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 408 }
      },

      {
        id: 409,
        name: 'ALCALDIA DE CHIMICHAGUA',
        nit: '892300815',
        doctec: true,
        cgn: '217520175',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 409 }
      },

      {
        id: 410,
        name: 'ALCALDIA DE CHIRIGUANA',
        nit: '800096585',
        doctec: true,
        cgn: '217820178',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 410 }
      },

      {
        id: 411,
        name: 'ALCALDIA DE CURUMANI',
        nit: '800096580',
        doctec: true,
        cgn: '212820228',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 411 }
      },

      {
        id: 412,
        name: 'ALCALDIA DE EL COPEY',
        nit: '800096587',
        doctec: true,
        cgn: '213820238',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 412 }
      },

      {
        id: 413,
        name: 'ALCALDIA DE EL PASO',
        nit: '800096592',
        doctec: true,
        cgn: '215020250',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 413 }
      },

      {
        id: 414,
        name: 'ALCALDIA DE GAMARRA',
        nit: '800096595',
        doctec: true,
        cgn: '219520295',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 414 }
      },

      {
        id: 415,
        name: 'ALCALDIA DE GONZALEZ',
        nit: '800096597',
        doctec: true,
        cgn: '211020310',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 415 }
      },

      {
        id: 416,
        name: 'ALCALDIA DE LA GLORIA',
        nit: '800096599',
        doctec: true,
        cgn: '218320383',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 416 }
      },

      {
        id: 417,
        name: 'ALCALDIA DE LA JAGUA DE IBIRICO',
        nit: '800108683',
        doctec: true,
        cgn: '210020400',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 417 }
      },

      {
        id: 418,
        name: 'ALCALDIA DE MANAURE BALCON DEL CESAR',
        nit: '892301761',
        doctec: true,
        cgn: '214320443',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 418 }
      },

      {
        id: 419,
        name: 'ALCALDIA DE PAILITAS',
        nit: '800096610',
        doctec: true,
        cgn: '211720517',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 419 }
      },

      {
        id: 420,
        name: 'ALCALDIA DE PELAYA',
        nit: '800096613',
        doctec: true,
        cgn: '215020550',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 420 }
      },

      {
        id: 421,
        name: 'ALCALDIA DE PUEBLO BELLO',
        nit: '824001624',
        doctec: true,
        cgn: '217020570',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 421 }
      },

      {
        id: 422,
        name: 'ALCALDIA DE RIO DE ORO',
        nit: '892300123',
        doctec: true,
        cgn: '211420614',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 422 }
      },

      {
        id: 423,
        name: 'ALCALDIA DE LA PAZ',
        nit: '800096605',
        doctec: true,
        cgn: '212120621',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 423 }
      },

      {
        id: 424,
        name: 'ALCALDIA DE SAN ALBERTO',
        nit: '800096619',
        doctec: true,
        cgn: '211020710',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 424 }
      },

      {
        id: 425,
        name: 'ALCALDIA DE SAN DIEGO',
        nit: '800096623',
        doctec: true,
        cgn: '215020750',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 425 }
      },

      {
        id: 426,
        name: 'ALCALDIA DE SAN MARTIN',
        nit: '892301093',
        doctec: true,
        cgn: '217020770',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 426 }
      },

      {
        id: 427,
        name: 'ALCALDIA DE TAMALAMEQUE',
        nit: '800096626',
        doctec: true,
        cgn: '218720787',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 427 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
