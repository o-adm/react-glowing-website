import HeaderNav from "./HeaderNav";
import TopNav from "./TopNav";

function Header() {
  return (
    <header className="header">
      <TopNav />
      <HeaderNav />
    </header>
  );
}

export default Header;
