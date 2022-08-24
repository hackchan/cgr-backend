import Joi from 'joi'

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(15)

export const createCategorySchema = Joi.object({
  name: name.required()
})

export const updateCategorySchema = Joi.object({
  name: name
})

export const getCategorySchema = Joi.object({
  id: id.required()
})
