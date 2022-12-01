import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933068 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 716,
        name: 'ALCALDIA DE PASTO',
        nit: '891280000',
        doctec: true,
        cgn: '210152001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 716 }
      },

      {
        id: 717,
        name: 'ALCALDIA DE ALBAN',
        nit: '800099054',
        doctec: true,
        cgn: '211952019',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 717 }
      },

      {
        id: 718,
        name: 'ALCALDIA DE ALDANA',
        nit: '800099052',
        doctec: true,
        cgn: '212252022',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 718 }
      },

      {
        id: 719,
        name: 'ALCALDIA DE ANCUYA',
        nit: '800099055',
        doctec: true,
        cgn: '213652036',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 719 }
      },

      {
        id: 720,
        name: 'ALCALDIA DE ARBOLEDA',
        nit: '800099058',
        doctec: true,
        cgn: '215152051',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 720 }
      },

      {
        id: 721,
        name: 'ALCALDIA DE BARBACOAS',
        nit: '800099061',
        doctec: true,
        cgn: '217952079',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 721 }
      },

      {
        id: 722,
        name: 'ALCALDIA DE BELEN',
        nit: '800035482',
        doctec: true,
        cgn: '218352083',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 722 }
      },

      {
        id: 723,
        name: 'ALCALDIA DE BUESACO',
        nit: '800099062',
        doctec: true,
        cgn: '211052110',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 723 }
      },

      {
        id: 724,
        name: 'ALCALDIA DE COLON',
        nit: '800019816',
        doctec: true,
        cgn: '210352203',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 724 }
      },

      {
        id: 725,
        name: 'ALCALDIA DE CONSACA',
        nit: '800019000',
        doctec: true,
        cgn: '210752207',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 725 }
      },

      {
        id: 726,
        name: 'ALCALDIA DE CONTADERO',
        nit: '800099064',
        doctec: true,
        cgn: '211052210',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 726 }
      },

      {
        id: 727,
        name: 'ALCALDIA DE CORDOBA',
        nit: '800035024',
        doctec: true,
        cgn: '211552215',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 727 }
      },

      {
        id: 728,
        name: 'ALCALDIA DE CUASPUD CARLOSAMA',
        nit: '800099070',
        doctec: true,
        cgn: '212452224',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 728 }
      },

      {
        id: 729,
        name: 'ALCALDIA DE CUMBAL',
        nit: '800099066',
        doctec: true,
        cgn: '212752227',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 729 }
      },

      {
        id: 730,
        name: 'ALCALDIA DE CUMBITARA',
        nit: '800099072',
        doctec: true,
        cgn: '213352233',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 730 }
      },

      {
        id: 731,
        name: 'ALCALDIA DE CHACHAGUI',
        nit: '800199959',
        doctec: true,
        cgn: '214052240',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 731 }
      },

      {
        id: 732,
        name: 'ALCALDIA DE EL CHARCO',
        nit: '800099076',
        doctec: true,
        cgn: '215052250',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 732 }
      },

      {
        id: 733,
        name: 'ALCALDIA DE EL PENOL',
        nit: '814002243',
        doctec: true,
        cgn: '215452254',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 733 }
      },

      {
        id: 734,
        name: 'ALCALDIA DE EL ROSARIO',
        nit: '800099079',
        doctec: true,
        cgn: '215652256',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 734 }
      },

      {
        id: 735,
        name: 'ALCALDIA DE EL TABLON DE GOMEZ',
        nit: '800099080',
        doctec: true,
        cgn: '215852258',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 735 }
      },

      {
        id: 736,
        name: 'ALCALDIA DE EL TAMBO',
        nit: '800099084',
        doctec: true,
        cgn: '216052260',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 736 }
      },

      {
        id: 737,
        name: 'ALCALDIA DE FUNES',
        nit: '800099089',
        doctec: true,
        cgn: '218752287',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 737 }
      },

      {
        id: 738,
        name: 'ALCALDIA DE GUACHUCAL',
        nit: '800015689',
        doctec: true,
        cgn: '211752317',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 738 }
      },

      {
        id: 739,
        name: 'ALCALDIA DE GUAITARILLA',
        nit: '800099090',
        doctec: true,
        cgn: '212052320',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 739 }
      },

      {
        id: 740,
        name: 'ALCALDIA DE GUALMATAN',
        nit: '800083672',
        doctec: true,
        cgn: '212352323',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 740 }
      },

      {
        id: 741,
        name: 'ALCALDIA DE ILES',
        nit: '800099092',
        doctec: true,
        cgn: '215252352',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 741 }
      },

      {
        id: 742,
        name: 'ALCALDIA DE IMUES',
        nit: '800019005',
        doctec: true,
        cgn: '215452354',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 742 }
      },

      {
        id: 743,
        name: 'ALCALDIA DE IPIALES',
        nit: '800099095',
        doctec: true,
        cgn: '215652356',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 743 }
      },

      {
        id: 744,
        name: 'ALCALDIA DE LA CRUZ',
        nit: '800099098',
        doctec: true,
        cgn: '217852378',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 744 }
      },

      {
        id: 745,
        name: 'ALCALDIA DE LA FLORIDA',
        nit: '800099100',
        doctec: true,
        cgn: '218152381',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 745 }
      },

      {
        id: 746,
        name: 'ALCALDIA DE LA LLANADA',
        nit: '800149894',
        doctec: true,
        cgn: '218552385',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 746 }
      },

      {
        id: 747,
        name: 'ALCALDIA DE LA TOLA',
        nit: '800222502',
        doctec: true,
        cgn: '219052390',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 747 }
      },

      {
        id: 748,
        name: 'ALCALDIA DE LA UNION',
        nit: '800099102',
        doctec: true,
        cgn: '219952399',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 748 }
      },

      {
        id: 749,
        name: 'ALCALDIA DE LEIVA',
        nit: '800019111',
        doctec: true,
        cgn: '210552405',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 749 }
      },

      {
        id: 750,
        name: 'ALCALDIA DE LINARES',
        nit: '800099105',
        doctec: true,
        cgn: '211152411',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 750 }
      },

      {
        id: 751,
        name: 'ALCALDIA DE LOS ANDES',
        nit: '800019112',
        doctec: true,
        cgn: '211852418',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 751 }
      },

      {
        id: 752,
        name: 'ALCALDIA DE MAGUI',
        nit: '800099106',
        doctec: true,
        cgn: '212752427',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 752 }
      },

      {
        id: 753,
        name: 'ALCALDIA DE MALLAMA',
        nit: '800099108',
        doctec: true,
        cgn: '213552435',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 753 }
      },

      {
        id: 754,
        name: 'ALCALDIA DE MOSQUERA',
        nit: '800099111',
        doctec: true,
        cgn: '217352473',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 754 }
      },

      {
        id: 755,
        name: 'ALCALDIA DE NARINO',
        nit: '814003734',
        doctec: true,
        cgn: '218052480',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 755 }
      },

      {
        id: 756,
        name: 'ALCALDIA DE OLAYA HERRERA',
        nit: '800099113',
        doctec: true,
        cgn: '219052490',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 756 }
      },

      {
        id: 757,
        name: 'ALCALDIA DE OSPINA',
        nit: '800099115',
        doctec: true,
        cgn: '210652506',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 757 }
      },

      {
        id: 758,
        name: 'ALCALDIA DE FRANCISCO PIZARRO',
        nit: '800099085',
        doctec: true,
        cgn: '212052520',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 758 }
      },

      {
        id: 759,
        name: 'ALCALDIA DE POLICARPA',
        nit: '800020324',
        doctec: true,
        cgn: '214052540',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 759 }
      },

      {
        id: 760,
        name: 'ALCALDIA DE POTOSI',
        nit: '800037232',
        doctec: true,
        cgn: '216052560',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 760 }
      },

      {
        id: 761,
        name: 'ALCALDIA DE PROVIDENCIA',
        nit: '800222498',
        doctec: true,
        cgn: '216552565',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 761 }
      },

      {
        id: 762,
        name: 'ALCALDIA DE PUERRES',
        nit: '800099118',
        doctec: true,
        cgn: '217352573',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 762 }
      },

      {
        id: 763,
        name: 'ALCALDIA DE PUPIALES',
        nit: '800099122',
        doctec: true,
        cgn: '218552585',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 763 }
      },

      {
        id: 764,
        name: 'ALCALDIA DE RICAURTE',
        nit: '800099127',
        doctec: true,
        cgn: '211252612',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 764 }
      },

      {
        id: 765,
        name: 'ALCALDIA DE ROBERTO PAYAN',
        nit: '800099132',
        doctec: true,
        cgn: '212152621',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 765 }
      },

      {
        id: 766,
        name: 'ALCALDIA DE SAMANIEGO',
        nit: '800099136',
        doctec: true,
        cgn: '217852678',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 766 }
      },

      {
        id: 767,
        name: 'ALCALDIA DE SANDONA',
        nit: '800099138',
        doctec: true,
        cgn: '218352683',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 767 }
      },

      {
        id: 768,
        name: 'ALCALDIA DE SAN BERNARDO',
        nit: '800193031',
        doctec: true,
        cgn: '218552685',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 768 }
      },

      {
        id: 769,
        name: 'ALCALDIA DE SAN LORENZO',
        nit: '800099142',
        doctec: true,
        cgn: '218752687',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 769 }
      },

      {
        id: 770,
        name: 'ALCALDIA DE SAN PABLO',
        nit: '800099143',
        doctec: true,
        cgn: '219352693',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 770 }
      },

      {
        id: 771,
        name: 'ALCALDIA DE SAN PEDRO DE CARTAGO',
        nit: '800148720',
        doctec: true,
        cgn: '219452694',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 771 }
      },

      {
        id: 772,
        name: 'ALCALDIA DE SANTA BARBARA',
        nit: '800099147',
        doctec: true,
        cgn: '219652696',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 772 }
      },

      {
        id: 773,
        name: 'ALCALDIA DE SANTACRUZ',
        nit: '800019685',
        doctec: true,
        cgn: '219952699',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 773 }
      },

      {
        id: 774,
        name: 'ALCALDIA DE SAPUYES',
        nit: '800099149',
        doctec: true,
        cgn: '212052720',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 774 }
      },

      {
        id: 775,
        name: 'ALCALDIA DE TAMINANGO',
        nit: '800024977',
        doctec: true,
        cgn: '218652786',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 775 }
      },

      {
        id: 776,
        name: 'ALCALDIA DE TANGUA',
        nit: '800099151',
        doctec: true,
        cgn: '218852788',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 776 }
      },

      {
        id: 777,
        name: 'ALCALDIA DE SAN ANDRES DE TUMACO',
        nit: '891200916',
        doctec: true,
        cgn: '213552835',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 777 }
      },

      {
        id: 778,
        name: 'ALCALDIA DE TUQUERRES',
        nit: '800099152',
        doctec: true,
        cgn: '213852838',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 778 }
      },

      {
        id: 779,
        name: 'ALCALDIA DE YACUANQUER',
        nit: '800099153',
        doctec: true,
        cgn: '218552885',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 779 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
