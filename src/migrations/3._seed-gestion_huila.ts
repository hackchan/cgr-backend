import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933065 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 605,
        name: 'ALCALDIA DE NEIVA',
        nit: '891180009',
        doctec: true,
        cgn: '210141001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 605 }
      },

      {
        id: 606,
        name: 'ALCALDIA DE ACEVEDO',
        nit: '891180069',
        doctec: true,
        cgn: '210641006',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 606 }
      },

      {
        id: 607,
        name: 'ALCALDIA DE AGRADO',
        nit: '891180139',
        doctec: true,
        cgn: '211341013',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 607 }
      },

      {
        id: 608,
        name: 'ALCALDIA DE AIPE',
        nit: '891180070',
        doctec: true,
        cgn: '211641016',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 608 }
      },

      {
        id: 609,
        name: 'ALCALDIA DE ALGECIRAS',
        nit: '891180024',
        doctec: true,
        cgn: '212041020',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 609 }
      },

      {
        id: 610,
        name: 'ALCALDIA DE ALTAMIRA',
        nit: '891180118',
        doctec: true,
        cgn: '212641026',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 610 }
      },

      {
        id: 611,
        name: 'ALCALDIA DE BARAYA',
        nit: '891180183',
        doctec: true,
        cgn: '217841078',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 611 }
      },

      {
        id: 612,
        name: 'ALCALDIA DE CAMPOALEGRE',
        nit: '891118119',
        doctec: true,
        cgn: '213241132',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 612 }
      },

      {
        id: 613,
        name: 'ALCALDIA DE COLOMBIA',
        nit: '891180028',
        doctec: true,
        cgn: '210641206',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 613 }
      },

      {
        id: 614,
        name: 'ALCALDIA DE ELIAS',
        nit: '891180132',
        doctec: true,
        cgn: '214441244',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 614 }
      },

      {
        id: 615,
        name: 'ALCALDIA DE GARZON',
        nit: '891180022',
        doctec: true,
        cgn: '219841298',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 615 }
      },

      {
        id: 616,
        name: 'ALCALDIA DE GIGANTE',
        nit: '891180176',
        doctec: true,
        cgn: '210641306',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 616 }
      },

      {
        id: 617,
        name: 'ALCALDIA DE GUADALUPE',
        nit: '891180177',
        doctec: true,
        cgn: '211941319',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 617 }
      },

      {
        id: 618,
        name: 'ALCALDIA DE HOBO',
        nit: '891180019',
        doctec: true,
        cgn: '214941349',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 618 }
      },

      {
        id: 619,
        name: 'ALCALDIA DE IQUIRA',
        nit: '891180131',
        doctec: true,
        cgn: '215741357',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 619 }
      },

      {
        id: 620,
        name: 'ALCALDIA DE ISNOS',
        nit: '800097098',
        doctec: true,
        cgn: '215941359',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 620 }
      },

      {
        id: 621,
        name: 'ALCALDIA DE LA ARGENTINA',
        nit: '891180205',
        doctec: true,
        cgn: '217841378',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 621 }
      },

      {
        id: 622,
        name: 'ALCALDIA DE LA PLATA',
        nit: '891180155',
        doctec: true,
        cgn: '219641396',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 622 }
      },

      {
        id: 623,
        name: 'ALCALDIA DE NATAGA',
        nit: '891102844',
        doctec: true,
        cgn: '218341483',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 623 }
      },

      {
        id: 624,
        name: 'ALCALDIA DE OPORAPA',
        nit: '891180179',
        doctec: true,
        cgn: '210341503',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 624 }
      },

      {
        id: 625,
        name: 'ALCALDIA DE PAICOL',
        nit: '891180194',
        doctec: true,
        cgn: '211841518',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 625 }
      },

      {
        id: 626,
        name: 'ALCALDIA DE PALERMO',
        nit: '891180021',
        doctec: true,
        cgn: '212441524',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 626 }
      },

      {
        id: 627,
        name: 'ALCALDIA DE PALESTINA',
        nit: '891102764',
        doctec: true,
        cgn: '213041530',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 627 }
      },

      {
        id: 628,
        name: 'ALCALDIA DE PITAL',
        nit: '891180199',
        doctec: true,
        cgn: '214841548',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 628 }
      },

      {
        id: 629,
        name: 'ALCALDIA DE PITALITO',
        nit: '891180077',
        doctec: true,
        cgn: '215141551',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 629 }
      },

      {
        id: 630,
        name: 'ALCALDIA DE RIVERA',
        nit: '891180040',
        doctec: true,
        cgn: '211541615',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 630 }
      },

      {
        id: 631,
        name: 'ALCALDIA DE SALADOBLANCO',
        nit: '891180180',
        doctec: true,
        cgn: '216041660',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 631 }
      },

      {
        id: 632,
        name: 'ALCALDIA DE SAN AGUSTIN',
        nit: '891180056',
        doctec: true,
        cgn: '216841668',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 632 }
      },

      {
        id: 633,
        name: 'ALCALDIA DE SANTA MARIA',
        nit: '891180076',
        doctec: true,
        cgn: '217641676',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 633 }
      },

      {
        id: 634,
        name: 'ALCALDIA DE SUAZA',
        nit: '891180191',
        doctec: true,
        cgn: '217041770',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 634 }
      },

      {
        id: 635,
        name: 'ALCALDIA DE TARQUI',
        nit: '891180211',
        doctec: true,
        cgn: '219141791',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 635 }
      },

      {
        id: 636,
        name: 'ALCALDIA DE TESALIA',
        nit: '800097176',
        doctec: true,
        cgn: '219741797',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 636 }
      },

      {
        id: 637,
        name: 'ALCALDIA DE TELLO',
        nit: '891180127',
        doctec: true,
        cgn: '219941799',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 637 }
      },

      {
        id: 638,
        name: 'ALCALDIA DE TERUEL',
        nit: '891180181',
        doctec: true,
        cgn: '210141801',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 638 }
      },

      {
        id: 639,
        name: 'ALCALDIA DE TIMANA',
        nit: '891180182',
        doctec: true,
        cgn: '210741807',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 639 }
      },

      {
        id: 640,
        name: 'ALCALDIA DE VILLAVIEJA',
        nit: '891180187',
        doctec: true,
        cgn: '217241872',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 640 }
      },

      {
        id: 641,
        name: 'ALCALDIA DE YAGUARA',
        nit: '800097180',
        doctec: true,
        cgn: '218541885',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 641 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
