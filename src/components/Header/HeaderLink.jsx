import { Link } from "react-router-dom";

const HeaderLink = ({link}) => {
    return (
        <Link
            to={link.to}
            className="header__nav-link-item"
        >
            {link.title}
        </Link>
    );
};

export default HeaderLink;
