export type ProductEntity = {
    id: number,
    nome: string,
    descricao: string,
    quantidade: number
}

export type Product = Omit<ProductEntity, "id">

export type ProductUpdate = Partial<Product>