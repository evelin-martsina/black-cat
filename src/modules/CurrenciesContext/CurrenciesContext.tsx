import { createContext, useEffect, useMemo, useState } from 'react';
import { useGetCurrenciesQuery } from 'src/store';

interface IProps {
    children: React.ReactNode;
}

interface IContext {
    ids: string[];
    isLoading: boolean;
    isError: boolean;
    selectedId: string;
    setSelectedId: React.Dispatch<React.SetStateAction<string>>;
    selectedCurrency: string | undefined;
}

export const CurrenciesContext = createContext<IContext>({} as IContext);

export const CurrenciesContextProvider = ({ children }: IProps) => {
    const { data, isLoading, isFetching, isError } = useGetCurrenciesQuery();
    const [selectedId, setSelectedId] = useState('');

    useEffect(() => {
        if (data) {
            setSelectedId(data[0].id);
        }
    }, [data]);

    const ids = useMemo(() => {
        return data?.map((currency) => currency.id) ?? [];
    }, [data]);

    const value = useMemo(
        () => ({
            ids,
            isLoading: isLoading || isFetching,
            isError,
            selectedId,
            setSelectedId,
            selectedCurrency: data?.find((currency) => currency.id === selectedId)?.name,
        }),
        [data, ids, isError, isFetching, isLoading, selectedId],
    );

    return <CurrenciesContext.Provider value={value}>{children}</CurrenciesContext.Provider>;
};
