import styled from "styled-components";

interface IImage {
  width: string;
  height: string;
  dark: boolean;
}

interface IText {
  marginBottom: string;
  dark: boolean;
}

interface IMode {
  dark: boolean;
}

export const FormContainer = styled.div<IMode>`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: ${(props) => (props.dark ? "#364f5e" : "#FCFCFC")};
  height: 100%;
  padding: 6vh 3vw 6vh 3vw;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 6vh;
`;

export const Image = styled.img<IImage>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${(props) => (props.dark ? "#284050" : "#B8BFC4")};
`;

export const Main = styled.main<IMode>`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5vh 8vw 5vh 8vw;
  background-color: ${(props) => (props.dark ? "#1a3140" : "#F0F1F2")};
`;

export const Title = styled.h1<IMode>`
  font-weight: 500;
  color: ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  font-size: 4vh;
`;

export const Text = styled.p<IText>`
  color: ${(props) => (props.dark ? "#b8bfc4" : "#4D5255")};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: 2.3vh;
`;

export const TextBar = styled.p<IText>`
  color: ${(props) => (props.dark ? "#FCFCFC" : "#1A3140")};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: 2.3vh;
`;

export const ContainerBars = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8vh;
`;

export const Bars = styled.div`
  background-color: #1a3140;
  height: 1px;
  width: 35%;
`;

const Input = `
  background-color: transparent;
  outline: none;
  margin-top: 3vh;
  width: 100%;
  height: 47px;
  padding: 16px;
  font-size: 12px;
  font-weight: 300;
`;

export const InputEmail = styled.input.attrs({ type: "email" })<IMode>`
  ${Input}
  border: 1px solid ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  color: ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  ::placeholder {
    color: ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  }
`;

export const InputPassword = styled.input.attrs({ type: "password" })<IMode>`
  ${Input}
  border: 1px solid ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  color: ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  ::placeholder {
    color: ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  }
`;

export const Button = styled.button<IMode>`
  margin-top: 56px;
  margin-bottom: 56px;
  background-color: ${(props) => (props.dark ? "#1a3140" : "#01090D")};
  width: 100%;
  height: 44px;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => (props.dark ? "#fcfcfc" : "#F0F1F2")};
  border: unset;
  outline: none;
  cursor: pointer;
  padding: 8px;
`;

export const ButtonMedia = styled.button<IMode>`
  border: unset;
  outline: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  font-size: 25px;
`;

export const ContainerButtonsMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const ButtonMode = styled.button<IMode>`
  border: unset;
  outline: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.dark ? "#1a3140" : "#fcfcfc")};
  padding: 8px;
  color: ${(props) => (props.dark ? "#fcfcfc" : "#01090d")};
  font-size: 3vh;
  width: 50%;
  margin: 5vh auto 1vh auto;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: ${(props) => (props.dark ? "#fcfcfc" : "#1a3140")};
    color: ${(props) => (props.dark ? "#01090d" : "#fcfcfc")};
  }
`;
