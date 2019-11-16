import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    persistedState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
})

export default store;