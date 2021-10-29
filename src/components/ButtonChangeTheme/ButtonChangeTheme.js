import { useContext } from "react";
import { ThemeContext } from "../../store/theme.context.js";
import { changeThemeColor } from "../../utils/changeThemeColor.js";
import {
  ButtonChangeThemeStyled,
  TextDescription,
} from "./styles/ButtonChangeThemeStyled.js";

export const ButtonChangeTheme = () => {
  const [isLightThemeColor, setIsLightThemeColor] = useContext(ThemeContext);

  return (
    <ButtonChangeThemeStyled>
      <TextDescription isLightThemeColor={isLightThemeColor}>
        Change theme color
      </TextDescription>
      <input
        type="checkbox"
        className="checkbox"
        checked={isLightThemeColor}
        id="checkbox"
        onChange={() =>
          changeThemeColor(isLightThemeColor, setIsLightThemeColor)
        }
      />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </ButtonChangeThemeStyled>
  );
};
