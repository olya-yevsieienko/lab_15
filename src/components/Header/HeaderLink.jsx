import { NavLink } from 'react-router-dom';

const HeaderLink = ({ link }) => {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `header__nav-link-item${isActive ? ' header__nav-link-item--active' : ''}`
      }
    >
      {link.title}
    </NavLink>
  );
};

export default HeaderLink;
