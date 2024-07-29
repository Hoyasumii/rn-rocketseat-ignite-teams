import { useTheme } from "styled-components/native";
import { Content } from "./styles";

type Props = {
  placeholder: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

export function Input({ placeholder }: Props) {
  const { Colors } = useTheme();
  return <Content placeholder={placeholder} placeholderTextColor={Colors.gray300} />;
}
