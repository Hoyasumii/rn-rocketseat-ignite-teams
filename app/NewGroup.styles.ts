import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.gray600};
  gap: 32px;
  padding: 10px 15px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 100px;
  gap: 24px;
`;
