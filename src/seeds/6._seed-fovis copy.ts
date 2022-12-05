import { EstadoSolicitud } from '../entity/Matriz/Fovis/EstadoSolicitud'
import { ZonaSolicitud } from '../entity/Matriz/Fovis/Zona'
import { RangoIngresos } from '../entity/Matriz/Fovis/RangoIngresos'
import { FuenteFinanciamiento } from '../entity/Matriz/Fovis/FuenteFinanciamiento'
import { Programa } from '../entity/Matriz/Fovis/Programa'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933222 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EstadoSolicitud, [
      {
        id: 1,
        name: 'APROBADA'
      },
      {
        id: 2,
        name: 'ESTUDIO'
      },
      {
        id: 3,
        name: 'RECHAZADA'
      }

    ])
    await queryRunner.manager.insert(ZonaSolicitud, [
      {
        id: 1,
        name: 'URBANA'
      },
      {
        id: 2,
        name: 'RURAL'
      }

    ])

    await queryRunner.manager.insert(RangoIngresos, [
      {
        id: 1,
        name: 'SIN INGRESOS'
      },
      {
        id: 2,
        name: '0,00 – 1,00'
      },
      {
        id: 3,
        name: '1,00 – 1,50'
      },
      {
        id: 4,
        name: '1,50 – 2,00'
      },
      {
        id: 5,
        name: '2,00 – 2,25'
      },
      {
        id: 6,
        name: '2,25 – 2,50'
      },
      {
        id: 7,
        name: '2,50 – 2,75'
      },
      {
        id: 8,
        name: '2,75 – 3,00'
      },
      {
        id: 9,
        name: '3,00 – 3,50'
      },
      {
        id: 10,
        name: '3,50 – 4,00'
      },
      {
        id: 11,
        name: '0,00 – 1,60'
      },
      {
        id: 12,
        name: '1,60 – 2,00'
      },
      {
        id: 13,
        name: '2,00 – 3,00'
      },
      {
        id: 14,
        name: '3,00 – 4,00'
      },
      {
        id: 15,
        name: '0,00 – 2,00'
      },
      {
        id: 16,
        name: '2,00 – 4,00'
      }

    ])

    await queryRunner.manager.insert(FuenteFinanciamiento, [
      {
        id: 1,
        name: 'FONDO NACIONAL DEL AHORRO'
      },
      {
        id: 2,
        name: 'SISTEMA FINANCIERO'
      },
      {
        id: 3,
        name: 'CAJA COMPESACION FAMILIAR'
      },
      {
        id: 4,
        name: 'OTRAS FUENTES'
      },
      {
        id: 5,
        name: 'RECURSOS PROPIOS'
      },
      {
        id: 6,
        name: 'FONDOS DE EMPLEADOS'
      },
      {
        id: 7,
        name: 'NO APLICA'
      }

    ])

    await queryRunner.manager.insert(Programa, [
      {
        id: 1,
        name: 'URBANO-VIVIENDA NUEVA'
      },
      {
        id: 2,
        name: 'URBANO-CONSTRUCCION EN SITIO PROPIO'
      },
      {
        id: 3,
        name: 'URBANO-MEJORAMIENTO DE VIVIENDA'
      },
      {
        id: 4,
        name: 'URBANO-VIVIENDA USADA'
      },
      {
        id: 5,
        name: 'URBANO-MEJORAMIENTO DE VIVIENDA SALUDABLE'
      },
      {
        id: 6,
        name: 'RURAL-CONSTRUCCION VIVIENDA NUEVA'
      },
      {
        id: 7,
        name: 'RURAL ADQUISICION VIVIENDA NUEVA'
      },
      {
        id: 8,
        name: 'RURAL-MEJORAMIENTO DE VIVIENDA Y SANEAMIENTO BASICO'
      },
      {
        id: 9,
        name: 'ARRENDAMIENTO'
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
