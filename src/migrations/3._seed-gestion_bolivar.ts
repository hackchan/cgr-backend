import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933054 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 149,
        name: 'ALCALDIA DE CARTAGENA DE INDIAS',
        nit: '890480184',
        doctec: true,
        cgn: '210113001',
        categoria: { id: 7 },
        subsector: { id: 23 },
        municipio: { id: 149 }
      },

      {
        id: 150,
        name: 'ALCALDIA DE ACHI',
        nit: '800037371',
        doctec: true,
        cgn: '210613006',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 150 }
      },

      {
        id: 151,
        name: 'ALCALDIA DE ALTOS DEL ROSARIO',
        nit: '800254879',
        doctec: true,
        cgn: '213013030',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 151 }
      },

      {
        id: 152,
        name: 'ALCALDIA DE ARENAL',
        nit: '806001937',
        doctec: true,
        cgn: '214213042',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 152 }
      },

      {
        id: 153,
        name: 'ALCALDIA DE ARJONA',
        nit: '890480254',
        doctec: true,
        cgn: '215213052',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 153 }
      },

      {
        id: 154,
        name: 'ALCALDIA DE ARROYOHONDO',
        nit: '806004900',
        doctec: true,
        cgn: '216213062',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 154 }
      },

      {
        id: 155,
        name: 'ALCALDIA DE BARRANCO DE LOBA',
        nit: '800015991',
        doctec: true,
        cgn: '217413074',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 155 }
      },

      {
        id: 156,
        name: 'ALCALDIA DE CALAMAR',
        nit: '890481362',
        doctec: true,
        cgn: '214013140',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 156 }
      },

      {
        id: 157,
        name: 'ALCALDIA DE CANTAGALLO',
        nit: '800253526',
        doctec: true,
        cgn: '216013160',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 157 }
      },

      {
        id: 158,
        name: 'ALCALDIA DE CICUCO',
        nit: '800254481',
        doctec: true,
        cgn: '218813188',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 158 }
      },

      {
        id: 159,
        name: 'ALCALDIA DE CORDOBA',
        nit: '800038613',
        doctec: true,
        cgn: '211213212',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 159 }
      },

      {
        id: 160,
        name: 'ALCALDIA DE CLEMENCIA',
        nit: '806000701',
        doctec: true,
        cgn: '212213222',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 160 }
      },

      {
        id: 161,
        name: 'ALCALDIA DE EL CARMEN DE BOLIVAR',
        nit: '890480022',
        doctec: true,
        cgn: '214413244',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 161 }
      },

      {
        id: 162,
        name: 'ALCALDIA DE EL GUAMO',
        nit: '890481295',
        doctec: true,
        cgn: '214813248',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 162 }
      },

      {
        id: 163,
        name: 'ALCALDIA DE EL PENON',
        nit: '806001439',
        doctec: true,
        cgn: '216813268',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 163 }
      },

      {
        id: 164,
        name: 'ALCALDIA DE HATILLO DE LOBA',
        nit: '800255214',
        doctec: true,
        cgn: '210013300',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 164 }
      },

      {
        id: 165,
        name: 'ALCALDIA DE MAGANGUE',
        nit: '800028432',
        doctec: true,
        cgn: '213013430',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 165 }
      },

      {
        id: 166,
        name: 'ALCALDIA DE MAHATES',
        nit: '800095514',
        doctec: true,
        cgn: '213313433',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 166 }
      },

      {
        id: 167,
        name: 'ALCALDIA DE MARGARITA',
        nit: '800095511',
        doctec: true,
        cgn: '214013440',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 167 }
      },

      {
        id: 168,
        name: 'ALCALDIA DE MARIA LA BAJA',
        nit: '800095466',
        doctec: true,
        cgn: '214213442',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 168 }
      },

      {
        id: 169,
        name: 'ALCALDIA DE MONTECRISTO',
        nit: '800254722',
        doctec: true,
        cgn: '215813458',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 169 }
      },

      {
        id: 170,
        name: 'ALCALDIA DE SANTA CRUZ DE MOMPOX',
        nit: '890480643',
        doctec: true,
        cgn: '216813468',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 170 }
      },

      {
        id: 171,
        name: 'ALCALDIA DE MORALES',
        nit: '890480431',
        doctec: true,
        cgn: '217313473',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 171 }
      },

      {
        id: 172,
        name: 'ALCALDIA DE NOROSI',
        nit: '900192833',
        doctec: true,
        cgn: '923271489',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 172 }
      },

      {
        id: 173,
        name: 'ALCALDIA DE PINILLOS',
        nit: '800042974',
        doctec: true,
        cgn: '214913549',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 173 }
      },

      {
        id: 174,
        name: 'ALCALDIA DE REGIDOR',
        nit: '806001274',
        doctec: true,
        cgn: '218013580',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 174 }
      },

      {
        id: 175,
        name: 'ALCALDIA DE RIO VIEJO',
        nit: '890481447',
        doctec: true,
        cgn: '210013600',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 175 }
      },

      {
        id: 176,
        name: 'ALCALDIA DE SAN CRISTOBAL',
        nit: '806001278',
        doctec: true,
        cgn: '212013620',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 176 }
      },

      {
        id: 177,
        name: 'ALCALDIA DE SAN ESTANISLAO',
        nit: '890481310',
        doctec: true,
        cgn: '214713647',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 177 }
      },

      {
        id: 178,
        name: 'ALCALDIA DE SAN FERNANDO',
        nit: '800037166',
        doctec: true,
        cgn: '215013650',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 178 }
      },

      {
        id: 179,
        name: 'ALCALDIA DE SAN JACINTO',
        nit: '800026685',
        doctec: true,
        cgn: '215413654',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 179 }
      },

      {
        id: 180,
        name: 'ALCALDIA DE SAN JACINTO DEL CAUCA',
        nit: '806003884',
        doctec: true,
        cgn: '215513655',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 180 }
      },

      {
        id: 181,
        name: 'ALCALDIA DE SAN JUAN NEPOMUCENO',
        nit: '800037175',
        doctec: true,
        cgn: '215713657',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 181 }
      },

      {
        id: 182,
        name: 'ALCALDIA DE SAN MARTIN DE LOBA',
        nit: '800043486',
        doctec: true,
        cgn: '216713667',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 182 }
      },

      {
        id: 183,
        name: 'ALCALDIA DE SAN PABLO',
        nit: '890480203',
        doctec: true,
        cgn: '217013670',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 183 }
      },

      {
        id: 184,
        name: 'ALCALDIA DE SANTA CATALINA',
        nit: '890480069',
        doctec: true,
        cgn: '217313673',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 184 }
      },

      {
        id: 185,
        name: 'ALCALDIA DE SANTA ROSA',
        nit: '890481343',
        doctec: true,
        cgn: '218313683',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 185 }
      },

      {
        id: 186,
        name: 'ALCALDIA DE SANTA ROSA DEL SUR',
        nit: '800049017',
        doctec: true,
        cgn: '218813688',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 186 }
      },

      {
        id: 187,
        name: 'ALCALDIA DE SIMITI',
        nit: '890480006',
        doctec: true,
        cgn: '214413744',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 187 }
      },

      {
        id: 188,
        name: 'ALCALDIA DE SOPLAVIENTO',
        nit: '800035677',
        doctec: true,
        cgn: '216013760',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 188 }
      },

      {
        id: 189,
        name: 'ALCALDIA DE TALAIGUA NUEVO',
        nit: '800095530',
        doctec: true,
        cgn: '',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 189 }
      },

      {
        id: 190,
        name: 'ALCALDIA DE TIQUISIO',
        nit: '800255213',
        doctec: true,
        cgn: '211013810',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 190 }
      },

      {
        id: 191,
        name: 'ALCALDIA DE TURBACO',
        nit: '890481149',
        doctec: true,
        cgn: '213613836',
        categoria: { id: 4 },
        subsector: { id: 23 },
        municipio: { id: 191 }
      },

      {
        id: 192,
        name: 'ALCALDIA DE TURBANA',
        nit: '890481324',
        doctec: true,
        cgn: '213813838',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 192 }
      },

      {
        id: 193,
        name: 'ALCALDIA DE VILLANUEVA',
        nit: '890481192',
        doctec: true,
        cgn: '217313873',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 193 }
      },

      {
        id: 194,
        name: 'ALCALDIA DE ZAMBRANO',
        nit: '890481177',
        doctec: true,
        cgn: '219413894',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 194 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
