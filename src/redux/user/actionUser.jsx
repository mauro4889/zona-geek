export const SET_USER = 'SET_USER'
export const VISIBLE_MENU = 'VISIBLE_MENU'

export const setCurrentUser = user =>({
    type: SET_USER,
    payload: user
})