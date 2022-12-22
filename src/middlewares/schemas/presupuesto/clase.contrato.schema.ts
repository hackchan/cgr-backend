import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createClaseContratoSchema = Joi.object({
  name: name.required()
})

export const updateClaseContratoSchema = Joi.object({
  name
})

export const getClaseContratoSchema = Joi.object({
  id: id.required()
})
