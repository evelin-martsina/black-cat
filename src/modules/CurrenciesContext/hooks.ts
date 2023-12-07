import { useContext } from 'react';

import { CurrenciesContext } from './CurrenciesContext';

export const useCurrenciesContext = () => useContext(CurrenciesContext);
