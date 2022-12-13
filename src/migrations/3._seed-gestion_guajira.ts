import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933064 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 642,
        name: 'ALCALDIA DE RIOHACHA',
        nit: '892115007',
        doctec: true,
        cgn: '210144001',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 642 }
      },

      {
        id: 643,
        name: 'ALCALDIA DE ALBANIA',
        nit: '839000360',
        doctec: true,
        cgn: '213544035',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 643 }
      },

      {
        id: 644,
        name: 'ALCALDIA DE BARRANCAS',
        nit: '800099223',
        doctec: true,
        cgn: '217844078',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 644 }
      },

      {
        id: 645,
        name: 'ALCALDIA DE DIBULLA',
        nit: '825000134',
        doctec: true,
        cgn: '219044090',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 645 }
      },

      {
        id: 646,
        name: 'ALCALDIA DE DISTRACCION',
        nit: '825000166',
        doctec: true,
        cgn: '219844098',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 646 }
      },

      {
        id: 647,
        name: 'ALCALDIA DE EL MOLINO',
        nit: '800092788',
        doctec: true,
        cgn: '211044110',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 647 }
      },

      {
        id: 648,
        name: 'ALCALDIA DE FONSECA',
        nit: '892170008',
        doctec: true,
        cgn: '217944279',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 648 }
      },

      {
        id: 649,
        name: 'ALCALDIA DE HATONUEVO',
        nit: '800255101',
        doctec: true,
        cgn: '217844378',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 649 }
      },

      {
        id: 650,
        name: 'ALCALDIA DE LA JAGUA DEL PILAR',
        nit: '825000676',
        doctec: true,
        cgn: '212044420',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 650 }
      },

      {
        id: 651,
        name: 'ALCALDIA DE MAICAO',
        nit: '892120020',
        doctec: true,
        cgn: '213044430',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 651 }
      },

      {
        id: 652,
        name: 'ALCALDIA DE MANAURE',
        nit: '892115024',
        doctec: true,
        cgn: '216044560',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 652 }
      },

      {
        id: 653,
        name: 'ALCALDIA DE SAN JUAN DEL CESAR',
        nit: '892115179',
        doctec: true,
        cgn: '215044650',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 653 }
      },

      {
        id: 654,
        name: 'ALCALDIA DE URIBIA',
        nit: '892115155',
        doctec: true,
        cgn: '214744847',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 654 }
      },

      {
        id: 655,
        name: 'ALCALDIA DE URUMITA',
        nit: '800059405',
        doctec: true,
        cgn: '215544855',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 655 }
      },

      {
        id: 656,
        name: 'ALCALDIA DE VILLANUEVA',
        nit: '892115198',
        doctec: true,
        cgn: '217444874',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 656 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
