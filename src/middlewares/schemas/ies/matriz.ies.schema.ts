/* eslint-disable no-loss-of-precision */
import JoiBase from 'joi'
import JoiDate from '@joi/date'
// import moment from 'moment'
const Joi = JoiBase.extend(JoiDate)

const id = Joi.number()

const codigo = Joi.string().regex(/(^[0-9a-zA-Z]*[0-9a-zA-Z-_]*[0-9a-zA-Z]$)/).options({ convert: true }).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} no coincide con el patrón requerido alfanumerico Eje. F21_234_2024',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const semestreReportado = Joi.alternatives(Joi.number(), Joi.string().min(6).max(6).regex(/(^(20)[1-9]{1}[0-9]{1}(01|02)$)/)).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} No es un código semestre válido',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const programa = Joi.string().min(3).max(64).regex(/(^[a-zA-ZÑñ. ]*[a-zA-Z-_Ññ. ]*[a-zA-ZÑñ. ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} No es un programa válido',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const creditos = Joi.number().integer().min(1).max(1000).messages({
  'number.base': '{{#label}} debe ser un número',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const tipoDoc = Joi.number().integer().min(1).max(13).messages({
  'number.base': '{{#label}} debe ser un número',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const numeroDoc = Joi.string().regex(/^[a-zA-Z0-9]{1,30}$/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const estrato = Joi.number().integer().min(1).max(13).messages({
  'number.base': '{{#label}} debe ser un número',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const name = Joi.string().min(3).max(64).regex(/(^[a-zA-ZÑñ ]*[a-zA-Z-_Ññ ]*[a-zA-ZÑñ ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} No es un nombre válido',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const sede = Joi.number().integer().min(1).messages({
  'number.base': '{{#label}} debe ser un número',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const residencia = Joi.number().integer().min(1).messages({
  'number.base': '{{#label}} debe ser un número',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const semestreIngreso = Joi.alternatives(Joi.number(), Joi.string().min(6).max(6).regex(/(^(20)[1-9]{1}[0-9]{1}(01|02)$)/)).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} No es un código semestre ingreso válido',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const valorSemestre = Joi.number().precision(2).min(0).max(9999999999999.99).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const recargo = Joi.number().precision(2).min(0).max(9999999999999.99).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const descuentos = Joi.number().precision(2).min(0).max(9999999999999.99).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const tipoDescuento = Joi.string().min(3).max(64).regex(/(^[0-9a-zA-ZÀ-ÿÑñ.%,\r\n ]*[0-9a-zA-ZÀ-ÿ-_Ññ.%,\r\n ]*[0-9a-zA-ZÀ-ÿÑñ.%,\r\n ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} No es un tipo Descuento válido',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const diaCorte = Joi.number().integer().min(1).max(31).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})
const mesCorte = Joi.number().integer().min(1).max(12).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})
const anioCorte = Joi.number().integer().min(2000).max(2050).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const entidad = Joi.number().integer().min(1).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const userOper = Joi.number().integer().min(1).messages({
  'number.base': '{{#label}} debe ser un número',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

export const createMatrizIESSchema = Joi.array().items(Joi.object({
  codigo: codigo.required(),
  semestreReportado: semestreReportado.required(),
  programa: programa.required(),
  creditos: creditos.required(),
  tipoDoc: tipoDoc.required(),
  numeroDoc: numeroDoc.required(),
  estrato: estrato.required(),
  name: name.required(),
  sede: sede.required(),
  residencia: residencia.required(),
  semestreIngreso: semestreIngreso.required(),
  valorSemestre: valorSemestre.required(),
  recargo: recargo.required(),
  descuentos: descuentos.required(),
  tipoDescuento: tipoDescuento.required(),
  diaCorte: diaCorte.required(),
  mesCorte: mesCorte.required(),
  anioCorte: anioCorte.required(),
  entidad: entidad.required(),
  userOper

}))

export const updateMatrizIESSchema = Joi.object({
  codigo,
  semestreReportado,
  programa,
  creditos,
  tipoDoc,
  numeroDoc,
  estrato,
  name,
  sede,
  residencia,
  semestreIngreso,
  valorSemestre,
  recargo,
  descuentos,
  tipoDescuento,
  diaCorte,
  mesCorte,
  anioCorte,
  entidad,
  userOper
})

export const getMatrizIESSchema = Joi.object({
  id: id.required()
})
