import s from './styles.module.css';

interface OptionProps {
    value: string;
    isActive: boolean;
    onChange: (value: string) => void;
}

export const Option = ({ value, isActive, onChange }: OptionProps) => {
    return (
        <li role="presentation" className={`${s.option} ${isActive && s.active}`} onClick={() => onChange(value)}>
            {value}
        </li>
    );
};
