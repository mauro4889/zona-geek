import { combineReducers } from "redux";
import { reducerCart } from "./cart/reducerCart";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";


export const rootReducer = combineReducers({
    carrito: reducerCart
})

export default persistReducer(
{
    key: 'global',
    storage
}, rootReducer)

