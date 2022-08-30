import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(25).messages({
  'string.base': 'name => debe ser un tipo de \'texto\'',
  'string.empty': 'name => no puede ser un campo vacío',
  'string.min': 'name => debe tener una longitud mínima de {#limit}',
  'string.max': 'name => debe tener una longitud máxima de {#limit}'

})

export const createCategorySchema = Joi.object({
  name: name.required()
})

export const updateCategorySchema = Joi.object({
  name: name
})

export const getCategorySchema = Joi.object({
  id: id.required()
})
