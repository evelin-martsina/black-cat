import { Layout } from 'src/components/Layout';

import { useCurrenciesContext } from '../CurrenciesContext';

import s from './styles.module.css';

export const TermTitle = () => {
    const { selectedCurrency, isLoading, isError } = useCurrenciesContext();

    return (
        <Layout isError={isError} isLoading={isLoading}>
            <h1 className={s.title}>{selectedCurrency}</h1>
        </Layout>
    );
};
