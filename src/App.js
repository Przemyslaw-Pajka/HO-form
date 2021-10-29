import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./store/theme.context.js";
import ContactForm from "./components/ContactForm/ContactForm.js";
import { ContactBox } from "./components/ContactBox/ContactBox.js";
import { MainHeading } from "./components/MainHeading/MainHeading.js";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/ButtonChangeTheme.js";
import { MessageBoxSubmit } from "./components/MessageBoxSubmit/MessageBoxSubmit.js";
import { checkDarkThemeMustUsed } from "./utils/checkDarkThemeMustUsed.js";

function App() {
  const [isLightThemeColor] = useContext(ThemeContext);
  const [isSubmit, setIsSubmit] = useState(false);
  const [messageStatus, setMessageStatus] = useState(false);

  useEffect(() => {
    checkDarkThemeMustUsed(isLightThemeColor);
  }, []);

  return (
    <div className="App" id="App">
      <ButtonChangeTheme />
      <MainHeading />
      <ContactBox>
        <ContactForm
          setIsSubmit={setIsSubmit}
          setMessageStatus={setMessageStatus}
        />
      </ContactBox>
      {isSubmit ? (
        <MessageBoxSubmit
          messageStatus={messageStatus}
          setIsSubmit={setIsSubmit}
          setMessageStatus={setMessageStatus}
        />
      ) : null}
    </div>
  );
}

export default App;
