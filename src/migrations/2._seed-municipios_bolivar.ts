import { Municipio } from '../entity/Departments/Municipio'

import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933014 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Municipio, [
      {
        id: 149,
        name: 'CARTAGENA DE INDIAS',
        active: true,
        isCapital: true,
        divipola: '13001',
        latitude: 10.46343362,
        longitude: -75.45889915,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 150,
        name: 'ACHI',
        active: true,
        isCapital: false,
        divipola: '13006',
        latitude: 8.622943262,
        longitude: -74.47805945,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 151,
        name: 'ALTOS DEL ROSARIO',
        active: true,
        isCapital: false,
        divipola: '13030',
        latitude: 8.757468863,
        longitude: -74.19515811,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 152,
        name: 'ARENAL',
        active: true,
        isCapital: false,
        divipola: '13042',
        latitude: 8.362996158,
        longitude: -74.10301905,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 153,
        name: 'ARJONA',
        active: true,
        isCapital: false,
        divipola: '13052',
        latitude: 10.16422123,
        longitude: -75.37121788,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 154,
        name: 'ARROYOHONDO',
        active: true,
        isCapital: false,
        divipola: '13062',
        latitude: 10.24171805,
        longitude: -75.02690422,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 155,
        name: 'BARRANCO DE LOBA',
        active: true,
        isCapital: false,
        divipola: '13074',
        latitude: 8.837077654,
        longitude: -74.27966531,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 156,
        name: 'CALAMAR',
        active: true,
        isCapital: false,
        divipola: '13140',
        latitude: 10.15517098,
        longitude: -74.99995949,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 157,
        name: 'CANTAGALLO',
        active: true,
        isCapital: false,
        divipola: '13160',
        latitude: 7.239229146,
        longitude: -74.10014043,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 158,
        name: 'CICUCO',
        active: true,
        isCapital: false,
        divipola: '13188',
        latitude: 9.235268598,
        longitude: -74.68840962,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 159,
        name: 'CORDOBA',
        active: true,
        isCapital: false,
        divipola: '13212',
        latitude: 9.540047515,
        longitude: -74.89445635,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 160,
        name: 'CLEMENCIA',
        active: true,
        isCapital: false,
        divipola: '13222',
        latitude: 10.55663696,
        longitude: -75.31446653,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 161,
        name: 'EL CARMEN DE BOLIVAR',
        active: true,
        isCapital: false,
        divipola: '13244',
        latitude: 9.699819876,
        longitude: -75.15793573,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 162,
        name: 'EL GUAMO',
        active: true,
        isCapital: false,
        divipola: '13248',
        latitude: 10.03483672,
        longitude: -74.92811072,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 163,
        name: 'EL PENON',
        active: true,
        isCapital: false,
        divipola: '13268',
        latitude: 8.864818786,
        longitude: -73.91230147,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 164,
        name: 'HATILLO DE LOBA',
        active: true,
        isCapital: false,
        divipola: '13300',
        latitude: 8.981717133,
        longitude: -74.09071902,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 165,
        name: 'MAGANGUE',
        active: true,
        isCapital: false,
        divipola: '13430',
        latitude: 9.053135895,
        longitude: -74.70539318,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 166,
        name: 'MAHATES',
        active: true,
        isCapital: false,
        divipola: '13433',
        latitude: 10.17821391,
        longitude: -75.17978161,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 167,
        name: 'MARGARITA',
        active: true,
        isCapital: false,
        divipola: '13440',
        latitude: 9.054601889,
        longitude: -74.22584706,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 168,
        name: 'MARIA LA BAJA',
        active: true,
        isCapital: false,
        divipola: '13442',
        latitude: 9.976017168,
        longitude: -75.34380265,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 169,
        name: 'MONTECRISTO',
        active: true,
        isCapital: false,
        divipola: '13458',
        latitude: 8.01710024,
        longitude: -74.46342911,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 170,
        name: 'SANTA CRUZ DE MOMPOX',
        active: true,
        isCapital: false,
        divipola: '13468',
        latitude: 9.142512064,
        longitude: -74.54519906,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 171,
        name: 'MORALES',
        active: true,
        isCapital: false,
        divipola: '13473',
        latitude: 8.253700061,
        longitude: -73.9713459,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 172,
        name: 'NOROSI',
        active: true,
        isCapital: false,
        divipola: '13490',
        latitude: 8.50613476,
        longitude: -74.11588912,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 173,
        name: 'PINILLOS',
        active: true,
        isCapital: false,
        divipola: '13549',
        latitude: 8.886315511,
        longitude: -74.40888476,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 174,
        name: 'REGIDOR',
        active: true,
        isCapital: false,
        divipola: '13580',
        latitude: 8.672628558,
        longitude: -73.91450679,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 175,
        name: 'RIO VIEJO',
        active: true,
        isCapital: false,
        divipola: '13600',
        latitude: 8.559982465,
        longitude: -73.90298668,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 176,
        name: 'SAN CRISTOBAL',
        active: true,
        isCapital: false,
        divipola: '13620',
        latitude: 10.36972087,
        longitude: -75.07333835,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 177,
        name: 'SAN ESTANISLAO',
        active: true,
        isCapital: false,
        divipola: '13647',
        latitude: 10.36468192,
        longitude: -75.20523487,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 178,
        name: 'SAN FERNANDO',
        active: true,
        isCapital: false,
        divipola: '13650',
        latitude: 9.081483143,
        longitude: -74.37186647,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 179,
        name: 'SAN JACINTO',
        active: true,
        isCapital: false,
        divipola: '13654',
        latitude: 9.835362011,
        longitude: -75.10609201,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 180,
        name: 'SAN JACINTO DEL CAUCA',
        active: true,
        isCapital: false,
        divipola: '13655',
        latitude: 8.212463202,
        longitude: -74.75082,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 181,
        name: 'SAN JUAN NEPOMUCENO',
        active: true,
        isCapital: false,
        divipola: '13657',
        latitude: 9.967957823,
        longitude: -75.06571959,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 182,
        name: 'SAN MARTIN DE LOBA',
        active: true,
        isCapital: false,
        divipola: '13667',
        latitude: 8.816088444,
        longitude: -74.00599967,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 183,
        name: 'SAN PABLO',
        active: true,
        isCapital: false,
        divipola: '13670',
        latitude: 7.507922612,
        longitude: -74.10356977,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 184,
        name: 'SANTA CATALINA',
        active: true,
        isCapital: false,
        divipola: '13673',
        latitude: 10.64981278,
        longitude: -75.26548463,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 185,
        name: 'SANTA ROSA',
        active: true,
        isCapital: false,
        divipola: '13683',
        latitude: 10.46920726,
        longitude: -75.36116053,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 186,
        name: 'SANTA ROSA DEL SUR',
        active: true,
        isCapital: false,
        divipola: '13688',
        latitude: 7.772519173,
        longitude: -74.26272843,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 187,
        name: 'SIMITI',
        active: true,
        isCapital: false,
        divipola: '13744',
        latitude: 7.851315534,
        longitude: -73.98371609,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 188,
        name: 'SOPLAVIENTO',
        active: true,
        isCapital: false,
        divipola: '13760',
        latitude: 10.33209031,
        longitude: -75.11699226,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 189,
        name: 'TALAIGUA NUEVO',
        active: true,
        isCapital: false,
        divipola: '13780',
        latitude: 9.269516705,
        longitude: -74.58695233,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 190,
        name: 'TIQUISIO',
        active: true,
        isCapital: false,
        divipola: '13810',
        latitude: 8.492345176,
        longitude: -74.29676139,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 191,
        name: 'TURBACO',
        active: true,
        isCapital: false,
        divipola: '13836',
        latitude: 10.35310756,
        longitude: -75.37971541,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 192,
        name: 'TURBANA',
        active: true,
        isCapital: false,
        divipola: '13838',
        latitude: 10.25276929,
        longitude: -75.43270299,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 193,
        name: 'VILLANUEVA',
        active: true,
        isCapital: false,
        divipola: '13873',
        latitude: 10.4449132,
        longitude: -75.26736275,
        department: { id: 13 },
        tipo: { id: 1 }
      },

      {
        id: 194,
        name: 'ZAMBRANO',
        active: true,
        isCapital: false,
        divipola: '13894',
        latitude: 9.745147021,
        longitude: -74.88067037,
        department: { id: 13 },
        tipo: { id: 1 }
      }

    ]

    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
