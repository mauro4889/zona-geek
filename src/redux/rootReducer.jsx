import { combineReducers } from "redux";
import { reducerCart } from "./cart/reducerCart";



export const rootReducer = combineReducers({
    carrito: reducerCart
})



