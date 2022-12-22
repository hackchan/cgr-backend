import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createEstadoContratoSchema = Joi.object({
  name: name.required()
})

export const updateEstadoContratoSchema = Joi.object({
  name
})

export const getEstadoContratoSchema = Joi.object({
  id: id.required()
})
