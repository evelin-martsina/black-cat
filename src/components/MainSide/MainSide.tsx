import { Header } from 'src/components/Header';
import { CurrenciesSelector } from 'src/modules/CurrenciesSelector';

import styles from './styles.module.css';

export const MainSide = () => {
    return (
        <section className={styles.container}>
            <Header />
            <CurrenciesSelector />
        </section>
    );
};
