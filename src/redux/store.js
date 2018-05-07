import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducers from './rootReducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);