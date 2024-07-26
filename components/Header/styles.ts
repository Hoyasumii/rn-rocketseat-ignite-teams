import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 46px;
  height: 55px;
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: .7,
}))`
  flex: 1;
`;

export const Arrow = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.Colors.gray200,
  weight: "bold",
}))`
`;
