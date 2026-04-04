const HomePageFeature = ({ feature }) => {
  return (
    <article className="feature-card">
      <h3 className="h3">
        {feature.title}
      </h3>
      <p className="feature-card__description">{feature.description}</p>
    </article>
  );
};

export default HomePageFeature;
