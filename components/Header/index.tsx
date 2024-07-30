import { useRouter } from "expo-router";
import { Arrow, Button, Container, Image } from "./styles";
import logo from "@/assets/images/logo.png";

export function Header() {
  const navigation = useRouter();

  return (
    <Container>
      {navigation.canGoBack() && (
        <Button
          onPress={() => {
            navigation.back();
          }}
        >
          <Arrow />
        </Button>
      )}

      <Image source={logo} />
    </Container>
  );
}
