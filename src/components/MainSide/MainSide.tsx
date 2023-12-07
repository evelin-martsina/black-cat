import { Header } from 'src/components/Header';
import { CurrenciesSelector } from 'src/modules/CurrenciesSelector';

import s from './styles.module.css';

export const MainSide = () => {
    return (
        <section className={s.container}>
            <Header />
            <CurrenciesSelector />
        </section>
    );
};
