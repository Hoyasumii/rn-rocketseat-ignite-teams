import {
  Button,
  EmptyList,
  GroupCard,
  Header,
  Highlight,
  ListSeparator,
} from "@/components";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { Container } from "./index.styles";
import { useState } from "react";

export default function Index() {
  const navigation = useRouter();
  const [items, setItems] = useState<Array<string>>([]);

  return (
    <>
      <StatusBar style={"light"} />
      <Container>
        <Header />
        <Highlight title="Turmas" subtitle="jogue com a sua turma" />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <GroupCard
              onPress={() => {
                navigation.push("/players");
              }}
              title={item}
            />
          )}
          ItemSeparatorComponent={ListSeparator}
          ListEmptyComponent={<EmptyList text="Sem turmas cadastradas" />}
          keyExtractor={(item) => item}
        />
        <Button
          text="Criar nova Turma"
          onPress={() => {
            navigation.push("/newGroup");
          }}
        />
      </Container>
    </>
  );
}
