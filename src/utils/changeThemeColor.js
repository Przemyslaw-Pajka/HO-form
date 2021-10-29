export const changeThemeColor = (isLightThemeColor, setIsLightThemeColor) => {
  const themeLSkey = "isLightTheme";
  const newIsLightColor = !isLightThemeColor;

  setIsLightThemeColor(newIsLightColor);
  localStorage.setItem(themeLSkey, newIsLightColor);
};
