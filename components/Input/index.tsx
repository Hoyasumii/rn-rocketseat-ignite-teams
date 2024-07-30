import { useTheme } from "styled-components/native";
import { Content } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps;

export function Input({ ...props }: Props) {
  const { Colors } = useTheme();
  return <Content placeholderTextColor={Colors.gray300} {...props} />;
}
