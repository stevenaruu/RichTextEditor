/* eslint-disable @typescript-eslint/no-explicit-any */
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import storage from 'redux-persist/es/storage';
import { DocumentSlice } from './document/document-slice';

const rootReducer = combineReducers({
    document: DocumentSlice.reducer,
});

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage
    },
    rootReducer,
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;