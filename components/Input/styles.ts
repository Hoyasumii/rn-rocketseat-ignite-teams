import styled, { css } from "styled-components/native";

export const Content = styled.TextInput`
  padding: 16px;
  width: 100%;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.Colors.gray700};
    color: ${theme.Colors.white};
    font-family: ${theme.Typography.fontFamily.regular};
    font-size: ${theme.Typography.fontSize.MD}px;
  `}
`;
