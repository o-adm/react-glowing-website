import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { CiSearch, CiStar, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { formatCurrency } from "../../helpers/utils";
import { useState } from "react";

import Logo from "../ui/Logo";
import Form from "../forms/Form";
import Wrapper from "../ui/Wrapper";
import Input from "../forms/Input";
import HeaderNavItems from "./HeaderNavItems";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../forms/Button";
import MobileNav from "./MobileNav";
import { CSSTransition } from "react-transition-group";
import ToggleDark from "../ui/ToggleDark";

function HeaderNav() {
  const [menuToggle, setMenuToggle] = useState(false);

  function handleToggle() {
    setMenuToggle((show) => !show);
  }

  return (
    <motion.nav
      variants={fadeIn("up", 0.1, 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="header__nav"
    >
      <Button type="transparent" id="hamburger" onClick={handleToggle}>
        <RxHamburgerMenu className="icon" aria-hidden="true" />
      </Button>
      <Form className="form-hide">
        <Wrapper>
          <Input className="input-search" placeholder="Search product..." />
          <CiSearch className="icon input-search--icon" aria-hidden="true" />
        </Wrapper>
      </Form>
      <Logo />
      <Wrapper justify="end" gap="gap-sm" hideOnMobile>
        <CiUser className="icon" aria-hidden="true" />
        <span className="icon__wrapper">
          <CiStar className="icon" aria-hidden="true" />
          <sup className="icon__sup">2</sup>
        </span>
        <Wrapper gap="gap-xs">
          <span>{formatCurrency(0)}</span>
          <span className="icon__wrapper">
            <FiShoppingCart className="icon" aria-hidden="true" />
            <sup className="icon__sup">2</sup>
          </span>
        </Wrapper>
        <ToggleDark />
      </Wrapper>
      <HeaderNavItems />
      <CSSTransition in={menuToggle}>
        <MobileNav isActive={menuToggle} onCLose={handleToggle} />
      </CSSTransition>
    </motion.nav>
  );
}

export default HeaderNav;
