import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933063 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 458,
        name: 'ALCALDIA DE BOGOTA',
        nit: '899999282',
        doctec: true,
        cgn: '210111001',
        categoria: { id: 7 },
        subsector: { id: 23 },
        municipio: { id: 458 }
      },

      {
        id: 459,
        name: 'ALCALDIA DE AGUA DE DIOS',
        nit: '890680149',
        doctec: true,
        cgn: '210125001',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 459 }
      },

      {
        id: 460,
        name: 'ALCALDIA DE ALBAN',
        nit: '899999450',
        doctec: true,
        cgn: '211925019',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 460 }
      },

      {
        id: 461,
        name: 'ALCALDIA DE ANAPOIMA',
        nit: '890680097',
        doctec: true,
        cgn: '213525035',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 461 }
      },

      {
        id: 462,
        name: 'ALCALDIA DE ANOLAIMA',
        nit: '899999426',
        doctec: true,
        cgn: '214025040',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 462 }
      },

      {
        id: 463,
        name: 'ALCALDIA DE ARBELAEZ',
        nit: '800093386',
        doctec: true,
        cgn: '215325053',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 463 }
      },

      {
        id: 464,
        name: 'ALCALDIA DE BELTRAN',
        nit: '800094624',
        doctec: true,
        cgn: '218625086',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 464 }
      },

      {
        id: 465,
        name: 'ALCALDIA DE BITUIMA',
        nit: '899999708',
        doctec: true,
        cgn: '219525095',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 465 }
      },

      {
        id: 466,
        name: 'ALCALDIA DE BOJACA',
        nit: '800094622',
        doctec: true,
        cgn: '219925099',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 466 }
      },

      {
        id: 467,
        name: 'ALCALDIA DE CABRERA',
        nit: '890680107',
        doctec: true,
        cgn: '212025120',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 467 }
      },

      {
        id: 468,
        name: 'ALCALDIA DE CACHIPAY',
        nit: '800081091',
        doctec: true,
        cgn: '212325123',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 468 }
      },

      {
        id: 469,
        name: 'ALCALDIA DE CAJICA',
        nit: '899999465',
        doctec: true,
        cgn: '212625126',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 469 }
      },

      {
        id: 470,
        name: 'ALCALDIA DE CAPARRAPI',
        nit: '899999710',
        doctec: true,
        cgn: '214825148',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 470 }
      },

      {
        id: 471,
        name: 'ALCALDIA DE CAQUEZA',
        nit: '899999462',
        doctec: true,
        cgn: '215125151',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 471 }
      },

      {
        id: 472,
        name: 'ALCALDIA DE CARMEN DE CARUPA',
        nit: '899999367',
        doctec: true,
        cgn: '215425154',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 472 }
      },

      {
        id: 473,
        name: 'ALCALDIA DE CHAGUANI',
        nit: '899999400',
        doctec: true,
        cgn: '216825168',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 473 }
      },

      {
        id: 474,
        name: 'ALCALDIA DE CHIA',
        nit: '899999172',
        doctec: true,
        cgn: '217525175',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 474 }
      },

      {
        id: 475,
        name: 'ALCALDIA DE CHIPAQUE',
        nit: '899999467',
        doctec: true,
        cgn: '217825178',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 475 }
      },

      {
        id: 476,
        name: 'ALCALDIA DE CHOACHI',
        nit: '899999414',
        doctec: true,
        cgn: '218125181',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 476 }
      },

      {
        id: 477,
        name: 'ALCALDIA DE CHOCONTA',
        nit: '899999357',
        doctec: true,
        cgn: '218325183',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 477 }
      },

      {
        id: 478,
        name: 'ALCALDIA DE COGUA',
        nit: '899999466',
        doctec: true,
        cgn: '210025200',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 478 }
      },

      {
        id: 479,
        name: 'ALCALDIA DE COTA',
        nit: '899999705',
        doctec: true,
        cgn: '211425214',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 479 }
      },

      {
        id: 480,
        name: 'ALCALDIA DE CUCUNUBA',
        nit: '899999406',
        doctec: true,
        cgn: '212425224',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 480 }
      },

      {
        id: 481,
        name: 'ALCALDIA DE EL COLEGIO',
        nit: '890680162',
        doctec: true,
        cgn: '214525245',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 481 }
      },

      {
        id: 482,
        name: 'ALCALDIA DE EL PENON',
        nit: '899999460',
        doctec: true,
        cgn: '215825258',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 482 }
      },

      {
        id: 483,
        name: 'ALCALDIA DE EL ROSAL',
        nit: '832002318',
        doctec: true,
        cgn: '216025260',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 483 }
      },

      {
        id: 484,
        name: 'ALCALDIA DE FACATATIVA',
        nit: '899999328',
        doctec: true,
        cgn: '216925269',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 484 }
      },

      {
        id: 485,
        name: 'ALCALDIA DE FOMEQUE',
        nit: '899999364',
        doctec: true,
        cgn: '217925279',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 485 }
      },

      {
        id: 486,
        name: 'ALCALDIA DE FOSCA',
        nit: '899999420',
        doctec: true,
        cgn: '218125281',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 486 }
      },

      {
        id: 487,
        name: 'ALCALDIA DE FUNZA',
        nit: '899999433',
        doctec: true,
        cgn: '218625286',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 487 }
      },

      {
        id: 488,
        name: 'ALCALDIA DE FUQUENE',
        nit: '899999323',
        doctec: true,
        cgn: '218825288',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 488 }
      },

      {
        id: 489,
        name: 'ALCALDIA DE FUSAGASUGA',
        nit: '890680008',
        doctec: true,
        cgn: '219025290',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 489 }
      },

      {
        id: 490,
        name: 'ALCALDIA DE GACHALA',
        nit: '800094671',
        doctec: true,
        cgn: '219325293',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 490 }
      },

      {
        id: 491,
        name: 'ALCALDIA DE GACHANCIPA',
        nit: '899999419',
        doctec: true,
        cgn: '219525295',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 491 }
      },

      {
        id: 492,
        name: 'ALCALDIA DE GACHETA',
        nit: '899999331',
        doctec: true,
        cgn: '219725297',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 492 }
      },

      {
        id: 493,
        name: 'ALCALDIA DE GAMA',
        nit: '800094684',
        doctec: true,
        cgn: '219925299',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 493 }
      },

      {
        id: 494,
        name: 'ALCALDIA DE GIRARDOT',
        nit: '890680378',
        doctec: true,
        cgn: '210725307',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 494 }
      },

      {
        id: 495,
        name: 'ALCALDIA DE GRANADA',
        nit: '832000992',
        doctec: true,
        cgn: '211225312',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 495 }
      },

      {
        id: 496,
        name: 'ALCALDIA DE GUACHETA',
        nit: '899999362',
        doctec: true,
        cgn: '211725317',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 496 }
      },

      {
        id: 497,
        name: 'ALCALDIA DE GUADUAS',
        nit: '899999701',
        doctec: true,
        cgn: '212025320',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 497 }
      },

      {
        id: 498,
        name: 'ALCALDIA DE GUASCA',
        nit: '899999442',
        doctec: true,
        cgn: '212225322',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 498 }
      },

      {
        id: 499,
        name: 'ALCALDIA DE GUATAQUI',
        nit: '800011271',
        doctec: true,
        cgn: '212425324',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 499 }
      },

      {
        id: 500,
        name: 'ALCALDIA DE GUATAVITA',
        nit: '899999395',
        doctec: true,
        cgn: '212625326',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 500 }
      },

      {
        id: 501,
        name: 'ALCALDIA DE GUAYABAL DE SIQUIMA',
        nit: '800094685',
        doctec: true,
        cgn: '212825328',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 501 }
      },

      {
        id: 502,
        name: 'ALCALDIA DE GUAYABETAL',
        nit: '800094701',
        doctec: true,
        cgn: '213525335',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 502 }
      },

      {
        id: 503,
        name: 'ALCALDIA DE GUTIERREZ',
        nit: '800094704',
        doctec: true,
        cgn: '213925339',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 503 }
      },

      {
        id: 504,
        name: 'ALCALDIA DE JERUSALEN',
        nit: '800004018',
        doctec: true,
        cgn: '216825368',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 504 }
      },

      {
        id: 505,
        name: 'ALCALDIA DE JUNIN',
        nit: '800094705',
        doctec: true,
        cgn: '217225372',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 505 }
      },

      {
        id: 506,
        name: 'ALCALDIA DE LA CALERA',
        nit: '899999712',
        doctec: true,
        cgn: '217725377',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 506 }
      },

      {
        id: 507,
        name: 'ALCALDIA DE LA MESA',
        nit: '890680026',
        doctec: true,
        cgn: '218625386',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 507 }
      },

      {
        id: 508,
        name: 'ALCALDIA DE LA PALMA',
        nit: '899999369',
        doctec: true,
        cgn: '219425394',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 508 }
      },

      {
        id: 509,
        name: 'ALCALDIA DE LA PENA',
        nit: '899999721',
        doctec: true,
        cgn: '219825398',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 509 }
      },

      {
        id: 510,
        name: 'ALCALDIA DE LA VEGA',
        nit: '800073475',
        doctec: true,
        cgn: '210225402',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 510 }
      },

      {
        id: 511,
        name: 'ALCALDIA DE LENGUAZAQUE',
        nit: '899999330',
        doctec: true,
        cgn: '210725407',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 511 }
      },

      {
        id: 512,
        name: 'ALCALDIA DE MACHETA',
        nit: '899999401',
        doctec: true,
        cgn: '212625426',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 512 }
      },

      {
        id: 513,
        name: 'ALCALDIA DE MADRID',
        nit: '899999325',
        doctec: true,
        cgn: '213025430',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 513 }
      },

      {
        id: 514,
        name: 'ALCALDIA DE MANTA',
        nit: '800094711',
        doctec: true,
        cgn: '213625436',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 514 }
      },

      {
        id: 515,
        name: 'ALCALDIA DE MEDINA',
        nit: '899999470',
        doctec: true,
        cgn: '213825438',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 515 }
      },

      {
        id: 516,
        name: 'ALCALDIA DE MOSQUERA',
        nit: '899999342',
        doctec: true,
        cgn: '217325473',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 516 }
      },

      {
        id: 517,
        name: 'ALCALDIA DE NARINO',
        nit: '890680390',
        doctec: true,
        cgn: '218325483',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 517 }
      },

      {
        id: 518,
        name: 'ALCALDIA DE NEMOCON',
        nit: '899999366',
        doctec: true,
        cgn: '218625486',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 518 }
      },

      {
        id: 519,
        name: 'ALCALDIA DE NILO',
        nit: '899999707',
        doctec: true,
        cgn: '218825488',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 519 }
      },

      {
        id: 520,
        name: 'ALCALDIA DE NIMAIMA',
        nit: '800094713',
        doctec: true,
        cgn: '218925489',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 520 }
      },

      {
        id: 521,
        name: 'ALCALDIA DE NOCAIMA',
        nit: '899999718',
        doctec: true,
        cgn: '219125491',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 521 }
      },

      {
        id: 522,
        name: 'ALCALDIA DE VENECIA',
        nit: '890680088',
        doctec: true,
        cgn: '210625506',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 522 }
      },

      {
        id: 523,
        name: 'ALCALDIA DE PACHO',
        nit: '899999475',
        doctec: true,
        cgn: '211325513',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 523 }
      },

      {
        id: 524,
        name: 'ALCALDIA DE PAIME',
        nit: '899999704',
        doctec: true,
        cgn: '211825518',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 524 }
      },

      {
        id: 525,
        name: 'ALCALDIA DE PANDI',
        nit: '890680173',
        doctec: true,
        cgn: '212425524',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 525 }
      },

      {
        id: 526,
        name: 'ALCALDIA DE PARATEBUENO',
        nit: '800074120',
        doctec: true,
        cgn: '213025530',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 526 }
      },

      {
        id: 527,
        name: 'ALCALDIA DE PASCA',
        nit: '890680154',
        doctec: true,
        cgn: '213525535',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 527 }
      },

      {
        id: 528,
        name: 'ALCALDIA DE PUERTO SALGAR',
        nit: '899999413',
        doctec: true,
        cgn: '217225572',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 528 }
      },

      {
        id: 529,
        name: 'ALCALDIA DE PULI',
        nit: '800085612',
        doctec: true,
        cgn: '218025580',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 529 }
      },

      {
        id: 530,
        name: 'ALCALDIA DE QUEBRADANEGRA',
        nit: '899999432',
        doctec: true,
        cgn: '219225592',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 530 }
      },

      {
        id: 531,
        name: 'ALCALDIA DE QUETAME',
        nit: '800094716',
        doctec: true,
        cgn: '219425594',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 531 }
      },

      {
        id: 532,
        name: 'ALCALDIA DE QUIPILE',
        nit: '899999431',
        doctec: true,
        cgn: '219625596',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 532 }
      },

      {
        id: 533,
        name: 'ALCALDIA DE APULO',
        nit: '890680236',
        doctec: true,
        cgn: '219925599',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 533 }
      },

      {
        id: 534,
        name: 'ALCALDIA DE RICAURTE',
        nit: '890680059',
        doctec: true,
        cgn: '211225612',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 534 }
      },

      {
        id: 535,
        name: 'ALCALDIA DE SAN ANTONIO DEL TEQUENDAMA',
        nit: '860527046',
        doctec: true,
        cgn: '214525645',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 535 }
      },

      {
        id: 536,
        name: 'ALCALDIA DE SAN BERNARDO',
        nit: '800093437',
        doctec: true,
        cgn: '214925649',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 536 }
      },

      {
        id: 537,
        name: 'ALCALDIA DE SAN CAYETANO',
        nit: '800094751',
        doctec: true,
        cgn: '215325653',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 537 }
      },

      {
        id: 538,
        name: 'ALCALDIA DE SAN FRANCISCO',
        nit: '899999173',
        doctec: true,
        cgn: '215825658',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 538 }
      },

      {
        id: 539,
        name: 'ALCALDIA DE SAN JUAN DE RIOSECO',
        nit: '899999422',
        doctec: true,
        cgn: '216225662',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 539 }
      },

      {
        id: 540,
        name: 'ALCALDIA DE SASAIMA',
        nit: '800094752',
        doctec: true,
        cgn: '211825718',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 540 }
      },

      {
        id: 541,
        name: 'ALCALDIA DE SESQUILE',
        nit: '899999415',
        doctec: true,
        cgn: '213625736',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 541 }
      },

      {
        id: 542,
        name: 'ALCALDIA DE SIBATE',
        nit: '899999372',
        doctec: true,
        cgn: '214025740',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 542 }
      },

      {
        id: 543,
        name: 'ALCALDIA DE SILVANIA',
        nit: '890680437',
        doctec: true,
        cgn: '214325743',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 543 }
      },

      {
        id: 544,
        name: 'ALCALDIA DE SIMIJACA',
        nit: '899999384',
        doctec: true,
        cgn: '214525745',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 544 }
      },

      {
        id: 545,
        name: 'ALCALDIA DE SOACHA',
        nit: '800094755',
        doctec: true,
        cgn: '215425754',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 545 }
      },

      {
        id: 546,
        name: 'ALCALDIA DE SOPO',
        nit: '899999468',
        doctec: true,
        cgn: '215825758',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 546 }
      },

      {
        id: 547,
        name: 'ALCALDIA DE SUBACHOQUE',
        nit: '899999314',
        doctec: true,
        cgn: '216925769',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 547 }
      },

      {
        id: 548,
        name: 'ALCALDIA DE SUESCA',
        nit: '899999430',
        doctec: true,
        cgn: '217225772',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 548 }
      },

      {
        id: 549,
        name: 'ALCALDIA DE SUPATA',
        nit: '899999398',
        doctec: true,
        cgn: '217725777',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 549 }
      },

      {
        id: 550,
        name: 'ALCALDIA DE SUSA',
        nit: '899999700',
        doctec: true,
        cgn: '217925779',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 550 }
      },

      {
        id: 551,
        name: 'ALCALDIA DE SUTATAUSA',
        nit: '899999476',
        doctec: true,
        cgn: '218125781',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 551 }
      },

      {
        id: 552,
        name: 'ALCALDIA DE TABIO',
        nit: '899999443',
        doctec: true,
        cgn: '218525785',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 552 }
      },

      {
        id: 553,
        name: 'ALCALDIA DE TAUSA',
        nit: '899999481',
        doctec: true,
        cgn: '219325793',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 553 }
      },

      {
        id: 554,
        name: 'ALCALDIA DE TENA',
        nit: '800004574',
        doctec: true,
        cgn: '219725797',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 554 }
      },

      {
        id: 555,
        name: 'ALCALDIA DE TENJO',
        nit: '800095174',
        doctec: true,
        cgn: '219925799',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 555 }
      },

      {
        id: 556,
        name: 'ALCALDIA DE TIBACUY',
        nit: '800018689',
        doctec: true,
        cgn: '210525805',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 556 }
      },

      {
        id: 557,
        name: 'ALCALDIA DE TIBIRITA',
        nit: '800094782',
        doctec: true,
        cgn: '210725807',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 557 }
      },

      {
        id: 558,
        name: 'ALCALDIA DE TOCAIMA',
        nit: '800093439',
        doctec: true,
        cgn: '211525815',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 558 }
      },

      {
        id: 559,
        name: 'ALCALDIA DE TOCANCIPA',
        nit: '899999428',
        doctec: true,
        cgn: '211725817',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 559 }
      },

      {
        id: 560,
        name: 'ALCALDIA DE TOPAIPI',
        nit: '800072715',
        doctec: true,
        cgn: '212325823',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 560 }
      },

      {
        id: 561,
        name: 'ALCALDIA DE UBALA',
        nit: '899999385',
        doctec: true,
        cgn: '213925839',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 561 }
      },

      {
        id: 562,
        name: 'ALCALDIA DE UBAQUE',
        nit: '800095568',
        doctec: true,
        cgn: '214125841',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 562 }
      },

      {
        id: 563,
        name: 'ALCALDIA DE VILLA DE SAN DIEGO DE UBATE',
        nit: '899999281',
        doctec: true,
        cgn: '214325843',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 563 }
      },

      {
        id: 564,
        name: 'ALCALDIA DE UNE',
        nit: '899999388',
        doctec: true,
        cgn: '214525845',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 564 }
      },

      {
        id: 565,
        name: 'ALCALDIA DE UTICA',
        nit: '899999407',
        doctec: true,
        cgn: '215125851',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 565 }
      },

      {
        id: 566,
        name: 'ALCALDIA DE VERGARA',
        nit: '899999448',
        doctec: true,
        cgn: '216225862',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 566 }
      },

      {
        id: 567,
        name: 'ALCALDIA DE VIANI',
        nit: '899999709',
        doctec: true,
        cgn: '216725867',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 567 }
      },

      {
        id: 568,
        name: 'ALCALDIA DE VILLAGOMEZ',
        nit: '899999447',
        doctec: true,
        cgn: '217125871',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 568 }
      },

      {
        id: 569,
        name: 'ALCALDIA DE VILLAPINZON',
        nit: '899999445',
        doctec: true,
        cgn: '217325873',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 569 }
      },

      {
        id: 570,
        name: 'ALCALDIA DE VILLETA',
        nit: '899999312',
        doctec: true,
        cgn: '217525875',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 570 }
      },

      {
        id: 571,
        name: 'ALCALDIA DE VIOTA',
        nit: '890680142',
        doctec: true,
        cgn: '217825878',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 571 }
      },

      {
        id: 572,
        name: 'ALCALDIA DE YACOPI',
        nit: '800094776',
        doctec: true,
        cgn: '218525885',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 572 }
      },

      {
        id: 573,
        name: 'ALCALDIA DE ZIPACON',
        nit: '800094778',
        doctec: true,
        cgn: '219825898',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 573 }
      },

      {
        id: 574,
        name: 'ALCALDIA DE ZIPAQUIRA',
        nit: '899999318',
        doctec: true,
        cgn: '219925899',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 574 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
