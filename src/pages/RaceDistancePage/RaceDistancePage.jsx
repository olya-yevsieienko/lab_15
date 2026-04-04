import { useParams } from "react-router-dom";
import { races } from "../../models/races";
import { formatDate } from "../../helpers/date-helpers";
import UIChip from "../../components/ui/UIChip/UIChip";

import "./style.scss";

const RaceDistancePage = () => {
    const {slug, distanceKm} = useParams();
    const race = races.find((race) => race.slug === slug);
    const distance = race?.distances.find((distance) => distance.km === +distanceKm);

    if (!race || !distance) {
        return (
            <section className="race-distance-page">
                <h1>Дистанция не найдена</h1>
            </section>
        );
    }

    return (
        <section className="race-distance-page">
            <header className="surface-soft-block">
                <h1 className="race-distance-page__title">
                    {race.title}
                    <UIChip label={race.difficulty} />
                </h1>
                <p>{race.longDescription}</p>
                <p className="race-distance-page__chips">
                    <UIChip label={formatDate(race.date)} />
                    <UIChip label={race.region} />
                    <UIChip label={race.location} />
                </p>
            </header>
            <div className="surface-soft-block">
                <h2 className="h2">
                    Выбранная дистанция {distance.km} км
                </h2>
                <ul className="race-distance-page__card-list">
                    <li>
                        <b>Набор высоты:</b> +{distance.elevationGainM} м
                    </li>
                    <li>
                        <b>Лимит времени:</b> {distance.cutoffH} ч
                    </li>
                </ul>
            </div>
            <div className="surface-soft-block">
                <h2 className="h2">
                    Стартовый пакет
                </h2>
                <ul className="race-distance-page__grid">
                    {race.participantPack.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="surface-soft-block">
                <h2 className="h2">
                    Правила участия
                </h2>
                <ul className="race-distance-page__panel-list">
                    {race.rules.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="surface-soft-block">
                <h2 className="h2">
                    FAQ
                </h2>
                <ul className="race-distance-page__faq-list">
                    {race.faq.map((item) => (
                        <li
                            key={item.question}
                            className="race-distance-page__faq-item"
                        >
                            <h4>{item.question}</h4>
                            <p>{item.answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default RaceDistancePage;
