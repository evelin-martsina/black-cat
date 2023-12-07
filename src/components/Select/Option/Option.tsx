/* eslint-disable prefer-arrow-callback */
import { memo } from 'react';

import s from './styles.module.css';

interface OptionProps {
    value: string;
    isActive: boolean;
    onChange: (value: string) => void;
}

export const Option = memo(function Option({ value, isActive, onChange }: OptionProps) {
    return (
        <li role="presentation" className={`${s.option} ${isActive && s.active}`} onClick={() => onChange(value)}>
            {value}
        </li>
    );
});
