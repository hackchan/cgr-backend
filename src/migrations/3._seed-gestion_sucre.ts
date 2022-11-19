import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933074 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 933,
        name: 'ALCALDIA DE SINCELEJO',
        nit: '800104062',
        doctec: true,
        cgn: '210170001',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 933 }
      },

      {
        id: 934,
        name: 'ALCALDIA DE BUENAVISTA',
        nit: '892201286',
        doctec: true,
        cgn: '211070110',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 934 }
      },

      {
        id: 935,
        name: 'ALCALDIA DE CAIMITO',
        nit: '892200058',
        doctec: true,
        cgn: '212470124',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 935 }
      },

      {
        id: 936,
        name: 'ALCALDIA DE COLOSO',
        nit: '892280053',
        doctec: true,
        cgn: '210470204',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 936 }
      },

      {
        id: 937,
        name: 'ALCALDIA DE COROZAL',
        nit: '892280032',
        doctec: true,
        cgn: '211570215',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 937 }
      },

      {
        id: 938,
        name: 'ALCALDIA DE COVENAS',
        nit: '823003543',
        doctec: true,
        cgn: '89970221',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 938 }
      },

      {
        id: 939,
        name: 'ALCALDIA DE CHALAN',
        nit: '892200740',
        doctec: true,
        cgn: '213070230',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 939 }
      },

      {
        id: 940,
        name: 'ALCALDIA DE EL ROBLE',
        nit: '823002595',
        doctec: true,
        cgn: '213370233',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 940 }
      },

      {
        id: 941,
        name: 'ALCALDIA DE GALERAS',
        nit: '800049826',
        doctec: true,
        cgn: '213570235',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 941 }
      },

      {
        id: 942,
        name: 'ALCALDIA DE GUARANDA',
        nit: '800061313',
        doctec: true,
        cgn: '216570265',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 942 }
      },

      {
        id: 943,
        name: 'ALCALDIA DE LA UNION',
        nit: '800050331',
        doctec: true,
        cgn: '210070400',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 943 }
      },

      {
        id: 944,
        name: 'ALCALDIA DE LOS PALMITOS',
        nit: '892201287',
        doctec: true,
        cgn: '211870418',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 944 }
      },

      {
        id: 945,
        name: 'ALCALDIA DE MAJAGUAL',
        nit: '892280057',
        doctec: true,
        cgn: '212970429',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 945 }
      },

      {
        id: 946,
        name: 'ALCALDIA DE MORROA',
        nit: '892201296',
        doctec: true,
        cgn: '217370473',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 946 }
      },

      {
        id: 947,
        name: 'ALCALDIA DE OVEJAS',
        nit: '800100729',
        doctec: true,
        cgn: '210870508',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 947 }
      },

      {
        id: 948,
        name: 'ALCALDIA DE PALMITO',
        nit: '892200312',
        doctec: true,
        cgn: '212370523',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 948 }
      },

      {
        id: 949,
        name: 'ALCALDIA DE SAMPUES',
        nit: '892280055',
        doctec: true,
        cgn: '217070670',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 949 }
      },

      {
        id: 950,
        name: 'ALCALDIA DE SAN BENITO ABAD',
        nit: '892280054',
        doctec: true,
        cgn: '217870678',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 950 }
      },

      {
        id: 951,
        name: 'ALCALDIA DE SAN JUAN DE BETULIA',
        nit: '892201282',
        doctec: true,
        cgn: '210270702',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 951 }
      },

      {
        id: 952,
        name: 'ALCALDIA DE SAN MARCOS',
        nit: '892200591',
        doctec: true,
        cgn: '210870708',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 952 }
      },

      {
        id: 953,
        name: 'ALCALDIA DE SAN ONOFRE',
        nit: '892200592',
        doctec: true,
        cgn: '211370713',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 953 }
      },

      {
        id: 954,
        name: 'ALCALDIA DE SAN PEDRO',
        nit: '892280063',
        doctec: true,
        cgn: '211770717',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 954 }
      },

      {
        id: 955,
        name: 'ALCALDIA DE SAN LUIS DE SINCE',
        nit: '800100747',
        doctec: true,
        cgn: '214270742',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 955 }
      },

      {
        id: 956,
        name: 'ALCALDIA DE SUCRE',
        nit: '892280061',
        doctec: true,
        cgn: '217170771',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 956 }
      },

      {
        id: 957,
        name: 'ALCALDIA DE SANTIAGO DE TOLU',
        nit: '892200839',
        doctec: true,
        cgn: '212070820',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 957 }
      },

      {
        id: 958,
        name: 'ALCALDIA DE SAN JOSE DE TOLUVIEJO',
        nit: '800100751',
        doctec: true,
        cgn: '212370823',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 958 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
