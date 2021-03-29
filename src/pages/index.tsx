// import Link from "next/link";
import Head from "next/head";
import { Card } from "../components/Card";
import { Main, Title, ContainerCards } from "../styles/index";

export default function Home() {
  return (
    <Main>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Title>Choose a page</Title>
      <ContainerCards>
        <Card name="Suit Login" url="/previewSuitLogin.gif" path="/suitLogin" />
      </ContainerCards>
    </Main>
  );
}
