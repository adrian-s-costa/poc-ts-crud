import { Request, Response } from "express";
import { prodService } from "../services/productService.js";
import { ProductEntity } from "../protocols/product.js";
import { QueryResult } from "pg";

export async function getProducts(req: Request, res: Response): Promise<QueryResult<ProductEntity>>{
    const products = await prodService();
    return res.send(products).status(200);
}