import s from './styles.module.css';

interface SelectorProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

export const Selector = ({ onChange, options, value }: SelectorProps) => {
    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        onChange(e.target.value);
    };
    return (
        <select className={s.wrapper} onChange={handleChange} value={value}>
            {options.map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>
    );
};
