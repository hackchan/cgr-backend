import Joi from 'joi'

const id = Joi.number()
const nit = Joi.string()
const name = Joi.string().min(3).max(255)
const doctec = Joi.boolean()
const active = Joi.boolean()
const cgn = Joi.string().min(1).max(12)
const categoria = Joi.number()
const subsector = Joi.number()
const municipio = Joi.number()

export const createEntidadSchema = Joi.object({
  nit: nit.required(),
  name: name.required(),
  doctec: doctec.required(),
  active: active.required(),
  cgn: cgn.required(),
  categoria: categoria.required(),
  subsector: subsector.required(),
  municipio: municipio.required()
})

export const updateEntidadSchema = Joi.object({
  nit,
  name,
  doctec,
  cgn,
  categoria,
  subsector,
  municipio
})

export const getEntidadSchema = Joi.object({
  id: id.required()
})
