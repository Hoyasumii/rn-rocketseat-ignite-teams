import { MaterialIcons } from "@expo/vector-icons";
import { Icon as SIcon } from "./styles";

export type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: "primary" | "secondary" | "error";
};

export function Icon({ icon, type }: Props) {
  return <SIcon name={icon} type={type} />;
}
