import { Link } from "react-router-dom";
import { formatDate } from "../../../helpers/date-helpers";
import UIChip from "../../ui/UIChip/UIChip";

import './style.scss';

const RacesPageCard = ({race}) => {
    return (
        <article className="races-page-card">
            <p className="races-page-card__meta">
                <UIChip label={formatDate(race.date)} />
                <UIChip label={race.region} />
                <UIChip label={race.location} />
            </p>
            <h3 className="h3">
                {race.title}
            </h3>
            <p>{race.shortDescription}</p>
            <h4>Дистанции</h4>
            <ul className="races-page-card__distance">
                {race.distances.map((distance) => (
                    <li key={`${race.slug}-${distance.km}`}>
                        <Link
                            to={`/races/${race.slug}/${distance.km}`}
                            className="races-page-card__distance-link"
                        >
                            <span>{distance.km}</span>
                            <span>+ {distance.elevationGainM} м</span>
                            <span>лимит {distance.cutoffH} ч</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default RacesPageCard;
