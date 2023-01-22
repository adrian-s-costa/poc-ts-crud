import Joi from "joi";

export const ProductSchema = Joi.object({
    nome: Joi.string().required(),
    descricao: Joi.string().required(),
    quantidade: Joi.number().required(),
})