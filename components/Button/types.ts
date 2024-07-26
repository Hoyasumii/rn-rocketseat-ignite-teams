import { PressableProps } from "react-native";

export type Props = PressableProps & {
  type?: "primary" | "error";
  text: string;
};
