import { useNavigate } from 'react-router-dom';
import { distanceList, featuresList } from '../../../models';
import UIButton from '../../ui/UIButton/UIButton';
import HomePageFeature from './HomePageFeature/HomePageFeature';

import './style.scss';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="home-page__banner">
        <p className="home-page__eyebrow">Горный фестиваль бега</p>
        <h1 className="home-page__banner-title">TRAIL RUN 2026</h1>
        <p className="home-page__banner-description">
          20 июня 2026, Красная Поляна. Один старт, три дистанции и мощная атмосфера
          настоящего трейла.
        </p>
        <div className="home-page__banner-actions">
          <UIButton label="Зарегистрироваться" size="lg" onClick={() => navigate('/registration')} />
          <button
            className="home-page__ghost-action"
            type="button"
            onClick={() => navigate('/catalog')}
          >
            Посмотреть дистанции
          </button>
        </div>
      </section>

      <section className="home-page__features">
        <h2 className="home-page__section-title">Почему участники выбирают нас</h2>
        <ul className="home-page__feature-list">
          {featuresList.map((feature) => (
            <li className="home-page__feature-item" key={feature.title}>
              <HomePageFeature feature={feature} />
            </li>
          ))}
        </ul>
      </section>

      <section className="home-page__distances">
        <h2 className="home-page__section-title">Дистанции сезона</h2>
        <div className="home-page__distance-grid">
          {distanceList.map((distance) => (
            <article className="home-page__distance-card" key={distance.title}>
              <h3>{distance.title}</h3>
              <p>{distance.description}</p>
              <div className="home-page__distance-meta">
                <span>{distance.level}</span>
                <span>{distance.gain}</span>
                <span>{distance.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-page__registration">
        <h2>Регистрация открыта до 1 июня 2026 года</h2>
        <p>
          Количество слотов ограничено. Забронируйте место заранее, чтобы выбрать
          комфортную дистанцию и стартовый пакет.
        </p>
        <UIButton label="Перейти к регистрации" size="lg" onClick={() => navigate('/registration')} />
      </section>
    </div>
  );
};

export default HomePage;
