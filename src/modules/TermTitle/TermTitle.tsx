import { Layout } from 'src/components/Layout';

import { useCurrenciesContext } from '../CurrenciesContext';

import styles from './styles.module.css';

export const TermTitle = () => {
    const { selectedCurrency, isLoading, isError } = useCurrenciesContext();

    return (
        <Layout isError={isError} isLoading={isLoading}>
            <h1 className={styles.title}>{selectedCurrency}</h1>
        </Layout>
    );
};
