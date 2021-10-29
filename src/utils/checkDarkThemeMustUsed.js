export const checkDarkThemeMustUsed = (isLightThemeColor) => {
  const appEl = document.getElementById("App");
  if (!isLightThemeColor) appEl.classList.add("dark-theme");
};
