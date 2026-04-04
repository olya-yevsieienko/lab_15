import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <h2 className="h2">
            Trail Run 2026
          </h2>
          <p>Горный фестиваль бега, который объединяет спорт, природу и сообщество.</p>
        </div>

        <nav className="footer__nav" aria-label="Дополнительная навигация">
          <Link to="/races">Дистанции</Link>
          <Link to="/registration">Регистрация</Link>
          <Link to="/about">О проекте</Link>
        </nav>

        <div className="footer__meta">
          <p>Москва, Россия</p>
          <p>hello@trailrun.dev</p>
          <p>© {currentYear} Trail Run Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
