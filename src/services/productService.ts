import { allProducts } from "../repositories/repository.js";
import { QueryResult } from "pg";
import { ProductEntity } from "../protocols/product.js";

export async function prodService(): Promise<QueryResult<ProductEntity>>{
    const products = await allProducts();
    return products;
}