import styled from "styled-components/native";
import { Typography, Props } from "../Typography";
import { AnyNodeProps } from "@/types";

export const Container = styled.View`
  width: 100%;
  gap: 5px;
`;

export const Title = styled(Typography).attrs({
  color: "white",
  size: "XL",
  weight: "bold",
})<AnyNodeProps>`
  text-align: center;
`;

export const Subtitle = styled(Typography).attrs({
  color: "gray300",
  size: "MD",
  weight: "regular",
})<AnyNodeProps>`
  text-align: center;
`;
