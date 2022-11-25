import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { Email } from '../entity/Entidad/Email'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933082 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1121,
        name: 'UNIVERSIDAD COLEGIO MAYOR DE CUNDINAMARCA',
        nit: '800144829',
        doctec: false,
        cgn: '821400000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 458 }
      },

      {
        id: 1122,
        name: 'UNIVERSIDAD DE CALDAS',
        nit: '890801063',
        doctec: false,
        cgn: '27017000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 318 }
      },

      {
        id: 1123,
        name: 'UNIVERSIDAD DE CORDOBA',
        nit: '891080031',
        doctec: false,
        cgn: '27123000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 428 }
      },

      {
        id: 1124,
        name: 'UNIVERSIDAD DE LA AMAZONIA',
        nit: '891190346',
        doctec: false,
        cgn: '26318000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 345 }
      },

      {
        id: 1125,
        name: 'UNIVERSIDAD DE LOS LLANOS',
        nit: '892000757',
        doctec: false,
        cgn: '28450000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 687 }
      },

      {
        id: 1126,
        name: 'UNIVERSIDAD DEL PACIFICO',
        nit: '835000300',
        doctec: false,
        cgn: '826076000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 1012 }
      },

      {
        id: 1127,
        name: 'UNIVERSIDAD MILITAR NUEVA GRANADA',
        nit: '800225340',
        doctec: false,
        cgn: '821700000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 458 }
      },

      {
        id: 1128,
        name: 'UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA',
        nit: '860512780',
        doctec: false,
        cgn: '822000000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 458 }
      },

      {
        id: 1129,
        name: 'UNIVERSIDAD NACIONAL DE COLOMBIA',
        nit: '899999063',
        doctec: false,
        cgn: '27400000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 458 }
      },

      {
        id: 1130,
        name: 'UNIVERSIDAD PEDAGOGICA NACIONAL',
        nit: '899999124',
        doctec: false,
        cgn: '27500000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 458 }
      },

      {
        id: 1131,
        name: 'UNIVERSIDAD PEDAGOGICA Y TECNOLOGICA DE COLOMBIA',
        nit: '891800330',
        doctec: false,
        cgn: '27615000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 195 }
      },

      {
        id: 1132,
        name: 'UNIVERSIDAD POPULAR DEL CESAR',
        nit: '892300285',
        doctec: false,
        cgn: '821920000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 403 }
      },

      {
        id: 1133,
        name: 'UNIVERSIDAD SURCOLOMBIANA',
        nit: '891180084',
        doctec: false,
        cgn: '26141000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 605 }
      },

      {
        id: 1134,
        name: 'UNIVERSIDAD TECNOLOGICA DE PEREIRA',
        nit: '891480035',
        doctec: false,
        cgn: '24666000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 832 }
      },

      {
        id: 1135,
        name: 'UNIVERSIDAD TECNOLOGICA DEL CHOCO',
        nit: '891680089',
        doctec: false,
        cgn: '28327000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 575 }
      },

      {
        id: 1136,
        name: 'UNIVERSIDAD DE ANTIOQUIA',
        nit: '890980040',
        doctec: false,
        cgn: '120205000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 1 }
      },

      {
        id: 1137,
        name: 'UNIVERSIDAD DE CARTAGENA',
        nit: '890480123',
        doctec: false,
        cgn: '122613000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 149 }
      },

      {
        id: 1138,
        name: 'UNIVERSIDAD DE CUNDINAMARCA',
        nit: '890680062',
        doctec: false,
        cgn: '127625000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 489 }
      },

      {
        id: 1139,
        name: 'UNIVERSIDAD DE LA GUAJIRA',
        nit: '892115029',
        doctec: false,
        cgn: '129444000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 642 }
      },

      {
        id: 1140,
        name: 'UNIVERSIDAD DE NARINO',
        nit: '800118954',
        doctec: false,
        cgn: '124552000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 716 }
      },

      {
        id: 1141,
        name: 'UNIVERSIDAD DE PAMPLONA',
        nit: '890501510',
        doctec: false,
        cgn: '125454000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 805 }
      },

      {
        id: 1142,
        name: 'UNIVERSIDAD DE SUCRE',
        nit: '892200323',
        doctec: false,
        cgn: '128870000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 933 }
      },

      {
        id: 1143,
        name: 'UNIVERSIDAD DEL ATLANTICO',
        nit: '890102257',
        doctec: false,
        cgn: '121708000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 126 }
      },

      {
        id: 1144,
        name: 'UNIVERSIDAD DEL CAUCA',
        nit: '891500319',
        doctec: false,
        cgn: '27219000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 361 }
      },

      {
        id: 1145,
        name: 'UNIVERSIDAD DEL MAGDALENA',
        nit: '891780111',
        doctec: false,
        cgn: '121647000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 657 }
      },

      {
        id: 1146,
        name: 'UNIVERSIDAD DEL QUINDIO',
        nit: '890000432',
        doctec: false,
        cgn: '126663000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 820 }
      },

      {
        id: 1147,
        name: 'UNIVERSIDAD DEL VALLE',
        nit: '890399010',
        doctec: false,
        cgn: '120676000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 1006 }
      },

      {
        id: 1148,
        name: 'UNIVERSIDAD DISTRITAL FRANCISCO JOSE DE CALDAS',
        nit: '899999230',
        doctec: false,
        cgn: '222711001',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 458 }
      },

      {
        id: 1149,
        name: 'UNIVERSIDAD FRANCISCO DE PAULA SANTANDER CUCUTA',
        nit: '890500622',
        doctec: false,
        cgn: '125354000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 780 }
      },

      {
        id: 1150,
        name: 'UNIVERSIDAD INDUSTRIAL DE SANTANDER',
        nit: '890201213',
        doctec: false,
        cgn: '128868000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 846 }
      },

      {
        id: 1151,
        name: 'UNIVERSIDAD FRANCISCO DE PAULA SANTANDER OCANA',
        nit: '800163130',
        doctec: false,
        cgn: '129254000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 804 }
      },

      {
        id: 1152,
        name: 'UNITROPICO',
        nit: '844002071',
        doctec: false,
        cgn: '220285001',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 1055 }
      },

      {
        id: 1153,
        name: 'ESCUELA SUPERIOR DE ADMINISTRACION PUBLICA',
        nit: '899999054',
        doctec: false,
        cgn: '22000000',
        categoria: { id: 8 },
        subsector: { id: 21 },
        municipio: { id: 458 }
      }

    ])

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
      },

      {
        email: 'rectoria@unicolmayor.edu.co',
        register: true,
        entidad: { id: 1121 }
      },

      {
        email: 'rector@ucaldas.edu.co',
        register: true,
        entidad: { id: 1122 }
      },

      {
        email: 'carlosbula@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'atencionalciudadano@uniamazonia.edu.co',
        register: true,
        entidad: { id: 1124 }
      },

      {
        email: 'presupuesto@unillanos.edu.co',
        register: true,
        entidad: { id: 1125 }
      },

      {
        email: 'rectoria@unipacifico.edu.co',
        register: true,
        entidad: { id: 1126 }
      },

      {
        email: 'rectoria@unimilitar.edu.co',
        register: true,
        entidad: { id: 1127 }
      },

      {
        email: 'rectoria@unad.edu.co',
        register: true,
        entidad: { id: 1128 }
      },

      {
        email: 'dirfinadmin_bog@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'rectoria@pedagogica.edu.co',
        register: true,
        entidad: { id: 1130 }
      },

      {
        email: 'administrativa@uptc.edu.co',
        register: true,
        entidad: { id: 1131 }
      },

      {
        email: 'secretariageneral@usco.edu.co',
        register: true,
        entidad: { id: 1133 }
      },

      {
        email: 'rector@utp.edu.co',
        register: true,
        entidad: { id: 1134 }
      },

      {
        email: 'a-angela.granados@utch.edu.co',
        register: true,
        entidad: { id: 1135 }
      },

      {
        email: 'viceadministrativo@udea.edu.co',
        register: true,
        entidad: { id: 1136 }
      },

      {
        email: 'atencionalciudadano@unicartagena.edu.co',
        register: true,
        entidad: { id: 1137 }
      },

      {
        email: 'adelcarmenmorales@ucundinamarca.edu.co',
        register: true,
        entidad: { id: 1138 }
      },

      {
        email: 'cmaya@uniguajira.edu.co',
        register: true,
        entidad: { id: 1139 }
      },

      {
        email: 'secretariageneral@udenar.edu.co',
        register: true,
        entidad: { id: 1140 }
      },

      {
        email: 'secregene@unipamplona.edu.co',
        register: true,
        entidad: { id: 1141 }
      },

      {
        email: 'rectoria@unisucre.edu.co',
        register: true,
        entidad: { id: 1142 }
      },

      {
        email: 'viceadministrativa@mail.uniatlantico.edu.co',
        register: true,
        entidad: { id: 1143 }
      },

      {
        email: 'tic@unicauca.edu.co',
        register: true,
        entidad: { id: 1144 }
      },

      {
        email: 'notificacionjudicial@unimagdalena.edu.co',
        register: true,
        entidad: { id: 1145 }
      },

      {
        email: 'secretariageneral@uniquindio.edu.co',
        register: true,
        entidad: { id: 1146 }
      },

      {
        email: 'rector@correounivalle.edu.co',
        register: true,
        entidad: { id: 1147 }
      },

      {
        email: 'rectoria@udistrital.edu.co',
        register: true,
        entidad: { id: 1148 }
      },

      {
        email: 'viceadministrativa@ufps.edu.co',
        register: true,
        entidad: { id: 1149 }
      },

      {
        email: 'viceadm@uis.edu.co',
        register: true,
        entidad: { id: 1150 }
      },

      {
        email: 'atencionalciudadano@ufpso.edu.co',
        register: true,
        entidad: { id: 1151 }
      },

      {
        email: 'secretariageneral@unitropico.edu.co',
        register: true,
        entidad: { id: 1152 }
      },

      {
        email: 'notificaciones.judiciales@esap.gov.co',
        register: true,
        entidad: { id: 1153 }
      },

      {
        email: 'secretariageneral@unicolmayor.edu.co',
        register: true,
        entidad: { id: 1121 }
      },

      {
        email: 'vacad@ucaldas.edu.co',
        register: true,
        entidad: { id: 1122 }
      },

      {
        email: 'planeacion@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'sgeneral@uniamazonia.edu.co',
        register: true,
        entidad: { id: 1124 }
      },

      {
        email: 'sgeneral@unillanos.edu.co',
        register: true,
        entidad: { id: 1125 }
      },

      {
        email: 'secregeneral@unipacifico.edu.co',
        register: true,
        entidad: { id: 1126 }
      },

      {
        email: 'secretaria.rectoria@unimilitar.edu.co',
        register: true,
        entidad: { id: 1127 }
      },

      {
        email: 'atencionalusuario@unad.edu.co',
        register: true,
        entidad: { id: 1128 }
      },

      {
        email: 'ofiplane_bog@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'odp@pedagogica.edu.co',
        register: true,
        entidad: { id: 1130 }
      },

      {
        email: 'secretaria.general@uptc.edu.co',
        register: true,
        entidad: { id: 1131 }
      },

      {
        email: 'rectoria@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'controlinterno@usco.edu.co',
        register: true,
        entidad: { id: 1133 }
      },

      {
        email: 'viceadm@utp.edu.co',
        register: true,
        entidad: { id: 1134 }
      },

      {
        email: 'deimer.menam@utch.edu.co',
        register: true,
        entidad: { id: 1135 }
      },

      {
        email: 'viceadministrativa@unicartagena.edu.co',
        register: true,
        entidad: { id: 1137 }
      },

      {
        email: 'cgomezf@ucundinamarca.edu.co',
        register: true,
        entidad: { id: 1138 }
      },

      {
        email: 'lfuentes@uniguajira.edu.co',
        register: true,
        entidad: { id: 1139 }
      },

      {
        email: 'planeacion@udenar.edu.co',
        register: true,
        entidad: { id: 1140 }
      },

      {
        email: 'viceadmi@unipamplona.edu.co',
        register: true,
        entidad: { id: 1141 }
      },

      {
        email: 'secretaria.general@unisucre.edu.co',
        register: true,
        entidad: { id: 1142 }
      },

      {
        email: 'controlinterno@mail.uniatlantico.edu.co',
        register: true,
        entidad: { id: 1143 }
      },

      {
        email: 'rectoria@unicauca.edu.co',
        register: true,
        entidad: { id: 1144 }
      },

      {
        email: 'secretariageneral@unimagdalena.edu.co',
        register: true,
        entidad: { id: 1145 }
      },

      {
        email: 'rey@uniquindio.edu.co',
        register: true,
        entidad: { id: 1146 }
      },

      {
        email: 'secretariageneral@correounivalle.edu.co',
        register: true,
        entidad: { id: 1147 }
      },

      {
        email: 'auditor@udistrital.edu.co',
        register: true,
        entidad: { id: 1148 }
      },

      {
        email: 'secretaria_general@ufps.edu.co',
        register: true,
        entidad: { id: 1149 }
      },

      {
        email: 'olcegonz@uis.edu.co',
        register: true,
        entidad: { id: 1150 }
      },

      {
        email: 'notificacionesjudiciales@ufpso.edu.co',
        register: true,
        entidad: { id: 1151 }
      },

      {
        email: 'juridica@unitropico.edu.co',
        register: true,
        entidad: { id: 1152 }
      },

      {
        email: 'maria.pedreros@esap.edu.co',
        register: true,
        entidad: { id: 1153 }
      },

      {
        email: 'fjuridica@unicolmayor.edu.co',
        register: true,
        entidad: { id: 1121 }
      },

      {
        email: 'vadmin@ucaldas.edu.co',
        register: true,
        entidad: { id: 1122 }
      },

      {
        email: 'contacto@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'planeacion@uniamazonia.edu.co',
        register: true,
        entidad: { id: 1124 }
      },

      {
        email: 'contabilidad@unillanos.edu.co',
        register: true,
        entidad: { id: 1125 }
      },

      {
        email: 'coninterno@unipacifico.edu.co',
        register: true,
        entidad: { id: 1126 }
      },

      {
        email: 'secprivada@unimilitar.edu.co',
        register: true,
        entidad: { id: 1127 }
      },

      {
        email: 'sgeneral@unad.edu.co',
        register: true,
        entidad: { id: 1128 }
      },

      {
        email: 'vrs_bog@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'secretaria.general@pedagogica.edu.co',
        register: true,
        entidad: { id: 1130 }
      },

      {
        email: 'control.interno@uptc.edu.co',
        register: true,
        entidad: { id: 1131 }
      },

      {
        email: 'viceadministrativa@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'ctic@usco.edu.co',
        register: true,
        entidad: { id: 1133 }
      },

      {
        email: 'liliana.ardila@utp.edu.co',
        register: true,
        entidad: { id: 1134 }
      },

      {
        email: 'rectoria@utch.edu.co',
        register: true,
        entidad: { id: 1135 }
      },

      {
        email: 'auditorinterno@udea.edu.co',
        register: true,
        entidad: { id: 1136 }
      },

      {
        email: 'sistemas@unicartagena.edu.co',
        register: true,
        entidad: { id: 1137 }
      },

      {
        email: 'cvsanchez@ucundinamarca.edu.co',
        register: true,
        entidad: { id: 1138 }
      },

      {
        email: 'apinedov@uniguajira.edu.co',
        register: true,
        entidad: { id: 1139 }
      },

      {
        email: 'rectoria@udenar.edu.co',
        register: true,
        entidad: { id: 114 }
      },

      {
        email: 'oficontrol@unipamplona.edu.co',
        register: true,
        entidad: { id: 1141 }
      },

      {
        email: 'juridica@mail.uniatlantico.edu.co',
        register: true,
        entidad: { id: 1143 }
      },

      {
        email: 'secgral@unicauca.edu.co',
        register: true,
        entidad: { id: 1144 }
      },

      {
        email: 'rectoria@unimagdalena.edu.co',
        register: true,
        entidad: { id: 1145 }
      },

      {
        email: 'efalvarez@uniquindio.edu.co',
        register: true,
        entidad: { id: 1146 }
      },

      {
        email: 'controlinterno@correounivalle.edu.co',
        register: true,
        entidad: { id: 1147 }
      },

      {
        email: 'vicerrecadmin@udistrital.edu.co',
        register: true,
        entidad: { id: 1148 }
      },

      {
        email: 'divisiondesistemas@ufps.edu.co',
        register: true,
        entidad: { id: 1149 }
      },

      {
        email: 'direcge1@uis.edu.co',
        register: true,
        entidad: { id: 1150 }
      },

      {
        email: 'direccion@ufpso.edu.co',
        register: true,
        entidad: { id: 1151 }
      },

      {
        email: 'planeacion@unitropico.edu.co',
        register: true,
        entidad: { id: 1152 }
      },

      {
        email: 'juan.toro@esap.edu.co',
        register: true,
        entidad: { id: 1153 }
      },

      {
        email: 'planeacion@unicolmayor.edu.co',
        register: true,
        entidad: { id: 1121 }
      },

      {
        email: 'sgeneral@ucaldas.edu.co',
        register: true,
        entidad: { id: 1122 }
      },

      {
        email: 'contratacion@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'cinterno@uniamazonia.edu.co',
        register: true,
        entidad: { id: 1124 }
      },

      {
        email: 'Tesoreria@unillanos.edu.co',
        register: true,
        entidad: { id: 1125 }
      },

      {
        email: 'planeacion@unipacifico.edu.co',
        register: true,
        entidad: { id: 1126 }
      },

      {
        email: 'ocinterno@unad.edu.co',
        register: true,
        entidad: { id: 1128 }
      },

      {
        email: 'oftecnologias_bog@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'dfn@pedagogica.edu.co',
        register: true,
        entidad: { id: 1130 }
      },

      {
        email: 'direccion.tics@uptc.edu.co',
        register: true,
        entidad: { id: 1131 }
      },

      {
        email: 'Controlinterno@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'planeacion@usco.edu.co',
        register: true,
        entidad: { id: 1133 }
      },

      {
        email: 'planea@utp.edu.co',
        register: true,
        entidad: { id: 1134 }
      },

      {
        email: 'notificacionesjudiciales@utch.edu.co',
        register: true,
        entidad: { id: 1135 }
      },

      {
        email: 'rectoria@udea.edu.co',
        register: true,
        entidad: { id: 1136 }
      },

      {
        email: 'secretariageneral@unicartagena.edu.co',
        register: true,
        entidad: { id: 1137 }
      },

      {
        email: 'iquinterou@ucundinamarca.edu.co',
        register: true,
        entidad: { id: 1138 }
      },

      {
        email: 'ypalmezanoi@uniguajira.edu.co',
        register: true,
        entidad: { id: 1139 }
      },

      {
        email: 'ci@udenar.edu.co',
        register: true,
        entidad: { id: 1140 }
      },

      {
        email: 'ofijuridi@unipamplona.edu.co',
        register: true,
        entidad: { id: 1141 }
      },

      {
        email: 'financiera@mail.uniatlantico.edu.co',
        register: true,
        entidad: { id: 1143 }
      },

      {
        email: 'viceadm@unicauca.edu.co',
        register: true,
        entidad: { id: 1144 }
      },

      {
        email: 'planeacion@unimagdalena.edu.co',
        register: true,
        entidad: { id: 1145 }
      },

      {
        email: 'vavelez@uniquindio.edu.co',
        register: true,
        entidad: { id: 1146 }
      },

      {
        email: 'financiera@correounivalle.edu.co',
        register: true,
        entidad: { id: 1147 }
      },

      {
        email: 'cidc@correo.udistrital.edu.co',
        register: true,
        entidad: { id: 1148 }
      },

      {
        email: 'planeacion@ufps.edu.co',
        register: true,
        entidad: { id: 1149 }
      },

      {
        email: 'dirplan@uis.edu.co',
        register: true,
        entidad: { id: 1150 }
      },

      {
        email: 'controlinternogestion@unitropico.edu.co',
        register: true,
        entidad: { id: 1152 }
      },

      {
        email: 'sistemas@unicolmayor.edu.co',
        register: true,
        entidad: { id: 1121 }
      },

      {
        email: 'angela.garcia@ucaldas.edu.co',
        register: true,
        entidad: { id: 1122 }
      },

      {
        email: 'controlinterno@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'vadministrativa@uniamazonia.edu.co',
        register: true,
        entidad: { id: 1124 }
      },

      {
        email: 'sistemas@unillanos.edu.co',
        register: true,
        entidad: { id: 1125 }
      },

      {
        email: 'diradmon@unipacifico.edu.co',
        register: true,
        entidad: { id: 1126 }
      },

      {
        email: 'vicegen@unimilitar.edu.co',
        register: true,
        entidad: { id: 1127 }
      },

      {
        email: 'gerencia.innovacion@unad.edu.co',
        register: true,
        entidad: { id: 1128 }
      },

      {
        email: 'oficconi_nal@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'yomairaquintero@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'divfinanciera@usco.edu.co',
        register: true,
        entidad: { id: 1133 }
      },

      {
        email: 'controlinterno@utp.edu.co',
        register: true,
        entidad: { id: 1134 }
      },

      {
        email: 'controlinterno@utch.edu.co',
        register: true,
        entidad: { id: 1135 }
      },

      {
        email: 'john.arboleda@udea.edu.co',
        register: true,
        entidad: { id: 1136 }
      },

      {
        email: 'planeacion@unicartagena.edu.co',
        register: true,
        entidad: { id: 1137 }
      },

      {
        email: 'jmejia@uniguajira.edu.co',
        register: true,
        entidad: { id: 1139 }
      },

      {
        email: 'controlinterno@udenar.edu.co',
        register: true,
        entidad: { id: 1140 }
      },

      {
        email: 'ofiplanea@unipamplona.edu.co',
        register: true,
        entidad: { id: 1141 }
      },

      {
        email: 'planeacion@mail.uniatlantico.edu.co',
        register: true,
        entidad: { id: 1143 }
      },

      {
        email: 'juridica@unimagdalena.edu.co',
        register: true,
        entidad: { id: 1145 }
      },

      {
        email: 'oitel@correounivalle.edu.co',
        register: true,
        entidad: { id: 1147 }
      },

      {
        email: 'computo@udistrital.edu.co',
        register: true,
        entidad: { id: 1148 }
      },

      {
        email: 'controlinterno@ufps.edu.co',
        register: true,
        entidad: { id: 1149 }
      },

      {
        email: 'sgeneral@uis.edu.co',
        register: true,
        entidad: { id: 1150 }
      },

      {
        email: 'vur@unitropico.edu.co',
        register: true,
        entidad: { id: 1152 }
      },

      {
        email: 'cinterno@unicolmayor.edu.co',
        register: true,
        entidad: { id: 1121 }
      },

      {
        email: 'controli@ucaldas.edu.co',
        register: true,
        entidad: { id: 1122 }
      },

      {
        email: 'financiera@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'dfinanciera@uniamazonia.edu.co',
        register: true,
        entidad: { id: 1124 }
      },

      {
        email: 'planeacion@unillanos.edu.co',
        register: true,
        entidad: { id: 1125 }
      },

      {
        email: 'vicadm@unimilitar.edu.co',
        register: true,
        entidad: { id: 1127 }
      },

      {
        email: 'oplaneacion@unad.edu.co',
        register: true,
        entidad: { id: 1128 }
      },

      {
        email: 'vicinvest_nal@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'secretariageneral@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'oswaldo@utp.edu.co',
        register: true,
        entidad: { id: 1134 }
      },

      {
        email: 'fernelix.valencia@utch.edu.co',
        register: true,
        entidad: { id: 1135 }
      },

      {
        email: 'vicegeneral@udea.edu.co',
        register: true,
        entidad: { id: 1136 }
      },

      {
        email: 'juridica@unicartagena.edu.co',
        register: true,
        entidad: { id: 1137 }
      },

      {
        email: 'bromero@uniguajira.edu.co',
        register: true,
        entidad: { id: 1139 }
      },

      {
        email: 'juridica@udenar.edu.co',
        register: true,
        entidad: { id: 1140 }
      },

      {
        email: 'contratos@unipamplona.edu.co',
        register: true,
        entidad: { id: 1141 }
      },

      {
        email: 'secretariageneral@mail.uniatlantico.edu.co',
        register: true,
        entidad: { id: 1143 }
      },

      {
        email: 'financiera@unicauca.edu.co',
        register: true,
        entidad: { id: 1144 }
      },

      {
        email: 'controlinterno@unimagdalena.edu.co',
        register: true,
        entidad: { id: 1145 }
      },

      {
        email: 'presupuesto@ufps.edu.co',
        register: true,
        entidad: { id: 1149 }
      },

      {
        email: 'contratacion@uis.edu.co',
        register: true,
        entidad: { id: 1150 }
      },

      {
        email: 'notificacionesjudiciales@unitropico.edu.co',
        register: true,
        entidad: { id: 1152 }
      },

      {
        email: 'hugo@ucaldas.edu.co',
        register: true,
        entidad: { id: 1122 }
      },

      {
        email: 'tesoreria@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'cinterno@unillanos.edu.co',
        register: true,
        entidad: { id: 1125 }
      },

      {
        email: 'control.interno@unimilitar.edu.co',
        register: true,
        entidad: { id: 1127 }
      },

      {
        email: 'gfinanciera@unad.edu.co',
        register: true,
        entidad: { id: 1128 }
      },

      {
        email: 'vicgen_nal@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'planeacion@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'caduseo@utp.edu.co',
        register: true,
        entidad: { id: 1134 }
      },

      {
        email: 'a-yunner.moreno@utch.edu.co',
        register: true,
        entidad: { id: 1135 }
      },

      {
        email: 'dirplaneacion@udea.edu.co',
        register: true,
        entidad: { id: 1136 }
      },

      {
        email: 'proyectos@unipamplona.edu.co',
        register: true,
        entidad: { id: 1141 }
      },

      {
        email: 'planeacion@unicauca.edu.co',
        register: true,
        entidad: { id: 1144 }
      },

      {
        email: 'tesoreria@ufps.edu.co',
        register: true,
        entidad: { id: 1149 }
      },

      {
        email: 'tic@unimilitar.edu.co',
        register: true,
        entidad: { id: 1127 }
      },

      {
        email: 'viceaca_nal@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'alvaroiglesias@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'dirjuridica@udea.edu.co',
        register: true,
        entidad: { id: 1136 }
      },

      {
        email: 'controlinterno@unicartagena.edu.co',
        register: true,
        entidad: { id: 1137 }
      },

      {
        email: 'rectoria@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'gernalfa_nal@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'sistemas@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'secretariageneral@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'ofinalp_nal@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'yumeypinto@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'viceadministrativa@correo.unicordoba.edu.co',
        register: true,
        entidad: { id: 1123 }
      },

      {
        email: 'dirjn_nal@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'Juridica@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'dned@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      },

      {
        email: 'administrativafinanciera@unicesar.edu.co',
        register: true,
        entidad: { id: 1132 }
      },

      {
        email: 'rectoriaun@unal.edu.co',
        register: true,
        entidad: { id: 1129 }
      }
    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
