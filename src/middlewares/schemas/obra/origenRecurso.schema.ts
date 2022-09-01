import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createOrigenRecursoSchema = Joi.object({
  name: name.required()
})

export const updateOrigenRecursoSchema = Joi.object({
  name: name
})

export const getOrigenRecursoSchema = Joi.object({
  id: id.required()
})
