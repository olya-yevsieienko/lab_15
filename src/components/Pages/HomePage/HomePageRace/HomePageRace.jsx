import {Link} from 'react-router-dom';

import './style.scss';

const HomePageRace = ({race}) => {
    return (
        <article className="home-page-race">
            <span className={`home-page-race__tag home-page-race__tag--${race.difficulty}`}>
                {race.difficulty}
            </span>
            <h4 className="home-page-race__title">
                {race.title}
            </h4>
            <p className="home-page-race__location">
                <span>{race.region}</span>
                <span>{race.location}</span>
            </p>
            <p className="home-page-race__description">
                {race.shortDescription}
            </p>
            <Link
                to={''}
                className="home-page-race__link"
            >
                Узнать подробнее
            </Link>
        </article>
    );
};

export default HomePageRace;
