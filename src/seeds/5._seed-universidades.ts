// import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { Email } from '../entity/Entidad/Email'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933082 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.manager.insert(EntidadControl, [
    //   {
    //     id: 1121,
    //     name: 'UNIVERSIDAD COLEGIO MAYOR DE CUNDINAMARCA',
    //     nit: '800144829',
    //     doctec: false,
    //     cgn: '821400000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 458 }
    //   },

    //   {
    //     id: 1122,
    //     name: 'UNIVERSIDAD DE CALDAS',
    //     nit: '890801063',
    //     doctec: false,
    //     cgn: '27017000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 318 }
    //   },

    //   {
    //     id: 1123,
    //     name: 'UNIVERSIDAD DE CORDOBA',
    //     nit: '891080031',
    //     doctec: false,
    //     cgn: '27123000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 428 }
    //   },

    //   {
    //     id: 1124,
    //     name: 'UNIVERSIDAD DE LA AMAZONIA',
    //     nit: '891190346',
    //     doctec: false,
    //     cgn: '26318000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 345 }
    //   },

    //   {
    //     id: 1125,
    //     name: 'UNIVERSIDAD DE LOS LLANOS',
    //     nit: '892000757',
    //     doctec: false,
    //     cgn: '28450000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 687 }
    //   },

    //   {
    //     id: 1126,
    //     name: 'UNIVERSIDAD DEL PACIFICO',
    //     nit: '835000300',
    //     doctec: false,
    //     cgn: '826076000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 1012 }
    //   },

    //   {
    //     id: 1127,
    //     name: 'UNIVERSIDAD MILITAR NUEVA GRANADA',
    //     nit: '800225340',
    //     doctec: false,
    //     cgn: '821700000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 458 }
    //   },

    //   {
    //     id: 1128,
    //     name: 'UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA',
    //     nit: '860512780',
    //     doctec: false,
    //     cgn: '822000000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 458 }
    //   },

    //   {
    //     id: 1129,
    //     name: 'UNIVERSIDAD NACIONAL DE COLOMBIA',
    //     nit: '899999063',
    //     doctec: false,
    //     cgn: '27400000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 458 }
    //   },

    //   {
    //     id: 1130,
    //     name: 'UNIVERSIDAD PEDAGOGICA NACIONAL',
    //     nit: '899999124',
    //     doctec: false,
    //     cgn: '27500000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 458 }
    //   },

    //   {
    //     id: 1131,
    //     name: 'UNIVERSIDAD PEDAGOGICA Y TECNOLOGICA DE COLOMBIA',
    //     nit: '891800330',
    //     doctec: false,
    //     cgn: '27615000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 195 }
    //   },

    //   {
    //     id: 1132,
    //     name: 'UNIVERSIDAD POPULAR DEL CESAR',
    //     nit: '892300285',
    //     doctec: false,
    //     cgn: '821920000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 403 }
    //   },

    //   {
    //     id: 1133,
    //     name: 'UNIVERSIDAD SURCOLOMBIANA',
    //     nit: '891180084',
    //     doctec: false,
    //     cgn: '26141000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 605 }
    //   },

    //   {
    //     id: 1134,
    //     name: 'UNIVERSIDAD TECNOLOGICA DE PEREIRA',
    //     nit: '891480035',
    //     doctec: false,
    //     cgn: '24666000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 832 }
    //   },

    //   {
    //     id: 1135,
    //     name: 'UNIVERSIDAD TECNOLOGICA DEL CHOCO',
    //     nit: '891680089',
    //     doctec: false,
    //     cgn: '28327000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 575 }
    //   },

    //   {
    //     id: 1136,
    //     name: 'UNIVERSIDAD DE ANTIOQUIA',
    //     nit: '890980040',
    //     doctec: false,
    //     cgn: '120205000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 1 }
    //   },

    //   {
    //     id: 1137,
    //     name: 'UNIVERSIDAD DE CARTAGENA',
    //     nit: '890480123',
    //     doctec: false,
    //     cgn: '122613000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 149 }
    //   },

    //   {
    //     id: 1138,
    //     name: 'UNIVERSIDAD DE CUNDINAMARCA',
    //     nit: '890680062',
    //     doctec: false,
    //     cgn: '127625000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 489 }
    //   },

    //   {
    //     id: 1139,
    //     name: 'UNIVERSIDAD DE LA GUAJIRA',
    //     nit: '892115029',
    //     doctec: false,
    //     cgn: '129444000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 642 }
    //   },

    //   {
    //     id: 1140,
    //     name: 'UNIVERSIDAD DE NARINO',
    //     nit: '800118954',
    //     doctec: false,
    //     cgn: '124552000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 716 }
    //   },

    //   {
    //     id: 1141,
    //     name: 'UNIVERSIDAD DE PAMPLONA',
    //     nit: '890501510',
    //     doctec: false,
    //     cgn: '125454000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 805 }
    //   },

    //   {
    //     id: 1142,
    //     name: 'UNIVERSIDAD DE SUCRE',
    //     nit: '892200323',
    //     doctec: false,
    //     cgn: '128870000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 933 }
    //   },

    //   {
    //     id: 1143,
    //     name: 'UNIVERSIDAD DEL ATLANTICO',
    //     nit: '890102257',
    //     doctec: false,
    //     cgn: '121708000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 126 }
    //   },

    //   {
    //     id: 1144,
    //     name: 'UNIVERSIDAD DEL CAUCA',
    //     nit: '891500319',
    //     doctec: false,
    //     cgn: '27219000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 361 }
    //   },

    //   {
    //     id: 1145,
    //     name: 'UNIVERSIDAD DEL MAGDALENA',
    //     nit: '891780111',
    //     doctec: false,
    //     cgn: '121647000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 657 }
    //   },

    //   {
    //     id: 1146,
    //     name: 'UNIVERSIDAD DEL QUINDIO',
    //     nit: '890000432',
    //     doctec: false,
    //     cgn: '126663000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 820 }
    //   },

    //   {
    //     id: 1147,
    //     name: 'UNIVERSIDAD DEL VALLE',
    //     nit: '890399010',
    //     doctec: false,
    //     cgn: '120676000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 1006 }
    //   },

    //   {
    //     id: 1148,
    //     name: 'UNIVERSIDAD DISTRITAL FRANCISCO JOSE DE CALDAS',
    //     nit: '899999230',
    //     doctec: false,
    //     cgn: '222711001',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 458 }
    //   },

    //   {
    //     id: 1149,
    //     name: 'UNIVERSIDAD FRANCISCO DE PAULA SANTANDER CUCUTA',
    //     nit: '890500622',
    //     doctec: false,
    //     cgn: '125354000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 780 }
    //   },

    //   {
    //     id: 1150,
    //     name: 'UNIVERSIDAD INDUSTRIAL DE SANTANDER',
    //     nit: '890201213',
    //     doctec: false,
    //     cgn: '128868000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 846 }
    //   },

    //   {
    //     id: 1151,
    //     name: 'UNIVERSIDAD FRANCISCO DE PAULA SANTANDER OCANA',
    //     nit: '800163130',
    //     doctec: false,
    //     cgn: '129254000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 804 }
    //   },

    //   {
    //     id: 1152,
    //     name: 'UNITROPICO',
    //     nit: '844002071',
    //     doctec: false,
    //     cgn: '220285001',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 1055 }
    //   },

    //   {
    //     id: 1153,
    //     name: 'ESCUELA SUPERIOR DE ADMINISTRACION PUBLICA',
    //     nit: '899999054',
    //     doctec: false,
    //     cgn: '22000000',
    //     categoria: { id: 8 },
    //     subsector: { id: 21 },
    //     municipio: { id: 458 }
    //   }

    // ])

    await queryRunner.manager.insert(Email, [
      {
        email: 'contacto@unicolmayor.edu.co',
        register: true,
        entidad: { id: 1121 }
      },

      {
        email: 'ucaldas@ucaldas.edu.co',
        register: true,
        entidad: { id: 1122 }
      },

      {
        email: 'auracastro@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'rectoria@uniamazonia.edu.co',
        register: true,
        entidad: { id: 1124 }
      },

      {
        email: 'rectoria@unillanos.edu.co',
        register: true,
        entidad: { id: 1125 }
      },

      {
        email: 'info@unipacifico.edu.co',
        register: true,
        entidad: { id: 1126 }
      },

      {
        email: 'atencionalciudadano@unimilitar.edu.co',
        register: true,
        entidad: { id: 1127 }
      },

      {
        email: 'tomas.palacio@unad.edu.co',
        register: true,
        entidad: { id: 1128 }
      },

      {
        email: 'secsede_bog@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'avalenciav@pedagogica.edu.co',
        register: true,
        entidad: { id: 1130 }
      },

      {
        email: 'rectoria@uptc.edu.co',
        register: true,
        entidad: { id: 1131 }
      },

      {
        email: 'orpi@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'rectoria@usco.edu.co',
        register: true,
        entidad: { id: 1133 }
      },

      {
        email: 'sycalvo@utp.edu.co',
        register: true,
        entidad: { id: 1134 }
      },

      {
        email: 'contactenos@utch.edu.co',
        register: true,
        entidad: { id: 1135 }
      },

      {
        email: 'secretariogeneral@udea.edu.co',
        register: true,
        entidad: { id: 1136 }
      },

      {
        email: 'rectoria@unicartagena.edu.co',
        register: true,
        entidad: { id: 1137 }
      },

      {
        email: 'rectoria@ucundinamarca.edu.co',
        register: true,
        entidad: { id: 1138 }
      },

      {
        email: 'rectoria@uniguajira.edu.co',
        register: true,
        entidad: { id: 1139 }
      },

      {
        email: 'ocara@udenar.edu.co',
        register: true,
        entidad: { id: 1140 }
      },

      {
        email: 'rectoria@unipamplona.edu.co',
        register: true,
        entidad: { id: 1141 }
      },

      {
        email: 'atencionalciudadano@unisucre.edu.co',
        register: true,
        entidad: { id: 1142 }
      },

      {
        email: 'rectoria@mail.uniatlantico.edu.co',
        register: true,
        entidad: { id: 1143 }
      },

      {
        email: 'cinterno@unicauca.edu.co',
        register: true,
        entidad: { id: 1144 }
      },

      {
        email: 'ciudadano@unimagdalena.edu.co',
        register: true,
        entidad: { id: 1145 }
      },

      {
        email: 'rector@uniquindio.edu.co',
        register: true,
        entidad: { id: 1146 }
      },

      {
        email: 'institucional @correounivalle.edu.co',
        register: true,
        entidad: { id: 1147 }
      },

      {
        email: 'atencion@udistrital.edu.co',
        register: true,
        entidad: { id: 1148 }
      },

      {
        email: 'rectoria@ufps.edu.co',
        register: true,
        entidad: { id: 1149 }
      },

      {
        email: 'rectoria@uis.edu.co',
        register: true,
        entidad: { id: 1150 }
      },

      {
        email: 'easanchezo@ufpso.edu.co',
        register: true,
        entidad: { id: 1151 }
      },

      {
        email: 'rectoria@unitropico.edu.co',
        register: true,
        entidad: { id: 1152 }
      },

      {
        email: 'ventanillaunica@esap.edu.co',
        register: true,
        entidad: { id: 1153 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
