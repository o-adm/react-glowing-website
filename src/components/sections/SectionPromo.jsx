import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";

import PromoProduuct from "../ui/PromoProduuct";

const promoProducts = [
  {
    id: 1,
    image: banner1,
    title: "Discover Our Autumn Skincare",
    text: "Discover Our Autumn Skincare",
    buttonText: "Explore more",
    isCollection: true,
  },
  {
    id: 2,
    image: banner2,
    title: "25% off Everything",
    text: "Makeup with extended range in colors for every human",
    buttonText: "Shop now",
  },
];

function SectionPromo() {
  return (
    <motion.section
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="section-promo"
    >
      <div className="container container-lg">
        <div className="promo">
          {promoProducts.map((product) => (
            <PromoProduuct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SectionPromo;
