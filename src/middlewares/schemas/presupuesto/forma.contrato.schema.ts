import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createFormaContratoSchema = Joi.object({
  name: name.required()
})

export const updateFormaContratoSchema = Joi.object({
  name
})

export const getFormaContratoSchema = Joi.object({
  id: id.required()
})
