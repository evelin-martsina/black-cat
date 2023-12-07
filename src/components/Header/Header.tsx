import s from './styles.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <h1 className={s.heading}>Cat</h1>
            <div className={s.description}>
                <span>currencies</span>
                <span>academic</span>
                <span>terms</span>
            </div>
        </header>
    );
};
