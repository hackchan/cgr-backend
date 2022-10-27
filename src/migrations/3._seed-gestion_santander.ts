import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933073 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 846,
        name: 'ALCALDIA DE BUCARAMANGA',
        nit: '890201222',
        doctec: true,
        cgn: '210168001',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 846 }
      },

      {
        id: 847,
        name: 'ALCALDIA DE AGUADA',
        nit: '890210928',
        doctec: true,
        cgn: '211368013',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 847 }
      },

      {
        id: 848,
        name: 'ALCALDIA DE ALBANIA',
        nit: '800099455',
        doctec: true,
        cgn: '212068020',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 848 }
      },

      {
        id: 849,
        name: 'ALCALDIA DE ARATOCA',
        nit: '890205334',
        doctec: true,
        cgn: '215168051',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 849 }
      },

      {
        id: 850,
        name: 'ALCALDIA DE BARBOSA',
        nit: '890206033',
        doctec: true,
        cgn: '217768077',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 850 }
      },

      {
        id: 851,
        name: 'ALCALDIA DE BARICHARA',
        nit: '890210932',
        doctec: true,
        cgn: '217968079',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 851 }
      },

      {
        id: 852,
        name: 'ALCALDIA DE BARRANCABERMEJA',
        nit: '890201900',
        doctec: true,
        cgn: '218168081',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 852 }
      },

      {
        id: 853,
        name: 'ALCALDIA DE BETULIA',
        nit: '890208119',
        doctec: true,
        cgn: '219268092',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 853 }
      },

      {
        id: 854,
        name: 'ALCALDIA DE BOLIVAR',
        nit: '890210890',
        doctec: true,
        cgn: '210168101',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 854 }
      },

      {
        id: 855,
        name: 'ALCALDIA DE CABRERA',
        nit: '890205575',
        doctec: true,
        cgn: '212168121',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 855 }
      },

      {
        id: 856,
        name: 'ALCALDIA DE CALIFORNIA',
        nit: '890210967',
        doctec: true,
        cgn: '213268132',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 856 }
      },

      {
        id: 857,
        name: 'ALCALDIA DE CAPITANEJO',
        nit: '890205119',
        doctec: true,
        cgn: '214768147',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 857 }
      },

      {
        id: 858,
        name: 'ALCALDIA DE CARCASI',
        nit: '890210933',
        doctec: true,
        cgn: '215268152',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 858 }
      },

      {
        id: 859,
        name: 'ALCALDIA DE CEPITA',
        nit: '890204699',
        doctec: true,
        cgn: '216068160',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 859 }
      },

      {
        id: 860,
        name: 'ALCALDIA DE CERRITO',
        nit: '890209889',
        doctec: true,
        cgn: '216268162',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 860 }
      },

      {
        id: 861,
        name: 'ALCALDIA DE CHARALA',
        nit: '890205063',
        doctec: true,
        cgn: '216768167',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 861 }
      },

      {
        id: 862,
        name: 'ALCALDIA DE CHARTA',
        nit: '890206724',
        doctec: true,
        cgn: '216968169',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 862 }
      },

      {
        id: 863,
        name: 'ALCALDIA DE CHIMA',
        nit: '890206290',
        doctec: true,
        cgn: '217668176',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 863 }
      },

      {
        id: 864,
        name: 'ALCALDIA DE CHIPATA',
        nit: '890208098',
        doctec: true,
        cgn: '217968179',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 864 }
      },

      {
        id: 865,
        name: 'ALCALDIA DE CIMITARRA',
        nit: '890208363',
        doctec: true,
        cgn: '219068190',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 865 }
      },

      {
        id: 866,
        name: 'ALCALDIA DE CONCEPCION',
        nit: '800140060',
        doctec: true,
        cgn: '210768207',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 866 }
      },

      {
        id: 867,
        name: 'ALCALDIA DE CONFINES',
        nit: '890208947',
        doctec: true,
        cgn: '210968209',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 867 }
      },

      {
        id: 868,
        name: 'ALCALDIA DE CONTRATACION',
        nit: '890206058',
        doctec: true,
        cgn: '211168211',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 868 }
      },

      {
        id: 869,
        name: 'ALCALDIA DE COROMORO',
        nit: '890205058',
        doctec: true,
        cgn: '211768217',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 869 }
      },

      {
        id: 870,
        name: 'ALCALDIA DE CURITI',
        nit: '800099489',
        doctec: true,
        cgn: '212968229',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 870 }
      },

      {
        id: 871,
        name: 'ALCALDIA DE EL CARMEN DE CHUCURI',
        nit: '890270859',
        doctec: true,
        cgn: '213568235',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 871 }
      },

      {
        id: 872,
        name: 'ALCALDIA DE EL GUACAMAYO',
        nit: '890205439',
        doctec: true,
        cgn: '214568245',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 872 }
      },

      {
        id: 873,
        name: 'ALCALDIA DE EL PENON',
        nit: '800213967',
        doctec: true,
        cgn: '215068250',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 873 }
      },

      {
        id: 874,
        name: 'ALCALDIA DE EL PLAYON',
        nit: '890208199',
        doctec: true,
        cgn: '215568255',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 874 }
      },

      {
        id: 875,
        name: 'ALCALDIA DE ENCINO',
        nit: '890205114',
        doctec: true,
        cgn: '216468264',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 875 }
      },

      {
        id: 876,
        name: 'ALCALDIA DE ENCISO',
        nit: '890209666',
        doctec: true,
        cgn: '216668266',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 876 }
      },

      {
        id: 877,
        name: 'ALCALDIA DE FLORIAN',
        nit: '890209640',
        doctec: true,
        cgn: '217168271',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 877 }
      },

      {
        id: 878,
        name: 'ALCALDIA DE FLORIDABLANCA',
        nit: '890205176',
        doctec: true,
        cgn: '217668276',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 878 }
      },

      {
        id: 879,
        name: 'ALCALDIA DE GALAN',
        nit: '890206722',
        doctec: true,
        cgn: '219668296',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 879 }
      },

      {
        id: 880,
        name: 'ALCALDIA DE GAMBITA',
        nit: '800099691',
        doctec: true,
        cgn: '219868298',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 880 }
      },

      {
        id: 881,
        name: 'ALCALDIA DE GIRON',
        nit: '890204802',
        doctec: true,
        cgn: '210768307',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 881 }
      },

      {
        id: 882,
        name: 'ALCALDIA DE GUACA',
        nit: '890208360',
        doctec: true,
        cgn: '211868318',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 882 }
      },

      {
        id: 883,
        name: 'ALCALDIA DE GUADALUPE',
        nit: '800099694',
        doctec: true,
        cgn: '212068320',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 883 }
      },

      {
        id: 884,
        name: 'ALCALDIA DE GUAPOTA',
        nit: '890204979',
        doctec: true,
        cgn: '212268322',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 884 }
      },

      {
        id: 885,
        name: 'ALCALDIA DE GUAVATA',
        nit: '890210945',
        doctec: true,
        cgn: '212468324',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 885 }
      },

      {
        id: 886,
        name: 'ALCALDIA DE GUEPSA',
        nit: '890207790',
        doctec: true,
        cgn: '212768327',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 886 }
      },

      {
        id: 887,
        name: 'ALCALDIA DE HATO',
        nit: '890210438',
        doctec: true,
        cgn: '214468344',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 887 }
      },

      {
        id: 888,
        name: 'ALCALDIA DE JESUS MARIA',
        nit: '890210946',
        doctec: true,
        cgn: '216868368',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 888 }
      },

      {
        id: 889,
        name: 'ALCALDIA DE JORDAN',
        nit: '800124166',
        doctec: true,
        cgn: '217068370',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 889 }
      },

      {
        id: 890,
        name: 'ALCALDIA DE LA BELLEZA',
        nit: '890210617',
        doctec: true,
        cgn: '217768377',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 890 }
      },

      {
        id: 891,
        name: 'ALCALDIA DE LANDAZURI',
        nit: '890210704',
        doctec: true,
        cgn: '218568385',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 891 }
      },

      {
        id: 892,
        name: 'ALCALDIA DE LA PAZ',
        nit: '890205308',
        doctec: true,
        cgn: '219768397',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 892 }
      },

      {
        id: 893,
        name: 'ALCALDIA DE LEBRIJA',
        nit: '890206110',
        doctec: true,
        cgn: '210668406',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 893 }
      },

      {
        id: 894,
        name: 'ALCALDIA DE LOS SANTOS',
        nit: '890204537',
        doctec: true,
        cgn: '211868418',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 894 }
      },

      {
        id: 895,
        name: 'ALCALDIA DE MACARAVITA',
        nit: '890210947',
        doctec: true,
        cgn: '212568425',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 895 }
      },

      {
        id: 896,
        name: 'ALCALDIA DE MALAGA',
        nit: '890205229',
        doctec: true,
        cgn: '213268432',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 896 }
      },

      {
        id: 897,
        name: 'ALCALDIA DE MATANZA',
        nit: '890206696',
        doctec: true,
        cgn: '214468444',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 897 }
      },

      {
        id: 898,
        name: 'ALCALDIA DE MOGOTES',
        nit: '890205632',
        doctec: true,
        cgn: '216468464',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 898 }
      },

      {
        id: 899,
        name: 'ALCALDIA DE MOLAGAVITA',
        nit: '890205326',
        doctec: true,
        cgn: '216868468',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 899 }
      },

      {
        id: 900,
        name: 'ALCALDIA DE OCAMONTE',
        nit: '890205124',
        doctec: true,
        cgn: '219868498',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 900 }
      },

      {
        id: 901,
        name: 'ALCALDIA DE OIBA',
        nit: '890210948',
        doctec: true,
        cgn: '210068500',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 901 }
      },

      {
        id: 902,
        name: 'ALCALDIA DE ONZAGA',
        nit: '890208148',
        doctec: true,
        cgn: '210268502',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 902 }
      },

      {
        id: 903,
        name: 'ALCALDIA DE PALMAR',
        nit: '800099818',
        doctec: true,
        cgn: '212268522',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 903 }
      },

      {
        id: 904,
        name: 'ALCALDIA DE PALMAS DEL SOCORRO',
        nit: '800003253',
        doctec: true,
        cgn: '212468524',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 904 }
      },

      {
        id: 905,
        name: 'ALCALDIA DE PARAMO',
        nit: '800099819',
        doctec: true,
        cgn: '213368533',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 905 }
      },

      {
        id: 906,
        name: 'ALCALDIA DE PIEDECUESTA',
        nit: '890205383',
        doctec: true,
        cgn: '214768547',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 906 }
      },

      {
        id: 907,
        name: 'ALCALDIA DE PINCHOTE',
        nit: '890204265',
        doctec: true,
        cgn: '214968549',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 907 }
      },

      {
        id: 908,
        name: 'ALCALDIA DE PUENTE NACIONAL',
        nit: '890209299',
        doctec: true,
        cgn: '217268572',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 908 }
      },

      {
        id: 909,
        name: 'ALCALDIA DE PUERTO PARRA',
        nit: '800060525',
        doctec: true,
        cgn: '217368573',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 909 }
      },

      {
        id: 910,
        name: 'ALCALDIA DE PUERTO WILCHES',
        nit: '890201190',
        doctec: true,
        cgn: '217568575',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 910 }
      },

      {
        id: 911,
        name: 'ALCALDIA DE RIONEGRO',
        nit: '890204646',
        doctec: true,
        cgn: '211568615',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 911 }
      },

      {
        id: 912,
        name: 'ALCALDIA DE SABANA DE TORRES',
        nit: '890204643',
        doctec: true,
        cgn: '215568655',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 912 }
      },

      {
        id: 913,
        name: 'ALCALDIA DE SAN ANDRES',
        nit: '890207022',
        doctec: true,
        cgn: '216968669',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 913 }
      },

      {
        id: 914,
        name: 'ALCALDIA DE SAN BENITO',
        nit: '890210227',
        doctec: true,
        cgn: '217368673',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 914 }
      },

      {
        id: 915,
        name: 'ALCALDIA DE SAN GIL',
        nit: '800099824',
        doctec: true,
        cgn: '217968679',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 915 }
      },

      {
        id: 916,
        name: 'ALCALDIA DE SAN JOAQUIN',
        nit: '890208676',
        doctec: true,
        cgn: '218268682',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 916 }
      },

      {
        id: 917,
        name: 'ALCALDIA DE SAN JOSE DE MIRANDA',
        nit: '890204890',
        doctec: true,
        cgn: '218468684',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 917 }
      },

      {
        id: 918,
        name: 'ALCALDIA DE SAN MIGUEL',
        nit: '890210950',
        doctec: true,
        cgn: '218668686',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 918 }
      },

      {
        id: 919,
        name: 'ALCALDIA DE SAN VICENTE DE CHUCURI',
        nit: '800099829',
        doctec: true,
        cgn: '218968689',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 919 }
      },

      {
        id: 920,
        name: 'ALCALDIA DE SANTA BARBARA',
        nit: '890205973',
        doctec: true,
        cgn: '210568705',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 920 }
      },

      {
        id: 921,
        name: 'ALCALDIA DE SANTA HELENA DEL OPON',
        nit: '800099832',
        doctec: true,
        cgn: '212068720',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 921 }
      },

      {
        id: 922,
        name: 'ALCALDIA DE SIMACOTA',
        nit: '890208807',
        doctec: true,
        cgn: '214568745',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 922 }
      },

      {
        id: 923,
        name: 'ALCALDIA DE SOCORRO',
        nit: '890203688',
        doctec: true,
        cgn: '215568755',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 923 }
      },

      {
        id: 924,
        name: 'ALCALDIA DE SUAITA',
        nit: '890204985',
        doctec: true,
        cgn: '217068770',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 924 }
      },

      {
        id: 925,
        name: 'ALCALDIA DE SUCRE',
        nit: '890210883',
        doctec: true,
        cgn: '217368773',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 925 }
      },

      {
        id: 926,
        name: 'ALCALDIA DE SURATA',
        nit: '890205051',
        doctec: true,
        cgn: '218068780',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 926 }
      },

      {
        id: 927,
        name: 'ALCALDIA DE TONA',
        nit: '890205581',
        doctec: true,
        cgn: '212068820',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 927 }
      },

      {
        id: 928,
        name: 'ALCALDIA DE VALLE DE SAN JOSE',
        nit: '890205460',
        doctec: true,
        cgn: '215568855',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 928 }
      },

      {
        id: 929,
        name: 'ALCALDIA DE VELEZ',
        nit: '890205677',
        doctec: true,
        cgn: '216168861',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 929 }
      },

      {
        id: 930,
        name: 'ALCALDIA DE VETAS',
        nit: '890210951',
        doctec: true,
        cgn: '216768867',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 930 }
      },

      {
        id: 931,
        name: 'ALCALDIA DE VILLANUEVA',
        nit: '890206250',
        doctec: true,
        cgn: '217268872',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 931 }
      },

      {
        id: 932,
        name: 'ALCALDIA DE ZAPATOCA',
        nit: '890204138',
        doctec: true,
        cgn: '219568895',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 932 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
