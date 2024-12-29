import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link to="/" className={`header__logo ${className}`}>
      <h1>Glowing</h1>
    </Link>
  );
}

export default Logo;
