type Installment = {
    quantity: number,
    value: number
}

type ProductType = {
    productId: number,
    productName: string,
    stars: number,
    imageUrl: string,
    listPrice?: number,
    price: number,
    installments: Installment[]
}

export default ProductType;