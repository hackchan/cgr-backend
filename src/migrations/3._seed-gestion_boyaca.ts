import { EntidadControl } from '../entity/Entidad/EntidadControl'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedDeparts1658932933055 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntidadControl, [
      {
        id: 195,
        name: 'ALCALDIA DE TUNJA',
        nit: '819800846',
        doctec: true,
        cgn: '210115001',
        categoria: { id: 1 },
        subsector: { id: 23 },
        municipio: { id: 195 }
      },

      {
        id: 196,
        name: 'ALCALDIA DE ALMEIDA',
        nit: '891801281',
        doctec: true,
        cgn: '212215022',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 196 }
      },

      {
        id: 197,
        name: 'ALCALDIA DE AQUITANIA',
        nit: '800077545',
        doctec: true,
        cgn: '214715047',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 197 }
      },

      {
        id: 198,
        name: 'ALCALDIA DE ARCABUCO',
        nit: '800063791',
        doctec: true,
        cgn: '215115051',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 198 }
      },

      {
        id: 199,
        name: 'ALCALDIA DE BELEN',
        nit: '800099199',
        doctec: true,
        cgn: '218715087',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 199 }
      },

      {
        id: 200,
        name: 'ALCALDIA DE BERBEO',
        nit: '800099390',
        doctec: true,
        cgn: '219015090',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 200 }
      },

      {
        id: 201,
        name: 'ALCALDIA DE BETEITIVA',
        nit: '800017288',
        doctec: true,
        cgn: '219215092',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 201 }
      },

      {
        id: 202,
        name: 'ALCALDIA DE BOAVITA',
        nit: '891856294',
        doctec: true,
        cgn: '219715097',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 202 }
      },

      {
        id: 203,
        name: 'ALCALDIA DE BOYACA',
        nit: '800023383',
        doctec: true,
        cgn: '210415104',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 203 }
      },

      {
        id: 204,
        name: 'ALCALDIA DE BRICENO',
        nit: '800099721',
        doctec: true,
        cgn: '210615106',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 204 }
      },

      {
        id: 205,
        name: 'ALCALDIA DE BUENAVISTA',
        nit: '891808260',
        doctec: true,
        cgn: '210915109',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 205 }
      },

      {
        id: 206,
        name: 'ALCALDIA DE BUSBANZA',
        nit: '800099714',
        doctec: true,
        cgn: '211415114',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 206 }
      },

      {
        id: 207,
        name: 'ALCALDIA DE CALDAS',
        nit: '891801796',
        doctec: true,
        cgn: '213115131',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 207 }
      },

      {
        id: 208,
        name: 'ALCALDIA DE CAMPOHERMOSO',
        nit: '800028393',
        doctec: true,
        cgn: '213515135',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 208 }
      },

      {
        id: 209,
        name: 'ALCALDIA DE CERINZA',
        nit: '891857805',
        doctec: true,
        cgn: '216215162',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 209 }
      },

      {
        id: 210,
        name: 'ALCALDIA DE CHINAVITA',
        nit: '891801357',
        doctec: true,
        cgn: '217215172',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 210 }
      },

      {
        id: 211,
        name: 'ALCALDIA DE CHIQUINQUIRA',
        nit: '891800475',
        doctec: true,
        cgn: '217615176',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 211 }
      },

      {
        id: 212,
        name: 'ALCALDIA DE CHISCAS',
        nit: '800074859',
        doctec: true,
        cgn: '218015180',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 212 }
      },

      {
        id: 213,
        name: 'ALCALDIA DE CHITA',
        nit: '891801962',
        doctec: true,
        cgn: '218315183',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 213 }
      },

      {
        id: 214,
        name: 'ALCALDIA DE CHITARAQUE',
        nit: '800034476',
        doctec: true,
        cgn: '218515185',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 214 }
      },

      {
        id: 215,
        name: 'ALCALDIA DE CHIVATA',
        nit: '800014989',
        doctec: true,
        cgn: '218715187',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 215 }
      },

      {
        id: 216,
        name: 'ALCALDIA DE CIENEGA',
        nit: '891801988',
        doctec: true,
        cgn: '218915189',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 216 }
      },

      {
        id: 217,
        name: 'ALCALDIA DE COMBITA',
        nit: '891801932',
        doctec: true,
        cgn: '210415204',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 217 }
      },

      {
        id: 218,
        name: 'ALCALDIA DE COPER',
        nit: '891801363',
        doctec: true,
        cgn: '211215212',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 218 }
      },

      {
        id: 219,
        name: 'ALCALDIA DE CORRALES',
        nit: '891855748',
        doctec: true,
        cgn: '211515215',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 219 }
      },

      {
        id: 220,
        name: 'ALCALDIA DE COVARACHIA',
        nit: '891857920',
        doctec: true,
        cgn: '211815218',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 220 }
      },

      {
        id: 221,
        name: 'ALCALDIA DE CUBARA',
        nit: '800099196',
        doctec: true,
        cgn: '212315223',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 221 }
      },

      {
        id: 222,
        name: 'ALCALDIA DE CUCAITA',
        nit: '891802089',
        doctec: true,
        cgn: '212415224',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 222 }
      },

      {
        id: 223,
        name: 'ALCALDIA DE CUITIVA',
        nit: '891855769',
        doctec: true,
        cgn: '212615226',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 223 }
      },

      {
        id: 224,
        name: 'ALCALDIA DE CHIQUIZA',
        nit: '800099723',
        doctec: true,
        cgn: '213215232',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 224 }
      },

      {
        id: 225,
        name: 'ALCALDIA DE CHIVOR',
        nit: '800131177',
        doctec: true,
        cgn: '213615236',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 225 }
      },

      {
        id: 226,
        name: 'ALCALDIA DE DUITAMA',
        nit: '891855138',
        doctec: true,
        cgn: '213815238',
        categoria: { id: 3 },
        subsector: { id: 23 },
        municipio: { id: 226 }
      },

      {
        id: 227,
        name: 'ALCALDIA DE EL COCUY',
        nit: '891857844',
        doctec: true,
        cgn: '214415244',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 227 }
      },

      {
        id: 228,
        name: 'ALCALDIA DE EL ESPINO',
        nit: '800031073',
        doctec: true,
        cgn: '214815248',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 228 }
      },

      {
        id: 229,
        name: 'ALCALDIA DE FIRAVITOBA',
        nit: '891856288',
        doctec: true,
        cgn: '217215272',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 229 }
      },

      {
        id: 230,
        name: 'ALCALDIA DE FLORESTA',
        nit: '800026368',
        doctec: true,
        cgn: '217615276',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 230 }
      },

      {
        id: 231,
        name: 'ALCALDIA DE GACHANTIVA',
        nit: '800020045',
        doctec: true,
        cgn: '219315293',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 231 }
      },

      {
        id: 232,
        name: 'ALCALDIA DE GAMEZA',
        nit: '891857764',
        doctec: true,
        cgn: '219615296',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 232 }
      },

      {
        id: 233,
        name: 'ALCALDIA DE GARAGOA',
        nit: '800025608',
        doctec: true,
        cgn: '219915299',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 233 }
      },

      {
        id: 234,
        name: 'ALCALDIA DE GUACAMAYAS',
        nit: '800012631',
        doctec: true,
        cgn: '211715317',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 234 }
      },

      {
        id: 235,
        name: 'ALCALDIA DE GUATEQUE',
        nit: '800013683',
        doctec: true,
        cgn: '212215322',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 235 }
      },

      {
        id: 236,
        name: 'ALCALDIA DE GUAYATA',
        nit: '891800896',
        doctec: true,
        cgn: '212515325',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 236 }
      },

      {
        id: 237,
        name: 'ALCALDIA DE GUICAN DE LA SIERRA',
        nit: '800099202',
        doctec: true,
        cgn: '213215332',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 237 }
      },

      {
        id: 238,
        name: 'ALCALDIA DE IZA',
        nit: '891856077',
        doctec: true,
        cgn: '216215362',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 238 }
      },

      {
        id: 239,
        name: 'ALCALDIA DE JENESANO',
        nit: '891801376',
        doctec: true,
        cgn: '216715367',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 239 }
      },

      {
        id: 240,
        name: 'ALCALDIA DE JERICO',
        nit: '891856593',
        doctec: true,
        cgn: '216815368',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 240 }
      },

      {
        id: 241,
        name: 'ALCALDIA DE LABRANZAGRANDE',
        nit: '800099206',
        doctec: true,
        cgn: '217715377',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 241 }
      },

      {
        id: 242,
        name: 'ALCALDIA DE LA CAPILLA',
        nit: '800099665',
        doctec: true,
        cgn: '218015380',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 242 }
      },

      {
        id: 243,
        name: 'ALCALDIA DE LA VICTORIA',
        nit: '800006541',
        doctec: true,
        cgn: '210115401',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 243 }
      },

      {
        id: 244,
        name: 'ALCALDIA DE LA UVITA',
        nit: '891856257',
        doctec: true,
        cgn: '210315403',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 244 }
      },

      {
        id: 245,
        name: 'ALCALDIA DE VILLA DE LEYVA',
        nit: '891801268',
        doctec: true,
        cgn: '210715407',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 245 }
      },

      {
        id: 246,
        name: 'ALCALDIA DE MACANAL',
        nit: '891801129',
        doctec: true,
        cgn: '212515425',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 246 }
      },

      {
        id: 247,
        name: 'ALCALDIA DE MARIPI',
        nit: '800024789',
        doctec: true,
        cgn: '214215442',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 247 }
      },

      {
        id: 248,
        name: 'ALCALDIA DE MIRAFLORES',
        nit: '800029660',
        doctec: true,
        cgn: '215515455',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 248 }
      },

      {
        id: 249,
        name: 'ALCALDIA DE MONGUA',
        nit: '891855735',
        doctec: true,
        cgn: '216415464',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 249 }
      },

      {
        id: 250,
        name: 'ALCALDIA DE MONGUI',
        nit: '891856555',
        doctec: true,
        cgn: '216615466',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 250 }
      },

      {
        id: 251,
        name: 'ALCALDIA DE MONIQUIRA',
        nit: '800099662',
        doctec: true,
        cgn: '216915469',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 251 }
      },

      {
        id: 252,
        name: 'ALCALDIA DE MOTAVITA',
        nit: '891801994',
        doctec: true,
        cgn: '217615476',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 252 }
      },

      {
        id: 253,
        name: 'ALCALDIA DE MUZO',
        nit: '800077808',
        doctec: true,
        cgn: '218015480',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 253 }
      },

      {
        id: 254,
        name: 'ALCALDIA DE NOBSA',
        nit: '891855222',
        doctec: true,
        cgn: '219115491',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 254 }
      },

      {
        id: 255,
        name: 'ALCALDIA DE NUEVO COLON',
        nit: '800033062',
        doctec: true,
        cgn: '219415494',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 255 }
      },

      {
        id: 256,
        name: 'ALCALDIA DE OICATA',
        nit: '800026156',
        doctec: true,
        cgn: '210015500',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 256 }
      },

      {
        id: 257,
        name: 'ALCALDIA DE OTANCHE',
        nit: '891801362',
        doctec: true,
        cgn: '210715507',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 257 }
      },

      {
        id: 258,
        name: 'ALCALDIA DE PACHAVITA',
        nit: '800028461',
        doctec: true,
        cgn: '211115511',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 258 }
      },

      {
        id: 259,
        name: 'ALCALDIA DE PAEZ',
        nit: '800049508',
        doctec: true,
        cgn: '211415514',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 259 }
      },

      {
        id: 260,
        name: 'ALCALDIA DE PAIPA',
        nit: '891801240',
        doctec: true,
        cgn: '211615516',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 260 }
      },

      {
        id: 261,
        name: 'ALCALDIA DE PAJARITO',
        nit: '800065593',
        doctec: true,
        cgn: '211815518',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 261 }
      },

      {
        id: 262,
        name: 'ALCALDIA DE PANQUEBA',
        nit: '800012628',
        doctec: true,
        cgn: '212215522',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 262 }
      },

      {
        id: 263,
        name: 'ALCALDIA DE PAUNA',
        nit: '891801368',
        doctec: true,
        cgn: '213115531',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 263 }
      },

      {
        id: 264,
        name: 'ALCALDIA DE PAYA',
        nit: '800065411',
        doctec: true,
        cgn: '213315533',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 264 }
      },

      {
        id: 265,
        name: 'ALCALDIA DE PAZ DE RIO',
        nit: '891855015',
        doctec: true,
        cgn: '213715537',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 265 }
      },

      {
        id: 266,
        name: 'ALCALDIA DE PESCA',
        nit: '891856464',
        doctec: true,
        cgn: '214215542',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 266 }
      },

      {
        id: 267,
        name: 'ALCALDIA DE PISBA',
        nit: '800066389',
        doctec: true,
        cgn: '215015550',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 267 }
      },

      {
        id: 268,
        name: 'ALCALDIA DE PUERTO BOYACA',
        nit: '891800466',
        doctec: true,
        cgn: '217215572',
        categoria: { id: 5 },
        subsector: { id: 23 },
        municipio: { id: 268 }
      },

      {
        id: 269,
        name: 'ALCALDIA DE QUIPAMA',
        nit: '800029513',
        doctec: true,
        cgn: '218015580',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 269 }
      },

      {
        id: 270,
        name: 'ALCALDIA DE RAMIRIQUI',
        nit: '891801280',
        doctec: true,
        cgn: '219915599',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 270 }
      },

      {
        id: 271,
        name: 'ALCALDIA DE RAQUIRA',
        nit: '891801244',
        doctec: true,
        cgn: '210015600',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 271 }
      },

      {
        id: 272,
        name: 'ALCALDIA DE RONDON',
        nit: '891801770',
        doctec: true,
        cgn: '212115621',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 272 }
      },

      {
        id: 273,
        name: 'ALCALDIA DE SABOYA',
        nit: '800028517',
        doctec: true,
        cgn: '213215632',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 273 }
      },

      {
        id: 274,
        name: 'ALCALDIA DE SACHICA',
        nit: '800019846',
        doctec: true,
        cgn: '213815638',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 274 }
      },

      {
        id: 275,
        name: 'ALCALDIA DE SAMACA',
        nit: '800016757',
        doctec: true,
        cgn: '214615646',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 275 }
      },

      {
        id: 276,
        name: 'ALCALDIA DE SAN EDUARDO',
        nit: '891801282',
        doctec: true,
        cgn: '216015660',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 276 }
      },

      {
        id: 277,
        name: 'ALCALDIA DE SAN JOSE DE PARE',
        nit: '800083233',
        doctec: true,
        cgn: '216415664',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 277 }
      },

      {
        id: 278,
        name: 'ALCALDIA DE SAN LUIS DE GACENO',
        nit: '891802151',
        doctec: true,
        cgn: '216715667',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 278 }
      },

      {
        id: 279,
        name: 'ALCALDIA DE SAN MATEO',
        nit: '891857821',
        doctec: true,
        cgn: '217315673',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 279 }
      },

      {
        id: 280,
        name: 'ALCALDIA DE SAN MIGUEL DE SEMA',
        nit: '891801286',
        doctec: true,
        cgn: '217615676',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 280 }
      },

      {
        id: 281,
        name: 'ALCALDIA DE SAN PABLO DE BORBUR',
        nit: '891801369',
        doctec: true,
        cgn: '218115681',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 281 }
      },

      {
        id: 282,
        name: 'ALCALDIA DE SANTANA',
        nit: '800020733',
        doctec: true,
        cgn: '218615686',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 282 }
      },

      {
        id: 283,
        name: 'ALCALDIA DE SANTA MARIA',
        nit: '800029386',
        doctec: true,
        cgn: '219015690',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 283 }
      },

      {
        id: 284,
        name: 'ALCALDIA DE SANTA ROSA DE VITERBO',
        nit: '800039213',
        doctec: true,
        cgn: '219315693',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 284 }
      },

      {
        id: 285,
        name: 'ALCALDIA DE SANTA SOFIA',
        nit: '800099651',
        doctec: true,
        cgn: '219615696',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 285 }
      },

      {
        id: 286,
        name: 'ALCALDIA DE SATIVANORTE',
        nit: '800050791',
        doctec: true,
        cgn: '212015720',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 286 }
      },

      {
        id: 287,
        name: 'ALCALDIA DE SATIVASUR',
        nit: '800099441',
        doctec: true,
        cgn: '212315723',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 287 }
      },

      {
        id: 288,
        name: 'ALCALDIA DE SIACHOQUE',
        nit: '891801911',
        doctec: true,
        cgn: '214015740',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 288 }
      },

      {
        id: 289,
        name: 'ALCALDIA DE SOATA',
        nit: '891855016',
        doctec: true,
        cgn: '215315753',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 289 }
      },

      {
        id: 290,
        name: 'ALCALDIA DE SOCOTA',
        nit: '800026911',
        doctec: true,
        cgn: '215515755',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 290 }
      },

      {
        id: 291,
        name: 'ALCALDIA DE SOCHA',
        nit: '800099210',
        doctec: true,
        cgn: '215715757',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 291 }
      },

      {
        id: 292,
        name: 'ALCALDIA DE SOGAMOSO',
        nit: '891855130',
        doctec: true,
        cgn: '215915759',
        categoria: { id: 2 },
        subsector: { id: 23 },
        municipio: { id: 292 }
      },

      {
        id: 293,
        name: 'ALCALDIA DE SOMONDOCO',
        nit: '800029826',
        doctec: true,
        cgn: '216115761',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 293 }
      },

      {
        id: 294,
        name: 'ALCALDIA DE SORA',
        nit: '800019277',
        doctec: true,
        cgn: '216215762',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 294 }
      },

      {
        id: 295,
        name: 'ALCALDIA DE SOTAQUIRA',
        nit: '891801061',
        doctec: true,
        cgn: '216315763',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 295 }
      },

      {
        id: 296,
        name: 'ALCALDIA DE SORACA',
        nit: '800015909',
        doctec: true,
        cgn: '216415764',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 296 }
      },

      {
        id: 297,
        name: 'ALCALDIA DE SUSACON',
        nit: '891856472',
        doctec: true,
        cgn: '217415774',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 297 }
      },

      {
        id: 298,
        name: 'ALCALDIA DE SUTAMARCHAN',
        nit: '800030988',
        doctec: true,
        cgn: '217615776',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 298 }
      },

      {
        id: 299,
        name: 'ALCALDIA DE SUTATENZA',
        nit: '800028576',
        doctec: true,
        cgn: '217815778',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 299 }
      },

      {
        id: 300,
        name: 'ALCALDIA DE TASCO',
        nit: '891856131',
        doctec: true,
        cgn: '219015790',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 300 }
      },

      {
        id: 301,
        name: 'ALCALDIA DE TENZA',
        nit: '800019709',
        doctec: true,
        cgn: '219815798',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 301 }
      },

      {
        id: 302,
        name: 'ALCALDIA DE TIBANA',
        nit: '891800860',
        doctec: true,
        cgn: '210415804',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 302 }
      },

      {
        id: 303,
        name: 'ALCALDIA DE TIBASOSA',
        nit: '891855361',
        doctec: true,
        cgn: '210615806',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 303 }
      },

      {
        id: 304,
        name: 'ALCALDIA DE TINJACA',
        nit: '800028436',
        doctec: true,
        cgn: '210815808',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 304 }
      },

      {
        id: 305,
        name: 'ALCALDIA DE TIPACOQUE',
        nit: '800099187',
        doctec: true,
        cgn: '211015810',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 305 }
      },

      {
        id: 306,
        name: 'ALCALDIA DE TOCA',
        nit: '800099642',
        doctec: true,
        cgn: '211415814',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 306 }
      },

      {
        id: 307,
        name: 'ALCALDIA DE TOGUI',
        nit: '800062255',
        doctec: true,
        cgn: '211615816',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 307 }
      },

      {
        id: 308,
        name: 'ALCALDIA DE TOPAGA',
        nit: '891856625',
        doctec: true,
        cgn: '212015820',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 308 }
      },

      {
        id: 309,
        name: 'ALCALDIA DE TOTA',
        nit: '800012635',
        doctec: true,
        cgn: '212215822',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 309 }
      },

      {
        id: 310,
        name: 'ALCALDIA DE TUNUNGUA',
        nit: '800099639',
        doctec: true,
        cgn: '213215832',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 310 }
      },

      {
        id: 311,
        name: 'ALCALDIA DE TURMEQUE',
        nit: '891801787',
        doctec: true,
        cgn: '213515835',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 311 }
      },

      {
        id: 312,
        name: 'ALCALDIA DE TUTA',
        nit: '800027292',
        doctec: true,
        cgn: '213715837',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 312 }
      },

      {
        id: 313,
        name: 'ALCALDIA DE TUTAZA',
        nit: '800099635',
        doctec: true,
        cgn: '213915839',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 313 }
      },

      {
        id: 314,
        name: 'ALCALDIA DE UMBITA',
        nit: '800099631',
        doctec: true,
        cgn: '214215842',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 314 }
      },

      {
        id: 315,
        name: 'ALCALDIA DE VENTAQUEMADA',
        nit: '891800986',
        doctec: true,
        cgn: '216115861',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 315 }
      },

      {
        id: 316,
        name: 'ALCALDIA DE VIRACACHA',
        nit: '891801347',
        doctec: true,
        cgn: '217915879',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 316 }
      },

      {
        id: 317,
        name: 'ALCALDIA DE ZETAQUIRA',
        nit: '891802106',
        doctec: true,
        cgn: '219715897',
        categoria: { id: 6 },
        subsector: { id: 23 },
        municipio: { id: 317 }
      }

    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
