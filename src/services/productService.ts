import { allProducts } from "../repositories/repository.js";

export function prodService(){
    const products = allProducts();
    return products;
}