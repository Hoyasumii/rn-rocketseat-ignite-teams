import styled from "styled-components/native";
import { Empty as EmptyComponent } from "@/assets/svg";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.gray500};
  padding: 30px 0;
  border-radius: 6px;
  gap: 10px;
`;

export const Empty = styled(EmptyComponent).attrs(({ theme }) => ({
  fill: theme.Colors.green,
  size: theme.Typography.fontSize.XL * 2,
}))``;
