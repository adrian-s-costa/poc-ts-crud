import { allProducts, insertProduct, deleteProduct } from "../repositories/repository.js";
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

export async function deleteUniqueProduct(id: number): Promise<QueryResult<ProductEntity>>{
    try{
        const productDeleted = await deleteProduct(id);
        if(productDeleted.rowCount > 0){
            return {
                status: 200,
                message: `Produto deletado com sucesso, linhas deletadas: ${productDeleted.rowCount}`
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