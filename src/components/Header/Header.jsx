import { Link } from 'react-router-dom';
import {navigationList} from '../../models';
import HeaderLink from './HeaderLink';

import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div>
                <Link to="/">
                    Logo
                </Link>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    {navigationList.map((link) => (
                        <li className="header__nav-link">
                            <HeaderLink link={link} />
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="header__menu-button">
                Button
            </button>
        </header>
    );
};

export default Header;
