import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>Cat</h1>
            <div className={styles.description}>
                <span>currencies</span>
                <span>academic</span>
                <span>terms</span>
            </div>
        </header>
    );
};
