import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933069 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 780,
        name: 'ALCALDIA DE SAN JOSE DE CUCUTA',
        nit: '890501434',
        doctec: true,
        cgn: '210154001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 780 }
      },

      {
        id: 781,
        name: 'ALCALDIA DE ABREGO',
        nit: '890504612',
        doctec: true,
        cgn: '210354003',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 781 }
      },

      {
        id: 782,
        name: 'ALCALDIA DE ARBOLEDAS',
        nit: '890501436',
        doctec: true,
        cgn: '215154051',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 782 }
      },

      {
        id: 783,
        name: 'ALCALDIA DE BOCHALEMA',
        nit: '890505662',
        doctec: true,
        cgn: '219954099',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 783 }
      },

      {
        id: 784,
        name: 'ALCALDIA DE BUCARASICA',
        nit: '890503483',
        doctec: true,
        cgn: '210954109',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 784 }
      },

      {
        id: 785,
        name: 'ALCALDIA DE CACOTA',
        nit: '800099234',
        doctec: true,
        cgn: '212554125',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 785 }
      },

      {
        id: 786,
        name: 'ALCALDIA DE CACHIRA',
        nit: '890501776',
        doctec: true,
        cgn: '212854128',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 786 }
      },

      {
        id: 787,
        name: 'ALCALDIA DE CHINACOTA',
        nit: '890503106',
        doctec: true,
        cgn: '217254172',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 787 }
      },

      {
        id: 788,
        name: 'ALCALDIA DE CHITAGA',
        nit: '890501422',
        doctec: true,
        cgn: '217454174',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 788 }
      },

      {
        id: 789,
        name: 'ALCALDIA DE CONVENCION',
        nit: '800099236',
        doctec: true,
        cgn: '210654206',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 789 }
      },

      {
        id: 790,
        name: 'ALCALDIA DE CUCUTILLA',
        nit: '800013237',
        doctec: true,
        cgn: '212354223',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 790 }
      },

      {
        id: 791,
        name: 'ALCALDIA DE DURANIA',
        nit: '800099237',
        doctec: true,
        cgn: '213954239',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 791 }
      },

      {
        id: 792,
        name: 'ALCALDIA DE EL CARMEN',
        nit: '800099238',
        doctec: true,
        cgn: '214554245',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 792 }
      },

      {
        id: 793,
        name: 'ALCALDIA DE EL TARRA',
        nit: '800138959',
        doctec: true,
        cgn: '215054250',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 793 }
      },

      {
        id: 794,
        name: 'ALCALDIA DE EL ZULIA',
        nit: '800039803',
        doctec: true,
        cgn: '216154261',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 794 }
      },

      {
        id: 795,
        name: 'ALCALDIA DE GRAMALOTE',
        nit: '890501404',
        doctec: true,
        cgn: '211354313',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 795 }
      },

      {
        id: 796,
        name: 'ALCALDIA DE HACARI',
        nit: '800099241',
        doctec: true,
        cgn: '214454344',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 796 }
      },

      {
        id: 797,
        name: 'ALCALDIA DE HERRAN',
        nit: '800005292',
        doctec: true,
        cgn: '214754347',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 797 }
      },

      {
        id: 798,
        name: 'ALCALDIA DE LABATECA',
        nit: '890503680',
        doctec: true,
        cgn: '217754377',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 798 }
      },

      {
        id: 799,
        name: 'ALCALDIA DE LA ESPERANZA',
        nit: '800245021',
        doctec: true,
        cgn: '218554385',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 799 }
      },

      {
        id: 800,
        name: 'ALCALDIA DE LA PLAYA',
        nit: '800000681',
        doctec: true,
        cgn: '219854398',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 800 }
      },

      {
        id: 801,
        name: 'ALCALDIA DE LOS PATIOS',
        nit: '800044113',
        doctec: true,
        cgn: '210554405',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 801 }
      },

      {
        id: 802,
        name: 'ALCALDIA DE LOURDES',
        nit: '890502611',
        doctec: true,
        cgn: '211854418',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 802 }
      },

      {
        id: 803,
        name: 'ALCALDIA DE MUTISCUA',
        nit: '890503233',
        doctec: true,
        cgn: '218054480',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 803 }
      },

      {
        id: 804,
        name: 'ALCALDIA DE OCANA',
        nit: '890501102',
        doctec: true,
        cgn: '219854498',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 804 }
      },

      {
        id: 805,
        name: 'ALCALDIA DE PAMPLONA',
        nit: '800007652',
        doctec: true,
        cgn: '211854518',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 805 }
      },

      {
        id: 806,
        name: 'ALCALDIA DE PAMPLONITA',
        nit: '890506116',
        doctec: true,
        cgn: '212054520',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 806 }
      },

      {
        id: 807,
        name: 'ALCALDIA DE PUERTO SANTANDER',
        nit: '800250853',
        doctec: true,
        cgn: '215354553',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 807 }
      },

      {
        id: 808,
        name: 'ALCALDIA DE RAGONVALIA',
        nit: '800099251',
        doctec: true,
        cgn: '219954599',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 808 }
      },

      {
        id: 809,
        name: 'ALCALDIA DE SALAZAR',
        nit: '890501549',
        doctec: true,
        cgn: '216054660',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 809 }
      },

      {
        id: 810,
        name: 'ALCALDIA DE SAN CALIXTO',
        nit: '800099260',
        doctec: true,
        cgn: '217054670',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 810 }
      },

      {
        id: 811,
        name: 'ALCALDIA DE SAN CAYETANO',
        nit: '890501876',
        doctec: true,
        cgn: '217354673',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 811 }
      },

      {
        id: 812,
        name: 'ALCALDIA DE SANTIAGO',
        nit: '800099262',
        doctec: true,
        cgn: '218054680',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 812 }
      },

      {
        id: 813,
        name: 'ALCALDIA DE SARDINATA',
        nit: '800099263',
        doctec: true,
        cgn: '212054720',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 813 }
      },

      {
        id: 814,
        name: 'ALCALDIA DE SILOS',
        nit: '890506128',
        doctec: true,
        cgn: '214354743',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 814 }
      },

      {
        id: 815,
        name: 'ALCALDIA DE TEORAMA',
        nit: '800017022',
        doctec: true,
        cgn: '210054800',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 815 }
      },

      {
        id: 816,
        name: 'ALCALDIA DE TIBU',
        nit: '800070682',
        doctec: true,
        cgn: '211054810',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 816 }
      },

      {
        id: 817,
        name: 'ALCALDIA DE TOLEDO',
        nit: '890501362',
        doctec: true,
        cgn: '212054820',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 817 }
      },

      {
        id: 818,
        name: 'ALCALDIA DE VILLA CARO',
        nit: '890501981',
        doctec: true,
        cgn: '217154871',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 818 }
      },

      {
        id: 819,
        name: 'ALCALDIA DE VILLA DEL ROSARIO',
        nit: '890503373',
        doctec: true,
        cgn: '217454874',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 819 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
