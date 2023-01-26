import { allProducts, insertProduct, deleteProduct, updateProduct, allProductsQuery } from "../repositories/repository.js";
import { QueryResult } from "pg";
import { ProductEntity, ProductUpdate } from "../protocols/product.js";
import { Product } from "../protocols/product.js";

export async function prodService(): Promise<QueryResult<ProductEntity>>{
    const products = await allProducts();
    return products;
}

export async function prodServiceQuery(): Promise<QueryResult<ProductEntity>>{
    const products = await allProductsQuery();
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

export async function deleteUniqueProduct(id: number): Promise<QueryResult<ProductEntity>>{
    try{
        const productDeleted = await deleteProduct(id);
        if(productDeleted){
            return {
                status: 200,
                message: `Produto deletado com sucesso, linha deletada: ${productDeleted}`
            }
        }
        return {
            status: 404,
            message: "Nenhum produto foi encontrado com esse ID"
        };
    }catch{
        throw Error;
    }
}

export async function updateUniqueProduct(body: ProductUpdate, id: number): Promise<QueryResult<ProductEntity>>{
    try{
        const productUpdated = await updateProduct(body, id);
        if(productUpdated){
            return {
                status: 200,
                message: `Produto deletado com sucesso, linha deletada: ${productUpdated}`
            }
        }
        return {
            status: 404,
            message: "Nenhum produto foi encontrado com esse ID"
        };    
    }catch{
        throw Error;
    }
}