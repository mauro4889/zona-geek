import { SET_USER } from "./actionUser"

const initialState = {
    visible: false,
    user: null
}

export const reducerUser = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case SET_USER:
            return {...state, user:payload}
        default:
            return state
    }
}