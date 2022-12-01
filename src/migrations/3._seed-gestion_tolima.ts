import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933076 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 959,
        name: 'ALCALDIA DE IBAGUE',
        nit: '800113389',
        doctec: true,
        cgn: '210173001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 959 }
      },

      {
        id: 960,
        name: 'ALCALDIA DE ALPUJARRA',
        nit: '890702017',
        doctec: true,
        cgn: '212473024',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 960 }
      },

      {
        id: 961,
        name: 'ALCALDIA DE ALVARADO',
        nit: '890700961',
        doctec: true,
        cgn: '212673026',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 961 }
      },

      {
        id: 962,
        name: 'ALCALDIA DE AMBALEMA',
        nit: '800100048',
        doctec: true,
        cgn: '213073030',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 962 }
      },

      {
        id: 963,
        name: 'ALCALDIA DE ANZOATEGUI',
        nit: '890702018',
        doctec: true,
        cgn: '214373043',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 963 }
      },

      {
        id: 964,
        name: 'ALCALDIA DE ARMERO',
        nit: '890700982',
        doctec: true,
        cgn: '215573055',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 964 }
      },

      {
        id: 965,
        name: 'ALCALDIA DE ATACO',
        nit: '800100049',
        doctec: true,
        cgn: '216773067',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 965 }
      },

      {
        id: 966,
        name: 'ALCALDIA DE CAJAMARCA',
        nit: '890700859',
        doctec: true,
        cgn: '212473124',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 966 }
      },

      {
        id: 967,
        name: 'ALCALDIA DE CARMEN DE APICALA',
        nit: '800100050',
        doctec: true,
        cgn: '214873148',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 967 }
      },

      {
        id: 968,
        name: 'ALCALDIA DE CASABIANCA',
        nit: '890702021',
        doctec: true,
        cgn: '215273152',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 968 }
      },

      {
        id: 969,
        name: 'ALCALDIA DE CHAPARRAL',
        nit: '800100053',
        doctec: true,
        cgn: '216873168',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 969 }
      },

      {
        id: 970,
        name: 'ALCALDIA DE COELLO',
        nit: '800100051',
        doctec: true,
        cgn: '210073200',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 970 }
      },

      {
        id: 971,
        name: 'ALCALDIA DE COYAIMA',
        nit: '890702023',
        doctec: true,
        cgn: '211773217',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 971 }
      },

      {
        id: 972,
        name: 'ALCALDIA DE CUNDAY',
        nit: '800100052',
        doctec: true,
        cgn: '212673226',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 972 }
      },

      {
        id: 973,
        name: 'ALCALDIA DE DOLORES',
        nit: '890702026',
        doctec: true,
        cgn: '213673236',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 973 }
      },

      {
        id: 974,
        name: 'ALCALDIA DE ESPINAL',
        nit: '890702027',
        doctec: true,
        cgn: '216873268',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 974 }
      },

      {
        id: 975,
        name: 'ALCALDIA DE FALAN',
        nit: '800100054',
        doctec: true,
        cgn: '217073270',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 975 }
      },

      {
        id: 976,
        name: 'ALCALDIA DE FLANDES',
        nit: '800100055',
        doctec: true,
        cgn: '217573275',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 976 }
      },

      {
        id: 977,
        name: 'ALCALDIA DE FRESNO',
        nit: '800100056',
        doctec: true,
        cgn: '218373283',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 977 }
      },

      {
        id: 978,
        name: 'ALCALDIA DE GUAMO',
        nit: '890702015',
        doctec: true,
        cgn: '211973319',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 978 }
      },

      {
        id: 979,
        name: 'ALCALDIA DE HERVEO',
        nit: '800100057',
        doctec: true,
        cgn: '214773347',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 979 }
      },

      {
        id: 980,
        name: 'ALCALDIA DE HONDA',
        nit: '800100058',
        doctec: true,
        cgn: '214973349',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 980 }
      },

      {
        id: 981,
        name: 'ALCALDIA DE ICONONZO',
        nit: '800100059',
        doctec: true,
        cgn: '215273352',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 981 }
      },

      {
        id: 982,
        name: 'ALCALDIA DE LERIDA',
        nit: '890702034',
        doctec: true,
        cgn: '210873408',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 982 }
      },

      {
        id: 983,
        name: 'ALCALDIA DE LIBANO',
        nit: '800100061',
        doctec: true,
        cgn: '211173411',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 983 }
      },

      {
        id: 984,
        name: 'ALCALDIA DE SAN SEBASTIAN DE MARIQUITA',
        nit: '890701342',
        doctec: true,
        cgn: '214373443',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 984 }
      },

      {
        id: 985,
        name: 'ALCALDIA DE MELGAR',
        nit: '890701933',
        doctec: true,
        cgn: '214973449',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 985 }
      },

      {
        id: 986,
        name: 'ALCALDIA DE MURILLO',
        nit: '800010350',
        doctec: true,
        cgn: '216173461',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 986 }
      },

      {
        id: 987,
        name: 'ALCALDIA DE NATAGAIMA',
        nit: '800100134',
        doctec: true,
        cgn: '218373483',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 987 }
      },

      {
        id: 988,
        name: 'ALCALDIA DE ORTEGA',
        nit: '890700942',
        doctec: true,
        cgn: '210473504',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 988 }
      },

      {
        id: 989,
        name: 'ALCALDIA DE PALOCABILDO',
        nit: '809002637',
        doctec: true,
        cgn: '212073520',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 989 }
      },

      {
        id: 990,
        name: 'ALCALDIA DE PIEDRAS',
        nit: '800100136',
        doctec: true,
        cgn: '214773547',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 990 }
      },

      {
        id: 991,
        name: 'ALCALDIA DE PLANADAS',
        nit: '800100137',
        doctec: true,
        cgn: '215573555',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 991 }
      },

      {
        id: 992,
        name: 'ALCALDIA DE PRADO',
        nit: '890702038',
        doctec: true,
        cgn: '216373563',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 992 }
      },

      {
        id: 993,
        name: 'ALCALDIA DE PURIFICACION',
        nit: '890701077',
        doctec: true,
        cgn: '218573585',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 993 }
      },

      {
        id: 994,
        name: 'ALCALDIA DE RIOBLANCO',
        nit: '890702040',
        doctec: true,
        cgn: '211673616',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 994 }
      },

      {
        id: 995,
        name: 'ALCALDIA DE RONCESVALLES',
        nit: '890700911',
        doctec: true,
        cgn: '212273622',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 995 }
      },

      {
        id: 996,
        name: 'ALCALDIA DE ROVIRA',
        nit: '800100138',
        doctec: true,
        cgn: '212473624',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 996 }
      },

      {
        id: 997,
        name: 'ALCALDIA DE SALDANA',
        nit: '800100140',
        doctec: true,
        cgn: '217173671',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 997 }
      },

      {
        id: 998,
        name: 'ALCALDIA DE SAN ANTONIO',
        nit: '800100141',
        doctec: true,
        cgn: '217573675',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 998 }
      },

      {
        id: 999,
        name: 'ALCALDIA DE SAN LUIS',
        nit: '890700842',
        doctec: true,
        cgn: '217873678',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 999 }
      },

      {
        id: 1000,
        name: 'ALCALDIA DE SANTA ISABEL',
        nit: '890072044',
        doctec: true,
        cgn: '218673686',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1000 }
      },

      {
        id: 1001,
        name: 'ALCALDIA DE SUAREZ',
        nit: '890700978',
        doctec: true,
        cgn: '217073770',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1001 }
      },

      {
        id: 1002,
        name: 'ALCALDIA DE VALLE DE SAN JUAN',
        nit: '800100143',
        doctec: true,
        cgn: '215473854',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1002 }
      },

      {
        id: 1003,
        name: 'ALCALDIA DE VENADILLO',
        nit: '800100144',
        doctec: true,
        cgn: '216173861',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1003 }
      },

      {
        id: 1004,
        name: 'ALCALDIA DE VILLAHERMOSA',
        nit: '800100145',
        doctec: true,
        cgn: '217073870',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1004 }
      },

      {
        id: 1005,
        name: 'ALCALDIA DE VILLARRICA',
        nit: '800100147',
        doctec: true,
        cgn: '217373873',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 1005 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
