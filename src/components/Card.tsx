import { Container, Title } from "../styles/components/card";
import Link from "next/link";

export function Card(props: { name: string; url: string; path: string }) {
  return (
    <Link href={props.path}>
      <Container>
        <img src={props.url} />
        <Title>{props.name}</Title>
      </Container>
    </Link>
  );
}
