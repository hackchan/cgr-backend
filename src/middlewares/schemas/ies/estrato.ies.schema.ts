import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createEstratoIesSchema = Joi.object({
  name: name.required()
})

export const updateEstratoIesSchema = Joi.object({
  name
})

export const getEstratoIesSchema = Joi.object({
  id: id.required()
})
