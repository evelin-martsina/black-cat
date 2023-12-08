import { useEffect, useRef, useState } from 'react';

import { ArrowDown } from './ArrowDown';
import { Option } from './Option';

import styles from './styles.module.css';

interface ISelectProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

export const Select = ({ onChange, options, value }: ISelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = ({ target }: MouseEvent) => {
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div ref={rootRef} className={styles.wrapper} role="presentation" onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.value}>{value}</div>
            <ArrowDown isOpen={isOpen} />
            {isOpen && (
                <ul className={styles.list}>
                    {options.map((option) => (
                        <Option key={option} onChange={onChange} isActive={option === value} value={option} />
                    ))}
                </ul>
            )}
        </div>
    );
};
