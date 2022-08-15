import { Departamento } from '../entity/Departments/Departamento'
import { Satelital } from '../entity/Departments/Satelital'
import { TypeMunicipio } from '../entity/Departments/TypeMunicipio'
import { Municipio } from '../entity/Departments/Municipio'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933045 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
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
        }
      },
      {
        id: 8,
        name: 'ATLANTICO',
        latitude: 10.96854,
        longitude: -74.78132,
        satelital: {
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
        }
      },
      {
        id: 15,
        name: 'BOYACA',
        latitude: 5.53528,
        longitude: -73.36778,
        satelital: {
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
        }
      },
      {
        id: 18,
        name: 'CAQUETA',
        latitude: 1.61438,
        longitude: -75.60623,
        satelital: {
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
        }
      },
      {
        id: 20,
        name: 'CESAR',
        latitude: 10.46314,
        longitude: -73.25322,
        satelital: {
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
        }
      },

      {
        id: 25,
        name: 'CUNDINAMARCA',
        latitude: 4.60971,
        longitude: -74.08175,
        satelital: {
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
        }
      },
      {
        id: 41,
        name: 'HUILA',
        latitude: 2.9273,
        longitude: -75.28189,
        satelital: {
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
        }
      },
      {
        id: 47,
        name: 'MAGDALENA',
        latitude: 11.24079,
        longitude: -74.19904,
        satelital: {
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
        }
      },
      {
        id: 52,
        name: 'NARIÑO',
        latitude: 1.21361,
        longitude: -77.28111,
        satelital: {
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
        }
      },
      {
        id: 63,
        name: 'QUINDIO',
        latitude: 4.53389,
        longitude: -75.68111,
        satelital: {
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
        }
      },
      {
        id: 68,
        name: 'SANTANDER',
        latitude: 7.12539,
        longitude: -73.1198,
        satelital: {
          id: 1
        }
      },
      {
        id: 70,
        name: 'SUCRE',
        latitude: 9.30472,
        longitude: -75.39778,
        satelital: {
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
        }
      },
      {
        id: 76,
        name: 'VALLE DEL CAUCA',
        latitude: 3.43722,
        longitude: -76.5225,
        satelital: {
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
        }
      },
      {
        id: 85,
        name: 'CASANARE',
        latitude: 5.33775,
        longitude: -75.23222,
        satelital: {
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
        }
      },
      {
        id: 88,
        name: 'SAN ANDRES',
        latitude: 12.58317,
        longitude: -81.70636,
        satelital: {
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
        }
      },
      {
        id: 94,
        name: 'GUAINIA',
        latitude: 2.924090,
        longitude: -68.9352600,
        satelital: {
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
        }
      },
      {
        id: 97,
        name: 'VAUPES',
        latitude: 0.97239,
        longitude: -70.40635,
        satelital: {
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
        name: 'BELÉN',
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
        name: 'BETÉITIVA',
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
        name: 'BOYACÁ',
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
        name: 'BUSBANZÁ',
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
        name: 'CHIQUINQUIRÁ',
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
        name: 'CHIVATÁ',
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
        name: 'CIÉNEGA',
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
        name: 'CÓMBITA',
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
        name: 'COVARACHÍA',
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
        name: 'CUBARÁ',
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
        name: 'CUÍTIVA',
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
        name: 'CHÍQUIZA',
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
        name: 'GACHANTIVÁ',
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
        name: 'GÁMEZA',
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
        name: 'GUAYATÁ',
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
        name: 'GÜICÁN DE LA SIERRA',
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
        name: 'JERICÓ',
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
        name: 'MARIPÍ',
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
        name: 'MONGUÍ',
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
        name: 'MONIQUIRÁ',
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
        name: 'NUEVO COLÓN',
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
        name: 'OICATÁ',
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
        name: 'PÁEZ',
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
        name: 'PAZ DE RÍO',
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
        name: 'PUERTO BOYACÁ',
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
        name: 'QUÍPAMA',
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
        name: 'RAMIRIQUÍ',
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
        name: 'RÁQUIRA',
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
        name: 'RONDÓN',
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
        name: 'SABOYÁ',
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
        name: 'SÁCHICA',
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
        name: 'SAMACÁ',
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
        name: 'SAN JOSÉ DE PARE',
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
        name: 'SANTA MARÍA',
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
        name: 'SANTA SOFÍA',
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
        name: 'SOATÁ',
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
        name: 'SOCOTÁ',
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
        name: 'SOTAQUIRÁ',
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
        name: 'SORACÁ',
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
        name: 'SUSACÓN',
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
        name: 'SUTAMARCHÁN',
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
        name: 'TIBANÁ',
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
        name: 'TINJACÁ',
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
        name: 'TOGÜÍ',
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
        name: 'TÓPAGA',
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
        name: 'TUNUNGUÁ',
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
        name: 'TURMEQUÉ',
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
        name: 'TUTAZÁ',
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
        name: 'ÚMBITA',
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
        name: 'VIRACACHÁ',
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
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
