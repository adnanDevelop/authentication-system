import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("siteTheme" || "light")
  );

  const changeTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "custom-theme" ? "dark" : "custom-theme"
    );
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("siteTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const UseThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, UseThemeContext };
