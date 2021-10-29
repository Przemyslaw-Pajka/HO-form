import { ContactBoxStyled } from "./styles/ContactBoxStyled.js";
import { useContext } from "react";
import { ThemeContext } from "../../store/theme.context";

export const ContactBox = (props) => {
  let [isLightThemeColor] = useContext(ThemeContext);

  return (
    <ContactBoxStyled isLightThemeColor={isLightThemeColor}>
      {props.children}
    </ContactBoxStyled>
  );
};
