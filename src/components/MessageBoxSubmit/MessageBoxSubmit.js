import { useEffect } from "react";
import { MessageBoxSubmitStyled } from "./styles/MessageBoxSubmitStyled";
import { MessageSubmitText } from "../MessageSubmitText/MessageSubmitText";

export const MessageBoxSubmit = (props) => {
  const milisecondsToUnmountComponent = 4000;

  useEffect(() => {
    let timer1 = setTimeout(
      () => props.setIsSubmit(false),
      milisecondsToUnmountComponent
    );
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <MessageBoxSubmitStyled data-message-status={`${props.messageStatus}`}>
      <MessageSubmitText status={props.messageStatus} />
    </MessageBoxSubmitStyled>
  );
};
