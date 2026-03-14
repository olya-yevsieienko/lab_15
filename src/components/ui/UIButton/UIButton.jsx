import './style.scss';

const UIButton = ({
  label,
  size = 'md',
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`ui-button ui-button--${size} ${className}`.trim()}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default UIButton;
