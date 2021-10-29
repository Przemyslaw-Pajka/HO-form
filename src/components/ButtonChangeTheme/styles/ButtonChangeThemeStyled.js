import styled from "styled-components";

export const ButtonChangeThemeStyled = styled.div`
  margin: 0 auto;
  padding-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  .checkbox {
    opacity: 0;
  }

  .label {
    width: 50px;
    height: 26px;
    background-color: #5469d4;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    cursor: pointer;
  }

  .ball {
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    top: 8px;
    left: 4px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  /*  target the elemenent after the label*/
  .checkbox:checked + .label .ball {
    transform: translateX(33px);
  }

  .fa-moon {
    color: pink;
  }

  .fa-sun {
    color: yellow;
  }
`;

export const TextDescription = styled.span`
  color: ${(props) => (props.isLightThemeColor ? "#000" : "#fff")};
`;
