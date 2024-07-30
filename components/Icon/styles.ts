import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Props } from ".";

export const Icon = styled(MaterialIcons).attrs<Omit<Props, "icon">>(
  ({ theme, type }) => ({
    size: 24,
    color:
      type === "primary"
        ? theme.Colors.greenDark
        : type === "error"
        ? theme.Colors.red
        : theme.Colors.gray200,
  })
)``;
