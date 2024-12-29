import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import DiscoverCard from "../ui/DiscoverCard";

const discoverBlog = [
  {
    id: 1,
    image: blog1,
  },
  {
    id: 2,
    image: blog2,
  },
  {
    id: 3,
    image: blog3,
  },
];

function SectionDiscover() {
  return (
    <motion.section
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="section-discover"
    >
      <div className="container container-lg">
        <h2 className="heading-2 text-center mb-md">More to Discover</h2>
        <div className="discover">
          {discoverBlog.map((card) => (
            <DiscoverCard key={card.id} discover={card} index={card.id} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SectionDiscover;
