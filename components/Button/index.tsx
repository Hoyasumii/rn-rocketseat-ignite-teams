import { Container, Title } from "./styles";
import { Props } from "./types";

export function Button({ type = "primary", text, ...props }: Props) {
  return (
    <Container type={type} {...props}>
      <Title>{text}</Title>
    </Container>
  );
}
