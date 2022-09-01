import { Departamento } from '../entity/Departments/Departamento'
import { Satelital } from '../entity/Departments/Satelital'
import { Categoria } from '../entity/Entidad/Categoria'
import { Sector } from '../entity/Entidad/Sector'
import { Subsector } from '../entity/Entidad/Subsector'
import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { TypeMunicipio } from '../entity/Departments/TypeMunicipio'
import { Municipio } from '../entity/Departments/Municipio'
import { UserType } from '../entity/UserManagement/UserType'
import { User } from '../entity/UserManagement/User'
import { Auth } from '../entity/UserManagement/Auth'
import { EstadoObra } from '../entity/Matriz/Obras/EstadoObra'
import { SectorObra } from '../entity/Matriz/Obras/SectorObra'
import { OrigenRecurso } from '../entity/Matriz/Obras/OrigenRecurso'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933045 implements MigrationInterface {
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

    await queryRunner.manager.insert(UserType, [
      {
        id: 1,
        name: 'CGR'

      },
      {
        id: 2,
        name: 'TERRITORIAL'

      },
      {
        id: 3,
        name: 'SECTORIZADA'

      },
      {
        id: 4,
        name: 'OTRO'

      }

    ])
    await queryRunner.manager.insert(Auth, [
      {
        id: 1,
        username: 'hackchan',
        password: 'Colombia2020,.*',
        uuid: '618b2be8-2360-11ed-861d-0242ac120002',
        role: ['admin']

      },
      {
        id: 2,
        username: 'montano',
        password: 'montano',
        uuid: '793a8dec-2360-11ed-861d-0242ac120002',
        role: ['info']

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
        }

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
        }

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
      }

    ])
    await queryRunner.manager.insert(Departamento, [
      {
        id: 5,
        name: 'ANTIOQUIA',
        latitude: 6.25184,
        longitude: -75.56359,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 8,
        name: 'ATLANTICO',
        latitude: 10.96854,
        longitude: -74.78132,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 13,
        name: 'BOLIVAR',
        latitude: 10.39972,
        longitude: -75.51444,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 15,
        name: 'BOYACA',
        latitude: 5.53528,
        longitude: -73.36778,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },

      {
        id: 17,
        name: 'CALDAS',
        latitude: 5.06889,
        longitude: -75.51738,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 18,
        name: 'CAQUETA',
        latitude: 1.61438,
        longitude: -75.60623,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 19,
        name: 'CAUCA',
        latitude: 2.43823,
        longitude: -76.61316,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 20,
        name: 'CESAR',
        latitude: 10.46314,
        longitude: -73.25322,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 23,
        name: 'CORDOBA',
        latitude: 8.74798,
        longitude: -75.88143,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },

      {
        id: 25,
        name: 'CUNDINAMARCA',
        latitude: 4.60971,
        longitude: -74.08175,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 27,
        name: 'CHOCO',
        latitude: 5.69188,
        longitude: -76.65835,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 41,
        name: 'HUILA',
        latitude: 2.9273,
        longitude: -75.28189,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 44,
        name: 'LA GUAJIRA',
        latitude: 11.54444,
        longitude: -72.90722,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 47,
        name: 'MAGDALENA',
        latitude: 11.24079,
        longitude: -74.19904,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 50,
        name: 'META',
        latitude: 4.142,
        longitude: -73.62664,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 52,
        name: 'NARIÑO',
        latitude: 1.21361,
        longitude: -77.28111,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },

      {
        id: 54,
        name: 'NORTE DE SANTANDER',
        latitude: 7.89391,
        longitude: -72.50782,
        satelital: {
          id: 1
        },
        responsable: {
          id: 2
        }
      },
      {
        id: 63,
        name: 'QUINDIO',
        latitude: 4.53389,
        longitude: -75.68111,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 66,
        name: 'RISARALDA',
        latitude: 4.81333,
        longitude: -75.69611,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 68,
        name: 'SANTANDER',
        latitude: 7.12539,
        longitude: -73.1198,
        satelital: {
          id: 1
        },
        responsable: {
          id: 2
        }
      },
      {
        id: 70,
        name: 'SUCRE',
        latitude: 9.30472,
        longitude: -75.39778,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 73,
        name: 'TOLIMA',
        latitude: 4.43889,
        longitude: -75.23222,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 76,
        name: 'VALLE DEL CAUCA',
        latitude: 3.43722,
        longitude: -76.5225,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 81,
        name: 'ARAUCA',
        latitude: 7.08471,
        longitude: -70.75908,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 85,
        name: 'CASANARE',
        latitude: 5.33775,
        longitude: -75.23222,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 86,
        name: 'PUTUMAYO',
        latitude: 1.15284,
        longitude: -76.65208,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 88,
        name: 'SAN ANDRES',
        latitude: 12.58317,
        longitude: -81.70636,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 91,
        name: 'AMAZONAS',
        latitude: -4.21528,
        longitude: -69.94056,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 94,
        name: 'GUAINIA',
        latitude: 2.924090,
        longitude: -68.9352600,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 95,
        name: 'GUAVIARE',
        latitude: 2.57286,
        longitude: -72.64591,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 97,
        name: 'VAUPES',
        latitude: 0.97239,
        longitude: -70.40635,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      },
      {
        id: 99,
        name: 'VICHADA',
        latitude: 6.18903,
        longitude: -67.48588,
        satelital: {
          id: 1
        },
        responsable: {
          id: 1
        }
      }

    ])
    await queryRunner.manager.insert(Municipio, [
      {
        id: 81001,
        name: 'ARAUCA',
        active: true,
        isCapital: true,
        divipola: '81001',
        latitude: 7.08471,
        longitude: -70.75908,
        department: {
          id: 81
        },
        tipo: { id: 1 }

      },
      {
        id: 81065,
        name: 'ARAUQUITA',
        active: true,
        isCapital: false,
        divipola: '81065',
        latitude: 7.017,
        longitude: -71.417,
        department: {
          id: 81
        },
        tipo: { id: 1 }

      },
      {
        id: 81220,
        name: 'CRAVO NORTE',
        active: true,
        isCapital: false,
        divipola: '81220',
        latitude: 6.3,
        longitude: -70.2,
        department: {
          id: 81
        },
        tipo: { id: 1 }

      },
      {
        id: 81300,
        name: 'FORTUL',
        active: true,
        isCapital: false,
        divipola: '81300',
        latitude: 6.783,
        longitude: -71.767,
        department: {
          id: 81
        },
        tipo: { id: 1 }

      },
      {
        id: 81591,
        name: 'PUERTO RONDÓN',
        active: true,
        isCapital: false,
        divipola: '81591',
        latitude: 6.267,
        longitude: -71.083,
        department: {
          id: 81
        },
        tipo: { id: 1 }

      },
      {
        id: 81736,
        name: 'SARAVENA',
        active: true,
        isCapital: false,
        divipola: '81736',
        latitude: 6.95574,
        longitude: -71.8809,
        department: {
          id: 81
        },
        tipo: { id: 1 }

      },
      {
        id: 81794,
        name: 'TAME',
        active: true,
        isCapital: false,
        divipola: '81794',
        latitude: 6.45,
        longitude: -71.733,
        department: {
          id: 81
        },
        tipo: { id: 1 }

      },

      {
        id: 15001,
        name: 'TUNJA',
        active: true,
        isCapital: true,
        divipola: '15001',
        latitude: 5.533,
        longitude: -73.367,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15022,
        name: 'ALMEIDA',
        active: true,
        isCapital: false,
        divipola: '15022',
        latitude: 4.967,
        longitude: -73.383,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15047,
        name: 'AQUITANIA',
        active: true,
        isCapital: false,
        divipola: '15047',
        latitude: 5.517,
        longitude: -72.883,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15051,
        name: 'ARCABUCO',
        active: true,
        isCapital: false,
        divipola: '15051',
        latitude: 5.75,
        longitude: -73.433,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15087,
        name: 'BELEN',
        active: true,
        isCapital: false,
        divipola: '15087',
        latitude: 5.98957,
        longitude: -72.9134,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15090,
        name: 'BERBEO',
        active: true,
        isCapital: false,
        divipola: '15090',
        latitude: 5.217,
        longitude: -73.117,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15092,
        name: 'BETEITIVA',
        active: true,
        isCapital: false,
        divipola: '15092',
        latitude: 5.917,
        longitude: -72.817,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15097,
        name: 'BOAVITA',
        active: true,
        isCapital: false,
        divipola: '15097',
        latitude: 6.317,
        longitude: -72.583,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15104,
        name: 'BOYACA',
        active: true,
        isCapital: false,
        divipola: '15104',
        latitude: 5.45444,
        longitude: -73.3617,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15106,
        name: 'BRICEÑO',
        active: true,
        isCapital: false,
        divipola: '15106',
        latitude: 5.68987,
        longitude: -73.9232,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15109,
        name: 'BUENAVISTA',
        active: true,
        isCapital: false,
        divipola: '15109',
        latitude: 5.51655,
        longitude: -73.9665,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15114,
        name: 'BUSBANZA',
        active: true,
        isCapital: false,
        divipola: '15114',
        latitude: 5.83103,
        longitude: 72.8841,
        department: {
          id: 15
        },
        tipo: { id: 1 }

      },
      {
        id: 15131,
        name: 'CALDAS',
        active: true,
        isCapital: false,
        divipola: '15131',
        latitude: 5.55,
        longitude: -73.867,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15135,
        name: 'CAMPOHERMOSO',
        active: true,
        isCapital: false,
        divipola: '15135',
        latitude: 4.883,
        longitude: -73.367,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15162,
        name: 'CERINZA',
        active: true,
        isCapital: false,
        divipola: '15162',
        latitude: 5.95577,
        longitude: -72.9473,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15172,
        name: 'CHINAVITA',
        active: true,
        isCapital: false,
        divipola: '15172',
        latitude: 5.167,
        longitude: -73.367,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15176,
        name: 'CHIQUINQUIRA',
        active: true,
        isCapital: false,
        divipola: '15176',
        latitude: 5.617,
        longitude: -73.8,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15180,
        name: 'CHISCAS',
        active: true,
        isCapital: false,
        divipola: '15180',
        latitude: 6.55411,
        longitude: -72.5016,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15183,
        name: 'CHITA',
        active: true,
        isCapital: false,
        divipola: '15183',
        latitude: 6.183,
        longitude: -72.467,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15185,
        name: 'CHITARAQUE',
        active: true,
        isCapital: false,
        divipola: '15185',
        latitude: 6.00092,
        longitude: -73.4407,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15187,
        name: 'CHIVATA',
        active: true,
        isCapital: false,
        divipola: '15187',
        latitude: 5.5579,
        longitude: -73.2824,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15189,
        name: 'CIENEGA',
        active: true,
        isCapital: false,
        divipola: '15189',
        latitude: 5.4,
        longitude: -73.3,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15204,
        name: 'COMBITA',
        active: true,
        isCapital: false,
        divipola: '15204',
        latitude: 5.63546,
        longitude: -73.3238,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15212,
        name: 'COPER',
        active: true,
        isCapital: false,
        divipola: '15212',
        latitude: 5.467,
        longitude: -74.05,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15215,
        name: 'CORRALES',
        active: true,
        isCapital: false,
        divipola: '15215',
        latitude: 5.82936,
        longitude: -72.8445,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15218,
        name: 'COVARACHIA',
        active: true,
        isCapital: false,
        divipola: '15218',
        latitude: 6.5,
        longitude: -72.733,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15223,
        name: 'CUBARA',
        active: true,
        isCapital: false,
        divipola: '15223',
        latitude: 7.033,
        longitude: -72.067,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15224,
        name: 'CUCAITA',
        active: true,
        isCapital: false,
        divipola: '15224',
        latitude: 5.533,
        longitude: 73.45,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15226,
        name: 'CUITIVA',
        active: true,
        isCapital: false,
        divipola: '15226',
        latitude: 5.58062,
        longitude: -72.9659,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15232,
        name: 'CHIQUIZA',
        active: true,
        isCapital: false,
        divipola: '15232',
        latitude: 5.6,
        longitude: -73.483,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15236,
        name: 'CHIVOR',
        active: true,
        isCapital: false,
        divipola: '15236',
        latitude: 4.883,
        longitude: -73.367,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15238,
        name: 'DUITAMA',
        active: true,
        isCapital: false,
        divipola: '15238',
        latitude: 5.817,
        longitude: -73.033,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15244,
        name: 'EL COCUY',
        active: true,
        isCapital: false,
        divipola: '15244',
        latitude: 6.4,
        longitude: -72.433,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15248,
        name: 'EL ESPINO',
        active: true,
        isCapital: false,
        divipola: '15248',
        latitude: 6.48359,
        longitude: -72.4969,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15272,
        name: 'FIRAVITOBA',
        active: true,
        isCapital: false,
        divipola: '15272',
        latitude: 5.66877,
        longitude: -72.994,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15276,
        name: 'FLORESTA',
        active: true,
        isCapital: false,
        divipola: '15276',
        latitude: 5.867,
        longitude: -72.917,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15293,
        name: 'GACHANTIVI',
        active: true,
        isCapital: false,
        divipola: '15293',
        latitude: 5.767,
        longitude: -73.55,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15296,
        name: 'GAMEZA',
        active: true,
        isCapital: false,
        divipola: '15296',
        latitude: 5.8,
        longitude: -72.8,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15299,
        name: 'GARAGOA',
        active: true,
        isCapital: false,
        divipola: '15299',
        latitude: 5.067,
        longitude: -73.367,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15317,
        name: 'GUACAMAYAS',
        active: true,
        isCapital: false,
        divipola: '15317',
        latitude: 6.45,
        longitude: -72.5,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15322,
        name: 'GUATEQUE',
        active: true,
        isCapital: false,
        divipola: '15322',
        latitude: 5,
        longitude: -73.467,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15325,
        name: 'GUAYATA',
        active: true,
        isCapital: false,
        divipola: '15325',
        latitude: 4.95,
        longitude: -73.483,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15332,
        name: 'GÜICAN DE LA SIERRA',
        active: true,
        isCapital: false,
        divipola: '15332',
        latitude: 6.46201,
        longitude: -72.4114,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15362,
        name: 'IZA',
        active: true,
        isCapital: false,
        divipola: '15362',
        latitude: 5.6,
        longitude: -72.983,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15367,
        name: 'JENESANO',
        active: true,
        isCapital: false,
        divipola: '15367',
        latitude: 5.383,
        longitude: -73.367,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15368,
        name: 'JERICO',
        active: true,
        isCapital: false,
        divipola: '15368',
        latitude: 6.133,
        longitude: -72.567,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15377,
        name: 'LABRANZAGRANDE',
        active: true,
        isCapital: false,
        divipola: '15377',
        latitude: 5.567,
        longitude: -72.567,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15380,
        name: 'LA CAPILLA',
        active: true,
        isCapital: false,
        divipola: '15380',
        latitude: 5.1,
        longitude: -73.45,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15401,
        name: 'LA VICTORIA',
        active: true,
        isCapital: false,
        divipola: '15401',
        latitude: 5.517,
        longitude: -74.233,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15403,
        name: 'LA UVITA',
        active: true,
        isCapital: false,
        divipola: '15403',
        latitude: 6.317,
        longitude: -72.55,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15407,
        name: 'VILLA DE LEYVA',
        active: true,
        isCapital: false,
        divipola: '15407',
        latitude: 5.633,
        longitude: -73.533,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15442,
        name: 'MARIPI',
        active: true,
        isCapital: false,
        divipola: '15442',
        latitude: 5.54893,
        longitude: -74.0058,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15455,
        name: 'MIRAFLORES',
        active: true,
        isCapital: false,
        divipola: '15455',
        latitude: 5.19695,
        longitude: -73.1463,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15464,
        name: 'MONGUA',
        active: true,
        isCapital: false,
        divipola: '15464',
        latitude: 5.75,
        longitude: -72.8,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15466,
        name: 'MONGUI',
        active: true,
        isCapital: false,
        divipola: '15466',
        latitude: 5.75,
        longitude: -72.8,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15469,
        name: 'MONIQUIRA',
        active: true,
        isCapital: false,
        divipola: '15469',
        latitude: 5.867,
        longitude: -73.567,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15476,
        name: 'MOTAVITA',
        active: true,
        isCapital: false,
        divipola: '15476',
        latitude: 5.583,
        longitude: -73.367,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15480,
        name: 'MUZO',
        active: true,
        isCapital: false,
        divipola: '15480',
        latitude: 5.517,
        longitude: -74.117,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15491,
        name: 'NOBSA',
        active: true,
        isCapital: false,
        divipola: '15491',
        latitude: 5.77177,
        longitude: -72.9405,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15494,
        name: 'NUEVO COLON',
        active: true,
        isCapital: false,
        divipola: '15494',
        latitude: 5.35,
        longitude: -73.45,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15500,
        name: 'OICATA',
        active: true,
        isCapital: false,
        divipola: '15500',
        latitude: 5.59583,
        longitude: -73.3081,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15507,
        name: 'OTANCHE',
        active: true,
        isCapital: false,
        divipola: '15507',
        latitude: 5.75,
        longitude: -74.25,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15511,
        name: 'PACHAVITA',
        active: true,
        isCapital: false,
        divipola: '15511',
        latitude: 5.133,
        longitude: -73.4,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15514,
        name: 'PAEZ',
        active: true,
        isCapital: false,
        divipola: '15514',
        latitude: 5.10086,
        longitude: -73.051,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15516,
        name: 'PAIPA',
        active: true,
        isCapital: false,
        divipola: '15516',
        latitude: 5.77894,
        longitude: -73.1185,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15518,
        name: 'PAJARITO',
        active: true,
        isCapital: false,
        divipola: '15518',
        latitude: 5.417,
        longitude: -72.667,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15522,
        name: 'PANQUEBA',
        active: true,
        isCapital: false,
        divipola: '15522',
        latitude: 6.433,
        longitude: -72.467,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15531,
        name: 'PAUNA',
        active: true,
        isCapital: false,
        divipola: '15531',
        latitude: 5.667,
        longitude: -73.983,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15533,
        name: 'PAYA',
        active: true,
        isCapital: false,
        divipola: '15533',
        latitude: 5.617,
        longitude: -72.417,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15537,
        name: 'PAZ DE RIO',
        active: true,
        isCapital: false,
        divipola: '15537',
        latitude: 5.983,
        longitude: -72.75,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15542,
        name: 'PESCA',
        active: true,
        isCapital: false,
        divipola: '15542',
        latitude: 5.55619,
        longitude: -73.0512,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15550,
        name: 'PISBA',
        active: true,
        isCapital: false,
        divipola: '15550',
        latitude: 5.717,
        longitude: -72.483,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15572,
        name: 'PUERTO BOYACA',
        active: true,
        isCapital: false,
        divipola: '15572',
        latitude: 5.967,
        longitude: -74.583,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15580,
        name: 'QUIPAMA',
        active: true,
        isCapital: false,
        divipola: '15580',
        latitude: 5.517,
        longitude: -74.183,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15599,
        name: 'RAMIRIQUI',
        active: true,
        isCapital: false,
        divipola: '15599',
        latitude: 5.417,
        longitude: -73.333,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15600,
        name: 'RAQUIRA',
        active: true,
        isCapital: false,
        divipola: '15600',
        latitude: 5.533,
        longitude: -73.633,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15621,
        name: 'RONDON',
        active: true,
        isCapital: false,
        divipola: '15621',
        latitude: 5.35626,
        longitude: -73.2092,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15632,
        name: 'SABOYA',
        active: true,
        isCapital: false,
        divipola: '15632',
        latitude: 5.7,
        longitude: -73.767,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15638,
        name: 'SACHICA',
        active: true,
        isCapital: false,
        divipola: '15638',
        latitude: 5.583,
        longitude: -73.55,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15646,
        name: 'SAMACA',
        active: true,
        isCapital: false,
        divipola: '15646',
        latitude: 5.5,
        longitude: -73.483,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15660,
        name: 'SAN EDUARDO',
        active: true,
        isCapital: false,
        divipola: '15660',
        latitude: 5.22336,
        longitude: -73.078,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15664,
        name: 'SAN JOSE DE PARE',
        active: true,
        isCapital: false,
        divipola: '15664',
        latitude: 6.01748,
        longitude: -73.5476,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15667,
        name: 'SAN LUIS DE GACENO',
        active: true,
        isCapital: false,
        divipola: '15667',
        latitude: 4.82016,
        longitude: -73.1684,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15673,
        name: 'SAN MATEO',
        active: true,
        isCapital: false,
        divipola: '15673',
        latitude: 6.4,
        longitude: -72.567,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },

      {
        id: 15676,
        name: 'SAN MIGUEL DE SEMA',
        active: true,
        isCapital: false,
        divipola: '15676',
        latitude: 5.517,
        longitude: -73.817,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15681,
        name: 'SAN PABLO DE BORBUR',
        active: true,
        isCapital: false,
        divipola: '15681',
        latitude: 5.75,
        longitude: -74.083,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15686,
        name: 'SANTANA',
        active: true,
        isCapital: false,
        divipola: '15686',
        latitude: 6.05,
        longitude: -73.483,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15690,
        name: 'SANTA MARIA',
        active: true,
        isCapital: false,
        divipola: '15690',
        latitude: 4.883,
        longitude: -73.367,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15693,
        name: 'SANTA ROSA DE VITERBO',
        active: true,
        isCapital: false,
        divipola: '15693',
        latitude: 5.883,
        longitude: -72.983,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      }, {
        id: 15696,
        name: 'SANTA SOFIA',
        active: true,
        isCapital: false,
        divipola: '15696',
        latitude: 5.717,
        longitude: -73.6,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15720,
        name: 'SATIVANORTE',
        active: true,
        isCapital: false,
        divipola: '15720',
        latitude: 6.133,
        longitude: -72.717,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15723,
        name: 'SATIVASUR',
        active: true,
        isCapital: false,
        divipola: '15723',
        latitude: 6.083,
        longitude: -72.733,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15740,
        name: 'SIACHOQUE',
        active: true,
        isCapital: false,
        divipola: '15740',
        latitude: 5.5,
        longitude: -73.233,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      }, {
        id: 15753,
        name: 'SOATA',
        active: true,
        isCapital: false,
        divipola: '15753',
        latitude: 6.33372,
        longitude: -72.683,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15755,
        name: 'SOCOTA',
        active: true,
        isCapital: false,
        divipola: '15755',
        latitude: 6.05,
        longitude: -72.633,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15757,
        name: 'SOCHA',
        active: true,
        isCapital: false,
        divipola: '15757',
        latitude: 5.99853,
        longitude: -72.6908,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15759,
        name: 'SOGAMOSO',
        active: true,
        isCapital: false,
        divipola: '15759',
        latitude: 5.717,
        longitude: -72.917,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15761,
        name: 'SOMONDOCO',
        active: true,
        isCapital: false,
        divipola: '15761',
        latitude: 4.98458,
        longitude: -73.4318,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15762,
        name: 'SORA',
        active: true,
        isCapital: false,
        divipola: '15762',
        latitude: 5.56695,
        longitude: -73.4495,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      }, {
        id: 15763,
        name: 'SOTAQUIRA',
        active: true,
        isCapital: false,
        divipola: '15763',
        latitude: 5.767,
        longitude: -73.25,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15764,
        name: 'SORACA',
        active: true,
        isCapital: false,
        divipola: '15764',
        latitude: 5.5,
        longitude: -73.317,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15774,
        name: 'SUSACAN',
        active: true,
        isCapital: false,
        divipola: '15774',
        latitude: 6.233,
        longitude: -72.683,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15776,
        name: 'SUTAMARCHAN',
        active: true,
        isCapital: false,
        divipola: '15776',
        latitude: 5.65092,
        longitude: -73.6201,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      }, {
        id: 15778,
        name: 'SUTATENZA',
        active: true,
        isCapital: false,
        divipola: '15778',
        latitude: 5.083,
        longitude: -73.417,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15790,
        name: 'TASCO',
        active: true,
        isCapital: false,
        divipola: '15790',
        latitude: 5.90976,
        longitude: -72.781,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15798,
        name: 'TENZA',
        active: true,
        isCapital: false,
        divipola: '15798',
        latitude: 5.083,
        longitude: -73.417,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15804,
        name: 'TIBANA',
        active: true,
        isCapital: false,
        divipola: '15804',
        latitude: 5.31558,
        longitude: -73.3945,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15806,
        name: 'TIBASOSA',
        active: true,
        isCapital: false,
        divipola: '15806',
        latitude: 5.74615,
        longitude: -73.0011,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15808,
        name: 'TINJACA',
        active: true,
        isCapital: false,
        divipola: '15808',
        latitude: 5.583,
        longitude: -73.65,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      }, {
        id: 15810,
        name: 'TIPACOQUE',
        active: true,
        isCapital: false,
        divipola: '15810',
        latitude: 6.417,
        longitude: -72.683,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15814,
        name: 'TOCA',
        active: true,
        isCapital: false,
        divipola: '15814',
        latitude: 5.567,
        longitude: -73.2,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15816,
        name: 'TOGÜI',
        active: true,
        isCapital: false,
        divipola: '15816',
        latitude: 5.933,
        longitude: -73.5,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15820,
        name: 'TOPAGA',
        active: true,
        isCapital: false,
        divipola: '15820',
        latitude: 5.767,
        longitude: -72.833,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      }, {
        id: 15822,
        name: 'TOTA',
        active: true,
        isCapital: false,
        divipola: '15822',
        latitude: 5.567,
        longitude: -72.983,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15832,
        name: 'TUNUNGUA',
        active: true,
        isCapital: false,
        divipola: '15832',
        latitude: 5.733,
        longitude: -73.933,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15835,
        name: 'TURMEQUE',
        active: true,
        isCapital: false,
        divipola: '15835',
        latitude: 5.32233,
        longitude: -73.4891,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15837,
        name: 'TUTA',
        active: true,
        isCapital: false,
        divipola: '15837',
        latitude: 5.69012,
        longitude: -73.2263,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15839,
        name: 'TUTAZA',
        active: true,
        isCapital: false,
        divipola: '15839',
        latitude: 6.017,
        longitude: -72.85,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15842,
        name: 'UMBITA',
        active: true,
        isCapital: false,
        divipola: '15842',
        latitude: 5.217,
        longitude: -73.467,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      }, {
        id: 15861,
        name: 'VENTAQUEMADA',
        active: true,
        isCapital: false,
        divipola: '15861',
        latitude: 5.417,
        longitude: -73.5,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15879,
        name: 'VIRACACHA',
        active: true,
        isCapital: false,
        divipola: '15879',
        latitude: 5.433,
        longitude: -73.3,
        department: {
          id: 15
        },
        tipo: { id: 1 }
      },
      {
        id: 15897,
        name: 'ZETAQUIRA',
        active: true,
        isCapital: false,
        divipola: '15897',
        latitude: 5.283,
        longitude: -73.167,
        department: {
          id: 15
        },
        tipo: { id: 1 }
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
        name: 'SGP'
      },

      {
        id: 5,
        name: 'PROPIOS'
      },

      {
        id: 6,
        name: 'OTRO'
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
