import { Typography } from "../Typography";
import { Container, Empty } from "./styles";

type Props = {
  text: string;
};

export function EmptyList({ text }: Props) {
  return (
    <Container>
      <Empty />
      <Typography color="green" size="MD" weight="regular">
        {text}
      </Typography>
    </Container>
  );
}
