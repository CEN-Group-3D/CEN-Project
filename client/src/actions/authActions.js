import { LOGIN, LOGOUT } from './types';

export const onSuccessfulLogin = () => dispatch => {
    dispatch({
        type: LOGIN,
    })
}

export const onSuccessfulLogout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    })
}