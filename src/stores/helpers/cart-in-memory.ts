import { ProductCartProps } from "../cart-store";


export function add (product: ProductCartProps[], newproduct: ProductCartProps){
    const existingProduct = product.find(({id}) => newproduct.id === id)

    if (existingProduct){
        return product.map((product) => 
            product.id === existingProduct.id 
            ? {...product, quantity: product.quantity + 1 }
            : product)
    }

    return[...product, {...newproduct, quantity: 1}]
}