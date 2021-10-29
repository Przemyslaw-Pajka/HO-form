import styled from "styled-components";

export const MessageBoxSubmitStyled = styled.section`
  box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px,
    rgb(0 0 0 / 12%) 0px 3px 6px 0px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  padding: 3vw;
  visibility: hidden;
  font-size: 22px;
  z-index: 1000;
  animation: slide-up 1.25s forwards;
  animation-delay: 2.25s;
  -webkit-animation-delay: 2.25s;
  color: #fff;
  background: #fff;
  visibility: visible;
  &[data-message-status="success"] {
    color: rgb(0, 128, 6);
    background: #ffffff;
    visibility: visible;
  }
  &[data-message-status="error"] {
    color: #fff;
    visibility: visible;
    background: rgb(251, 2, 2);
  }
`;
