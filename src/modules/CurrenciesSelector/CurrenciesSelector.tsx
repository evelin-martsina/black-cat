import { Layout } from 'src/components/Layout';
import { Selector } from 'src/components/Selector';

import { useCurrenciesContext } from '../CurrenciesContext';

export const CurrenciesSelector = () => {
    const { ids, selectedId, setSelectedId, isLoading, isError } = useCurrenciesContext();

    return (
        <Layout isError={isError} isLoading={isLoading}>
            <Selector options={ids} value={selectedId} onChange={setSelectedId} />
        </Layout>
    );
};
