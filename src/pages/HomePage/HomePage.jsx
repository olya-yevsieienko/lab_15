import { featuresList } from "../../models/home-page";
import { races } from "../../models/races";
import HomePageFeature from "../../components/pages/HomePage/HomePageFeature/HomePageFeature";
import HomePageRace from "../../components/pages/HomePage/HomePageRace/HomePageRace";
import UIButton from "../../components/ui/UIButton/UIButton";

import './style.scss';

const HomePage = () => {
    function handleClick() {
        console.log('click')
    }

    return (
        <div className="home-page">
            <section className="home-page__banner">
                <div className="home-page__banner-container">
                    <h1 className="home-page__banner-title">
                        TRAIL RUN 2026
                    </h1>
                    <p className="home-page__banner-description">
                        Твоё приключение начинается там, где заканчивается дорога
                    </p>
                    <UIButton
                        label="Регистрация"
                        size="lg"
                        onClick={handleClick}
                    />
                </div>
            </section> 
            <section className="home-page__features container">
                <h2 className="home-page__features-title">
                    Почему трейл?
                </h2>
                <ul className="home-page__features-list">
                    {featuresList.map((feature) => (
                        <li>
                            <HomePageFeature feature={feature} />
                        </li>
                    ))}
                </ul>
            </section>
            Какой-то блок
            <section className="home-page__races container">
                <ul className="home-page__races-list">
                    {races.map((race) => (
                        <li>
                            <HomePageRace race={race} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default HomePage;
