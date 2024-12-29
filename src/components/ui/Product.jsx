import { MdOutlineAddShoppingCart } from "react-icons/md";
import { formatCurrency } from "../../helpers/utils";
import Button from "../forms/Button";
import { RiExchange2Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
function Product({ product }) {
  const { image, name, beforePrice, afterPrice, promo, reviews, stars } =
    product;

  console.log(image);

  return (
    <div className="product__item">
      <div className="product__banner">
        <img src={image} alt={name} className="product__image" />
        <p className="product__promo">{promo}%</p>
        <div className="product__actions">
          <Button type="product">
            <MdOutlineAddShoppingCart className="icon icon--light" />
          </Button>
          <Button type="product">
            <FaRegStar className="icon icon--light" />
          </Button>
          <Button type="product">
            <RiExchange2Line className="icon icon--light" />
          </Button>
        </div>
      </div>
      <div className="product__content">
        <div className="product__price">
          <span className="before-price">{formatCurrency(beforePrice)}</span>
          <span className="after-price">{formatCurrency(afterPrice)}</span>
        </div>
        <p className="product__name">{name}</p>
        <div className="product__review">
          <span>{stars}</span>
          <span>{reviews} reviews</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
