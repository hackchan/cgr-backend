import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933028 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 716,
        name: 'PASTO',
        active: true,
        isCapital: true,
        divipola: '52001',
        latitude: 1.083605497,
        longitude: -77.20610074,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 717,
        name: 'ALBAN',
        active: true,
        isCapital: false,
        divipola: '52019',
        latitude: 1.469854084,
        longitude: -77.06880947,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 718,
        name: 'ALDANA',
        active: true,
        isCapital: false,
        divipola: '52022',
        latitude: 0.913431916,
        longitude: -77.69538731,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 719,
        name: 'ANCUYA',
        active: true,
        isCapital: false,
        divipola: '52036',
        latitude: 1.245254077,
        longitude: -77.53115777,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 720,
        name: 'ARBOLEDA',
        active: true,
        isCapital: false,
        divipola: '52051',
        latitude: 1.480051172,
        longitude: -77.12985001,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 721,
        name: 'BARBACOAS',
        active: true,
        isCapital: false,
        divipola: '52079',
        latitude: 1.44563774,
        longitude: -78.15621072,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 722,
        name: 'BELEN',
        active: true,
        isCapital: false,
        divipola: '52083',
        latitude: 1.593645287,
        longitude: -77.01999366,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 723,
        name: 'BUESACO',
        active: true,
        isCapital: false,
        divipola: '52110',
        latitude: 1.315215636,
        longitude: -77.1163664,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 724,
        name: 'COLON',
        active: true,
        isCapital: false,
        divipola: '52203',
        latitude: 1.636334379,
        longitude: -77.0473156,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 725,
        name: 'CONSACA',
        active: true,
        isCapital: false,
        divipola: '52207',
        latitude: 1.209066732,
        longitude: -77.44063921,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 726,
        name: 'CONTADERO',
        active: true,
        isCapital: false,
        divipola: '52210',
        latitude: 0.932667458,
        longitude: -77.52808731,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 727,
        name: 'CORDOBA',
        active: true,
        isCapital: false,
        divipola: '52215',
        latitude: 0.78274688,
        longitude: -77.36805903,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 728,
        name: 'CUASPUD CARLOSAMA',
        active: true,
        isCapital: false,
        divipola: '52224',
        latitude: 0.875426999,
        longitude: -77.73591601,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 729,
        name: 'CUMBAL',
        active: true,
        isCapital: false,
        divipola: '52227',
        latitude: 0.944223274,
        longitude: -77.95958446,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 730,
        name: 'CUMBITARA',
        active: true,
        isCapital: false,
        divipola: '52233',
        latitude: 1.72559011,
        longitude: -77.59281637,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 731,
        name: 'CHACHAGUI',
        active: true,
        isCapital: false,
        divipola: '52240',
        latitude: 1.386497844,
        longitude: -77.26969022,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 732,
        name: 'EL CHARCO',
        active: true,
        isCapital: false,
        divipola: '52250',
        latitude: 2.216382295,
        longitude: -77.99533234,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 733,
        name: 'EL PENOL',
        active: true,
        isCapital: false,
        divipola: '52254',
        latitude: 1.512283967,
        longitude: -77.43050934,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 734,
        name: 'EL ROSARIO',
        active: true,
        isCapital: false,
        divipola: '52256',
        latitude: 1.887689437,
        longitude: -77.48319589,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 735,
        name: 'EL TABLON DE GOMEZ',
        active: true,
        isCapital: false,
        divipola: '52258',
        latitude: 1.409430207,
        longitude: -76.98526959,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 736,
        name: 'EL TAMBO',
        active: true,
        isCapital: false,
        divipola: '52260',
        latitude: 1.43026376,
        longitude: -77.38311597,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 737,
        name: 'FUNES',
        active: true,
        isCapital: false,
        divipola: '52287',
        latitude: 0.957786429,
        longitude: -77.39532781,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 738,
        name: 'GUACHUCAL',
        active: true,
        isCapital: false,
        divipola: '52317',
        latitude: 0.975037904,
        longitude: -77.73758941,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 739,
        name: 'GUAITARILLA',
        active: true,
        isCapital: false,
        divipola: '52320',
        latitude: 1.151366658,
        longitude: -77.53011336,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 740,
        name: 'GUALMATAN',
        active: true,
        isCapital: false,
        divipola: '52323',
        latitude: 0.928642623,
        longitude: -77.58261883,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 741,
        name: 'ILES',
        active: true,
        isCapital: false,
        divipola: '52352',
        latitude: 0.980534037,
        longitude: -77.5186573,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 742,
        name: 'IMUES',
        active: true,
        isCapital: false,
        divipola: '52354',
        latitude: 1.07287697,
        longitude: -77.50150864,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 743,
        name: 'IPIALES',
        active: true,
        isCapital: false,
        divipola: '52356',
        latitude: 0.497708465,
        longitude: -77.24047625,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 744,
        name: 'LA CRUZ',
        active: true,
        isCapital: false,
        divipola: '52378',
        latitude: 1.584175998,
        longitude: -76.92335262,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 745,
        name: 'LA FLORIDA',
        active: true,
        isCapital: false,
        divipola: '52381',
        latitude: 1.338034371,
        longitude: -77.42293041,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 746,
        name: 'LA LLANADA',
        active: true,
        isCapital: false,
        divipola: '52385',
        latitude: 1.541847847,
        longitude: -77.61781608,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 747,
        name: 'LA TOLA',
        active: true,
        isCapital: false,
        divipola: '52390',
        latitude: 2.56027333,
        longitude: -78.23506694,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 748,
        name: 'LA UNION',
        active: true,
        isCapital: false,
        divipola: '52399',
        latitude: 1.619697376,
        longitude: -77.14284622,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 749,
        name: 'LEIVA',
        active: true,
        isCapital: false,
        divipola: '52405',
        latitude: 1.900862361,
        longitude: -77.31220073,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 750,
        name: 'LINARES',
        active: true,
        isCapital: false,
        divipola: '52411',
        latitude: 1.395173084,
        longitude: -77.52093774,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 751,
        name: 'LOS ANDES',
        active: true,
        isCapital: false,
        divipola: '52418',
        latitude: 1.672601269,
        longitude: -77.71054449,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 752,
        name: 'MAGUI',
        active: true,
        isCapital: false,
        divipola: '52427',
        latitude: 1.906858429,
        longitude: -78.04473644,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 753,
        name: 'MALLAMA',
        active: true,
        isCapital: false,
        divipola: '52435',
        latitude: 1.155947016,
        longitude: -77.84664646,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 754,
        name: 'MOSQUERA',
        active: true,
        isCapital: false,
        divipola: '52473',
        latitude: 2.442493698,
        longitude: -78.438827,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 755,
        name: 'NARINO',
        active: true,
        isCapital: false,
        divipola: '52480',
        latitude: 1.286775273,
        longitude: -77.35220367,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 756,
        name: 'OLAYA HERRERA',
        active: true,
        isCapital: false,
        divipola: '52490',
        latitude: 2.287856547,
        longitude: -78.31219024,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 757,
        name: 'OSPINA',
        active: true,
        isCapital: false,
        divipola: '52506',
        latitude: 1.029815854,
        longitude: -77.55234944,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 758,
        name: 'FRANCISCO PIZARRO',
        active: true,
        isCapital: false,
        divipola: '52520',
        latitude: 2.088531925,
        longitude: -78.59193099,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 759,
        name: 'POLICARPA',
        active: true,
        isCapital: false,
        divipola: '52540',
        latitude: 1.735354202,
        longitude: -77.48134359,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 760,
        name: 'POTOSI',
        active: true,
        isCapital: false,
        divipola: '52560',
        latitude: 0.785841088,
        longitude: -77.52870407,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 761,
        name: 'PROVIDENCIA',
        active: true,
        isCapital: false,
        divipola: '52565',
        latitude: 1.232864821,
        longitude: -77.59844212,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 762,
        name: 'PUERRES',
        active: true,
        isCapital: false,
        divipola: '52573',
        latitude: 0.854351651,
        longitude: -77.35032523,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 763,
        name: 'PUPIALES',
        active: true,
        isCapital: false,
        divipola: '52585',
        latitude: 0.916769831,
        longitude: -77.63336954,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 764,
        name: 'RICAURTE',
        active: true,
        isCapital: false,
        divipola: '52612',
        latitude: 1.147671848,
        longitude: -78.05811118,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 765,
        name: 'ROBERTO PAYAN',
        active: true,
        isCapital: false,
        divipola: '52621',
        latitude: 1.897581156,
        longitude: -78.3811163,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 766,
        name: 'SAMANIEGO',
        active: true,
        isCapital: false,
        divipola: '52678',
        latitude: 1.430555262,
        longitude: -77.69179559,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 767,
        name: 'SANDONA',
        active: true,
        isCapital: false,
        divipola: '52683',
        latitude: 1.288105409,
        longitude: -77.45670068,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 768,
        name: 'SAN BERNARDO',
        active: true,
        isCapital: false,
        divipola: '52685',
        latitude: 1.529782485,
        longitude: -77.02070663,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 769,
        name: 'SAN LORENZO',
        active: true,
        isCapital: false,
        divipola: '52687',
        latitude: 1.542139582,
        longitude: -77.21872693,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 770,
        name: 'SAN PABLO',
        active: true,
        isCapital: false,
        divipola: '52693',
        latitude: 1.681576627,
        longitude: -76.97527979,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 771,
        name: 'SAN PEDRO DE CARTAGO',
        active: true,
        isCapital: false,
        divipola: '52694',
        latitude: 1.536823494,
        longitude: -77.10140325,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 772,
        name: 'SANTA BARBARA',
        active: true,
        isCapital: false,
        divipola: '52696',
        latitude: 2.494420411,
        longitude: -77.98256461,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 773,
        name: 'SANTACRUZ',
        active: true,
        isCapital: false,
        divipola: '52699',
        latitude: 1.285179376,
        longitude: -77.7445744,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 774,
        name: 'SAPUYES',
        active: true,
        isCapital: false,
        divipola: '52720',
        latitude: 1.045287475,
        longitude: -77.71810954,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 775,
        name: 'TAMINANGO',
        active: true,
        isCapital: false,
        divipola: '52786',
        latitude: 1.591661392,
        longitude: -77.32525316,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 776,
        name: 'TANGUA',
        active: true,
        isCapital: false,
        divipola: '52788',
        latitude: 1.064078111,
        longitude: -77.35063491,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 777,
        name: 'SAN ANDRES DE TUMACO',
        active: true,
        isCapital: false,
        divipola: '52835',
        latitude: 1.574550638,
        longitude: -78.61540963,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 778,
        name: 'TUQUERRES',
        active: true,
        isCapital: false,
        divipola: '52838',
        latitude: 1.134440523,
        longitude: -77.63073238,
        department: { id: 52 },
        tipo: { id: 1 }
      },

      {
        id: 779,
        name: 'YACUANQUER',
        active: true,
        isCapital: false,
        divipola: '52885',
        latitude: 1.125547916,
        longitude: -77.42467569,
        department: { id: 52 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
