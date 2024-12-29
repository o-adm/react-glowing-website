import { motion } from "framer-motion";
import { formatCurrency } from "../../helpers/utils";
import { fadeIn } from "../../variants";
import Button from "../forms/Button";
import offerBanner1 from "../../assets/images/offer-banner-1.jpg";
import offerBanner2 from "../../assets/images/offer-banner-2.jpg";

function SectionOffer() {
  return (
    <section className="section-offer">
      <div className="container container-lg">
        <div className="offer">
          <motion.figure
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className="offer__images"
          >
            <img src={offerBanner1} alt="Offre Image 1" />
            <img src={offerBanner2} alt="Offre Image 2" />
          </motion.figure>
          <motion.div
            variants={fadeIn("bottom", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className="offer__content"
          >
            <h4 className="offer__promo">
              <span className="offer__promo-title">Special offer</span>
              <span className="offer__promo-perc">-20%</span>
            </h4>
            <h2 className="heading-2">Mountain Pine Batch Oil</h2>
            <p className="offer__text">
              Made using clean, non-toxic ingredients, our products are designed
              for everyone.
            </p>
            <div className="offer__timer">
              <span className="offer__time" aria-label="days">
                15
              </span>
              <span className="offer__time" aria-label="hours">
                21
              </span>
              <span className="offer__time" aria-label="minutes">
                43
              </span>
              <span className="offer__time" aria-label="seconds">
                33
              </span>
            </div>
            <Button type="black">Get only {formatCurrency(23)}</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SectionOffer;
