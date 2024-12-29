import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import Button from "../forms/Button";

function SectionHero() {
  return (
    <section className="section-hero">
      <motion.div
        variants={fadeIn("right", 0.1, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="hero"
      >
        <h1 className="hero__title">
          Reveal The <br /> Beauty of Skin
        </h1>
        <p className="hero__text">
          Made using clean, non-toxic ingredients, our products are designed for
          everyone.
        </p>
        <span className="hero__price">Starting at $7.99</span>
        <Button type="black">Shop now</Button>
      </motion.div>
    </section>
  );
}

export default SectionHero;
