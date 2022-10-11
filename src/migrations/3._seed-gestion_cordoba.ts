import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933062 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 428,
        name: 'ALCALDIA DE MONTERIA',
        nit: '800096734',
        doctec: true,
        cgn: '210123001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 428 }
      },

      {
        id: 429,
        name: 'ALCALDIA DE AYAPEL',
        nit: '800096737',
        doctec: true,
        cgn: '216823068',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 429 }
      },

      {
        id: 430,
        name: 'ALCALDIA DE BUENAVISTA',
        nit: '800096739',
        doctec: true,
        cgn: '217923079',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 430 }
      },

      {
        id: 431,
        name: 'ALCALDIA DE CANALETE',
        nit: '800096740',
        doctec: true,
        cgn: '219023090',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 431 }
      },

      {
        id: 432,
        name: 'ALCALDIA DE CERETE',
        nit: '800096744',
        doctec: true,
        cgn: '216223162',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 432 }
      },

      {
        id: 433,
        name: 'ALCALDIA DE CHIMA',
        nit: '800096750',
        doctec: true,
        cgn: '216823168',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 433 }
      },

      {
        id: 434,
        name: 'ALCALDIA DE CHINU',
        nit: '800096753',
        doctec: true,
        cgn: '218223182',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 434 }
      },

      {
        id: 435,
        name: 'ALCALDIA DE CIENAGA DE ORO',
        nit: '800096746',
        doctec: true,
        cgn: '218923189',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 435 }
      },

      {
        id: 436,
        name: 'ALCALDIA DE COTORRA',
        nit: '812001675',
        doctec: true,
        cgn: '210023300',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 436 }
      },

      {
        id: 437,
        name: 'ALCALDIA DE LA APARTADA',
        nit: '812001681',
        doctec: true,
        cgn: '215023350',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 437 }
      },

      {
        id: 438,
        name: 'ALCALDIA DE LORICA',
        nit: '800096758',
        doctec: true,
        cgn: '211723417',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 438 }
      },

      {
        id: 439,
        name: 'ALCALDIA DE LOS CORDOBAS',
        nit: '800096761',
        doctec: true,
        cgn: '211923419',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 439 }
      },

      {
        id: 440,
        name: 'ALCALDIA DE MOMIL',
        nit: '800096762',
        doctec: true,
        cgn: '216423464',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 440 }
      },

      {
        id: 441,
        name: 'ALCALDIA DE MONTELIBANO',
        nit: '800096763',
        doctec: true,
        cgn: '216623466',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 441 }
      },

      {
        id: 442,
        name: 'ALCALDIA DE MONITOS',
        nit: '800065474',
        doctec: true,
        cgn: '210023500',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 442 }
      },

      {
        id: 443,
        name: 'ALCALDIA DE PLANETA RICA',
        nit: '800096765',
        doctec: true,
        cgn: '215523555',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 443 }
      },

      {
        id: 444,
        name: 'ALCALDIA DE PUEBLO NUEVO',
        nit: '800096766',
        doctec: true,
        cgn: '217023570',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 444 }
      },

      {
        id: 445,
        name: 'ALCALDIA DE PUERTO ESCONDIDO',
        nit: '800096770',
        doctec: true,
        cgn: '217423574',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 445 }
      },

      {
        id: 446,
        name: 'ALCALDIA DE PUERTO LIBERTADOR',
        nit: '800096772',
        doctec: true,
        cgn: '218023580',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 446 }
      },

      {
        id: 447,
        name: 'ALCALDIA DE PURISIMA DE LA CONCEPCION',
        nit: '800079162',
        doctec: true,
        cgn: '218623586',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 447 }
      },

      {
        id: 448,
        name: 'ALCALDIA DE SAHAGUN',
        nit: '800096777',
        doctec: true,
        cgn: '216023660',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 448 }
      },

      {
        id: 449,
        name: 'ALCALDIA DE SAN ANDRES DE SOTAVENTO',
        nit: '800075231',
        doctec: true,
        cgn: '217023670',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 449 }
      },

      {
        id: 450,
        name: 'ALCALDIA DE SAN ANTERO',
        nit: '800096781',
        doctec: true,
        cgn: '217223672',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 450 }
      },

      {
        id: 451,
        name: 'ALCALDIA DE SAN BERNARDO DEL VIENTO',
        nit: '800096804',
        doctec: true,
        cgn: '217523675',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 451 }
      },

      {
        id: 452,
        name: 'ALCALDIA DE SAN CARLOS',
        nit: '800075537',
        doctec: true,
        cgn: '217823678',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 452 }
      },

      {
        id: 453,
        name: 'ALCALDIA DE SAN JOSE DE URE',
        nit: '900220061',
        doctec: true,
        cgn: '923271475',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 453 }
      },

      {
        id: 454,
        name: 'ALCALDIA DE SAN PELAYO',
        nit: '800096805',
        doctec: true,
        cgn: '218623686',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 454 }
      },

      {
        id: 455,
        name: 'ALCALDIA DE TIERRALTA',
        nit: '800096807',
        doctec: true,
        cgn: '210723807',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 455 }
      },

      {
        id: 456,
        name: 'ALCALDIA DE TUCHIN',
        nit: '900220147',
        doctec: true,
        cgn: '923271490',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 456 }
      },

      {
        id: 457,
        name: 'ALCALDIA DE VALENCIA',
        nit: '800096808',
        doctec: true,
        cgn: '215523855',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 457 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
