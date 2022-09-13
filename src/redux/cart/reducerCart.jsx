import { AGREGAR, BORRAR, REMOVER } from "./actionCart"
import { agregarCarrito, removerCarrito } from "./utilsCart"


const initialState ={
    products:[],
    total: 0
}

export const reducerCart = (state = initialState, action)=>{
    const {type, payload} = action
    switch(type){
        case AGREGAR:
            return {
                ...state,
                products: agregarCarrito(state.products, payload),
            }
        case REMOVER:
            return{
                ...state,
                products: removerCarrito(state.products, payload)
            }
        case BORRAR:
            return initialState
        default:
            return state
    }
}