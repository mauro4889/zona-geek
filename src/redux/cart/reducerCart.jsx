import { AGREGAR, BORRAR } from "./actionCart"


const initialState =[]

export const reducerCart = (state = initialState, action)=>{
    switch(action.type){
        case AGREGAR:
            return [...state, action.payload]
        case BORRAR:
            return initialState
        default:
            return state
    }
}