import { connection } from "../database/pg.js";

export function allProducts(){
    return connection.query("SELECT * FROM produtos;");
}

