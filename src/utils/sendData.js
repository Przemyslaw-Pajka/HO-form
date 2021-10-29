import axios from "axios";
import { myURL } from "./myURL";
import { messagesStatusses } from "./messagesStatusses";

export const sendData = async (data, setMessageStatus, setIsSubmit) => {
  axios({
    method: "post",
    url: myURL,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((response) => {
      setMessageStatus(messagesStatusses.success);
      setIsSubmit(true);
      console.log("Success:", response.status);
    })
    .catch((error) => {
      setMessageStatus(messagesStatusses.error);
      setIsSubmit(true);
      console.error("Error:", error);
    });
};
