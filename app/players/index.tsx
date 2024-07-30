import {
  Button,
  ButtonIcon,
  EmptyList,
  Header,
  Highlight,
  Icon,
  Input,
  ListSeparator,
  Typography,
} from "@/components";
import { useLocalSearchParams } from "expo-router";
import {
  Container,
  Controller,
  Form,
  ListItem,
  TeamController,
  TeamList,
  TeamListItem,
  TeamListName,
} from "./styles";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { Alert } from "react-native";

type Player = {
  name: string;
  team: 1 | 2;
};

export default function Page() {
  const { Colors } = useTheme();
  const { teamName } = useLocalSearchParams<{ teamName: string }>();
  const [players, setPlayers] = useState<Array<Player>>([
    { name: "Teste", team: 1 },
    { name: "Teste 2", team: 2 },
    { name: "Teste 3", team: 1 },
  ]);
  const [currentTeam, setCurrentTeam] = useState<Player["team"]>(1);
  const [input, setInput] = useState<string>("");

  const keyExtractor: (...args: Array<any>) => any = (item: Player) =>
    item.name;

  const addPlayer = () => {
    if (input.length === 0) return;
    setPlayers((prev) => [...prev, { name: input, team: currentTeam }]);
    setInput("");
  };

  const removePlayer = (playerIndex: number) => {
    Alert.alert(
      "Deseja remover o Player?",
      "Você realmente deseja remover o Player?",
      [
        { text: "Não", style: "default" },
        {
          text: "Sim",
          style: "destructive",
          onPress() {
            setPlayers((prev) =>
              prev.filter((_, index) => index !== playerIndex)
            );
          },
        },
      ]
    );
  };

  return (
    <Container>
      <Header />
      <Highlight
        title={teamName || "Nome da turma"}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          value={input}
          onChangeText={(text) => {
            setInput(text);
          }}
          style={{ flex: 1 }}
          placeholder="Nome do participante"
        />
        <ButtonIcon onPress={addPlayer} icon="add" type="primary" />
      </Form>

      <Controller>
        <TeamController
          data={[1, 2].map((item) => `time ${item}`)}
          keyExtractor={(item) => item as any}
          renderItem={({ item }) => (
            <ListItem
              style={{
                borderColor:
                  item === `time ${currentTeam}` ? Colors.green : "transparent",
              }}
              onPress={() => {
                setCurrentTeam((prev) => (prev === 1 ? 2 : 1));
              }}
            >
              <Typography style={{ textTransform: "uppercase" }}>
                {item as any}
              </Typography>
            </ListItem>
          )}
          horizontal
        />
        <Typography>
          {players.filter((item) => item.team === currentTeam).length}
        </Typography>
      </Controller>

      <TeamList
        data={players.filter((item) => item.team === currentTeam)}
        keyExtractor={keyExtractor}
        renderItem={({ item, index }: { item: any; index: number }) => (
          <TeamListItem>
            <Icon icon="person" />
            <TeamListName>{item.name}</TeamListName>
            <ButtonIcon
              onPress={() => {
                removePlayer(index);
              }}
              icon="close"
              type="error"
            />
          </TeamListItem>
        )}
        ListEmptyComponent={<EmptyList text="Equipe Vazia" />}
      />
      <Button text="Remover turma" type="error" />
    </Container>
  );
}
