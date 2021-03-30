import styled from "styled-components";

interface ILogoImage {
  isText: boolean;
  dark: boolean;
}

interface IMode {
  dark: boolean;
}

export const Main = styled.main<IMode>`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => (props.dark ? "#658da6" : "#A7C6D9")};
  flex-direction: column;
`;

export const Container = styled.div<IMode>`
  background-color: ${(props) => (props.dark ? "#1a3140" : "#FCFCFC")};
  height: 70%;
  width: 95%;
  padding: 5vh 1vw 0 8vw;
  display: flex;
  flex-wrap: wrap;
`;

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 60%;
`;

export const LogoImage = styled.img<ILogoImage>`
  width: ${(props) => (props.isText ? "70px" : "22.44px")};
  height: 30px;
  margin: ${(props) => (props.isText ? "0 5px 0 5px" : "0")};
`;

export const NavIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const ContainerTitle = styled.h1`
  width: 100%;
`;

export const Title = styled.h1<IMode>`
  color: ${(props) => (props.dark ? "#a7c6d9" : "#1A3140")};
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 45px;
  width: 225px;
  margin-top: 10vh;
`;

export const OptionsNav = styled.p<IMode>`
  color: ${(props) => (props.dark ? "#a7c6d9" : "#01090D")};
  font-weight: 300;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
`;

export const Text = styled.p<IMode>`
  color: ${(props) => (props.dark ? "#a7c6d9" : "#01090D")};
  font-weight: 300;
  font-family: "Raleway", sans-serif;
`;

export const HorizontalBar = styled.div<IMode>`
  width: 65px;
  background-color: ${(props) => (props.dark ? "#658da6" : "#01090D")};
  height: 1px;
  margin: 10px 0 0 0;
  margin-right: 10px;
`;

export const ContainerTextBar = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerDescribeBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ContainerDescribe = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleTextDescribe = `
  margin: 0 5px 15px 0;
  font-family: Raleway;
  font-weight: 300;
`;

export const TextDescribe = styled.p<IMode>`
  color: ${(props) => (props.dark ? "#fcfcfc" : "#01090D")};
  ${StyleTextDescribe}
`;

export const TextPrice = styled.p<IMode>`
  color: ${(props) =>
    props.dark ? "rgba(252, 252, 252, 0.7)" : "rgba(1,9,13,0.7)"};
  ${StyleTextDescribe}
`;

export const VerticalBar = styled.div<IMode>`
  width: 1px;
  height: 50px;
  background-color: ${(props) => (props.dark ? "#A7C6D9" : "#01090D")};
  margin-right: 1vw;
`;

export const VerticalBarMidia = styled.div`
  width: 1px;
  background-color: #01090d;
  height: 50px;
  margin-right: 10px;
`;

export const Image = styled.img`
  width: 280px;
  height: 400px;
  position: absolute;
  top: 32vh;
  left: 55vw;
  box-shadow: 0 0 15px #01090d;
`;

export const ContainerMidiaBar = styled.div`
  display: flex;
  padding: 10vh 5vw 10vh 5vw;
`;

export const MediaImage = styled.img`
  margin: 0 0.5vw 0 0.5vw;
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
  margin: 0 0 0 5vw;
  cursor: pointer;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: ${(props) => (props.dark ? "#fcfcfc" : "#1a3140")};
    color: ${(props) => (props.dark ? "#01090d" : "#fcfcfc")};
  }
`;
