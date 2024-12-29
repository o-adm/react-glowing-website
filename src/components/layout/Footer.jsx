import { Link } from "react-router-dom";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import FooterItem from "../ui/FooterItem";
import NewsLetter from "../ui/NewsLetter";
import Logo from "../ui/Logo";

const footerListItems = [
  {
    id: 1,
    title: "Company",
    items: ["Our stores", "+391 (0)35 2568 4593", "hello@domain.com"],
  },
  {
    id: 2,
    title: "Useful links",
    items: [
      "New Products",
      "Best Sellers",
      "Bundle & Save",
      "Online Gift Card",
    ],
  },
  {
    id: 3,
    title: "Information",
    items: ["Contact Us", "Shipping FAQ", "Terms", "Privacy Policy"],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="container container-lg footer__container"
      >
        <div className="footer__top">
          <ul className="footer__list">
            {footerListItems.map((item) => (
              <FooterItem key={item.id} item={item} index={item.id} />
            ))}
            <NewsLetter />
          </ul>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; {new Date().getFullYear()} Oussama Anedam</p>
            <div className="footer__socials">
              <Link to="https://www.linkedin.com/in/oussama-anedam/">
                <FaLinkedin className="icon" />
              </Link>
              <Link to="https://github.com/o-adm">
                <FaGithubSquare className="icon" />
              </Link>
              <Link to="https://www.instagram.com/o.anedam/">
                <FaInstagramSquare className="icon" />
              </Link>
              <Link to="https://www.facebook.com/oussama.anedam10">
                <FaFacebookSquare className="icon" />
              </Link>
            </div>
          </div>
          <Logo className="footer__logo" />
          <img
            className="footer__pay"
            src="../../src/assets/images/pay.png"
            alt=""
          />
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
