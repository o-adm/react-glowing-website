import { motion } from "framer-motion";
import Product from "../ui/Product";
import { fadeIn } from "../../variants";

const products = [
  {
    id: 1,
    image: "../../../product-01.jpg",
    promo: "-20",
    beforePrice: "59",
    afterPrice: "35",
    name: "Facial cleanser",
    reviews: "515",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    image: "../../../product-02.jpg",
    promo: "-27",
    beforePrice: "59",
    afterPrice: "35",
    name: "Facial cleanser",
    reviews: "515",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    image: "../../../product-03.jpg",
    promo: "-50",
    beforePrice: "59",
    afterPrice: "35",
    name: "Facial cleanser",
    reviews: "515",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    image: "../../../product-04.jpg",
    promo: "-30",
    beforePrice: "59",
    afterPrice: "35",
    name: "Facial cleanser",
    reviews: "515",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    image: "../../../product-05.jpg",
    promo: "-25",
    beforePrice: "59",
    afterPrice: "35",
    name: "Facial cleanser",
    reviews: "515",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    image: "../../../product-06.jpg",
    promo: "-25",
    beforePrice: "59",
    afterPrice: "35",
    name: "Facial cleanser",
    reviews: "515",
    stars: "⭐⭐⭐⭐⭐",
  },
];

function SectionProducts() {
  return (
    <motion.section
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="section-products"
    >
      <div className="container container-lg">
        <div className="product">
          <h2 className="product__bsr">Our Bestsellers</h2>
          <a href="#" className="product__link">
            Shop All Products &rarr;
          </a>
          <div className="product__info">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default SectionProducts;
