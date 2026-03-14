import { Link } from 'react-router-dom';
import { races } from '../../models/races';

import './style.scss';

const formatRaceDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const RacesPage = () => {
  return (
    <section className="races-page">
      <header className="races-page__header">
        <p className="races-page__eyebrow">Календарь стартов</p>
        <h1>Дистанции сезона 2026</h1>
        <p>
          Выберите старт и сравните дистанции по километражу, набору высоты и лимиту времени.
        </p>
      </header>

      <ul className="races-page__list">
        {races.map((race) => (
          <li key={race.slug}>
            <article className="races-page__card">
              <div className="races-page__meta">
                <span>{formatRaceDate(race.date)}</span>
                <span>{race.region}</span>
                <span>{race.location}</span>
              </div>

              <h2>{race.title}</h2>
              <p>{race.shortDescription}</p>

              <h3>Дистанции</h3>
              <ul className="races-page__distances">
                {race.distances.map((distance) => (
                  <li key={`${race.slug}-${distance.km}`}>
                    <Link to={`/races/${race.slug}/${distance.km}`} className="races-page__distance-link">
                      <span>{distance.km} км</span>
                      <span>+{distance.elevationGainM} м</span>
                      <span>лимит {distance.cutoffH} ч</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RacesPage;
