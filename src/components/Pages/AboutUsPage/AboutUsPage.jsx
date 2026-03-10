import { aboutMetrics } from '../../../models';

import './AboutUsPage.scss';

const AboutUsPage = () => {
  return (
    <section className="about-page">
      <div className="about-page__intro">
        <p className="about-page__eyebrow">О проекте</p>
        <h1>Trail Run 2026 - это не просто забег</h1>
        <p>
          Мы создаем событие на стыке спорта, природы и сообщества. Наша команда развивает
          культуру трейлраннинга через безопасные маршруты, качественную организацию и
          теплую атмосферу старта.
        </p>
      </div>

      <div className="about-page__metrics" role="list" aria-label="Метрики проекта">
        {aboutMetrics.map((metric) => (
          <article className="about-page__metric" key={metric.label} role="listitem">
            <span>{metric.value}</span>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>

      <article className="about-page__story">
        <h2>Как мы работаем</h2>
        <p>
          Каждый маршрут проектируется совместно с локальными гидами и спасателями.
          Перед стартом мы проводим брифинг по безопасности, а во время гонки держим связь
          с участниками через волонтерские точки и дежурные команды поддержки.
        </p>
        <p>
          После финиша участников ждет восстановительная зона, фотоархив и открытое
          комьюнити для совместных тренировок перед следующим сезоном.
        </p>
      </article>
    </section>
  );
};

export default AboutUsPage;
