const HomePageFeature = ({feature}) => {
    return (
        <div>
            <img
                src={feature.iconSrc}
                alt="Иконка"
            />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
        </div>
    );
};

export default HomePageFeature;
