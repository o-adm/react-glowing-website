import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { formatCurrency } from "../../helpers/utils";

function TopNav() {
  return (
    <motion.div
      variants={fadeIn("top", 0.15, 1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="header__top"
    >
      <p>Free shipping on all U.S. orders {formatCurrency(50)}+</p>
    </motion.div>
  );
}

export default TopNav;
