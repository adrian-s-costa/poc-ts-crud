import { Request, Response } from "express";
import { prodService, insertNewProducts } from "../services/productService.js";
import { ProductEntity } from "../protocols/product.js";
import { QueryResult } from "pg";
import { Product } from "../protocols/product.js";

export async function getProducts(req: Request, res: Response): Promise<QueryResult<ProductEntity>>{
    const products = await prodService();
    return res.send(products).status(200);
}

export async function postProduct(req: Request, res: Response){
    try{
        const newProduct = req.body as Product;
        const result = await insertNewProducts(newProduct);
        res.send(`Product inserted: ${result.rowCount}`).status(200);
    }catch{
        res.sendStatus(400);
    }
    
}