/* именованная функция нужна для отладки */
/* eslint-disable prefer-arrow-callback */
import { memo } from 'react';

import styles from './styles.module.css';

interface IOptionProps {
    value: string;
    isActive: boolean;
    onChange: (value: string) => void;
}

export const Option = memo(function Option({ value, isActive, onChange }: IOptionProps) {
    return (
        <li
            role="presentation"
            className={`${styles.option} ${isActive && styles.active}`}
            onClick={() => onChange(value)}
        >
            {value}
        </li>
    );
});
