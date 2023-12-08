import { configureStore } from '@reduxjs/toolkit';
import { currenciesApi } from './currencies';

export const store = configureStore({
    reducer: { [currenciesApi.reducerPath]: currenciesApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currenciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
