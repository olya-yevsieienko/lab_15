import { Link } from 'react-router-dom';
import { navigationList } from '../../models/navigation';
import HeaderLink from './HeaderLink';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__brand">
          <span className="header__brand-mark">TR</span>
          <span className="header__brand-text">Trail Run 2026</span>
        </Link>

        <nav className="header__nav" aria-label="Основная навигация">
          <ul className="header__nav-list">
            {navigationList.map((link) => (
              <li className="header__nav-item" key={link.to}>
                <HeaderLink link={link} />
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/registration" className="header__action">
          На старт
        </Link>
      </div>
    </header>
  );
};

export default Header;
