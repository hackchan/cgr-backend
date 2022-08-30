import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(25)
const initial = Joi.string().alphanum().min(2).max(6)

export const createSectorSchema = Joi.object({
  name: name.required(),
  initial: initial.required()
})

export const updateSectorSchema = Joi.object({
  name: name,
  initial: initial
})

export const getSectorSchema = Joi.object({
  id: id.required()
})
