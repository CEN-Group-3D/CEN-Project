import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    isLoggedIn: authReducer,
})