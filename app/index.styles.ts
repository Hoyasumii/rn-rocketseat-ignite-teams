import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Empty as SvgEmpty } from "@/assets/svg";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.gray600};
  gap: 32px;
  padding: 10px 15px;
`;

export const ListSeparator = styled.View`
  height: 10px;
`;

export const Empty = styled(SvgEmpty).attrs(({ theme }) => ({
  fill: theme.Colors.green,
  size: theme.Typography.fontSize.XL * 2,
}))``;

export const EmptyContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.gray500};
  padding: 30px 0;
  border-radius: 6px;
`;
