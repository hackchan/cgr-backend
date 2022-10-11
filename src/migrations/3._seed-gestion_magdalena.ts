import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933066 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 657,
        name: 'ALCALDIA DE SANTA MARTA',
        nit: '891780009',
        doctec: true,
        cgn: '210147001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 657 }
      },

      {
        id: 658,
        name: 'ALCALDIA DE ALGARROBO',
        nit: '819003219',
        doctec: true,
        cgn: '213047030',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 658 }
      },

      {
        id: 659,
        name: 'ALCALDIA DE ARACATACA',
        nit: '891780041',
        doctec: true,
        cgn: '215347053',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 659 }
      },

      {
        id: 660,
        name: 'ALCALDIA DE ARIGUANI',
        nit: '891702186',
        doctec: true,
        cgn: '215847058',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 660 }
      },

      {
        id: 661,
        name: 'ALCALDIA DE CERRO DE SAN ANTONIO',
        nit: '891780042',
        doctec: true,
        cgn: '216147161',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 661 }
      },

      {
        id: 662,
        name: 'ALCALDIA DE CHIVOLO',
        nit: '800071934',
        doctec: true,
        cgn: '217047170',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 662 }
      },

      {
        id: 663,
        name: 'ALCALDIA DE CIENAGA',
        nit: '891780043',
        doctec: true,
        cgn: '218947189',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 663 }
      },

      {
        id: 664,
        name: 'ALCALDIA DE CONCORDIA',
        nit: '819003225',
        doctec: true,
        cgn: '210547205',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 664 }
      },

      {
        id: 665,
        name: 'ALCALDIA DE EL BANCO',
        nit: '891780044',
        doctec: true,
        cgn: '214547245',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 665 }
      },

      {
        id: 666,
        name: 'ALCALDIA DE EL PINON',
        nit: '891780049',
        doctec: true,
        cgn: '215847258',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 666 }
      },

      {
        id: 667,
        name: 'ALCALDIA DE EL RETEN',
        nit: '819000925',
        doctec: true,
        cgn: '216847268',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 667 }
      },

      {
        id: 668,
        name: 'ALCALDIA DE FUNDACION',
        nit: '891780045',
        doctec: true,
        cgn: '218847288',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 668 }
      },

      {
        id: 669,
        name: 'ALCALDIA DE GUAMAL',
        nit: '891780047',
        doctec: true,
        cgn: '211847318',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 669 }
      },

      {
        id: 670,
        name: 'ALCALDIA DE NUEVA GRANADA',
        nit: '819003849',
        doctec: true,
        cgn: '216047460',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 670 }
      },

      {
        id: 671,
        name: 'ALCALDIA DE PEDRAZA',
        nit: '891780048',
        doctec: true,
        cgn: '214147541',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 671 }
      },

      {
        id: 672,
        name: 'ALCALDIA DE PIJINO DEL CARMEN',
        nit: '819000985',
        doctec: true,
        cgn: '214547545',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 672 }
      },

      {
        id: 673,
        name: 'ALCALDIA DE PIVIJAY',
        nit: '891780050',
        doctec: true,
        cgn: '215147551',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 673 }
      },

      {
        id: 674,
        name: 'ALCALDIA DE PLATO',
        nit: '891780051',
        doctec: true,
        cgn: '215547555',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 674 }
      },

      {
        id: 675,
        name: 'ALCALDIA DE PUEBLOVIEJO',
        nit: '891703045',
        doctec: true,
        cgn: '217047570',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 675 }
      },

      {
        id: 676,
        name: 'ALCALDIA DE REMOLINO',
        nit: '891780052',
        doctec: true,
        cgn: '210547605',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 676 }
      },

      {
        id: 677,
        name: 'ALCALDIA DE SABANAS DE SAN ANGEL',
        nit: '819003224',
        doctec: true,
        cgn: '216047660',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 677 }
      },

      {
        id: 678,
        name: 'ALCALDIA DE SALAMINA',
        nit: '891780053',
        doctec: true,
        cgn: '217547675',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 678 }
      },

      {
        id: 679,
        name: 'ALCALDIA DE SAN SEBASTIAN DE BUENAVISTA',
        nit: '891780054',
        doctec: true,
        cgn: '219247692',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 679 }
      },

      {
        id: 680,
        name: 'ALCALDIA DE SAN ZENON',
        nit: '891780055',
        doctec: true,
        cgn: '210347703',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 680 }
      },

      {
        id: 681,
        name: 'ALCALDIA DE SANTA ANA',
        nit: '891780056',
        doctec: true,
        cgn: '210747707',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 681 }
      },

      {
        id: 682,
        name: 'ALCALDIA DE SANTA BARBARA DE PINTO',
        nit: '819003762',
        doctec: true,
        cgn: '212047720',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 682 }
      },

      {
        id: 683,
        name: 'ALCALDIA DE SITIONUEVO',
        nit: '891780103',
        doctec: true,
        cgn: '214547745',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 683 }
      },

      {
        id: 684,
        name: 'ALCALDIA DE TENERIFE',
        nit: '891780057',
        doctec: true,
        cgn: '219847798',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 684 }
      },

      {
        id: 685,
        name: 'ALCALDIA DE ZAPAYAN',
        nit: '819003760',
        doctec: true,
        cgn: '216047960',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 685 }
      },

      {
        id: 686,
        name: 'ALCALDIA DE ZONA BANANERA',
        nit: '819003297',
        doctec: true,
        cgn: '218047980',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 686 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
