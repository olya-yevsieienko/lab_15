import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-link">
                        <Link
                            to="/"
                            className="header__nav-link-item"
                        >
                            Новости
                        </Link>
                    </li>
                    <li className="header__nav-link">
                        <Link
                            to="/about"
                            className="header__nav-link-item"
                        >
                            О проекте
                        </Link>
                    </li>
                    <li className="header__nav-link">
                        <Link
                            to="/contacts"
                            className="header__nav-link-item"
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
