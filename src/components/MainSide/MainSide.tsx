import { Header } from 'src/components/Header';
import { Input } from 'src/components/Input';

import s from './styles.module.css';

export const MainSide = () => {
    return (
        <section className={s.container}>
            <Header />
            <Input />
        </section>
    );
};
