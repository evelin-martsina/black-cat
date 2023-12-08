import DownChevron from 'src/assets/svg/chevron-down.svg';

import styles from './styles.module.css';

interface IArrowDownProps {
    isOpen: boolean;
}

export const ArrowDown = ({ isOpen }: IArrowDownProps) => {
    return (
        <div className={styles.wrapper}>
            <DownChevron style={isOpen ? { transform: 'rotate(180deg)' } : {}} />
        </div>
    );
};
