import { useNavigate } from 'react-router-dom';
import UIButton from '../../components/ui/UIButton/UIButton';

import './style.scss';

const RegistrationPage = () => {
    const navigate = useNavigate();

    return (
        <section className="registration-page">
            <div className="surface-soft-block">
                <h2 className="h2">
                    Регистрация
                </h2>
                <p className="registration-page__description">
                    Займите стартовый слот заранее
                </p>
                <p className="registration-page__description">
                    Регистрация на Trail Run 2026 открыта до 1 июня 2026
                    года. После оплаты вы получите письмо с подтверждением
                    и памяткой участника.
                </p>
            </div>
            <div className="surface-soft-block">
                <h2 className="h2">
                    Что нужно сделать
                </h2>
                <ul>
                    <li>
                        Выберите дистанцию и заполните анкету участника.
                    </li>
                    <li>
                        Загрузите медицинский допуск и укажите экстренный контакт.
                    </li>
                    <li>
                        Оплатите стартовый пакет и получите подтверждение на email.
                    </li>
                    <li>
                        Приезжайте на стартовый городок и заберите номер участника.
                    </li>
                </ul>
                <div className="registration-page__buttons">
                    <UIButton
                        label="Выбрать дистанцию"
                        onClick={() => navigate('/races')}
                    />
                    <UIButton
                        label="Перейти на главную"
                        theme="dark-ghost"
                        onClick={() => navigate('/')}
                    />
                </div>
            </div>
        </section>
    );
};

export default RegistrationPage;
