import "./style.scss";

const UIChip = ({label, theme = 'soft'}) => {
    return (
        <span className={`ui-chip ui-chip--${theme}`}>
            {label}
        </span>
    );
};

export default UIChip;
