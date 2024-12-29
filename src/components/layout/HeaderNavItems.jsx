import { NavLink } from "react-router-dom";

function HeaderNavItems() {
  return (
    <div className="header__nav-list">
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
  );
}

export default HeaderNavItems;
