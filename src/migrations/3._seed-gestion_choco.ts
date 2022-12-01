import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933061 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 575,
        name: 'ALCALDIA DE QUIBDO',
        nit: '891680011',
        doctec: true,
        cgn: '210127001',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 575 }
      },

      {
        id: 576,
        name: 'ALCALDIA DE ACANDI',
        nit: '891680050',
        doctec: true,
        cgn: '210627006',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 576 }
      },

      {
        id: 577,
        name: 'ALCALDIA DE ALTO BAUDO',
        nit: '891600062',
        doctec: true,
        cgn: '212527025',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 577 }
      },

      {
        id: 578,
        name: 'ALCALDIA DE ATRATO',
        nit: '818000395',
        doctec: true,
        cgn: '215027050',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 578 }
      },

      {
        id: 579,
        name: 'ALCALDIA DE BAGADO',
        nit: '891680055',
        doctec: true,
        cgn: '217327073',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 579 }
      },

      {
        id: 580,
        name: 'ALCALDIA DE BAHIA SOLANO',
        nit: '891680395',
        doctec: true,
        cgn: '217527075',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 580 }
      },

      {
        id: 581,
        name: 'ALCALDIA DE BAJO BAUDO',
        nit: '800095589',
        doctec: true,
        cgn: '217727077',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 581 }
      },

      {
        id: 582,
        name: 'ALCALDIA DE BOJAYA',
        nit: '800070375',
        doctec: true,
        cgn: '219927099',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 582 }
      },

      {
        id: 583,
        name: 'ALCALDIA DE EL CANTON DEL SAN PABLO',
        nit: '800239414',
        doctec: true,
        cgn: '213527135',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 583 }
      },

      {
        id: 584,
        name: 'ALCALDIA DE CARMEN DEL DARIEN',
        nit: '818001341',
        doctec: true,
        cgn: '215027150',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 584 }
      },

      {
        id: 585,
        name: 'ALCALDIA DE CERTEGUI',
        nit: '818001202',
        doctec: true,
        cgn: '216027160',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 585 }
      },

      {
        id: 586,
        name: 'ALCALDIA DE CONDOTO',
        nit: '891680057',
        doctec: true,
        cgn: '210527205',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 586 }
      },

      {
        id: 587,
        name: 'ALCALDIA DE EL CARMEN DE ATRATO',
        nit: '891680061',
        doctec: true,
        cgn: '214527245',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 587 }
      },

      {
        id: 588,
        name: 'ALCALDIA DE EL LITORAL DEL SAN JUAN',
        nit: '818000002',
        doctec: true,
        cgn: '215027250',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 588 }
      },

      {
        id: 589,
        name: 'ALCALDIA DE ISTMINA',
        nit: '891680067',
        doctec: true,
        cgn: '216127361',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 589 }
      },

      {
        id: 590,
        name: 'ALCALDIA DE JURADO',
        nit: '891680402',
        doctec: true,
        cgn: '217227372',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 590 }
      },

      {
        id: 591,
        name: 'ALCALDIA DE LLORO',
        nit: '891680281',
        doctec: true,
        cgn: '211327413',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 591 }
      },

      {
        id: 592,
        name: 'ALCALDIA DE MEDIO ATRATO',
        nit: '818000941',
        doctec: true,
        cgn: '212527425',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 592 }
      },

      {
        id: 593,
        name: 'ALCALDIA DE MEDIO BAUDO',
        nit: '818000907',
        doctec: true,
        cgn: '213027430',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 593 }
      },

      {
        id: 594,
        name: 'ALCALDIA DE MEDIO SAN JUAN',
        nit: '818001206',
        doctec: true,
        cgn: '215027450',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 594 }
      },

      {
        id: 595,
        name: 'ALCALDIA DE NOVITA',
        nit: '891680075',
        doctec: true,
        cgn: '219127491',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 595 }
      },

      {
        id: 596,
        name: 'ALCALDIA DE NUQUI',
        nit: '891680076',
        doctec: true,
        cgn: '219527495',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 596 }
      },

      {
        id: 597,
        name: 'ALCALDIA DE RIO IRO',
        nit: '818001203',
        doctec: true,
        cgn: '218027580',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 597 }
      },

      {
        id: 598,
        name: 'ALCALDIA DE RIO QUITO',
        nit: '818000899',
        doctec: true,
        cgn: '210027600',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 598 }
      },

      {
        id: 599,
        name: 'ALCALDIA DE RIOSUCIO',
        nit: '891680079',
        doctec: true,
        cgn: '211527615',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 599 }
      },

      {
        id: 600,
        name: 'ALCALDIA DE SAN JOSE DEL PALMAR',
        nit: '891680080',
        doctec: true,
        cgn: '216027660',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 600 }
      },

      {
        id: 601,
        name: 'ALCALDIA DE SIPI',
        nit: '800095613',
        doctec: true,
        cgn: '214527745',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 601 }
      },

      {
        id: 602,
        name: 'ALCALDIA DE TADO',
        nit: '891680081',
        doctec: true,
        cgn: '218727787',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 602 }
      },

      {
        id: 603,
        name: 'ALCALDIA DE UNGUIA',
        nit: '891680196',
        doctec: true,
        cgn: '210027800',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 603 }
      },

      {
        id: 604,
        name: 'ALCALDIA DE UNION PANAMERICANA',
        nit: '818000961',
        doctec: true,
        cgn: '211027810',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 604 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
