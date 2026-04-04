import './style.scss';

const UIButton = ({
  label,
  type = 'button',
  className = '',
  size = 'md',
  theme = 'accent',
  onClick,
}) => {
    return (
        <button
        type={type}
        className={`ui-button ui-button--${size} ui-button--${theme} ${className}`}
        onClick={onClick}
        >
        {label}
        </button>
    );
};

export default UIButton;
