import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Typography } from "../Typography";
import { AnyNodeProps } from "@/types";

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.7,
}))`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.Colors.gray500};
  border-radius: 6px;

  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 24px;
`;

export const Title = styled(Typography).attrs({
  size: "MD",
  color: "gray200",
  weight: "regular",
})<AnyNodeProps>``;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.Colors.greenDark,
  weight: "fill",
}))``;
