import './style.scss';

const UIButton = ({
    label,
    size = 'md',
    onClick,
}) => {
    return (
        <button
            className={`ui-button ui-button--${size}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default UIButton;