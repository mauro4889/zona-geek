import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./rootReducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";


const initialState = {}

const middleware = [thunk]

export const store = createStore( 
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export const persistor = persistStore(store)