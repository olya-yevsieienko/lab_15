import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1>Страница не найдена</h1>
      <p>Возможно, маршрут изменился. Вернитесь на главную и продолжите навигацию по сайту.</p>
      <Link to="/" className="not-found__link">
        На главную
      </Link>
    </section>
  );
};

export default NotFound;
