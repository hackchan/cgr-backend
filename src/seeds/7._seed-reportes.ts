import { Modelo } from '../entity/Reportes/Modelo'
import { Periodicidad } from '../entity/Reportes/Periodicidad'
import { Reportes } from '../entity/Reportes/Reportes'
import { MigrationInterface, QueryRunner } from 'typeorm'
import { CategoriaReportes } from '../entity/Reportes/CategoriaReporte'

export class seedDeparts1658932933211 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Modelo, [
      {
        id: 1,
        name: 'CADENA PRESUPUESTAL'
      },
      {
        id: 2,
        name: 'OBRAS DE INFRAESTRUCTURA'
      },
      {
        id: 3,
        name: 'REGALIAS'
      },
      {
        id: 4,
        name: 'FOVIS'
      },
      {
        id: 5,
        name: 'CATASTRO'
      }

    ])
    await queryRunner.manager.insert(Periodicidad, [
      {
        id: 1,
        name: 'MESNUAL'
      },
      {
        id: 2,
        name: 'TRIMESTRAL'
      }

    ])

    await queryRunner.manager.insert(CategoriaReportes, [
      {
        id: 1,
        name: 'PRESUPUESTO',
        modelo: { id: 1 }
      },
      {
        id: 2,
        name: 'CONTABLE Y FINANCIERA',
        modelo: { id: 1 }
      },
      {
        id: 3,
        name: 'PROGRAMAS Y PROYECTOS',
        modelo: { id: 1 }
      },
      {
        id: 4,
        name: 'CONTRATACION',
        modelo: { id: 1 }
      },
      {
        id: 5,
        name: 'CONTRATACION OBRAS  DE INFRAESTRUCTURA',
        modelo: { id: 2 }
      },
      {
        id: 6,
        name: 'INFORMACION PROYECTOS REGALIAS',
        modelo: { id: 3 }
      },
      {
        id: 7,
        name: 'CAJA DE COMPENSACION FAMILIAR',
        modelo: { id: 4 }
      },
      {
        id: 8,
        name: 'INSTITUCIONES DE EDUCACION SUPERIOR',
        modelo: { id: 4 }
      },
      {
        id: 9,
        name: 'CATASTRAL',
        modelo: { id: 5 }
      }

    ])

    await queryRunner.manager.insert(Reportes, [
      {
        id: 1,
        name: 'EJECUCION PRESUPUESTAL DE INGRESOS',
        categoria: {
          id: 1
        }
      },
      {
        id: 2,
        name: 'RELACION DE INGRESOS',
        categoria: {
          id: 1
        }
      },
      {
        id: 3,
        name: 'EJECUCION PRESUPUESTAL DE GASTOS',
        categoria: {
          id: 1
        }
      },
      {
        id: 4,
        name: 'RELACION DE CDPS',
        categoria: {
          id: 1
        }
      },
      {
        id: 5,
        name: 'RELACION DE COMPROMISOS',
        categoria: {
          id: 1
        }
      },
      {
        id: 6,
        name: 'RELACION DE OBLIGACIONES',
        categoria: {
          id: 1
        }
      },
      {
        id: 7,
        name: 'RELACION DE PAGOS',
        categoria: {
          id: 1
        }
      },
      {
        id: 8,
        name: 'AUXILIAR CON SALDOS',
        categoria: {
          id: 2
        }
      },
      {
        id: 9,
        name: 'LIBRO MAYOR Y BALANCE',
        categoria: {
          id: 2
        }
      },
      {
        id: 10,
        name: 'ESTADO DE SISTUACION FINANCIERA',
        categoria: {
          id: 2
        }
      },
      {
        id: 11,
        name: 'PROGRAMAS Y PROYECTOS',
        categoria: {
          id: 3
        }
      },
      {
        id: 12,
        name: 'CONTRATACION',
        categoria: {
          id: 4
        }
      },
      {
        id: 13,
        name: 'MATRIZ DE OBRAS',
        categoria: {
          id: 5
        }
      },
      {
        id: 14,
        name: 'REGALIAS',
        categoria: {
          id: 6
        }
      },
      {
        id: 15,
        name: 'FOVIS',
        categoria: {
          id: 7
        }
      },
      {
        id: 16,
        name: 'MATRICULAS IES',
        categoria: {
          id: 8
        }
      },
      {
        id: 17,
        name: 'CATASTRO',
        categoria: {
          id: 9
        }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
