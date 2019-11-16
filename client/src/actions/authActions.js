import { LOGIN, LOGOUT } from './types';

export const successfulLogin = () => dispatch => {
    dispatch({
        type: LOGIN,
    })
}

export const successfulLogout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    })
}