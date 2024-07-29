import styled, { css } from "styled-components/native";
import { default as theme } from "@/styles";
import { TextProps } from "react-native";

export type Props = TextProps & {
  color?: keyof typeof theme.Colors;
  size?: keyof typeof theme.Typography.fontSize;
  weight?: keyof typeof theme.Typography.fontFamily;
};

const Component = styled.Text<Props>`
  ${({ color, size, weight }) => css`
    color: ${theme.Colors[color || "white"]};
    font-family: ${theme.Typography.fontFamily[weight || "regular"]};
    font-size: ${theme.Typography.fontSize[size || "MD"]}px;
  `}
`;

export function Typography({
  color = "white",
  size = "MD",
  weight = "regular",
  children,
  ...props
}: Props) {
  return (
    <Component color={color} size={size} weight={weight} {...props}>
      {children}
    </Component>
  );
}
