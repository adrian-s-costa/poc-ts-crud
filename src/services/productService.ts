import { allProducts, insertProduct } from "../repositories/repository.js";
import { QueryResult } from "pg";
import { ProductEntity } from "../protocols/product.js";
import { Product } from "../protocols/product.js";

export async function prodService(): Promise<QueryResult<ProductEntity>>{
    const products = await allProducts();
    return products;
}

export async function insertNewProducts(newProduct: Product): Promise<QueryResult<ProductEntity>>{
    try{
        const productInserted = await insertProduct(newProduct);
        return productInserted;
    }catch{
        throw Error;
    }
}