import { useState, createContext, useEffect, useRef } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const themeLSkey = "isLightTheme";
  const didMount = useRef(false);
  const [isLightThemeColor, setIsLightThemeColor] = useState(
    JSON.parse(localStorage.getItem(themeLSkey)) ?? true
  );
  useEffect(() => {
    if (didMount.current) {
      document.getElementById("App").classList.toggle("dark-theme");
    } else {
      didMount.current = true;
    }
  }, [isLightThemeColor]);
  return (
    <ThemeContext.Provider value={[isLightThemeColor, setIsLightThemeColor]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
