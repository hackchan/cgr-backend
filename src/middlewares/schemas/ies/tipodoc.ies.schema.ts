import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(40)

export const createTipodocIesSchema = Joi.object({
  name: name.required()
})

export const updateTipodocIesSchema = Joi.object({
  name
})

export const getTipodocIesSchema = Joi.object({
  id: id.required()
})
