import { TouchableOpacityProps } from "react-native";
import { Icon, Props as IconProps } from "../Icon";
import { Container } from "./styles";

type Props = TouchableOpacityProps & IconProps;

export function ButtonIcon({ icon, type = "primary", ...props }: Props) {
  return (
    <Container {...props}>
      <Icon icon={icon} type={type} />
    </Container>
  );
}
