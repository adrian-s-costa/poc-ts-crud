import { join } from "@prisma/client/runtime";
import Joi from "joi";

export const ProductSchema = Joi.object({
    id: Joi.number(),
    nome: Joi.string().required(),
    descricao: Joi.string().required(),
    quantidade: Joi.number().required(),
})