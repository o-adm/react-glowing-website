function AboutCard({ card }) {
  const { icon, title, text } = card;

  return (
    <div className="about__card">
      <img src={icon} alt={title} className="about__icon" />
      <h3 className="about__title">{title}</h3>
      <p className="about__text">{text}</p>
    </div>
  );
}

export default AboutCard;
