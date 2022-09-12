import { AGREGAR, BORRAR } from "./actionCart"
import { agregarCarrito } from "./utilsCart"


const initialState ={
    products:[],
    totalCost: 0
}

export const reducerCart = (state = initialState, action)=>{
    const {type, payload} = action
    switch(type){
        case AGREGAR:
            return {
                ...state,
                products: agregarCarrito(state.products, payload)
            }
        case BORRAR:
            return initialState
        default:
            return state
    }
}