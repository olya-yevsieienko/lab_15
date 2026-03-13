const HomePageFeature = ({ feature }) => {
  return (
    <article className="feature-card">
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__description">{feature.description}</p>
    </article>
  );
};

export default HomePageFeature;
