import Button from "../forms/Button";

function PromoProduuct({ product }) {
  const { image, title, text, buttonText, isCollection } = product;

  return (
    <div className="promo__card">
      <div className="promo__image">
        <img src={image} alt="Product Promotion" />
      </div>
      {isCollection && <h2 className="promo__collection">New collection</h2>}
      <h2 className="promo__title">{title}</h2>
      {!isCollection && <div className="promo__text">{text}</div>}
      <Button type="black">{buttonText}</Button>
    </div>
  );
}

export default PromoProduuct;
