import './style.scss';

const UIButton = ({
    label,
    size = 'md',
    theme = 'black',
    onClick,
}) => {
    return (
        <button
            className={`ui-button ui-button--${size} ui-button--${theme}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default UIButton;