import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";


export function add (product: ProductCartProps[], newproduct: ProductProps){
    const existingProduct = product.find(({id}) => newproduct.id === id)

    if (existingProduct){
        return product.map((product) => 
            product.id === existingProduct.id 
            ? {...product, quantity: product.quantity + 1 }
            : product)
    }

    return[...product, {...newproduct, quantity: 1}]
}

export function remove (product: ProductCartProps[], productRemovedId: string){
    const updatedProduct = product.map((product) => product.id === productRemovedId ? {
        ...product,
        quantity: product.quantity > 1 ? product.quantity - 1 : 0} 
        : product )

    return updatedProduct.filter((product) => product.quantity > 0)
}