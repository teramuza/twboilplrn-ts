import { persistStore, persistReducer } from 'redux-persist';

import combinedReducer from '@states';
import { configureStore } from '@reduxjs/toolkit';
import middlewares from '@redux/middlewares';
import { reduxStorage } from '@redux/storage';
import reactotron from '@app/Config/reactotron.config';

const persistConfig = {
    key: 'root',
    storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);
const storeEnhancers = [];

if (__DEV__) {
    storeEnhancers.push(reactotron.createEnhancer());
}

const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewares,
    devTools: __DEV__,
    enhancers: storeEnhancers,
});

const persistor = persistStore(store);

export const getPersistor = () => persistor;
export const getStore = () => store;
export const getState = () => store.getState();

export default store;
