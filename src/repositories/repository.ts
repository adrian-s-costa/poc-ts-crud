import { connection } from "../database/pg.js";
import { QueryResult } from "pg";
import { ProductEntity } from "../protocols/product.js";

export async function allProducts(): Promise<QueryResult<ProductEntity>> {
    const products = await connection.query("SELECT * FROM produtos;");
    return products.rows;
}

