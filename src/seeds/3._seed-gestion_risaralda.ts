import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933072 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 832,
        name: 'ALCALDIA DE PEREIRA',
        nit: '891480030',
        doctec: true,
        cgn: '210166001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 832 }
      },

      {
        id: 833,
        name: 'ALCALDIA DE APIA',
        nit: '891480022',
        doctec: true,
        cgn: '214566045',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 833 }
      },

      {
        id: 834,
        name: 'ALCALDIA DE BALBOA',
        nit: '890801143',
        doctec: true,
        cgn: '217566075',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 834 }
      },

      {
        id: 835,
        name: 'ALCALDIA DE BELEN DE UMBRIA',
        nit: '891480024',
        doctec: true,
        cgn: '218866088',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 835 }
      },

      {
        id: 836,
        name: 'ALCALDIA DE DOSQUEBRADAS',
        nit: '800099310',
        doctec: true,
        cgn: '217066170',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 836 }
      },

      {
        id: 837,
        name: 'ALCALDIA DE GUATICA',
        nit: '891480025',
        doctec: true,
        cgn: '211866318',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 837 }
      },

      {
        id: 838,
        name: 'ALCALDIA DE LA CELIA',
        nit: '891480026',
        doctec: true,
        cgn: '218366383',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 838 }
      },

      {
        id: 839,
        name: 'ALCALDIA DE LA VIRGINIA',
        nit: '891480027',
        doctec: true,
        cgn: '210066400',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 839 }
      },

      {
        id: 840,
        name: 'ALCALDIA DE MARSELLA',
        nit: '800099317',
        doctec: true,
        cgn: '214066440',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 840 }
      },

      {
        id: 841,
        name: 'ALCALDIA DE MISTRATO',
        nit: '800031075',
        doctec: true,
        cgn: '215666456',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 841 }
      },

      {
        id: 842,
        name: 'ALCALDIA DE PUEBLO RICO',
        nit: '891480031',
        doctec: true,
        cgn: '217266572',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 842 }
      },

      {
        id: 843,
        name: 'ALCALDIA DE QUINCHIA',
        nit: '891480032',
        doctec: true,
        cgn: '219466594',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 843 }
      },

      {
        id: 844,
        name: 'ALCALDIA DE SANTA ROSA DE CABAL',
        nit: '891480033',
        doctec: true,
        cgn: '218266682',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 844 }
      },

      {
        id: 845,
        name: 'ALCALDIA DE SANTUARIO',
        nit: '891480034',
        doctec: true,
        cgn: '218766687',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 845 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
