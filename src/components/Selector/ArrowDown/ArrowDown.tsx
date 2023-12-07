import DownChevron from 'src/assets/svg/chevron-down.svg';

interface ArrowDownProps {
    isOpen: boolean;
}

export const ArrowDown = ({ isOpen }: ArrowDownProps) => {
    return (
        <div style={{ padding: '10px 5px 5px' }}>
            <DownChevron style={isOpen ? { transform: 'rotate(180deg)' } : {}} />
        </div>
    );
};
