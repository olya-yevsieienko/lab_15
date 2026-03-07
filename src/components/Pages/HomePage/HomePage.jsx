import { featuresList } from "../../../models";
import UIButton from "../../ui/UIButton/UIButton";
import HomePageFeature from "./HomePageFeature/HomePageFeature";

import './style.scss';

const HomePage = () => {
    function handleClick() {
        console.log('click')
    }

    return (
        <div className="home-page">
            <section className="home-page__banner">
                <h1 className="home-page__banner-title">
                    TRAIL RUN 2026
                </h1>
                <p className="home-page__banner-description">
                    Покоряй вершины, вдохновляйся, вдохновляй
                </p>
                <UIButton
                    label="Регистрация"
                    onClick={handleClick}
                />
            </section>
            <section className="home-page__feature">
                <h2>Почему трейл?</h2>
                <ul>
                    {featuresList.map((feature) => (
                        <li>
                            <HomePageFeature feature={feature} />
                        </li>
                    ))}
                </ul>
            </section>
            <section className="home-page__registration">
                <h2>Готов к старту?</h2>
                <p>Регистрация открыта до 1-го июня 2026 года</p>
                <UIButton
                    label="Регистрация"
                />
            </section>
        </div>
    );
};

export default HomePage;
