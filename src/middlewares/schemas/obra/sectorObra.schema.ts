import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createSectorObraSchema = Joi.object({
  name: name.required()
})

export const updateSectorObraSchema = Joi.object({
  name: name
})

export const getSectorObraSchema = Joi.object({
  id: id.required()
})
