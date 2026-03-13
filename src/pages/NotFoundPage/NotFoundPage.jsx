import { Link } from 'react-router-dom';

import './style.scss';

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <p className="not-found-page__code">404</p>
      <h1>Страница не найдена</h1>
      <p>Похоже, такого адреса больше нет. Вернитесь на главную и продолжите навигацию.</p>
      <Link to="/" className="not-found-page__link">
        На главную
      </Link>
    </section>
  );
};

export default NotFoundPage;
