import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
`;
