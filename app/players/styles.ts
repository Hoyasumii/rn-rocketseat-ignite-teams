import { Typography } from "@/components";
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
  gap: 24px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.Colors.gray700};
  border-radius: 6px;
`;

export const Controller = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TeamController = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
    gap: 10,
  },
}))``;

export const ListItem = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  padding: 5px 10px;
  border-radius: 6px;
  border-width: 1px;
  border-color: transparent;
`;

export const TeamList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    gap: 10,
  },
}))``;

export const TeamListItem = styled.View`
  background-color: ${({ theme }) => theme.Colors.gray500};
  border-radius: 6px;
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

export const TeamListName = styled(Typography)`
  flex: 1;
`;
