import { ActivityIndicator, Text } from "react-native";
import { Container } from "./styles";
import Colors from "@/styles/Colors";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color={Colors.green} />
    </Container>
  );
}
