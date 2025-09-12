"use client";

const { createContext, useState, useEffect } = require("react");

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme") ?? "light");
  }, []);

  useEffect(() => {
    if (theme) {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
