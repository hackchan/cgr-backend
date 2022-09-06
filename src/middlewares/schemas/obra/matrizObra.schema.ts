/* eslint-disable no-loss-of-precision */
import JoiBase from 'joi'
import JoiDate from '@joi/date'
// import moment from 'moment'
const Joi = JoiBase.extend(JoiDate)

const id = Joi.number()
const idBpin = Joi.string().regex(/^[a-zA-Z0-9-_]{1,20}$/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} con valor {:[.]} no coincide con el patrón requerido: {{#regex}}',
  'string.pattern.name': '{{#label}} con valor {:[.]} no coincide con el patrón {{#name}}',
  'string.pattern.invert.base': '{{#label}} con valor {:[.]} coincide con el patrón invertido: {{#regex}}',
  'string.pattern.invert.name': '{{#label}} con valor {:[.]} coincide con el patrón {{#name}} invertido',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales'
})
const idContrato = Joi.string().regex(/^[a-zA-Z0-9-_]{1,20}$/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.base64': '{{#label}} debe ser una cadena base64 válida',
  'string.creditCard': '{{#label}} debe ser una tarjeta de credito',
  'string.dataUri': '{{#label}} debe ser una cadena dataUri válida',
  'string.domain': '{{#label}} debe contener un nombre de dominio válido',
  'string.email': '{{#label}} debe ser un correo electrónico válido',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.guid': '{{#label}} debe ser un GUID válido',
  'string.hex': '{{#label}} solo debe contener caracteres hexadecimales',
  'string.hexAlign': '{{#label}} La representación decodificada hexadecimal debe estar alineada con bytes',
  'string.hostname': '{{#label}} debe ser un nombre de host válido',
  'string.ip': '{{#label}} debe ser una dirección IP válida con un {{#cidr}} CIDR',
  'string.ipVersion': '{{#label}} debe ser una dirección IP válida de una de las siguientes versiones {{#version}} con {{#cidr}} CIDR',
  'string.isoDate': '{{#label}} debe estar en formato iso',
  'string.isoDuration': '{{#label}} debe ser una duración ISO 8601 válida',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.lowercase': '{{#label}} solo debe contener caracteres en minúscula',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres',
  'string.normalize': '{{#label}} debe ser unicode normalizado en el formulario {{#form}}',
  'string.token': '{{#label}} solo debe contener caracteres alfanuméricos y guiones bajos',
  'string.pattern.base': '{{#label}} con valor {:[.]} no coincide con el patrón requerido: {{#regex}}',
  'string.pattern.name': '{{#label}} con valor {:[.]} no coincide con el patrón {{#name}}',
  'string.pattern.invert.base': '{{#label}} con valor {:[.]} coincide con el patrón invertido: {{#regex}}',
  'string.pattern.invert.name': '{{#label}} con valor {:[.]} coincide con el patrón {{#name}} invertido',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.uri': '{{#label}} debe ser un uri válido',
  'string.uriCustomScheme': '{{#label}} debe ser un uri válido con un esquema que coincida con el patrón {{#scheme}}',
  'string.uriRelativeOnly': '{{#label}} debe ser un uri relativo válido',
  'string.uppercase': '{{#label}} solo debe contener caracteres en mayúscula'
})
const nombreProyecto = Joi.string().trim().lowercase().min(3).max(64).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})
const objetoProyecto = Joi.string().min(1).max(255)
const unidadFuncional = Joi.string().min(1).max(255)

// const fechaSuscripcion = Joi.alternatives([
//   Joi.date().format('YYYY-MM-DD').raw().max(moment().format('YYYY-MM-DD')).messages({
//     'date.base': '{{#label}} debe ser un cadena',
//     'date.format': '{{#label}} debe ser una fecha con formato YYYY-MM-DD'
//   }),
//   Joi.string().regex(/\d{4}-\d{2}-\d{2}/)
// ])
const fechaSuscripcion = Joi.date().format('YYYY-MM-DD').raw()
const fechaInicio = Joi.date().format('YYYY-MM-DD').raw().allow(null)
const fechaProgramadaTermina = Joi.date().format('YYYY-MM-DD').raw().allow(null)
const fechaTermina = Joi.date().format('YYYY-MM-DD').raw().allow(null)

const valorContratoInicial = Joi.number().precision(2).min(0).max(99999999999999.99).options({ convert: false })
const valorContratoFinal = Joi.number().precision(2).min(0).max(99999999999999.99).options({ convert: false })
const avanceFisicoProgramado = Joi.number().precision(2).min(0).max(20).options({ convert: false })
const avanceFisicoEjecutado = Joi.number().precision(2).min(0).max(20).options({ convert: false })
const avanceFinancieroEjecutado = Joi.number().precision(2).min(0).max(20).options({ convert: false })

const nroContrato = Joi.string().regex(/^[a-zA-Z0-9-_]{1,32}$/)
const cantidadSuspenciones = Joi.number().integer().min(0).max(100)
const cantidadProrrogas = Joi.number().integer().min(0)
const tiempoSuspenciones = Joi.number().integer().min(0)
const tiempoProrrogas = Joi.number().integer().min(0)
const cantidadAdiciones = Joi.number().integer().min(0).max(100)

const valorTotalAdiciones = Joi.number().integer().min(0).max(100)
const valorComprometido = Joi.number().precision(2).min(0).max(99999999999999.99).options({ convert: false })
const valorObligado = Joi.number().precision(2).min(0).max(99999999999999.99).options({ convert: false })
const valorPagado = Joi.number().precision(2).min(0).max(99999999999999.99).options({ convert: false })
const valorAnticipo = Joi.number().precision(2).min(0).max(99999999999999.99).options({ convert: false })

const razonSocialContratista = Joi.string().regex(/^[a-zA-Z0-9 ]{3,100}$/)
const idContratista = Joi.number().integer().options({ convert: false })
const razonSocialNuevoContratista = Joi.string().regex(/^[a-zA-Z0-9 ]{3,100}$/)
const idNuevoContratista = Joi.number().integer().options({ convert: false })
const observaciones = Joi.string().min(1).max(255)
const linkSecop = Joi.string().uri()
const nroContratoInterventoria = Joi.string().regex(/^[a-zA-Z0-9-_]{1,20}$/)
const nombreInterventoria = Joi.string().regex(/^[a-zA-Z0-9 ]{3,100}$/)
const idInterventoria = Joi.number().integer().options({ convert: false })
const diaCorte = Joi.number().integer().min(1).max(31)
const mesCorte = Joi.number().integer().min(1).max(12)
const anioCorte = Joi.number().integer().min(2000).max(2050)
const sector = Joi.number().integer()
const origen = Joi.number().integer()
const estado = Joi.number().integer()
const entidad = Joi.number().integer()
const municipioObra = Joi.number().integer()

export const createMatrizObraSchema = Joi.object({
  idBpin: idBpin,
  idContrato: idContrato.required(),
  nombreProyecto: nombreProyecto.required(),
  objetoProyecto: objetoProyecto.required(),
  unidadFuncional: unidadFuncional,
  fechaSuscripcion: fechaSuscripcion.required(),
  fechaInicio: fechaInicio,
  fechaProgramadaTermina: fechaProgramadaTermina,
  fechaTermina: fechaTermina,
  valorContratoInicial: valorContratoInicial.required(),
  valorContratoFinal: valorContratoFinal.required(),
  avanceFisicoProgramado: avanceFisicoProgramado.required(),
  avanceFisicoEjecutado: avanceFisicoEjecutado.required(),
  avanceFinancieroEjecutado: avanceFinancieroEjecutado.required(),
  nroContrato: nroContrato.required(),
  cantidadSuspenciones: cantidadSuspenciones.required(),
  cantidadProrrogas: cantidadProrrogas.required(),
  tiempoSuspenciones: tiempoSuspenciones.required(),
  tiempoProrrogas: tiempoProrrogas.required(),
  cantidadAdiciones: cantidadAdiciones.required(),

  valorTotalAdiciones: valorTotalAdiciones.required(),
  valorComprometido: valorComprometido.required(),
  valorObligado: valorObligado.required(),
  valorPagado: valorPagado.required(),
  valorAnticipo: valorAnticipo.required(),
  razonSocialContratista: razonSocialContratista.required(),
  idContratista: idContratista.required(),
  razonSocialNuevoContratista: razonSocialNuevoContratista,
  idNuevoContratista: idNuevoContratista,
  observaciones: observaciones,
  linkSecop: linkSecop,
  nroContratoInterventoria: nroContratoInterventoria.required(),
  nombreInterventoria: nombreInterventoria.required(),
  idInterventoria: idInterventoria.required(),
  diaCorte: diaCorte.required(),
  mesCorte: mesCorte.required(),
  anioCorte: anioCorte.required(),
  sector: sector.required(),
  origen: origen.required(),
  estado: estado.required(),
  entidad: entidad.required(),
  municipioObra: municipioObra.required()

})

export const updateMatrizObraSchema = Joi.object({
  idBpin: idBpin,
  idContrato: idContrato,
  nombreProyecto: nombreProyecto,
  objetoProyecto: objetoProyecto,
  unidadFuncional: unidadFuncional,
  fechaSuscripcion: fechaSuscripcion,
  fechaInicio: fechaInicio,
  fechaProgramadaTermina: fechaProgramadaTermina,
  fechaTermina: fechaTermina,
  valorContratoInicial: valorContratoInicial,
  valorContratoFinal: valorContratoFinal,
  avanceFisicoProgramado: avanceFisicoProgramado,
  avanceFisicoEjecutado: avanceFisicoEjecutado,
  avanceFinancieroEjecutado: avanceFinancieroEjecutado,
  nroContrato: nroContrato,
  cantidadSuspenciones: cantidadSuspenciones,
  cantidadProrrogas: cantidadProrrogas,
  tiempoSuspenciones: tiempoSuspenciones,
  tiempoProrrogas: tiempoProrrogas,
  cantidadAdiciones: cantidadAdiciones,
  valorTotalAdiciones: valorTotalAdiciones,
  valorComprometido: valorComprometido,
  valorObligado: valorObligado,
  valorPagado: valorPagado,
  valorAnticipo: valorAnticipo,
  razonSocialContratista: razonSocialContratista,
  idContratista: idContratista,
  razonSocialNuevoContratista: razonSocialNuevoContratista,
  idNuevoContratista: idNuevoContratista,
  observaciones: observaciones,
  linkSecop: linkSecop,
  nroContratoInterventoria: nroContratoInterventoria,
  nombreInterventoria: nombreInterventoria,
  idInterventoria: idInterventoria,
  diaCorte: diaCorte,
  mesCorte: mesCorte,
  anioCorte: anioCorte
})

export const getMatrizObraSchema = Joi.object({
  id: id.required()
})
