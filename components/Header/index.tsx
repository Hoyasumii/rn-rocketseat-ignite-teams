import { useRouter } from "expo-router";
import { Arrow, Button, Container, Image } from "./styles";
import logo from "@/assets/images/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const router = useRouter();

  return (
    <Container>
      {showBackButton && (
        <Button onPress={() => { 
          router.navigate("/");
        }}>
          <Arrow />
        </Button>
      )}

      <Image source={logo} />
    </Container>
  );
}
