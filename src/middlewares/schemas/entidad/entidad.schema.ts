import Joi from 'joi'

const id = Joi.number()
const nit = Joi.number()
const name = Joi.string().min(3).max(255)
const doctec = Joi.boolean()
const sector = Joi.number()
const cgn = Joi.string().min(1).max(12)
const categoria = Joi.number()
const subsector = Joi.number()
const user = Joi.number()

export const createEntidadSchema = Joi.object({
  nit: nit.required(),
  name: name.required(),
  sector: sector.required(),
  doctec: doctec,
  cgn: cgn,
  categoria: categoria,
  subsector: subsector.required(),
  user: user.required()
})

export const updateEntidadSchema = Joi.object({
  nit: nit,
  name: name,
  sector: sector,
  doctec: doctec,
  cgn: cgn,
  categoria: categoria,
  subsector: subsector,
  user: user
})

export const getEntidadSchema = Joi.object({
  id: id.required()
})
