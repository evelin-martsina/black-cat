import { Layout } from 'src/components/Layout';
import { Select } from 'src/components/Select';

import { useCurrenciesContext } from '../CurrenciesContext';

export const CurrenciesSelector = () => {
    const { ids, selectedId, setSelectedId, isLoading, isError } = useCurrenciesContext();

    return (
        <Layout isError={isError} isLoading={isLoading}>
            <Select options={ids} value={selectedId} onChange={setSelectedId} />
        </Layout>
    );
};
