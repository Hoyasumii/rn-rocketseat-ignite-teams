import { Button, Header, Highlight, Input } from "@/components";
import { Container, Content } from "./NewGroup.styles";
import { useTheme } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export default function NewGroup() {
  const { Colors } = useTheme();

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersThree color={Colors.green} size={64} />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button text="Criar" />
      </Content>
    </Container>
  );
}
