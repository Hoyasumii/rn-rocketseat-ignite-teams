import { Typography } from "../Typography";
import { Container, Empty } from "./styles";

export function EmptyList() {
  return (
    <Container>
      <Empty />
      <Typography color="green" size="MD" weight="regular">
        Sem turmas cadastradas
      </Typography>
    </Container>
  );
}
