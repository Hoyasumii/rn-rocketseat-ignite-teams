import styled from "styled-components/native";
import { Props } from "./types";
import { AnyNodeProps } from "@/types";
import { Roboto } from "../Roboto";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<Omit<Props, "text">>`
  width: 100%;
  height: 56px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.Colors.greenDark : theme.Colors.redDark};
  color: ${({ theme }) => theme.Colors.white};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Roboto).attrs({
  size: "MD",
  color: "white",
  weight: "bold",
})<AnyNodeProps>``;
