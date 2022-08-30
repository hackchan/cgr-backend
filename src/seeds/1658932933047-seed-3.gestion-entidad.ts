import { Categoria } from '../entity/Entidad/Categoria'
import { Sector } from '../entity/Entidad/Sector'
import { Subsector } from '../entity/Entidad/Subsector'
import { EntidadControl } from '../entity/Entidad/EntidadControl'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933047 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Categoria, [
      {
        id: 1,
        name: 'PRIMERA CATEGORIA'
      },
      {
        id: 2,
        name: 'SEGUNDA CATEGORIA'
      },
      {
        id: 3,
        name: 'TERCERA CATEGORIA'
      },
      {
        id: 4,
        name: 'CUARTA CATEGORIA'
      },
      {
        id: 6,
        name: 'SEXTA CATEGORIA'
      },
      {
        id: 7,
        name: 'ESPECIAL'
      }

    ])

    await queryRunner.manager.insert(Sector, [
      {
        id: 1,
        name: 'AGROPECUARIO',
        initial: 'AGRO'
      },
      {
        id: 2,
        name: 'COMERCIO Y DESARROLLO REGIONAL',
        initial: 'CODR'
      },
      {
        id: 3,
        name: 'DEFENSA Y SEGURIDAD',
        initial: 'DESE'
      },
      {
        id: 4,
        name: 'INFRAESTRUCTURA',
        initial: 'INFR'
      },
      {
        id: 5,
        name: 'EDUCACION, CIENCIA Y TECNOLOGIA, CULTURA, RECREACION Y DEPORTE',
        initial: 'ECTC'
      },
      {
        id: 6,
        name: 'GESTION PUBLICA E INSTITUCIONES FINANCIERAS',
        initial: 'GPIF'
      },
      {
        id: 7,
        name: 'INCLUSION SOCIAL',
        initial: 'INSO'
      },
      {
        id: 8,
        name: 'JUSTICIA',
        initial: 'JUST'
      },
      {
        id: 9,
        name: 'MEDIO AMBIENTE',
        initial: 'MEAM'
      },
      {
        id: 10,
        name: 'MINAS Y ENERGIA',
        initial: 'MIEN'
      },
      {
        id: 11,
        name: 'SALUD',
        initial: 'SALD'
      },
      {
        id: 12,
        name: 'TECNOLOGIAS DE LA INFORMACION Y LAS COMUNICACIONES.',
        initial: 'TICS'
      },
      {
        id: 13,
        name: 'TRABAJO',
        initial: 'TRAB'
      },
      {
        id: 14,
        name: 'VIVIENDA Y SANEAMIENTO BASICO',
        initial: 'VISB'
      },
      {
        id: 15,
        name: 'TRANSVERSAL',
        initial: 'TRSV'
      }
    ])
    await queryRunner.manager.insert(Subsector, [
      {
        id: 1,
        name: 'DESARROLLO AGROINDUSTRIAL Y COMERCIALIZACION',
        sector: {
          id: 1
        }
      },
      {
        id: 2,
        name: 'FOMENTO Y DESARROLLO RURAL Y AGROPECUARIO',
        sector: {
          id: 1
        }
      },
      {
        id: 3,
        name: 'INVESTIGACION, DESARROLLO TECNOLOGICO Y TRANSFERENCIA DE TECNOLOGIA',
        sector: {
          id: 1
        }
      },
      {
        id: 4,
        name: 'PATRIMONIOS AUTONOMOS',
        sector: {
          id: 1
        }
      },
      {
        id: 5,
        name: 'REGULADOR DE POLITICAS',
        sector: {
          id: 1
        }
      },
      {
        id: 6,
        name: 'SUJETOS DE CONTROL EN LIQUIDACION',
        sector: {
          id: 1
        }
      },
      {
        id: 7,
        name: 'DESARROLLO REGIONAL',
        sector: {
          id: 2
        }
      },
      {
        id: 8,
        name: 'INDUSTRIA, COMERCIO',
        sector: {
          id: 2
        }
      },
      {
        id: 9,
        name: 'PATRIMONIOS AUTONOMOS',
        sector: {
          id: 2
        }
      },
      {
        id: 10,
        name: 'SUJETOS DE CONTROL EN LIQUIDACION',
        sector: {
          id: 2
        }
      },
      {
        id: 11,
        name: 'TURISMO',
        sector: {
          id: 2
        }
      },
      {
        id: 12,
        name: 'REGULADOR DEFENSA',
        sector: {
          id: 3
        }
      },
      {
        id: 13,
        name: 'SEGURIDAD',
        sector: {
          id: 3
        }
      },
      {
        id: 14,
        name: 'GESTION DEL RIESGO Y ADAPTACION AL CAMBIO CLIMATICO',
        sector: {
          id: 4
        }
      },
      {
        id: 15,
        name: 'OTROS SUJETOS DE CONTROL - IDENTIFICACON Y PROCESO ELECTORAL',
        sector: {
          id: 4
        }
      },
      {
        id: 16,
        name: 'PATRIMONIOS AUTONOMOS',
        sector: {
          id: 4
        }
      },
      {
        id: 17,
        name: 'TRANSPORTE',
        sector: {
          id: 4
        }
      },
      {
        id: 18,
        name: 'CONSEJOS',
        sector: {
          id: 5
        }
      },
      {
        id: 19,
        name: 'CULTURA',
        sector: {
          id: 5
        }
      },
      {
        id: 20,
        name: 'EDUCACION - CENTRAL',
        sector: {
          id: 5
        }
      },
      {
        id: 21,
        name: 'EDUCACION - INSTITUCIONES DE EDUCACION SUPERIOR',
        sector: {
          id: 5
        }
      },
      {
        id: 22,
        name: 'SISTEMA NACIONAL DEL DEPORTE',
        sector: {
          id: 5
        }
      },
      {
        id: 23,
        name: 'ADMINISTRACION PUBLICA',
        sector: {
          id: 6
        }
      },
      {
        id: 24,
        name: 'HACIENDA',
        sector: {
          id: 6
        }
      },
      {
        id: 25,
        name: 'INSTITUCIONES FINANCIERAS',
        sector: {
          id: 6
        }
      },
      {
        id: 26,
        name: 'LEGISLATIVO',
        sector: {
          id: 6
        }
      },
      {
        id: 27,
        name: 'PATRIMONIOS AUTONOMOS',
        sector: {
          id: 6
        }
      },
      {
        id: 28,
        name: 'REGISTRO, IDENTIFICACION Y PROCESO ELECTORAL',
        sector: {
          id: 6
        }
      },
      {
        id: 29,
        name: 'REGULACION, SUPERVISION Y CONTROL',
        sector: {
          id: 6
        }
      },
      {
        id: 30,
        name: 'RELACIONES EXTERIORES',
        sector: {
          id: 6
        }
      },
      {
        id: 31,
        name: 'TRANSVERSAL',
        sector: {
          id: 6
        }
      },
      {
        id: 32,
        name: 'SOCIAL',
        sector: {
          id: 7
        }
      },
      {
        id: 33,
        name: 'ADMINISTRACION DE JUSTICIA',
        sector: {
          id: 8
        }
      },
      {
        id: 34,
        name: 'ORGANOS DE CONTROL',
        sector: {
          id: 8
        }
      },
      {
        id: 35,
        name: 'SISTEMA INTEGRAL DE VERDAD, JUSTICIA, REPARACION Y NO REPETICION',
        sector: {
          id: 8
        }
      },
      {
        id: 36,
        name: 'ASOCIACIONES, CORPORACIONES CIVILES',
        sector: {
          id: 9
        }
      },
      {
        id: 37,
        name: 'AUTORIDADES AMBIENTALES',
        sector: {
          id: 9
        }
      },
      {
        id: 38,
        name: 'FORMULADOR Y REGULADOR DE LAS POLITICAS',
        sector: {
          id: 9
        }
      },
      {
        id: 39,
        name: 'INVESTIGACIONES CIENTIFICAS AMBIENTALES E INFORMACION AMBIENTAL',
        sector: {
          id: 9
        }
      },
      {
        id: 40,
        name: 'PATRIMONIOS NATURALES',
        sector: {
          id: 9
        }
      },
      {
        id: 41,
        name: 'EN LIQUIDACION',
        sector: {
          id: 10
        }
      },
      {
        id: 42,
        name: 'ENERGIA',
        sector: {
          id: 10
        }
      },
      {
        id: 43,
        name: 'HIDROCARBUROS',
        sector: {
          id: 10
        }
      },
      {
        id: 44,
        name: 'MINAS',
        sector: {
          id: 10
        }
      },
      {
        id: 45,
        name: 'PATRIMONIOS AUTONOMOS',
        sector: {
          id: 10
        }
      },
      {
        id: 46,
        name: 'TRANSVERSAL',
        sector: {
          id: 10
        }
      },
      {
        id: 47,
        name: 'EN LIQUIDACION',
        sector: {
          id: 10
        }
      },
      {
        id: 48,
        name: 'ENTIDADES ADAPTADAS AL SISTEMA DE SEGURIDAD SOCIAL EN SALUD',
        sector: {
          id: 11
        }
      },
      {
        id: 49,
        name: 'EPS',
        sector: {
          id: 11
        }
      },
      {
        id: 50,
        name: 'OTRAS ENTIDADES SUPRADEPARTAMENTALES',
        sector: {
          id: 11
        }
      },
      {
        id: 51,
        name: 'PRESTADORES DE SERVICIOS DE SALUD',
        sector: {
          id: 11
        }
      },
      {
        id: 52,
        name: 'SALUD Y PROTECCCION SOCIAL - CENTRAL',
        sector: {
          id: 11
        }
      },
      {
        id: 53,
        name: 'PATRIMONIOS AUTONOMOS',
        sector: {
          id: 12
        }
      },
      {
        id: 54,
        name: 'TELECOMUNICACIONES',
        sector: {
          id: 12
        }
      },
      {
        id: 55,
        name: 'ADMINISTRADORAS DE RIESGOS LABORALES',
        sector: {
          id: 13
        }
      },
      {
        id: 56,
        name: 'CAJAS DE COMPENSACION FAMILIAR',
        sector: {
          id: 13
        }
      },
      {
        id: 57,
        name: 'CENTRAL',
        sector: {
          id: 13
        }
      },
      {
        id: 58,
        name: 'PENSIONES ADMINISTRADORAS DE REGIMENES DE PRIMA MEDIA, ESPECIALES Y EXCEPTUADOS',
        sector: {
          id: 13
        }
      },
      {
        id: 59,
        name: 'PENSIONES, ADMINISTRADORAS DE AHORRO INDIVIDUAL',
        sector: {
          id: 13
        }
      },
      {
        id: 60,
        name: 'PATRIMONIOS AUTONOMOS',
        sector: {
          id: 14
        }
      },
      {
        id: 61,
        name: 'VIVIENDA',
        sector: {
          id: 14
        }
      },
      {
        id: 62,
        name: 'TRANSVERSAL',
        sector: {
          id: 15
        }
      }
    ])

    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 1,
        name: 'Gobernacion de Arauca',
        nit: 800102838,
        doctec: true,
        // cgn: null
        categoria: {
          id: 4
        },
        subsector: {
          id: 23
        },
        municipio: {
          id: 81001
        }

      },
      {
        id: 2,
        name: 'Gobernacion de Boyaca',
        nit: 891800498,
        doctec: true,
        // cgn: null
        categoria: {
          id: 1
        },
        subsector: {
          id: 23
        },
        municipio: {
          id: 15104
        }

      },

      {
        id: 6,
        name: 'Alcaldia Municipal de Almeida',
        nit: 891801281,
        doctec: true,
        // cgn: null
        categoria: {
          id: 6
        },
        subsector: {
          id: 23
        },
        municipio: {
          id: 15022
        }

      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
