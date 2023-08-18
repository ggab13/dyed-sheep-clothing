import {
    compose,
    legacy_createStore as createStore,
    applyMiddleware,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';
// root-reducer

/* const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
}; */

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV === 'development' && logger,
    thunk,
].filter(Boolean);

/* const thunkMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        action(dispatch);
    }
}; */

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

export const persistor = persistStore(store);
