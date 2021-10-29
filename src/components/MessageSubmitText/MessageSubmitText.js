import { TextDescription } from "./styles/MessageSubmitTextStyled";
import { messagesStatusses, messages } from "../../utils/messagesStatusses";

export const MessageSubmitText = (props) => (
  <>
    <TextDescription>{messages[props.status]}</TextDescription>
    <TextDescription>{messagesStatusses[props.status]}</TextDescription>
  </>
);
