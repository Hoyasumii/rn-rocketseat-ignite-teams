import styled, { css } from "styled-components/native";
import { Props } from "./types";
import { AnyNodeProps } from "@/types";
import { Typography } from "../Typography";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<Omit<Props, "text">>`
  width: 100%;
  height: 56px;

  ${({ theme, type }) => css`
    background-color: ${type === "primary"
      ? theme.Colors.greenDark
      : theme.Colors.redDark};
    color: ${theme.Colors.white};
  `}

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  size: "MD",
  color: "white",
  weight: "bold",
})<AnyNodeProps>``;
