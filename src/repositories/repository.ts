import { connection } from "../database/pg.js";
import { QueryResult } from "pg";
import { ProductEntity } from "../protocols/product.js";
import { Product } from "../protocols/product.js";

export async function allProducts(): Promise<QueryResult<ProductEntity>> {
    const products = await connection.query("SELECT * FROM produtos;");
    return products.rows;
}

export async function insertProduct(newProduct: Product): Promise<QueryResult<ProductEntity>> {
    try{
        return await connection.query("INSERT INTO produtos (nome, descricao, quantidade) VALUES ($1, $2, $3);", [newProduct.nome, newProduct.descricao, newProduct.quantidade]);
    }catch{
        throw Error;
    }
}

export async function deleteProduct(id: number): Promise<QueryResult<ProductEntity>> {
    try{
        return await connection.query("DELETE FROM produtos WHERE id = $1;", [id]);
    }catch{
        throw Error;
    }
}

