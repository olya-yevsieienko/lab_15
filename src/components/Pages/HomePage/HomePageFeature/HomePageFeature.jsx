import './style.scss';

const HomePageFeature = ({feature}) => {
    return (
        <div className="home-page-feature">
            <img
                src={feature.iconSrc}
                className="home-page-feature__image"
                alt="Иконка"
            />
            <h4 className="home-page-feature__title">
                {feature.title}
            </h4>
            <p className="home-page-feature__description">
                {feature.description}
            </p>
        </div>
    );
};

export default HomePageFeature;
