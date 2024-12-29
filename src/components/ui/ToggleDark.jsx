import { CiDark, CiLight } from "react-icons/ci";
import { useThemes } from "../../context/ThemeContext";

function ToggleDark() {
  const { handleToggle } = useThemes();

  return (
    <div className="theme-toggle">
      <button
        className="theme-toggle-light"
        aria-label="Switch to light theme"
        onClick={handleToggle}
      >
        <CiLight className="icon" />
      </button>

      <button
        className="theme-toggle-dark"
        aria-label="Switch to light theme"
        onClick={handleToggle}
      >
        <CiDark className="icon" />
      </button>
    </div>
  );
}

export default ToggleDark;
