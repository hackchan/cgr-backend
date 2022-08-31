import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createEstadoObraSchema = Joi.object({
  name: name.required()
})

export const updateEstadoObraSchema = Joi.object({
  name: name
})

export const getEstadoObraSchema = Joi.object({
  id: id.required()
})
