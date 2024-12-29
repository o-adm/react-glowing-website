import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import AboutCard from "../ui/AboutCard";
import feature1 from "../../assets/images/feature-1.jpg";
import feature2 from "../../assets/images/feature-2.jpg";
import feature3 from "../../assets/images/feature-3.jpg";

const aboutInfo = [
  {
    id: 1,
    icon: feature1,
    title: "Guaranteed PURE",
    text: "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
  },
  {
    id: 2,
    icon: feature2,
    title: "Completely Cruelty-Free",
    text: "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
  },
  {
    id: 3,
    icon: feature3,
    title: "Ingredient Sourcing",
    text: "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
  },
];

function SectionAbout() {
  return (
    <motion.section
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="section-about"
    >
      <div className="container container-lg">
        <h2 className="heading-2 text-center">Why Shop with Glowing?</h2>
        <div className="about">
          {aboutInfo.map((card) => (
            <AboutCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SectionAbout;
