import { NavLink } from 'react-router-dom';

const HeaderLink = ({ link }) => {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) => `header__nav-link${isActive ? ' header__nav-link--active' : ''}`}
    >
      {link.title}
    </NavLink>
  );
};

export default HeaderLink;
