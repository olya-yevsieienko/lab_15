import { useNavigate } from 'react-router-dom';
import { registrationSteps } from '../../models/home-page';
import UIButton from '../../components/ui/UIButton/UIButton';

import './style.scss';

const RegistrationPage = () => {
  const navigate = useNavigate();

  return (
    <section className="registration-page">
      <article className="registration-page__intro">
        <p className="registration-page__eyebrow">Регистрация</p>
        <h1>Займите стартовый слот заранее</h1>
        <p>
          Регистрация на Trail Run 2026 открыта до 1 июня 2026 года. После оплаты вы получите
          письмо с подтверждением и памяткой участника.
        </p>
      </article>

      <article className="registration-page__steps">
        <h2>Что нужно сделать</h2>
        <ol>
          {registrationSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="registration-page__actions">
          <UIButton label="Выбрать дистанцию" onClick={() => navigate('/races')} />
          <UIButton
            label="На главную"
            onClick={() => navigate('/')}
            className="registration-page__secondary"
          />
        </div>
      </article>
    </section>
  );
};

export default RegistrationPage;
