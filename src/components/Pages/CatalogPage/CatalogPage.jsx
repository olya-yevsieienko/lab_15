import { distanceList } from '../../../models';

import './CatalogPage.scss';

const CatalogPage = () => {
  return (
    <section className="catalog-page">
      <header className="catalog-page__header">
        <p className="catalog-page__eyebrow">Каталог маршрутов</p>
        <h1>Выберите дистанцию под свой уровень подготовки</h1>
        <p>
          Все трассы проходят маркировку и тестируются до старта. Для каждой дистанции
          предусмотрены лимиты времени и пункты поддержки.
        </p>
      </header>

      <div className="catalog-page__grid">
        {distanceList.map((distance) => (
          <article className="catalog-page__card" key={distance.title}>
            <h2>{distance.title}</h2>
            <p>{distance.description}</p>
            <dl>
              <div>
                <dt>Уровень</dt>
                <dd>{distance.level}</dd>
              </div>
              <div>
                <dt>Набор</dt>
                <dd>{distance.gain}</dd>
              </div>
              <div>
                <dt>Лимит</dt>
                <dd>{distance.duration}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CatalogPage;
