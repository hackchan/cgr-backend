import { Departamento } from '../entity/Departments/Departamento'
import { Satelital } from '../entity/Departments/Satelital'
import { Categoria } from '../entity/Entidad/Categoria'
import { Sector } from '../entity/Entidad/Sector'
import { Subsector } from '../entity/Entidad/Subsector'
import { TypeMunicipio } from '../entity/Departments/TypeMunicipio'
import { UserType } from '../entity/UserManagement/UserType'
import { User } from '../entity/UserManagement/User'
import { Auth } from '../entity/UserManagement/Auth'
import { Role } from '../entity/UserManagement/Role'
import { DocumentType } from '../entity/Matriz/ies/DocumentType'
import { Estrato } from '../entity/Matriz/ies/Estrato'
import { Semestre } from '../entity/Matriz/ies/Semestre'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933045 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(DocumentType, [
      {
        id: 1,
        name: 'Cédula de Ciudadanía'
      },
      {
        id: 2,
        name: 'Tarjeta de Identidad'
      },
      {
        id: 3,
        name: 'Registro Civil'
      },
      {
        id: 4,
        name: 'Cédula de Extranjería'
      },

      {
        id: 5,
        name: 'NUIP'
      },
      {
        id: 6,
        name: 'Pasaporte'
      },
      {
        id: 7,
        name: 'NIT'
      },

      {
        id: 8,
        name: 'Carné Diplomático'
      },

      {
        id: 9,
        name: 'Permiso Especial de Permanencia (P.E.P)'
      },

      {
        id: 10,
        name: 'Certificado cabildo'
      },

      {
        id: 11,
        name: 'Identificación dada por la Secretaría de Educación'
      },

      {
        id: 12,
        name: 'Tarjeta de movilidad fronteriza (TMF)'
      },

      {
        id: 13,
        name: 'Visa'
      }

    ])

    await queryRunner.manager.insert(Estrato, [
      {
        id: 1,
        name: 'BAJO-BAJO'
      },
      {
        id: 2,
        name: 'BAJO'
      },
      {
        id: 3,
        name: 'MEDIO-BAJO'
      },
      {
        id: 4,
        name: 'MEDIO'
      },

      {
        id: 5,
        name: 'MEDIO-ALTO'
      },
      {
        id: 6,
        name: 'ALTO'
      }

    ])

    await queryRunner.manager.insert(Semestre, [
      {
        id: 1,
        name: 'PRIMER SEMESTRE'
      },

      {
        id: 2,
        name: 'SEGUNDO SEMESTRE'
      },

      {
        id: 3,
        name: 'TERCER SEMESTRE'
      },

      {
        id: 4,
        name: 'CUARTO SEMESTRE'
      },

      {
        id: 5,
        name: 'QUINTO SEMESTRE'
      },

      {
        id: 6,
        name: 'SEXTO SEMESTRE'
      },

      {
        id: 7,
        name: 'SEPTIMO SEMESTRE'
      },

      {
        id: 8,
        name: 'OCTAVO SEMESTRE'
      },

      {
        id: 9,
        name: 'NOVENO SEMESTRE'
      },

      {
        id: 10,
        name: 'DECIMO SEMESTRE'
      }

    ])
    await queryRunner.manager.insert(Role, [
      {
        id: 1,
        name: 'INFORMACION'
      },
      {
        id: 2,
        name: 'ENTIDAD'
      }

    ])
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
        id: 5,
        name: 'QUINTA CATEGORIA'
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

    await queryRunner.manager.insert(UserType, [
      {
        id: 1,
        name: 'CGR'

      },
      {
        id: 2,
        name: 'ENTIDAD'

      }

    ])
    await queryRunner.manager.insert(Auth, [
      {
        id: 1,
        username: 'hackchan',
        password: 'Colombia2020,.*',
        uuid: '618b2be8-2360-11ed-861d-0242ac120002'

      },
      {
        id: 2,
        username: 'hernando.montano',
        password: '1018413547',
        uuid: '793a8dec-2360-11ed-861d-0242ac120002'

      },
      {
        id: 3,
        username: 'lilia.barraza',
        password: 'Colombia2022*',
        uuid: 'c7cc7214-9698-45a2-82ee-7a1e00bfea6c'

      },
      {
        id: 4,
        username: 'roberto.delahoz',
        password: 'Colombia2022*',
        uuid: 'ffa2ca61-6f3e-4310-bb43-33e00ce724a7'

      },
      {
        id: 5,
        username: 'williams.avila',
        password: 'Colombia2022*',
        uuid: 'ab090f7b-611a-4023-9239-75e5cb06d984'

      },
      {
        id: 6,
        username: 'alvaro.zambrano',
        password: 'Colombia2022*',
        uuid: 'a91411f0-8f14-4392-ba86-72ec240d909e'

      },
      {
        id: 7,
        username: 'juliana.lopez',
        password: 'Colombia2022*',
        uuid: '15da5734-6f46-4230-af09-3271b52e89c9'

      },
      {
        id: 8,
        username: 'fabian.velandia',
        password: 'Colombia2022*',
        uuid: '5df641d0-cc8f-42b7-a3dd-832fbae8a60d'

      },
      {
        id: 9,
        username: 'leonardo.celis',
        password: 'Colombia2022*',
        uuid: '8b232109-215b-42bc-897d-7b1b41e50ea5'

      },
      {
        id: 10,
        username: 'luise.celis',
        password: 'Colombia2022*',
        uuid: '218784f8-9ada-47dd-b1f1-ff9d5c6dba8f'

      }
    ])
    await queryRunner.manager.insert(User, [
      {
        id: 1,
        name: 'FABIO',
        lastName: 'ROJAS',
        phone: '318389530',
        email: 'fabio.rojas@contraloria.gov.co',
        uuid: '9da70f0c-2360-11ed-861d-0242ac120002',
        tipo: {
          id: 1
        },
        auth: {
          id: 1
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 2,
        name: 'HERNANDO',
        lastName: 'MONTANO',
        phone: '3204463154',
        email: 'hernando.montano@contraloria.gov.co',
        uuid: 'a9ddcb3a-2360-11ed-861d-0242ac120002',
        tipo: {
          id: 1
        },
        auth: {
          id: 2
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 3,
        name: 'LILIA',
        lastName: 'BARRAZA',
        phone: '3023432591',
        email: 'lilia.barraza@contraloria.gov.co',
        uuid: '261df3c3-a0ee-4fb9-85e2-39e7025ddcd9',
        tipo: {
          id: 1
        },
        auth: {
          id: 3
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 4,
        name: 'ROBERTO',
        lastName: 'DE LA HOZ',
        phone: '3017888046',
        email: 'roberto.delahoz@contraloria.gov.co',
        uuid: '568cb2aa-9813-48d1-bc07-18432d5b292e',
        tipo: {
          id: 1
        },
        auth: {
          id: 4
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 5,
        name: 'WILLIAMS',
        lastName: 'AVILA',
        phone: '3103859888',
        email: 'williams.avila@contraloria.gov.co',
        uuid: '57d76852-e68a-4ae2-9853-47fcbc17e6fb',
        tipo: {
          id: 1
        },
        auth: {
          id: 5
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 6,
        name: 'ALVARO',
        lastName: 'ZAMBRANO',
        phone: '3006143054',
        email: 'alvaro.zambrano@contraloria.gov.co',
        uuid: '0880691e-ed1c-4bb9-a612-d8233bf5006f',
        tipo: {
          id: 1
        },
        auth: {
          id: 6
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 7,
        name: 'JULIANA',
        lastName: 'LOPEZ',
        phone: '3184203422',
        email: 'juliana.lopez@contraloria.gov.co',
        uuid: 'fd50abe7-65e5-4dba-98a3-be7147652155',
        tipo: {
          id: 1
        },
        auth: {
          id: 7
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 8,
        name: 'FABIAN',
        lastName: 'VELANDIA',
        phone: '3015775525',
        email: 'fabian.velandia@contraloria.gov.co',
        uuid: 'bc4e47f1-c2ef-4fbd-93b2-36b16cab8b17',
        tipo: {
          id: 1
        },
        auth: {
          id: 8
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 9,
        name: 'ANGEL',
        lastName: 'CELIS',
        phone: '3132012279',
        email: 'leonardo.celis@contraloria.gov.co',
        uuid: 'adc0d119-fdb2-477e-a54f-f4051f01e094',
        tipo: {
          id: 1
        },
        auth: {
          id: 9
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      },
      {
        id: 10,
        name: 'LUIS',
        lastName: 'CELIS',
        phone: '3213176961',
        email: 'luise.celis@contraloria.gov.co',
        uuid: '06e9afa9-7045-4523-b401-faeb25120577',
        tipo: {
          id: 1
        },
        auth: {
          id: 10
        },
        roles: [{ id: 1, name: 'INFORMACION' }]

      }

    ])

    await queryRunner.manager.insert(TypeMunicipio, [
      {
        id: 1,
        name: 'MUNICIPIO'
      },
      {
        id: 2,
        name: 'AREA NO MUNICIPALIZADA'
      },
      {
        id: 3,
        name: 'ISLA'
      }

    ])
    await queryRunner.manager.insert(Satelital, [
      {
        id: 1,
        name: 'SATELITAL ORIENTE'
      },
      {
        id: 2,
        name: 'SATELITAL PACIFICO'
      },
      {
        id: 3,
        name: 'SATELITAL CARIBE'
      },
      {
        id: 4,
        name: 'SATELITAL EJE CAFETERO'
      },
      {
        id: 5,
        name: 'SATELITAL ANTIOQUIA CHOCO'
      },
      {
        id: 6,
        name: 'SATELITAL CENTRAL'
      }

    ])
    await queryRunner.manager.insert(Departamento, [
      {
        id: 5,
        name: 'ANTIOQUIA',
        latitude: 6.702032125,
        longitude: -75.50455704,
        satelital: { id: 5 }
      },

      {
        id: 8,
        name: 'ATLANTICO',
        latitude: 10.67700953,
        longitude: -74.96521949,
        satelital: { id: 3 }
      },

      {
        id: 13,
        name: 'BOLIVAR',
        latitude: 8.079796863,
        longitude: -74.23514814,
        satelital: { id: 3 }
      },

      {
        id: 15,
        name: 'BOYACA',
        latitude: 5.891672889,
        longitude: -72.62788054,
        satelital: { id: 1 }
      },

      {
        id: 17,
        name: 'CALDAS',
        latitude: 5.280139978,
        longitude: -75.27498304,
        satelital: { id: 4 }
      },

      {
        id: 18,
        name: 'CAQUETA',
        latitude: 0.798556195,
        longitude: -73.95946756,
        satelital: { id: 2 }
      },

      {
        id: 19,
        name: 'CAUCA',
        latitude: 2.396833887,
        longitude: -76.82423283,
        satelital: { id: 2 }
      },

      {
        id: 20,
        name: 'CESAR',
        latitude: 9.53665993,
        longitude: -73.51783154,
        satelital: { id: 3 }
      },

      {
        id: 23,
        name: 'CORDOBA',
        latitude: 8.358549754,
        longitude: -75.79200872,
        satelital: { id: 3 }
      },

      {
        id: 25,
        name: 'CUNDINAMARCA',
        latitude: 4.771120716,
        longitude: -74.43111092,
        satelital: { id: 6 }
      },

      {
        id: 27,
        name: 'CHOCO',
        latitude: 5.397581542,
        longitude: -76.942811,
        satelital: { id: 5 }
      },

      {
        id: 41,
        name: 'HUILA',
        latitude: 2.570143029,
        longitude: -75.58434836,
        satelital: { id: 4 }
      },

      {
        id: 44,
        name: 'LA GUAJIRA',
        latitude: 11.47687008,
        longitude: -72.42951072,
        satelital: { id: 3 }
      },

      {
        id: 47,
        name: 'MAGDALENA',
        latitude: 10.24738355,
        longitude: -74.26175733,
        satelital: { id: 3 }
      },

      {
        id: 50,
        name: 'META',
        latitude: 3.345562732,
        longitude: -72.95645988,
        satelital: { id: 6 }
      },

      {
        id: 52,
        name: 'NARINO',
        latitude: 1.571094987,
        longitude: -77.87020496,
        satelital: { id: 2 }
      },

      {
        id: 54,
        name: 'NORTE DE SANTANDER',
        latitude: 8.09513751,
        longitude: -72.88188297,
        satelital: { id: 1 }
      },

      {
        id: 63,
        name: 'QUINDIO',
        latitude: 4.455241567,
        longitude: -75.68962853,
        satelital: { id: 4 }
      },

      {
        id: 66,
        name: 'RISARALDA',
        latitude: 5.240757239,
        longitude: -76.00244469,
        satelital: { id: 4 }
      },

      {
        id: 68,
        name: 'SANTANDER',
        latitude: 6.693633184,
        longitude: -73.48600894,
        satelital: { id: 1 }
      },

      {
        id: 70,
        name: 'SUCRE',
        latitude: 9.064941448,
        longitude: -75.10981755,
        satelital: { id: 3 }
      },

      {
        id: 73,
        name: 'TOLIMA',
        latitude: 4.03477252,
        longitude: -75.2558271,
        satelital: { id: 4 }
      },

      {
        id: 76,
        name: 'VALLE DEL CAUCA',
        latitude: 3.569858693,
        longitude: -76.62850427,
        satelital: { id: 2 }
      },

      {
        id: 81,
        name: 'ARAUCA',
        latitude: 6.569577215,
        longitude: -70.96732394,
        satelital: { id: 1 }
      },

      {
        id: 85,
        name: 'CASANARE',
        latitude: 5.404064237,
        longitude: -71.60188073,
        satelital: { id: 1 }
      },

      {
        id: 86,
        name: 'PUTUMAYO',
        latitude: 0.3673031,
        longitude: -75.51406183,
        satelital: { id: 2 }
      },

      {
        id: 88,
        name: 'ARCHIPIELAGO DE SAN ANDRES PROVIDENCIA Y SANTA CATALINA',
        latitude: 12.54311512,
        longitude: -81.71762382,
        satelital: { id: 3 }
      },

      {
        id: 91,
        name: 'AMAZONAS',
        latitude: -1.54622768,
        longitude: -71.50212858,
        satelital: { id: 6 }
      },

      {
        id: 94,
        name: 'GUAINIA',
        latitude: 2.727842865,
        longitude: -68.81661272,
        satelital: { id: 6 }
      },

      {
        id: 95,
        name: 'GUAVIARE',
        latitude: 1.924531973,
        longitude: -72.12859569,
        satelital: { id: 6 }
      },

      {
        id: 97,
        name: 'VAUPES',
        latitude: 0.64624561,
        longitude: -70.56140566,
        satelital: { id: 6 }
      },

      {
        id: 99,
        name: 'VICHADA',
        latitude: 4.713557125,
        longitude: -69.41400011,
        satelital: { id: 6 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
