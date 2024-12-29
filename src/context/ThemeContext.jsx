import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const savedItem = localStorage.getItem("theme");
    return savedItem === "dark";
  });

  function handleToggle() {
    setIsDark((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  }

  useEffect(
    function () {
      document.documentElement.classList.toggle("dark", isDark);
    },
    [isDark]
  );

  return (
    <ThemeContext.Provider value={{ isDark, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemes() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemContext is used outside ThemeProvider");
  return context;
}

export { ThemeProvider, useThemes };
