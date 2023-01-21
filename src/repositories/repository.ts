import { connection } from "../database/pg.js";
import { QueryResult } from "pg";
import { ProductEntity } from "../protocols/product.js";

export function allProducts(): Promise<QueryResult<ProductEntity>> {
    return connection.query("SELECT * FROM produtos;");
}

