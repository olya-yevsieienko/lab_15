import RacesPageCard from "../../components/pages/RacesPage/RacesPageCard";
import { races } from "../../models/races";

import './style.scss';

const RacesPage = () => {
    return (
        <section className="races-page">
            <div className="surface-soft-block">
                <h1>Дистанции сезона 2026</h1>
                <p>
                    Выберите старт и сравните дистанции по километражу, набору высоты и лимиту времени.
                </p>
            </div>
            <ul className="races-page__list">
                {races.map((race) => (
                    <li key={race.slug}>
                        <RacesPageCard race={race} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default RacesPage;
