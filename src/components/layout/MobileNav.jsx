import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";

function MobileNav({ isActive, onCLose }) {
  return (
    <nav className={`mobile-nav ${isActive ? "mobile-nav-active" : ""}`}>
      <span className="mobile-nav__close" role="button" onClick={onCLose}>
        &times;
      </span>
      <Logo />
      <div className="mobile-nav__list">
        <ul>
          <li>
            <NavLink to="#"> Home </NavLink>
          </li>
          <li>
            <NavLink to="#"> Collection </NavLink>
          </li>
          <li>
            <NavLink to="#"> Shop </NavLink>
          </li>
          <li>
            <NavLink to="#"> Offer </NavLink>
          </li>
          <li>
            <NavLink to="#"> Blog </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;
