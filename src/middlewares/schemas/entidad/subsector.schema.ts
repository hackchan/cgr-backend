import Joi from 'joi'

const id = Joi.number()
const name = Joi.string().min(3).max(255)
const sector = Joi.number()

export const createSubsectorSchema = Joi.object({
  name: name.required(),
  sector: sector.required()
})

export const updateSubsectorSchema = Joi.object({
  name: name,
  sector: sector
})

export const getSubsectorSchema = Joi.object({
  id: id.required()
})
