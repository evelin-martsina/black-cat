import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CurrenciesData } from 'src/types';
import { baseUrl } from './constants';

export const currenciesApi = createApi({
    reducerPath: 'currencies',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCurrencies: builder.query<CurrenciesData[], void>({
            query: () => 'currencies',
            transformResponse: (res: { data: CurrenciesData[] }) => res.data,
        }),
    }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
