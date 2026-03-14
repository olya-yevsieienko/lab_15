import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { races } from '../../models/races';
import UIButton from '../../components/ui/UIButton/UIButton';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    comment: '',
    agreement: false,
  });

  const race = races.find((item) => item.slug === slug);
  const distance = race?.distances.find((item) => item.km === selectedKm);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (!race || !distance) {
    return (
      <section className="race-distance-page race-distance-page--missing">
        <h1 className="race-distance-page__title race-distance-page__title--hero">
          Дистанция не найдена
        </h1>
        <p className="race-distance-page__text">
          Проверьте ссылку или выберите дистанцию из календаря стартов.
        </p>
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
        <h1 className="race-distance-page__title race-distance-page__title--hero">{race.title}</h1>
        <p className="race-distance-page__text">{race.longDescription}</p>

        <div className="race-distance-page__chips">
          <span className="race-distance-page__chip">{formatRaceDate(race.date)}</span>
          <span className="race-distance-page__chip">{race.region}</span>
          <span className="race-distance-page__chip">{race.location}</span>
          <span className="race-distance-page__chip">{race.difficulty}</span>
        </div>
      </header>

      <article className="race-distance-page__distance-card">
        <h2 className="race-distance-page__title race-distance-page__title--section">
          Выбранная дистанция: {distance.km} км
        </h2>
        <ul className="race-distance-page__list race-distance-page__list--distance">
          <li>Набор высоты: +{distance.elevationGainM} м</li>
          <li>Лимит времени: {distance.cutoffH} ч</li>
          <li>Формат: trail running</li>
        </ul>
      </article>

      <div className="race-distance-page__grid">
        <article className="race-distance-page__panel">
          <h3 className="race-distance-page__title race-distance-page__title--panel">
            Стартовый пакет
          </h3>
          <ul className="race-distance-page__list race-distance-page__list--panel">
            {race.participantPack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="race-distance-page__panel">
          <h3 className="race-distance-page__title race-distance-page__title--panel">
            Правила участия
          </h3>
          <ul className="race-distance-page__list race-distance-page__list--panel">
            {race.rules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <article className="race-distance-page__panel race-distance-page__panel--faq">
        <h3 className="race-distance-page__title race-distance-page__title--panel">FAQ</h3>
        <ul className="race-distance-page__faq-list">
          {race.faq.map((item) => (
            <li className="race-distance-page__faq-item" key={item.question}>
              <h4 className="race-distance-page__title race-distance-page__title--question">
                {item.question}
              </h4>
              <p className="race-distance-page__text">{item.answer}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className="race-distance-page__panel race-distance-page__panel--form">
        <form className="race-distance-page__form" onSubmit={handleSubmit}>
          <label className="race-distance-page__field">
            <span className="race-distance-page__label">Имя и фамилия</span>
            <input
              className="race-distance-page__input"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Иван Петров"
              required
            />
          </label>

          <label className="race-distance-page__field">
            <span className="race-distance-page__label">Email</span>
            <input
              className="race-distance-page__input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </label>

          <label className="race-distance-page__field">
            <span className="race-distance-page__label">Телефон</span>
            <input
              className="race-distance-page__input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 000-00-00"
              required
            />
          </label>

          <label className="race-distance-page__field">
            <span className="race-distance-page__label">Дистанция</span>
            <input
              className="race-distance-page__input"
              type="text"
              value={`${distance.km} км`}
              readOnly
            />
          </label>

          <label className="race-distance-page__field race-distance-page__field--wide">
            <span className="race-distance-page__label">Комментарий (необязательно)</span>
            <textarea
              className="race-distance-page__input race-distance-page__input--textarea"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Например: нужна помощь с трансфером"
              rows={4}
            />
          </label>

          <label className="race-distance-page__checkbox">
            <input
              className="race-distance-page__checkbox-input"
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              required
            />
            <span className="race-distance-page__checkbox-text">
              Согласен(а) с правилами участия и обработкой персональных данных
            </span>
          </label>

          <div className="race-distance-page__actions">
            <UIButton label="Отправить заявку" type="submit" />
          </div>
        </form>

        {isSubmitted && (
          <p className="race-distance-page__success">
            Заявка на {distance.km} км отправлена. Проверьте почту, {formData.fullName}.
          </p>
        )}
      </article>

      <Link to="/races" className="race-distance-page__back">
        ← Назад к списку дистанций
      </Link>
    </section>
  );
};

export default RaceDistancePage;
