import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933051 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1,
        name: 'ALCALDIA DE MEDELLIN',
        nit: '890905211',
        doctec: true,
        cgn: '210105001',
        categoria: { id: 7 },
        subsector: { id: 23 },
        municipio: { id: 1 }
      },

      {
        id: 2,
        name: 'ALCALDIA DE ABEJORRAL',
        nit: '890981195',
        doctec: true,
        cgn: '210205002',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 2 }
      },

      {
        id: 3,
        name: 'ALCALDIA DE ABRIAQUI',
        nit: '890981251',
        doctec: true,
        cgn: '210405004',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 3 }
      },

      {
        id: 4,
        name: 'ALCALDIA DE ALEJANDRIA',
        nit: '890983701',
        doctec: true,
        cgn: '212105021',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 4 }
      },

      {
        id: 5,
        name: 'ALCALDIA DE AMAGA',
        nit: '890981732',
        doctec: true,
        cgn: '213005030',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 5 }
      },

      {
        id: 6,
        name: 'ALCALDIA DE AMALFI',
        nit: '890981518',
        doctec: true,
        cgn: '213105031',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 6 }
      },

      {
        id: 7,
        name: 'ALCALDIA DE ANDES',
        nit: '890980342',
        doctec: true,
        cgn: '213405034',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 7 }
      },

      {
        id: 8,
        name: 'ALCALDIA DE ANGELOPOLIS',
        nit: '890981493',
        doctec: true,
        cgn: '213605036',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 8 }
      },

      {
        id: 9,
        name: 'ALCALDIA DE ANGOSTURA',
        nit: '890982141',
        doctec: true,
        cgn: '213805038',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 9 }
      },

      {
        id: 10,
        name: 'ALCALDIA DE ANORI',
        nit: '890982489',
        doctec: true,
        cgn: '214005040',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 10 }
      },

      {
        id: 11,
        name: 'ALCALDIA DE SANTA FE DE ANTIOQUIA',
        nit: '890907569',
        doctec: true,
        cgn: '214205042',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 11 }
      },

      {
        id: 12,
        name: 'ALCALDIA DE ANZA',
        nit: '890983824',
        doctec: true,
        cgn: '214405044',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 12 }
      },

      {
        id: 13,
        name: 'ALCALDIA DE APARTADO',
        nit: '890980095',
        doctec: true,
        cgn: '214505045',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 13 }
      },

      {
        id: 14,
        name: 'ALCALDIA DE ARBOLETES',
        nit: '890985623',
        doctec: true,
        cgn: '215105051',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 14 }
      },

      {
        id: 15,
        name: 'ALCALDIA DE ARGELIA',
        nit: '890981786',
        doctec: true,
        cgn: '215505055',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 15 }
      },

      {
        id: 16,
        name: 'ALCALDIA DE ARMENIA',
        nit: '890983763',
        doctec: true,
        cgn: '215905059',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 16 }
      },

      {
        id: 17,
        name: 'ALCALDIA DE BARBOSA',
        nit: '890980445',
        doctec: true,
        cgn: '217905079',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 17 }
      },

      {
        id: 18,
        name: 'ALCALDIA DE BELMIRA',
        nit: '890981880',
        doctec: true,
        cgn: '218605086',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 18 }
      },

      {
        id: 19,
        name: 'ALCALDIA DE BELLO',
        nit: '890980112',
        doctec: true,
        cgn: '218805088',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 19 }
      },

      {
        id: 20,
        name: 'ALCALDIA DE BETANIA',
        nit: '890980802',
        doctec: true,
        cgn: '219105091',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 20 }
      },

      {
        id: 21,
        name: 'ALCALDIA DE BETULIA',
        nit: '890982321',
        doctec: true,
        cgn: '219305093',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 21 }
      },

      {
        id: 22,
        name: 'ALCALDIA DE CIUDAD BOLIVAR',
        nit: '890980330',
        doctec: true,
        cgn: '210105101',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 22 }
      },

      {
        id: 23,
        name: 'ALCALDIA DE BRICENO',
        nit: '890984415',
        doctec: true,
        cgn: '210705107',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 23 }
      },

      {
        id: 24,
        name: 'ALCALDIA DE BURITICA',
        nit: '890983808',
        doctec: true,
        cgn: '211305113',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 24 }
      },

      {
        id: 25,
        name: 'ALCALDIA DE CACERES',
        nit: '890981567',
        doctec: true,
        cgn: '212005120',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 25 }
      },

      {
        id: 26,
        name: 'ALCALDIA DE CAICEDO',
        nit: '890984224',
        doctec: true,
        cgn: '212505125',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 26 }
      },

      {
        id: 27,
        name: 'ALCALDIA DE CALDAS',
        nit: '890980447',
        doctec: true,
        cgn: '212905129',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 27 }
      },

      {
        id: 28,
        name: 'ALCALDIA DE CAMPAMENTO',
        nit: '890982147',
        doctec: true,
        cgn: '213405134',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 28 }
      },

      {
        id: 29,
        name: 'ALCALDIA DE CANASGORDAS',
        nit: '890982238',
        doctec: true,
        cgn: '213805138',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 29 }
      },

      {
        id: 30,
        name: 'ALCALDIA DE CARACOLI',
        nit: '890981107',
        doctec: true,
        cgn: '214205142',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 30 }
      },

      {
        id: 31,
        name: 'ALCALDIA DE CARAMANTA',
        nit: '890984132',
        doctec: true,
        cgn: '214505145',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 31 }
      },

      {
        id: 32,
        name: 'ALCALDIA DE CAREPA',
        nit: '890985316',
        doctec: true,
        cgn: '214705147',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 32 }
      },

      {
        id: 33,
        name: 'ALCALDIA DE EL CARMEN DE VIBORAL',
        nit: '890982616',
        doctec: true,
        cgn: '214805148',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 33 }
      },

      {
        id: 34,
        name: 'ALCALDIA DE CAROLINA',
        nit: '890984068',
        doctec: true,
        cgn: '215005150',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 34 }
      },

      {
        id: 35,
        name: 'ALCALDIA DE CAUCASIA',
        nit: '890906445',
        doctec: true,
        cgn: '215405154',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 35 }
      },

      {
        id: 36,
        name: 'ALCALDIA DE CHIGORODO',
        nit: '890980998',
        doctec: true,
        cgn: '217205172',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 36 }
      },

      {
        id: 37,
        name: 'ALCALDIA DE CISNEROS',
        nit: '890910913',
        doctec: true,
        cgn: '219005190',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 37 }
      },

      {
        id: 38,
        name: 'ALCALDIA DE COCORNA',
        nit: '890984634',
        doctec: true,
        cgn: '219705197',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 38 }
      },

      {
        id: 39,
        name: 'ALCALDIA DE CONCEPCION',
        nit: '890983718',
        doctec: true,
        cgn: '210605206',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 39 }
      },

      {
        id: 40,
        name: 'ALCALDIA DE CONCORDIA',
        nit: '890982261',
        doctec: true,
        cgn: '210905209',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 40 }
      },

      {
        id: 41,
        name: 'ALCALDIA DE COPACABANA',
        nit: '890980767',
        doctec: true,
        cgn: '211205212',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 41 }
      },

      {
        id: 42,
        name: 'ALCALDIA DE DABEIBA',
        nit: '890980094',
        doctec: true,
        cgn: '213405234',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 42 }
      },

      {
        id: 43,
        name: 'ALCALDIA DE DONMATIAS',
        nit: '890984043',
        doctec: true,
        cgn: '213705237',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 43 }
      },

      {
        id: 44,
        name: 'ALCALDIA DE EBEJICO',
        nit: '890983664',
        doctec: true,
        cgn: '214005240',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 44 }
      },

      {
        id: 45,
        name: 'ALCALDIA DE EL BAGRE',
        nit: '890984221',
        doctec: true,
        cgn: '215005250',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 45 }
      },

      {
        id: 46,
        name: 'ALCALDIA DE ENTRERRIOS',
        nit: '890982068',
        doctec: true,
        cgn: '216405264',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 46 }
      },

      {
        id: 47,
        name: 'ALCALDIA DE ENVIGADO',
        nit: '890907106',
        doctec: true,
        cgn: '216605266',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 47 }
      },

      {
        id: 48,
        name: 'ALCALDIA DE FREDONIA',
        nit: '890980848',
        doctec: true,
        cgn: '218205282',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 48 }
      },

      {
        id: 49,
        name: 'ALCALDIA DE FRONTINO',
        nit: '890983706',
        doctec: true,
        cgn: '218405284',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 49 }
      },

      {
        id: 50,
        name: 'ALCALDIA DE GIRALDO',
        nit: '890983786',
        doctec: true,
        cgn: '210605306',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 50 }
      },

      {
        id: 51,
        name: 'ALCALDIA DE GIRARDOTA',
        nit: '890980807',
        doctec: true,
        cgn: '210805308',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 51 }
      },

      {
        id: 52,
        name: 'ALCALDIA DE GOMEZ PLATA',
        nit: '890983938',
        doctec: true,
        cgn: '211005310',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 52 }
      },

      {
        id: 53,
        name: 'ALCALDIA DE GRANADA',
        nit: '890983728',
        doctec: true,
        cgn: '211305313',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 53 }
      },

      {
        id: 54,
        name: 'ALCALDIA DE GUADALUPE',
        nit: '890981162',
        doctec: true,
        cgn: '211505315',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 54 }
      },

      {
        id: 55,
        name: 'ALCALDIA DE GUARNE',
        nit: '890982055',
        doctec: true,
        cgn: '211805318',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 55 }
      },

      {
        id: 56,
        name: 'ALCALDIA DE GUATAPE',
        nit: '890983830',
        doctec: true,
        cgn: '212105321',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 56 }
      },

      {
        id: 57,
        name: 'ALCALDIA DE HELICONIA',
        nit: '890982494',
        doctec: true,
        cgn: '214705347',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 57 }
      },

      {
        id: 58,
        name: 'ALCALDIA DE HISPANIA',
        nit: '890984986',
        doctec: true,
        cgn: '215305353',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 58 }
      },

      {
        id: 59,
        name: 'ALCALDIA DE ITAGUI',
        nit: '890980093',
        doctec: true,
        cgn: '216005360',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 59 }
      },

      {
        id: 60,
        name: 'ALCALDIA DE ITUANGO',
        nit: '890982278',
        doctec: true,
        cgn: '216105361',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 60 }
      },

      {
        id: 61,
        name: 'ALCALDIA DE JARDIN',
        nit: '890982294',
        doctec: true,
        cgn: '216405364',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 61 }
      },

      {
        id: 62,
        name: 'ALCALDIA DE JERICO',
        nit: '890981069',
        doctec: true,
        cgn: '216805368',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 62 }
      },

      {
        id: 63,
        name: 'ALCALDIA DE LA CEJA',
        nit: '890981207',
        doctec: true,
        cgn: '217605376',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 63 }
      },

      {
        id: 64,
        name: 'ALCALDIA DE LA ESTRELLA',
        nit: '890980782',
        doctec: true,
        cgn: '218005380',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 64 }
      },

      {
        id: 65,
        name: 'ALCALDIA DE LA PINTADA',
        nit: '811009017',
        doctec: true,
        cgn: '219005390',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 65 }
      },

      {
        id: 66,
        name: 'ALCALDIA DE LA UNION',
        nit: '890981995',
        doctec: true,
        cgn: '210005400',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 66 }
      },

      {
        id: 67,
        name: 'ALCALDIA DE LIBORINA',
        nit: '890983672',
        doctec: true,
        cgn: '211105411',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 67 }
      },

      {
        id: 68,
        name: 'ALCALDIA DE MACEO',
        nit: '890980958',
        doctec: true,
        cgn: '212505425',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 68 }
      },

      {
        id: 69,
        name: 'ALCALDIA DE MARINILLA',
        nit: '890983716',
        doctec: true,
        cgn: '214005440',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 69 }
      },

      {
        id: 70,
        name: 'ALCALDIA DE MONTEBELLO',
        nit: '890981115',
        doctec: true,
        cgn: '216705467',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 70 }
      },

      {
        id: 71,
        name: 'ALCALDIA DE MURINDO',
        nit: '890984882',
        doctec: true,
        cgn: '217505475',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 71 }
      },

      {
        id: 72,
        name: 'ALCALDIA DE MUTATA',
        nit: '890980950',
        doctec: true,
        cgn: '218005480',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 72 }
      },

      {
        id: 73,
        name: 'ALCALDIA DE NARINO',
        nit: '890982566',
        doctec: true,
        cgn: '218305483',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 73 }
      },

      {
        id: 74,
        name: 'ALCALDIA DE NECOCLI',
        nit: '890983873',
        doctec: true,
        cgn: '219005490',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 74 }
      },

      {
        id: 75,
        name: 'ALCALDIA DE NECHI',
        nit: '890985354',
        doctec: true,
        cgn: '219505495',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 75 }
      },

      {
        id: 76,
        name: 'ALCALDIA DE OLAYA',
        nit: '890984161',
        doctec: true,
        cgn: '210105501',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 76 }
      },

      {
        id: 77,
        name: 'ALCALDIA DE PENOL',
        nit: '890980917',
        doctec: true,
        cgn: '214105541',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 77 }
      },

      {
        id: 78,
        name: 'ALCALDIA DE PEQUE',
        nit: '890982301',
        doctec: true,
        cgn: '214305543',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 78 }
      },

      {
        id: 79,
        name: 'ALCALDIA DE PUEBLORRICO',
        nit: '890981105',
        doctec: true,
        cgn: '217605576',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 79 }
      },

      {
        id: 80,
        name: 'ALCALDIA DE PUERTO BERRIO',
        nit: '890980049',
        doctec: true,
        cgn: '217905579',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 80 }
      },

      {
        id: 81,
        name: 'ALCALDIA DE PUERTO NARE',
        nit: '890981000',
        doctec: true,
        cgn: '218505585',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 81 }
      },

      {
        id: 82,
        name: 'ALCALDIA DE PUERTO TRIUNFO',
        nit: '890983906',
        doctec: true,
        cgn: '219105591',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 82 }
      },

      {
        id: 83,
        name: 'ALCALDIA DE REMEDIOS',
        nit: '890984312',
        doctec: true,
        cgn: '210405604',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 83 }
      },

      {
        id: 84,
        name: 'ALCALDIA DE RETIRO',
        nit: '890983674',
        doctec: true,
        cgn: '210705607',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 84 }
      },

      {
        id: 85,
        name: 'ALCALDIA DE RIONEGRO',
        nit: '890907317',
        doctec: true,
        cgn: '211505615',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 85 }
      },

      {
        id: 86,
        name: 'ALCALDIA DE SABANALARGA',
        nit: '890983736',
        doctec: true,
        cgn: '212805628',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 86 }
      },

      {
        id: 87,
        name: 'ALCALDIA DE SABANETA',
        nit: '890980331',
        doctec: true,
        cgn: '213105631',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 87 }
      },

      {
        id: 88,
        name: 'ALCALDIA DE SALGAR',
        nit: '890980577',
        doctec: true,
        cgn: '214205642',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 88 }
      },

      {
        id: 89,
        name: 'ALCALDIA DE SAN ANDRES DE CUERQUIA',
        nit: '890981868',
        doctec: true,
        cgn: '214705647',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 89 }
      },

      {
        id: 90,
        name: 'ALCALDIA DE SAN CARLOS',
        nit: '890983740',
        doctec: true,
        cgn: '214905649',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 90 }
      },

      {
        id: 91,
        name: 'ALCALDIA DE SAN FRANCISCO',
        nit: '800022791',
        doctec: true,
        cgn: '215205652',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 91 }
      },

      {
        id: 92,
        name: 'ALCALDIA DE SAN JERONIMO',
        nit: '890920814',
        doctec: true,
        cgn: '215605656',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 92 }
      },

      {
        id: 93,
        name: 'ALCALDIA DE SAN JOSE DE LA MONTANA',
        nit: '800022618',
        doctec: true,
        cgn: '215805658',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 93 }
      },

      {
        id: 94,
        name: 'ALCALDIA DE SAN JUAN DE URABA',
        nit: '800013676',
        doctec: true,
        cgn: '215905659',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 94 }
      },

      {
        id: 95,
        name: 'ALCALDIA DE SAN LUIS',
        nit: '890984376',
        doctec: true,
        cgn: '216005660',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 95 }
      },

      {
        id: 96,
        name: 'ALCALDIA DE SAN PEDRO DE LOS MILAGROS',
        nit: '890983922',
        doctec: true,
        cgn: '216405664',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 96 }
      },

      {
        id: 97,
        name: 'ALCALDIA DE SAN PEDRO DE URABA',
        nit: '890983814',
        doctec: true,
        cgn: '216505665',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 97 }
      },

      {
        id: 98,
        name: 'ALCALDIA DE SAN RAFAEL',
        nit: '890982123',
        doctec: true,
        cgn: '216705667',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 98 }
      },

      {
        id: 99,
        name: 'ALCALDIA DE SAN ROQUE',
        nit: '890980850',
        doctec: true,
        cgn: '217005670',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 99 }
      },

      {
        id: 100,
        name: 'ALCALDIA DE SAN VICENTE FERRER',
        nit: '890982506',
        doctec: true,
        cgn: '217405674',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 100 }
      },

      {
        id: 101,
        name: 'ALCALDIA DE SANTA BARBARA',
        nit: '890980344',
        doctec: true,
        cgn: '217905679',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 101 }
      },

      {
        id: 102,
        name: 'ALCALDIA DE SANTA ROSA DE OSOS',
        nit: '890981554',
        doctec: true,
        cgn: '218605686',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 102 }
      },

      {
        id: 103,
        name: 'ALCALDIA DE SANTO DOMINGO',
        nit: '890983803',
        doctec: true,
        cgn: '219005690',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 103 }
      },

      {
        id: 104,
        name: 'ALCALDIA DE EL SANTUARIO',
        nit: '890983813',
        doctec: true,
        cgn: '219705697',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 104 }
      },

      {
        id: 105,
        name: 'ALCALDIA DE SEGOVIA',
        nit: '890981391',
        doctec: true,
        cgn: '213605736',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 105 }
      },

      {
        id: 106,
        name: 'ALCALDIA DE SONSON',
        nit: '890980357',
        doctec: true,
        cgn: '215605756',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 106 }
      },

      {
        id: 107,
        name: 'ALCALDIA DE SOPETRAN',
        nit: '890981080',
        doctec: true,
        cgn: '216105761',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 107 }
      },

      {
        id: 108,
        name: 'ALCALDIA DE TAMESIS',
        nit: '890981238',
        doctec: true,
        cgn: '218905789',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 108 }
      },

      {
        id: 109,
        name: 'ALCALDIA DE TARAZA',
        nit: '890984295',
        doctec: true,
        cgn: '219005790',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 109 }
      },

      {
        id: 110,
        name: 'ALCALDIA DE TARSO',
        nit: '890982583',
        doctec: true,
        cgn: '219205792',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 110 }
      },

      {
        id: 111,
        name: 'ALCALDIA DE TITIRIBI',
        nit: '890980781',
        doctec: true,
        cgn: '210905809',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 111 }
      },

      {
        id: 112,
        name: 'ALCALDIA DE TOLEDO',
        nit: '890981367',
        doctec: true,
        cgn: '211905819',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 112 }
      },

      {
        id: 113,
        name: 'ALCALDIA DE TURBO',
        nit: '890981138',
        doctec: true,
        cgn: '213705837',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 113 }
      },

      {
        id: 114,
        name: 'ALCALDIA DE URAMITA',
        nit: '890984575',
        doctec: true,
        cgn: '214205842',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 114 }
      },

      {
        id: 115,
        name: 'ALCALDIA DE URRAO',
        nit: '890907515',
        doctec: true,
        cgn: '214705847',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 115 }
      },

      {
        id: 116,
        name: 'ALCALDIA DE VALDIVIA',
        nit: '890981106',
        doctec: true,
        cgn: '215405854',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 116 }
      },

      {
        id: 117,
        name: 'ALCALDIA DE VALPARAISO',
        nit: '890984186',
        doctec: true,
        cgn: '215605856',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 117 }
      },

      {
        id: 118,
        name: 'ALCALDIA DE VEGACHI',
        nit: '890985285',
        doctec: true,
        cgn: '215805858',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 118 }
      },

      {
        id: 119,
        name: 'ALCALDIA DE VENECIA',
        nit: '890980764',
        doctec: true,
        cgn: '216105861',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 119 }
      },

      {
        id: 120,
        name: 'ALCALDIA DE VIGIA DEL FUERTE',
        nit: '800020665',
        doctec: true,
        cgn: '217305873',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 120 }
      },

      {
        id: 121,
        name: 'ALCALDIA DE YALI',
        nit: '890980964',
        doctec: true,
        cgn: '218505885',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 121 }
      },

      {
        id: 122,
        name: 'ALCALDIA DE YARUMAL',
        nit: '890980096',
        doctec: true,
        cgn: '218705887',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 122 }
      },

      {
        id: 123,
        name: 'ALCALDIA DE YOLOMBO',
        nit: '890984030',
        doctec: true,
        cgn: '219005890',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 123 }
      },

      {
        id: 124,
        name: 'ALCALDIA DE YONDO',
        nit: '890984265',
        doctec: true,
        cgn: '219305893',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 124 }
      },

      {
        id: 125,
        name: 'ALCALDIA DE ZARAGOZA',
        nit: '890981150',
        doctec: true,
        cgn: '219505895',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 125 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
