import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933034 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 933,
        name: 'SINCELEJO',
        active: true,
        isCapital: true,
        divipola: '70001',
        latitude: 9.316673928,
        longitude: -75.43174967,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 934,
        name: 'BUENAVISTA',
        active: true,
        isCapital: false,
        divipola: '70110',
        latitude: 9.314972282,
        longitude: -74.98014057,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 935,
        name: 'CAIMITO',
        active: true,
        isCapital: false,
        divipola: '70124',
        latitude: 8.792311599,
        longitude: -75.13191063,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 936,
        name: 'COLOSO',
        active: true,
        isCapital: false,
        divipola: '70204',
        latitude: 9.494043427,
        longitude: -75.34528693,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 937,
        name: 'COROZAL',
        active: true,
        isCapital: false,
        divipola: '70215',
        latitude: 9.160624283,
        longitude: -75.23858178,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 938,
        name: 'COVENAS',
        active: true,
        isCapital: false,
        divipola: '70221',
        latitude: 9.394449802,
        longitude: -75.6574915,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 939,
        name: 'CHALAN',
        active: true,
        isCapital: false,
        divipola: '70230',
        latitude: 9.569584598,
        longitude: -75.32420908,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 940,
        name: 'EL ROBLE',
        active: true,
        isCapital: false,
        divipola: '70233',
        latitude: 9.036231591,
        longitude: -75.14575038,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 941,
        name: 'GALERAS',
        active: true,
        isCapital: false,
        divipola: '70235',
        latitude: 9.135169096,
        longitude: -74.98134706,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 942,
        name: 'GUARANDA',
        active: true,
        isCapital: false,
        divipola: '70265',
        latitude: 8.337828523,
        longitude: -74.68734926,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 943,
        name: 'LA UNION',
        active: true,
        isCapital: false,
        divipola: '70400',
        latitude: 8.811997799,
        longitude: -75.28322212,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 944,
        name: 'LOS PALMITOS',
        active: true,
        isCapital: false,
        divipola: '70418',
        latitude: 9.422380117,
        longitude: -75.21302191,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 945,
        name: 'MAJAGUAL',
        active: true,
        isCapital: false,
        divipola: '70429',
        latitude: 8.546148134,
        longitude: -74.71037883,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 946,
        name: 'MORROA',
        active: true,
        isCapital: false,
        divipola: '70473',
        latitude: 9.392496685,
        longitude: -75.32718744,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 947,
        name: 'OVEJAS',
        active: true,
        isCapital: false,
        divipola: '70508',
        latitude: 9.549655271,
        longitude: -75.18855916,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 948,
        name: 'PALMITO',
        active: true,
        isCapital: false,
        divipola: '70523',
        latitude: 9.334940293,
        longitude: -75.56199027,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 949,
        name: 'SAMPUES',
        active: true,
        isCapital: false,
        divipola: '70670',
        latitude: 9.165188649,
        longitude: -75.36027422,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 950,
        name: 'SAN BENITO ABAD',
        active: true,
        isCapital: false,
        divipola: '70678',
        latitude: 8.835634919,
        longitude: -74.96469398,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 951,
        name: 'SAN JUAN DE BETULIA',
        active: true,
        isCapital: false,
        divipola: '70702',
        latitude: 9.292019071,
        longitude: -75.21363579,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 952,
        name: 'SAN MARCOS',
        active: true,
        isCapital: false,
        divipola: '70708',
        latitude: 8.589220102,
        longitude: -75.17249955,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 953,
        name: 'SAN ONOFRE',
        active: true,
        isCapital: false,
        divipola: '70713',
        latitude: 9.814599536,
        longitude: -75.50522919,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 954,
        name: 'SAN PEDRO',
        active: true,
        isCapital: false,
        divipola: '70717',
        latitude: 9.396835638,
        longitude: -75.03741815,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 955,
        name: 'SAN LUIS DE SINCE',
        active: true,
        isCapital: false,
        divipola: '70742',
        latitude: 9.256299047,
        longitude: -75.09397089,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 956,
        name: 'SUCRE',
        active: true,
        isCapital: false,
        divipola: '70771',
        latitude: 8.814333477,
        longitude: -74.74753131,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 957,
        name: 'SANTIAGO DE TOLU',
        active: true,
        isCapital: false,
        divipola: '70820',
        latitude: 9.533810567,
        longitude: -75.53543469,
        department: { id: 70 },
        tipo: { id: 1 }
      },

      {
        id: 958,
        name: 'SAN JOSE DE TOLUVIEJO',
        active: true,
        isCapital: false,
        divipola: '70823',
        latitude: 9.490297716,
        longitude: -75.44451115,
        department: { id: 70 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
