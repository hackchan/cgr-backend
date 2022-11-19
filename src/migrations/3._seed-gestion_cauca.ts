import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933059 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 361,
        name: 'ALCALDIA DE POPAYAN',
        nit: '891580006',
        doctec: true,
        cgn: '210119001',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 361 }
      },

      {
        id: 362,
        name: 'ALCALDIA DE ALMAGUER',
        nit: '891502664',
        doctec: true,
        cgn: '212219022',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 362 }
      },

      {
        id: 363,
        name: 'ALCALDIA DE ARGELIA',
        nit: '891500725',
        doctec: true,
        cgn: '215019050',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 363 }
      },

      {
        id: 364,
        name: 'ALCALDIA DE BALBOA',
        nit: '891500869',
        doctec: true,
        cgn: '217519075',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 364 }
      },

      {
        id: 365,
        name: 'ALCALDIA DE BOLIVAR',
        nit: '800095961',
        doctec: true,
        cgn: '210019100',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 365 }
      },

      {
        id: 366,
        name: 'ALCALDIA DE BUENOS AIRES',
        nit: '891502307',
        doctec: true,
        cgn: '211019110',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 366 }
      },

      {
        id: 367,
        name: 'ALCALDIA DE CAJIBIO',
        nit: '891500864',
        doctec: true,
        cgn: '213019130',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 367 }
      },

      {
        id: 368,
        name: 'ALCALDIA DE CALDONO',
        nit: '891501723',
        doctec: true,
        cgn: '213719137',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 368 }
      },

      {
        id: 369,
        name: 'ALCALDIA DE CALOTO',
        nit: '891501292',
        doctec: true,
        cgn: '214219142',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 369 }
      },

      {
        id: 370,
        name: 'ALCALDIA DE CORINTO',
        nit: '891501283',
        doctec: true,
        cgn: '211219212',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 370 }
      },

      {
        id: 371,
        name: 'ALCALDIA DE EL TAMBO',
        nit: '891500978',
        doctec: true,
        cgn: '215619256',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 371 }
      },

      {
        id: 372,
        name: 'ALCALDIA DE FLORENCIA',
        nit: '800188492',
        doctec: true,
        cgn: '219019290',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 372 }
      },

      {
        id: 373,
        name: 'ALCALDIA DE GUACHENE',
        nit: '900127183',
        doctec: true,
        cgn: '923270346',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 373 }
      },

      {
        id: 374,
        name: 'ALCALDIA DE GUAPI',
        nit: '800084378',
        doctec: true,
        cgn: '211819318',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 374 }
      },

      {
        id: 375,
        name: 'ALCALDIA DE INZA',
        nit: '800004741',
        doctec: true,
        cgn: '215519355',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 375 }
      },

      {
        id: 376,
        name: 'ALCALDIA DE JAMBALO',
        nit: '891501047',
        doctec: true,
        cgn: '216419364',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 376 }
      },

      {
        id: 377,
        name: 'ALCALDIA DE LA SIERRA',
        nit: '891502169',
        doctec: true,
        cgn: '219219392',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 377 }
      },

      {
        id: 378,
        name: 'ALCALDIA DE LA VEGA',
        nit: '891500997',
        doctec: true,
        cgn: '219719397',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 378 }
      },

      {
        id: 379,
        name: 'ALCALDIA DE LOPEZ DE MICAY',
        nit: '800051168',
        doctec: true,
        cgn: '211819418',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 379 }
      },

      {
        id: 380,
        name: 'ALCALDIA DE MERCADERES',
        nit: '891502397',
        doctec: true,
        cgn: '215019450',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 380 }
      },

      {
        id: 381,
        name: 'ALCALDIA DE MIRANDA',
        nit: '891500841',
        doctec: true,
        cgn: '215519455',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 381 }
      },

      {
        id: 382,
        name: 'ALCALDIA DE MORALES',
        nit: '891500982',
        doctec: true,
        cgn: '217319473',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 382 }
      },

      {
        id: 383,
        name: 'ALCALDIA DE PADILLA',
        nit: '800095978',
        doctec: true,
        cgn: '211319513',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 383 }
      },

      {
        id: 384,
        name: 'ALCALDIA DE PAEZ',
        nit: '800095980',
        doctec: true,
        cgn: '211719517',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 384 }
      },

      {
        id: 385,
        name: 'ALCALDIA DE PATIA',
        nit: '891502194',
        doctec: true,
        cgn: '213219532',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 385 }
      },

      {
        id: 386,
        name: 'ALCALDIA DE PIAMONTE',
        nit: '817000992',
        doctec: true,
        cgn: '213319533',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 386 }
      },

      {
        id: 387,
        name: 'ALCALDIA DE PIENDAMO - TUNIA',
        nit: '891500856',
        doctec: true,
        cgn: '214819548',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 387 }
      },

      {
        id: 388,
        name: 'ALCALDIA DE PUERTO TEJADA',
        nit: '891500580',
        doctec: true,
        cgn: '217319573',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 388 }
      },

      {
        id: 389,
        name: 'ALCALDIA DE PURACE',
        nit: '891500721',
        doctec: true,
        cgn: '218519585',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 389 }
      },

      {
        id: 390,
        name: 'ALCALDIA DE ROSAS',
        nit: '800095983',
        doctec: true,
        cgn: '212219622',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 390 }
      },

      {
        id: 391,
        name: 'ALCALDIA DE SAN SEBASTIAN',
        nit: '891502482',
        doctec: true,
        cgn: '219319693',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 391 }
      },

      {
        id: 392,
        name: 'ALCALDIA DE SANTANDER DE QUILICHAO',
        nit: '800095984',
        doctec: true,
        cgn: '210119701',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 392 }
      },

      {
        id: 393,
        name: 'ALCALDIA DE SANTA ROSA',
        nit: '891500269',
        doctec: true,
        cgn: '219819698',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 393 }
      },

      {
        id: 394,
        name: 'ALCALDIA DE SILVIA',
        nit: '800095986',
        doctec: true,
        cgn: '214319743',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 394 }
      },

      {
        id: 395,
        name: 'ALCALDIA DE SOTARA PAISPAMBA',
        nit: '891501277',
        doctec: true,
        cgn: '216019760',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 395 }
      },

      {
        id: 396,
        name: 'ALCALDIA DE SUAREZ',
        nit: '800117687',
        doctec: true,
        cgn: '218019780',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 396 }
      },

      {
        id: 397,
        name: 'ALCALDIA DE SUCRE',
        nit: '817003440',
        doctec: true,
        cgn: '218519785',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 397 }
      },

      {
        id: 398,
        name: 'ALCALDIA DE TIMBIO',
        nit: '891500742',
        doctec: true,
        cgn: '210719807',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 398 }
      },

      {
        id: 399,
        name: 'ALCALDIA DE TIMBIQUI',
        nit: '800051167',
        doctec: true,
        cgn: '210919809',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 399 }
      },

      {
        id: 400,
        name: 'ALCALDIA DE TORIBIO',
        nit: '891500887',
        doctec: true,
        cgn: '212119821',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 400 }
      },

      {
        id: 401,
        name: 'ALCALDIA DE TOTORO',
        nit: '800031874',
        doctec: true,
        cgn: '212419824',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 401 }
      },

      {
        id: 402,
        name: 'ALCALDIA DE VILLA RICA',
        nit: '817002675',
        doctec: true,
        cgn: '214519845',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 402 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
