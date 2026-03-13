import { Link, useParams } from 'react-router-dom';
import { races } from '../../models/races';

import './style.scss';

const formatRaceDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const RaceDistancePage = () => {
  const { slug, distanceKm } = useParams();
  const selectedKm = Number(distanceKm);

  const race = races.find((item) => item.slug === slug);
  const distance = race?.distances.find((item) => item.km === selectedKm);

  if (!race || !distance) {
    return (
      <section className="race-distance-page race-distance-page--missing">
        <h1>Дистанция не найдена</h1>
        <p>Проверьте ссылку или выберите дистанцию из календаря стартов.</p>
        <Link to="/races" className="race-distance-page__back">
          Вернуться к дистанциям
        </Link>
      </section>
    );
  }

  return (
    <section className="race-distance-page">
      <header className="race-distance-page__hero">
        <p className="race-distance-page__eyebrow">Паспорт дистанции</p>
        <h1>{race.title}</h1>
        <p>{race.longDescription}</p>

        <div className="race-distance-page__chips">
          <span>{formatRaceDate(race.date)}</span>
          <span>{race.region}</span>
          <span>{race.location}</span>
          <span>{race.difficulty}</span>
        </div>
      </header>

      <article className="race-distance-page__distance-card">
        <h2>Выбранная дистанция: {distance.km} км</h2>
        <ul>
          <li>Набор высоты: +{distance.elevationGainM} м</li>
          <li>Лимит времени: {distance.cutoffH} ч</li>
          <li>Формат: trail running</li>
        </ul>
      </article>

      <div className="race-distance-page__grid">
        <article className="race-distance-page__panel">
          <h3>Стартовый пакет</h3>
          <ul>
            {race.participantPack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="race-distance-page__panel">
          <h3>Правила участия</h3>
          <ul>
            {race.rules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <article className="race-distance-page__panel race-distance-page__panel--faq">
        <h3>FAQ</h3>
        <ul>
          {race.faq.map((item) => (
            <li key={item.question}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
      </article>

      <Link to="/races" className="race-distance-page__back">
        ← Назад к списку дистанций
      </Link>
    </section>
  );
};

export default RaceDistancePage;
