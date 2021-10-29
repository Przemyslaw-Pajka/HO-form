import { useContext } from "react";
import { useField, Field } from "formik";
import { ThemeContext } from "../../store/theme.context";
import { MyOwnFieldStyled, Label } from "./styles/MyOwnField.styled";

export const MyOwnField = ({ label, ...props }) => {
  const [isLightThemeColor] = useContext(ThemeContext);
  const [field, meta] = useField(props);

  return (
    <MyOwnFieldStyled>
      <Label
        isLightThemeColor={isLightThemeColor}
        htmlFor={props.id || props.name}>
        {label}
      </Label>
      <Field
        as={props.as}
        {...field}
        {...props}
        data-light-mode={isLightThemeColor}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </MyOwnFieldStyled>
  );
};
