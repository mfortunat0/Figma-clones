import {
  Container,
  LogoContainer,
  Main,
  NavBar,
  Text,
  Title,
  LogoImage,
  NavIcon,
  ContainerTitle,
  ContainerTextBar,
  HorizontalBar,
  ContainerDescribe,
  TextDescribe,
  VerticalBar,
  VerticalBarMidia,
  ContainerDescribeBar,
  Image,
  ContainerMidiaBar,
  MediaImage,
  ButtonMode,
  TextPrice,
  OptionsNav,
} from "../styles/suitDesign";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => setDarkMode(!darkMode);
  return (
    <Main dark={darkMode}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container dark={darkMode}>
        <NavBar>
          <LogoContainer>
            <LogoImage
              dark={darkMode}
              isText={false}
              src={
                darkMode ? "/suitDesign/logoDark.svg" : "/suitDesign/logo.svg"
              }
            />
            <LogoImage
              dark={darkMode}
              isText={true}
              src={
                darkMode
                  ? "/suitDesign/logoTextDark.svg"
                  : "/suitDesign/logoText.svg"
              }
            />
            <LogoImage
              dark={darkMode}
              isText={false}
              src={
                darkMode ? "/suitDesign/logoDark.svg" : "/suitDesign/logo.svg"
              }
            />
          </LogoContainer>
          <OptionsNav dark={darkMode}>Coleções</OptionsNav>
          <OptionsNav dark={darkMode}>Sobre</OptionsNav>
          <OptionsNav dark={darkMode}>Contato</OptionsNav>
          <OptionsNav dark={darkMode}>|</OptionsNav>
          <NavIcon
            src={darkMode ? "/suitDesign/userDark.svg" : "/suitDesign/user.svg"}
          />
          <NavIcon
            src={darkMode ? "/suitDesign/bagDark.svg" : "/suitDesign/bag.svg"}
          />
          <NavIcon
            src={
              darkMode ? "/suitDesign/searchDark.svg" : "/suitDesign/search.svg"
            }
          />
        </NavBar>
        <ContainerTitle>
          <Title dark={darkMode}>Costuras feitas com muita cautela</Title>
        </ContainerTitle>
        <ContainerTextBar>
          <HorizontalBar dark={darkMode} />
          <Text dark={darkMode}>Loja</Text>
        </ContainerTextBar>
        <ContainerDescribeBar>
          <ContainerDescribe>
            <TextDescribe dark={darkMode}>Terno Slim</TextDescribe>
            <TextPrice dark={darkMode}>R$ 10.161</TextPrice>
          </ContainerDescribe>
          <VerticalBar dark={darkMode} />
          <Image src="/suitDesign/terno.png" />
        </ContainerDescribeBar>
      </Container>
      <ContainerMidiaBar>
        <VerticalBarMidia />
        <MediaImage src="/suitDesign/instagran.svg" />
        <MediaImage src="/suitDesign/facebook.svg" />
        <MediaImage src="/suitDesign/twitter.svg" />
        <ButtonMode dark={darkMode} onClick={changeMode}>
          Change Theme
        </ButtonMode>
      </ContainerMidiaBar>
    </Main>
  );
}
