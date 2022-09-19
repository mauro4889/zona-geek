import { combineReducers } from "redux";
import { reducerCart } from "./cart/reducerCart";
import {reducerUser} from "./user/reducerUser"



export const rootReducer = combineReducers({
    carrito: reducerCart,
    user: reducerUser
})



