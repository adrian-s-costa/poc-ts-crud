import { ProductSchema } from "../schemas/productSchema.js";
import { Request, Response, NextFunction } from "express";
import { Product } from "../protocols/product.js";

export function validateProduct(req: Request, res: Response, next: NextFunction){
    const product = req.body as Product;
    const { error } = ProductSchema.validate(product);
    if (error){
        return res.status(400).send({
            message: error.message
        });
    }
    next();
}

export function validateQuery(req: Request, res: Response, next: NextFunction){
    if(!req.query.id){
        return res.status(400).send("Essa rota precisa de um id na query!");
    }
    next();
}