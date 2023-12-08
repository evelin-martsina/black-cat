import { DownSide } from 'src/components/DownSide';
import { MainSide } from 'src/components/MainSide';

import { CurrenciesContextProvider } from 'src/modules/CurrenciesContext';

import styles from './styles.module.css';

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <CurrenciesContextProvider>
                <MainSide />
                <DownSide />
            </CurrenciesContextProvider>
        </main>
    );
};
