/* eslint-disable no-loss-of-precision */
import JoiBase from 'joi'
import JoiDate from '@joi/date'
// import moment from 'moment'
const Joi = JoiBase.extend(JoiDate)

const id = Joi.number()

const idBpin = Joi.string().regex(/(^[0-9a-zA-Z]*[0-9a-zA-Z-]*[0-9a-zA-Z]$)/).options({ convert: true }).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} no coincide con el patrón requerido alfanumerico Eje. F21_234_2024',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const entidad = Joi.number().integer().min(1).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const entidad_id = Joi.number().integer().min(1).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const sector = Joi.number().integer().min(1).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const nombreProyecto = Joi.string().trim().min(3).max(64).regex(/(^[a-zA-ZÑñ. ]*[a-zA-Z-_Ññ. ]*[a-zA-ZÑñ. ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const valorProyecto = Joi.number().precision(2).min(0).max(9999999999999.99).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a{{#limit}}'
})

const duracionProyecto = Joi.number().integer().min(1).max(999999).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

const dependenciaProyecto = Joi.string().trim().min(3).max(64).regex(/(^[a-zA-ZÑñ. ]*[a-zA-Z-_Ññ. ]*[a-zA-ZÑñ. ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const descripcion = Joi.string().trim().min(3).max(300).regex(/(^[0-9a-zA-ZÀ-ÿÑñ.%,\r\n ]*[0-9a-zA-ZÀ-ÿ-_Ññ.%$,\r\n ]*[0-9a-zA-ZÀ-ÿÑñ.%$,\r\n ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const objetivoGeneral = Joi.string().trim().min(3).max(300).regex(/(^[0-9a-zA-ZÀ-ÿÑñ.%,\r\n ]*[0-9a-zA-ZÀ-ÿ-_Ññ.%$,\r\n ]*[0-9a-zA-ZÀ-ÿÑñ.%$,\r\n ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const programaPlanDesarrollo = Joi.string().trim().min(3).max(300).regex(/(^[0-9a-zA-ZÀ-ÿÑñ.%,\r\n ]*[0-9a-zA-ZÀ-ÿ-_Ññ.%$,\r\n ]*[0-9a-zA-ZÀ-ÿÑñ.%$,\r\n ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const fechaInicioEjecucion = Joi.date().format('YYYY-MM-DD').messages({
  'date.format': '{{#label}} debe ser un fecha valida con formato YYYY-MM-DD'

})
const fechaCierreEjecucion = Joi.date().format('YYYY-MM-DD').messages({
  'date.format': '{{#label}} debe ser un fecha valida con formato YYYY-MM-DD'
})
const observaciones = Joi.string().trim().min(3).max(300).regex(/(^[0-9a-zA-ZÀ-ÿÑñ.%,\r\n ]*[0-9a-zA-ZÀ-ÿ-_Ññ.%$,\r\n ]*[0-9a-zA-ZÀ-ÿÑñ.%$,\r\n ]$)/).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.length': 'La longitud {{#label}} debe tener {{#limit}} caracteres',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})

const userOper = Joi.number().integer().min(1).messages({
  'number.base': '{{#label}} debe ser un número',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

export const createMatrizProyecto = Joi.array().items(Joi.object({
  idBpin: idBpin.required(),
  entidad: entidad.required(),
  sector: sector.required(),
  nombreProyecto: nombreProyecto.required(),
  valorProyecto: valorProyecto.required(),
  duracionProyecto: duracionProyecto.required(),
  dependenciaProyecto: dependenciaProyecto.required(),
  descripcion: descripcion.required(),
  objetivoGeneral: objetivoGeneral.required(),
  programaPlanDesarrollo: programaPlanDesarrollo.required(),
  fechaInicioEjecucion: fechaInicioEjecucion.required(),
  fechaCierreEjecucion: fechaCierreEjecucion.required(),
  observaciones: observaciones.required(),
  userOper,
  entidad_id

}))

export const updateMatrizProyecto = Joi.object({
  idBpin,
  entidad,
  sector,
  nombreProyecto,
  valorProyecto,
  duracionProyecto,
  dependenciaProyecto,
  descripcion,
  objetivoGeneral,
  programaPlanDesarrollo,
  fechaInicioEjecucion,
  fechaCierreEjecucion,
  observaciones,
  userOper,
  entidad_id
})

export const getMatrizProyectoSchema = Joi.object({
  id: id.required()
})
