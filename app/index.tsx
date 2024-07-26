import { Button, GroupCard, Header, Hightlight, Roboto } from "@/components";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRouter } from "expo-router";
import { Alert, FlatList, Text, View } from "react-native";
import {
  Container,
  Empty,
  EmptyContainer,
  ListSeparator,
} from "./index.components";
import { useState } from "react";

function EmptyList() {
  return (
    <EmptyContainer>
      <Empty />
      <Roboto color="greenDark" size="MD" weight="regular">
        Sem turmas cadastradas
      </Roboto>
    </EmptyContainer>
  );
}

export default function Index() {
  const navigation = useRouter();
  const [items, setItems] = useState<Array<string>>([]);

  return (
    <>
      <StatusBar style={"light"} />
      <Container>
        <Header />
        <Hightlight title="Turmas" subtitle="jogue com a sua turma" />
        <FlatList
          data={items}
          renderItem={({ item }) => <GroupCard title={item} />}
          ItemSeparatorComponent={ListSeparator}
          ListEmptyComponent={<EmptyList />}
          keyExtractor={(item) => item}
        />
        <Button
          text="Criar nova Turma"
          onPress={() => {
            navigation.navigate("/test")
            // navigation.navigate("/test");
          }}
        />
      </Container>
    </>
  );
}
