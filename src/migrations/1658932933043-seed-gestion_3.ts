import { EstadoObra } from '../entity/Matriz/Obras/EstadoObra'
import { SectorObra } from '../entity/Matriz/Obras/SectorObra'
import { OrigenRecurso } from '../entity/Matriz/Obras/OrigenRecurso'
import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933043 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1,
        name: 'Gobernacion de Arauca',
        nit: '800102838',
        doctec: true,
        // cgn: null
        categoria: {
          id: 4
        },
        subsector: {
          id: 23
        },
        municipio: {
          id: 1048
        }

      },
      {
        id: 2,
        name: 'Gobernacion de Boyaca',
        nit: '891800498',
        doctec: true,
        // cgn: null
        categoria: {
          id: 1
        },
        subsector: {
          id: 23
        },
        municipio: {
          id: 195
        }

      },

      {
        id: 6,
        name: 'Alcaldia Municipal de Almeida',
        nit: '891801281',
        doctec: true,
        // cgn: null
        categoria: {
          id: 6
        },
        subsector: {
          id: 23
        },
        municipio: {
          id: 196
        }

      }

    ])

    await queryRunner.manager.insert(EstadoObra, [
      {
        id: 1,
        name: 'POR INICIAR'
      },

      {
        id: 2,
        name: 'EN EJECUCION'
      },

      {
        id: 3,
        name: 'SUSPENDIDO'
      },

      {
        id: 4,
        name: 'LIQUIDADO'
      },

      {
        id: 5,
        name: 'TERMINADO'
      },

      {
        id: 6,
        name: 'EN CESION'
      },

      {
        id: 7,
        name: 'EN REASIGNACION'
      },

      {
        id: 8,
        name: 'EN PROCESO DE INCUMPLIMIENTO'
      },

      {
        id: 9,
        name: 'VENCIDO'
      }

    ])

    await queryRunner.manager.insert(SectorObra, [
      {
        id: 1,
        name: 'VIVIENDA'
      },

      {
        id: 2,
        name: 'SALUD'
      },

      {
        id: 3,
        name: 'EDUCACION'
      },

      {
        id: 4,
        name: 'TRANSPORTE'
      },

      {
        id: 5,
        name: 'AGUA POTABLE Y SANEAMIENTO BASICO'
      },

      {
        id: 6,
        name: 'CARCELARIO'
      },

      {
        id: 7,
        name: 'DEPORTIVO'
      },

      {
        id: 8,
        name: 'JUSTICIA'
      },

      {
        id: 9,
        name: 'MITIGACION DEL RIESGO'
      },

      {
        id: 10,
        name: 'INCLUSION SOCIAL'
      },

      {
        id: 11,
        name: 'OTRO'
      }

    ])

    await queryRunner.manager.insert(OrigenRecurso, [
      {
        id: 1,
        name: 'PGN'
      },

      {
        id: 2,
        name: 'SGR'
      },

      {
        id: 3,
        name: 'MIXTOS (PGN Y SGR)'
      },

      {
        id: 4,
        name: 'MIXTOS (PGN Y SGP)'
      },

      {
        id: 5,
        name: 'MIXTOS (SGP Y SGR)'
      },

      {
        id: 6,
        name: 'MIXTO (PGN Y PROPIO)'
      },

      {
        id: 7,
        name: 'MIXTO (SGR Y PROPIO)'
      },

      {
        id: 8,
        name: 'MIXTO (SGP Y PROPIO)'
      },

      {
        id: 9,
        name: 'SGP'
      },

      {
        id: 10,
        name: 'PROPIOS'
      },

      {
        id: 11,
        name: 'OTRO'
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
