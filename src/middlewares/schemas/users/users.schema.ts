import Joi from 'joi'
const auth = Joi.object().keys({
  username: Joi.string().regex(/(^[a-zA-Z]+[0-9a-zA-Z_]{3,24}$)/).options({ convert: true }).messages({
    'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
    'string.base': '{{#label}} debe ser un cadena',
    'string.empty': '{{#label}} No se permite estar vacía',
    'string.pattern.base': '{{#label}} no coincide con el patrón requerido',
    'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
    'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
    'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
  }),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/).options({ convert: true }).messages({
    'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
    'string.base': '{{#label}} debe ser un cadena',
    'string.empty': '{{#label}} No se permite estar vacía',
    'string.pattern.base': '{{#label}} no coincide con el patrón requerido Eje. debe contener mayúscula, minúscula, numeros y un caracter especial',
    'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
    'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
    'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
  })
  // role: Joi.array().items(Joi.string())
})

// const roles = Joi.array().items({
//   id: Joi.number().min(1)
// })

// const entidades = Joi.array().items({
//   id: Joi.number().min(1)
// })

const roles = Joi.number()
const entidades = Joi.number()
const id = Joi.number()
const name = Joi.string().min(4).max(64).regex(/(^[a-zA-ZñÑ]+[a-zA-ZñÑ ]{4,64}$)/).options({ convert: true }).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} no coincide con el patrón requerido Eje. Fabio Rojas',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})
const lastName = Joi.string().min(4).max(64).regex(/(^[a-zA-ZñÑ]+[a-zA-ZñÑ ]{4,64}$)/).options({ convert: true }).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} no coincide con el patrón requerido Eje. Rojas Martha',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})
const phone = Joi.string().min(10).max(10).regex(/^(300|301|302|304|305|324|302|323|304|305|310|311|312|313|314|320|321|322|323|315|316|317|318|319|324|350|351)[0-9]{7}$/).options({ convert: true }).messages({
  'string.alphanum': '{{#label}} solo debe contener caracteres alfanuméricos',
  'string.base': '{{#label}} debe ser un cadena',
  'string.empty': '{{#label}} No se permite estar vacía',
  'string.pattern.base': '{{#label}} no coincide con el patrón requerido Eje. 3183895020',
  'string.trim': '{{#label}} no debe tener espacios en blanco iniciales o finales',
  'string.max': 'La longitud de {{#label}} debe ser menor o igual a {{#limit}} caracteres de longitud',
  'string.min': 'La longitud de {{#label}} debe tener al menos {{#limit}} caracteres'
})
const email = Joi.string().email()
const image = Joi.string().uri()
const tipo = Joi.number().min(1)
// const entidadId = Joi.number().min(1)

export const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  email: email.required(),
  image,
  tipo: tipo.required(),
  roles: roles.required(),
  entidades: entidades.required(),
  auth: auth.required()
})

export const updateUserSchema = Joi.object({
  name,
  lastName,
  phone,
  email,
  image,
  tipo,
  roles
})

export const getUserSchema = Joi.object({
  id: id.required()
})
