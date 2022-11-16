import Joi from 'joi'

const id = Joi.number()
const email = Joi.string().email().messages({
  'string.base': 'name => debe ser un tipo de \'texto\'',
  'string.empty': 'name => no puede ser un campo vacío',
  'string.min': 'name => debe tener una longitud mínima de {#limit}',
  'string.max': 'name => debe tener una longitud máxima de {#limit}'

})
const register = Joi.boolean().messages({
  'string.base': 'name => debe ser un tipo  \'boolean\'',
  'string.empty': 'name => no puede ser un campo vacío'

})

const entidad = Joi.number().integer().min(1).options({ convert: false }).messages({
  'number.base': '{{#label}} debe ser un numero',
  'number.integer': '{{#label}} debe ser un entero',
  'number.max': 'el valor de {{#label}} debe ser menor o igual a {{#limit}}',
  'number.min': 'el valor de {{#label}} debe ser mayor o igual a {{#limit}}'
})

export const createEmailSchema = Joi.object({
  email: email.required(),
  register: register.required(),
  entidad: entidad.required()

})

export const updateEmailSchema = Joi.object({
  email,
  register,
  entidad
})

export const getEmailSchema = Joi.object({
  id: id.required()
})
