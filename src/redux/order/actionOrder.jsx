import { createOrderDocuments, getFirebaseOrders } from "../../firebase/firebase-utils"
import { limpiarCart } from "../cart/actionCart"

export const RECIVE_ORDERS = 'RECIVE_ORDERS'
export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED'
export const UPDATE_LOCAL_ORDERS = 'UPDATE_LOCAL_ORDERS'
export const GET_ORDERS_START = 'GET_ORDERS_START'
export const CLEAR_ERROR = 'CLEAR_ERROR'


export const startLoadingOrders = () => ({ type: GET_ORDERS_START });
export const failedGetOrders = error => ({
    type: GET_ORDERS_FAILED,
    payload: error || 'Hubo un error!',
});
export const clearError = () => ({
    type: CLEAR_ERROR,
});


export const getOrders = userid => {
    return async dispatch => {
        try {
            const orders = await getFirebaseOrders(userid)
            dispatch({
                type: RECIVE_ORDERS,
                payload: orders
            })
        } catch (error) {
            dispatch(failedGetOrders(error.message))
        }
    }
}

export const createOrder = order => {
    return async dispatch => {
        try {
            await createOrderDocuments(order)
            dispatch(getOrders(order.user))
            return true
        } catch (error) {
            dispatch({
                type: GET_ORDERS_FAILED,
                payload: error
            })
            return false
        }
    }
}