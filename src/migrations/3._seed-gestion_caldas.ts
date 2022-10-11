import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933056 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 318,
        name: 'ALCALDIA DE MANIZALES',
        nit: '890801053',
        doctec: true,
        cgn: '210117001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 318 }
      },

      {
        id: 319,
        name: 'ALCALDIA DE AGUADAS',
        nit: '890801132',
        doctec: true,
        cgn: '211317013',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 319 }
      },

      {
        id: 320,
        name: 'ALCALDIA DE ANSERMA',
        nit: '890801139',
        doctec: true,
        cgn: '214217042',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 320 }
      },

      {
        id: 321,
        name: 'ALCALDIA DE ARANZAZU',
        nit: '890801142',
        doctec: true,
        cgn: '215017050',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 321 }
      },

      {
        id: 322,
        name: 'ALCALDIA DE BELALCAZAR',
        nit: '890802650',
        doctec: true,
        cgn: '218817088',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 322 }
      },

      {
        id: 323,
        name: 'ALCALDIA DE CHINCHINA',
        nit: '890801133',
        doctec: true,
        cgn: '217417174',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 323 }
      },

      {
        id: 324,
        name: 'ALCALDIA DE FILADELFIA',
        nit: '890801144',
        doctec: true,
        cgn: '217217272',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 324 }
      },

      {
        id: 325,
        name: 'ALCALDIA DE LA DORADA',
        nit: '890801130',
        doctec: true,
        cgn: '218017380',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 325 }
      },

      {
        id: 326,
        name: 'ALCALDIA DE LA MERCED',
        nit: '890802795',
        doctec: true,
        cgn: '218817388',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 326 }
      },

      {
        id: 327,
        name: 'ALCALDIA DE MANZANARES',
        nit: '890802505',
        doctec: true,
        cgn: '213317433',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 327 }
      },

      {
        id: 328,
        name: 'ALCALDIA DE MARMATO',
        nit: '890801145',
        doctec: true,
        cgn: '214217442',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 328 }
      },

      {
        id: 329,
        name: 'ALCALDIA DE MARQUETALIA',
        nit: '890801147',
        doctec: true,
        cgn: '214417444',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 329 }
      },

      {
        id: 330,
        name: 'ALCALDIA DE MARULANDA',
        nit: '890801146',
        doctec: true,
        cgn: '214617446',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 330 }
      },

      {
        id: 331,
        name: 'ALCALDIA DE NEIRA',
        nit: '890801135',
        doctec: true,
        cgn: '218617486',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 331 }
      },

      {
        id: 332,
        name: 'ALCALDIA DE NORCASIA',
        nit: '810002963',
        doctec: true,
        cgn: '219517495',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 332 }
      },

      {
        id: 333,
        name: 'ALCALDIA DE PACORA',
        nit: '890801136',
        doctec: true,
        cgn: '211317513',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 333 }
      },

      {
        id: 334,
        name: 'ALCALDIA DE PALESTINA',
        nit: '890801141',
        doctec: true,
        cgn: '212417524',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 334 }
      },

      {
        id: 335,
        name: 'ALCALDIA DE PENSILVANIA',
        nit: '890801137',
        doctec: true,
        cgn: '214117541',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 335 }
      },

      {
        id: 336,
        name: 'ALCALDIA DE RIOSUCIO',
        nit: '890801138',
        doctec: true,
        cgn: '211417614',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 336 }
      },

      {
        id: 337,
        name: 'ALCALDIA DE RISARALDA',
        nit: '800095461',
        doctec: true,
        cgn: '211617616',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 337 }
      },

      {
        id: 338,
        name: 'ALCALDIA DE SALAMINA',
        nit: '890801131',
        doctec: true,
        cgn: '215317653',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 338 }
      },

      {
        id: 339,
        name: 'ALCALDIA DE SAMANA',
        nit: '890801149',
        doctec: true,
        cgn: '216217662',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 339 }
      },

      {
        id: 340,
        name: 'ALCALDIA DE SAN JOSE',
        nit: '810001998',
        doctec: true,
        cgn: '216517665',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 340 }
      },

      {
        id: 341,
        name: 'ALCALDIA DE SUPIA',
        nit: '890801150',
        doctec: true,
        cgn: '217717777',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 341 }
      },

      {
        id: 342,
        name: 'ALCALDIA DE VICTORIA',
        nit: '890801151',
        doctec: true,
        cgn: '216717867',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 342 }
      },

      {
        id: 343,
        name: 'ALCALDIA DE VILLAMARIA',
        nit: '890801152',
        doctec: true,
        cgn: '217317873',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 343 }
      },

      {
        id: 344,
        name: 'ALCALDIA DE VITERBO',
        nit: '800090833',
        doctec: true,
        cgn: '217717877',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 344 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
