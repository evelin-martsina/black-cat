import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICurrenciesData } from 'src/types';
import { baseUrl } from './constants';

export const currenciesApi = createApi({
    reducerPath: 'currencies',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCurrencies: builder.query<ICurrenciesData[], void>({
            query: () => 'currencies',
            transformResponse: (res: { data: ICurrenciesData[] }) => res.data,
        }),
    }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
