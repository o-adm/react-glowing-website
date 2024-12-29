import Button from "../forms/Button";

function CollectionCard({ collection, index }) {
  const { image, title, text, cta } = collection;

  return (
    <div className="collection__card">
      <h2 className="collection__title">{title}</h2>
      <p className="collection__text">{text}</p>
      <Button type="link">{cta} &rarr;</Button>
      <div className="collection__image">
        <img src={image} alt={`Image ${index}`} />
      </div>
    </div>
  );
}

export default CollectionCard;
