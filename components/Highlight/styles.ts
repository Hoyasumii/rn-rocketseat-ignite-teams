import styled from "styled-components/native";
import { Roboto, RobotoProps } from "../Roboto";
import { AnyNodeProps } from "@/types";

export const Container = styled.View`
  width: 100%;
  gap: 5px;
`;

export const Title = styled(Roboto).attrs({
  color: "white",
  size: "XL",
  weight: "bold",
})<AnyNodeProps>`
  text-align: center;
`;

export const Subtitle = styled(Roboto).attrs({
  color: "gray300",
  size: "MD",
  weight: "regular",
})<AnyNodeProps>`
  text-align: center;
`;
