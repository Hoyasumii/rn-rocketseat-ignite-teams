import { Header, Highlight } from "@/components";
import { useLocalSearchParams } from "expo-router";
import { Container, Content } from "./styles";

export default function Page() {
  const { teamName } = useLocalSearchParams<{ teamName: string }>();

  return (
    <Container>
      <Header />
      <Content>
        <Highlight
          title={teamName || "Nome da turma"}
          subtitle="adicione a galera e separe os times"
        />
      </Content>
    </Container>
  );
}
