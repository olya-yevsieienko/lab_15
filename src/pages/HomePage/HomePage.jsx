import {useNavigate} from 'react-router-dom';
import { distanceList, featuresList } from '../../models/home-page';
import UIButton from '../../components/ui/UIButton/UIButton';
import HomePageFeature from '../../components/Pages/HomePage/HomePageFeature/HomePageFeature';

import './style.scss';
import UIChip from '../../components/ui/UIChip/UIChip';

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
                    <UIButton
                        label="Зарегистрироваться"
                        size="lg"
                        onClick={() => navigate('/registration')}
                    />
                    <UIButton
                        label="Посмотреть дистанции"
                        size="lg"
                        theme="ghost"
                        onClick={() => navigate('/races')}
                    />
                </div>
            </section>
            <section className="home-page__features surface-soft-block">
                <h2 className="h2">
                    Почему участники выбирают нас
                </h2>
                <ul className="home-page__feature-list">
                    {featuresList.map((feature) => (
                        <li
                            key={feature.title}
                            className="home-page__feature-item"
                        >
                            <HomePageFeature feature={feature} />
                        </li>
                    ))}
                </ul>
            </section>
            <section className="home-page__distances surface-soft-block">
                <h2 className="h2">
                    Дистанции сезона
                </h2>
                <div className="home-page__distance-grid">
                {distanceList.map((distance) => (
                    <article
                        className="white-block"
                        key={distance.title}
                    >
                        <h3 className="h3">
                            {distance.title}
                        </h3>
                        <p>{distance.description}</p>
                        <div className="home-page__distance-meta">
                            <UIChip
                                label={distance.level}
                                theme="accent"
                            />
                            <UIChip
                                label={distance.gain}
                                theme="accent"
                            />
                            <UIChip
                                label={distance.duration}
                                theme="accent"
                            />
                        </div>
                    </article>
                ))}
                </div>
            </section>
            <section className="dark-block">
                <h2 className="h2">
                    Регистрация открыта до 1 июня 2026 года
                </h2>
                <p>
                    Количество слотов ограничено. Забронируйте место заранее,
                    чтобы выбрать комфортную дистанцию и стартовый пакет.
                </p>
                <div className="home-page__registration-container">
                    <UIButton
                        label="Перейти к регистрации"
                        size="lg"
                        onClick={() => navigate('/registration')}
                    />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
