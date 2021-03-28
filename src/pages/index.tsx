import {
  FormContainer,
  LogoContainer,
  Main,
  Button,
  InputEmail,
  InputPassword,
  Text,
  Title,
  Image,
  ButtonMedia,
  ContainerButtonsMedia,
  Bars,
  ContainerBars,
  ButtonMode,
  TextBar,
} from "../styles/index";

import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => setDarkMode(!darkMode);

  return (
    <Main dark={darkMode}>
      <LogoContainer>
        <Image dark={darkMode} width="100%" height="70%" src="/logo.svg" />
        <Image dark={darkMode} width="100%" height="30%" src="/logoText.svg" />
      </LogoContainer>
      <FormContainer dark={darkMode}>
        <Title dark={darkMode}>Entre em sua conta</Title>
        <Text dark={darkMode} marginBottom="5vh">
          novo usúario? <b>cadastre-se</b>
        </Text>
        <InputEmail dark={darkMode} placeholder="Email" />
        <InputPassword dark={darkMode} placeholder="Password" />
        <Button dark={darkMode}>Entrar</Button>
        <ContainerBars>
          <Bars />
          <TextBar dark={darkMode} marginBottom="0px">
            Ou
          </TextBar>
          <Bars />
        </ContainerBars>
        <ContainerButtonsMedia>
          <ButtonMedia dark={darkMode}>
            <FaFacebook />
          </ButtonMedia>
          <ButtonMedia dark={darkMode}>
            <FaTwitter />
          </ButtonMedia>
          <ButtonMedia dark={darkMode}>
            <FaGoogle />
          </ButtonMedia>
        </ContainerButtonsMedia>
        <ButtonMode dark={darkMode} onClick={changeMode}>
          Change Theme
        </ButtonMode>
      </FormContainer>
    </Main>
  );
}
