import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933067 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 687,
        name: 'ALCALDIA DE VILLAVICENCIO',
        nit: '892099324',
        doctec: true,
        cgn: '210150001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 687 }
      },

      {
        id: 688,
        name: 'ALCALDIA DE ACACIAS',
        nit: '892001457',
        doctec: true,
        cgn: '210650006',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 688 }
      },

      {
        id: 689,
        name: 'ALCALDIA DE BARRANCA DE UPIA',
        nit: '800152577',
        doctec: true,
        cgn: '211050110',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 689 }
      },

      {
        id: 690,
        name: 'ALCALDIA DE CABUYARO',
        nit: '892099232',
        doctec: true,
        cgn: '212450124',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 690 }
      },

      {
        id: 691,
        name: 'ALCALDIA DE CASTILLA LA NUEVA',
        nit: '800098190',
        doctec: true,
        cgn: '215050150',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 691 }
      },

      {
        id: 692,
        name: 'ALCALDIA DE CUBARRAL',
        nit: '892000812',
        doctec: true,
        cgn: '212350223',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 692 }
      },

      {
        id: 693,
        name: 'ALCALDIA DE CUMARAL',
        nit: '892099184',
        doctec: true,
        cgn: '212650226',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 693 }
      },

      {
        id: 694,
        name: 'ALCALDIA DE EL CALVARIO',
        nit: '892099001',
        doctec: true,
        cgn: '214550245',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 694 }
      },

      {
        id: 695,
        name: 'ALCALDIA DE EL CASTILLO',
        nit: '892099278',
        doctec: true,
        cgn: '215150251',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 695 }
      },

      {
        id: 696,
        name: 'ALCALDIA DE EL DORADO',
        nit: '800255443',
        doctec: true,
        cgn: '217050270',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 696 }
      },

      {
        id: 697,
        name: 'ALCALDIA DE FUENTE DE ORO',
        nit: '892099183',
        doctec: true,
        cgn: '218750287',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 697 }
      },

      {
        id: 698,
        name: 'ALCALDIA DE GRANADA',
        nit: '892099243',
        doctec: true,
        cgn: '211350313',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 698 }
      },

      {
        id: 699,
        name: 'ALCALDIA DE GUAMAL',
        nit: '800098193',
        doctec: true,
        cgn: '211850318',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 699 }
      },

      {
        id: 700,
        name: 'ALCALDIA DE MAPIRIPAN',
        nit: '800136458',
        doctec: true,
        cgn: '212550325',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 700 }
      },

      {
        id: 701,
        name: 'ALCALDIA DE MESETAS',
        nit: '892099317',
        doctec: true,
        cgn: '213050330',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 701 }
      },

      {
        id: 702,
        name: 'ALCALDIA DE LA MACARENA',
        nit: '892099234',
        doctec: true,
        cgn: '215050350',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 702 }
      },

      {
        id: 703,
        name: 'ALCALDIA DE URIBE',
        nit: '800128428',
        doctec: true,
        cgn: '217050370',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 703 }
      },

      {
        id: 704,
        name: 'ALCALDIA DE LEJANIAS',
        nit: '892099242',
        doctec: true,
        cgn: '210050400',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 704 }
      },

      {
        id: 705,
        name: 'ALCALDIA DE PUERTO CONCORDIA',
        nit: '800172206',
        doctec: true,
        cgn: '215050450',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 705 }
      },

      {
        id: 706,
        name: 'ALCALDIA DE PUERTO GAITAN',
        nit: '800079035',
        doctec: true,
        cgn: '216850568',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 706 }
      },

      {
        id: 707,
        name: 'ALCALDIA DE PUERTO LOPEZ',
        nit: '892099325',
        doctec: true,
        cgn: '217350573',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 707 }
      },

      {
        id: 708,
        name: 'ALCALDIA DE PUERTO LLERAS',
        nit: '892099309',
        doctec: true,
        cgn: '217750577',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 708 }
      },

      {
        id: 709,
        name: 'ALCALDIA DE PUERTO RICO',
        nit: '800098195',
        doctec: true,
        cgn: '219050590',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 709 }
      },

      {
        id: 710,
        name: 'ALCALDIA DE RESTREPO',
        nit: '800098199',
        doctec: true,
        cgn: '210650606',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 710 }
      },

      {
        id: 711,
        name: 'ALCALDIA DE SAN CARLOS DE GUAROA',
        nit: '800098203',
        doctec: true,
        cgn: '218050680',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 711 }
      },

      {
        id: 712,
        name: 'ALCALDIA DE SAN JUAN DE ARAMA',
        nit: '800098205',
        doctec: true,
        cgn: '218350683',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 712 }
      },

      {
        id: 713,
        name: 'ALCALDIA DE SAN JUANITO',
        nit: '892099246',
        doctec: true,
        cgn: '218650686',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 713 }
      },

      {
        id: 714,
        name: 'ALCALDIA DE SAN MARTIN',
        nit: '892099548',
        doctec: true,
        cgn: '218950689',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 714 }
      },

      {
        id: 715,
        name: 'ALCALDIA DE VISTAHERMOSA',
        nit: '892099173',
        doctec: true,
        cgn: '211150711',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 715 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
