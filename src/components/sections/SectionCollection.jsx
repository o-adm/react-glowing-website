import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CollectionCard from "../ui/CollectionCard";
import image1 from "../../assets/images/collection-1.jpg";
import image2 from "../../assets/images/collection-2.jpg";
import image3 from "../../assets/images/collection-3.jpg";

const collections = [
  {
    id: 1,
    image: image1,
    title: "Summer Collection",
    text: "Starting at $17.99",
    cta: "Shop now",
  },
  {
    id: 2,
    image: image2,
    title: "What's New",
    text: "Get the glow",
    cta: "Discover now",
  },
  {
    id: 3,
    image: image3,
    title: "Buy 1 Get 1",
    text: "Starting at $7.99",
    cta: "Discover now",
  },
];

function SectionCollection() {
  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="section-collection"
    >
      <div className="container container-lg">
        <div className="collection">
          {collections.map((collection, index) => (
            <CollectionCard
              collection={collection}
              index={index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SectionCollection;
