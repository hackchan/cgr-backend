import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createSemestreIesSchema = Joi.object({
  name: name.required()
})

export const updateSemestreIesSchema = Joi.object({
  name
})

export const getSemestreIesSchema = Joi.object({
  id: id.required()
})
