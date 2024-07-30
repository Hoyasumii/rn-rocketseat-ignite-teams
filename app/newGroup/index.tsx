import { Button, Header, Highlight, Input } from "@/components";
import { Container, Content } from "./styles";
import { useTheme } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";

export default function NewGroup() {
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  const { Colors } = useTheme();

  const changeText = (data: string) => {
    setValue(data);
  };

  return (
    <Container>
      <Header />
      <Content>
        <UsersThree color={Colors.green} size={64} />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input
          value={value}
          onChangeText={changeText}
          placeholder="Nome da turma"
        />
        <Button
          text="Criar"
          onPress={() => {
            router.push({ pathname: "players", params: { teamName: value } });
          }}
        />
      </Content>
    </Container>
  );
}
