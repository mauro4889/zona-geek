import { products } from "../../data/products"
import { AGREGAR, BORRAR, REMOVER } from "./actionCart"
import { agregarCarrito, removerCarrito } from "./utilsCart"


const initialState = {
    products: [],
    total: 0
}

export const reducerCart = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case AGREGAR:
            const newAddedProducts = agregarCarrito(state.products, payload);
            const newSubtotal = newAddedProducts.reduce(
                (sub, products) => (sub += products.price * products.quantity),
                0
            )
            return {
                ...state,
                products: newAddedProducts,
                total: newSubtotal,
            }
        case REMOVER:
            const newRemovedProducts = removerCarrito(state.products, payload);
            const newSubtotalReduce = newRemovedProducts.reduce(
                (sub, products) => (sub = products.price * products.quantity),
                0
            )
            return {
                ...state,
                products: newRemovedProducts,
                total: newSubtotalReduce,
            }
        case BORRAR:
            return initialState
        default:
            return state
    }
}