import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist/es/constants';

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
});

const middlewares = [serializableMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export default middlewares;
