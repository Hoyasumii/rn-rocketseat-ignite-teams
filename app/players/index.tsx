import {
  ButtonIcon,
  EmptyList,
  Header,
  Highlight,
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
} from "./styles";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";

type Player = {
  name: string;
  team: 1 | 2;
};

export default function Page() {
  const { Colors } = useTheme();
  const { teamName } = useLocalSearchParams<{ teamName: string }>();
  const [players, setPlayers] = useState<Array<Player>>([]);
  const [currentTeam, setCurrentTeam] = useState<Player["team"]>(1);

  return (
    <Container>
      <Header />
      <Highlight
        title={teamName || "Nome da turma"}
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input style={{ flex: 1 }} placeholder="Nome do participante" />
        <ButtonIcon icon="add" type="primary" />
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
      
    </Container>
  );
}
