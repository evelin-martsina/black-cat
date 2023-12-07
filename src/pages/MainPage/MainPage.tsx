import { DownSide } from 'src/components/DownSide';
import { MainSide } from 'src/components/MainSide';
import s from './styles.module.css';

export const MainPage = () => {
    return (
        <main className={s.main}>
            <MainSide />
            <DownSide />
        </main>
    );
};
