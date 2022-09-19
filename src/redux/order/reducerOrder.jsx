import { CLEAR_ERROR, GET_ORDERS_FAILED, GET_ORDERS_START, RECIVE_ORDERS, UPDATE_LOCAL_ORDERS } from "./actionOrder"

const initialState = {
    orders: [],
    loading: false,
    error: null
}

export const reducerOrder = (state = initialState, action) => {
    const { type, payload } = state
    switch (type) {
        case RECIVE_ORDERS:
            return {
                ...state,
                orders: payload,
                loading: false
            }
        case GET_ORDERS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }
        case GET_ORDERS_START:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_LOCAL_ORDERS:
            return {
                ...state,
                orders: [...state.orders, payload]
            }
        default:
            return state
    }
}