import styled from "styled-components/native";
import { default as theme } from "@/styles";
import { TextProps } from "react-native";

export type Props = TextProps & {
  color: keyof typeof theme.Colors;
  size: keyof typeof theme.Typography.fontSize;
  weight?: keyof typeof theme.Typography.fontFamily;
};

const Component = styled.Text<Props>`
  color: ${({ color }) => theme.Colors[color]};
  font-family: ${({ weight }) =>
    weight === "bold" ? "Roboto_700Bold" : "Roboto_400Regular"};
  font-size: ${({ size }) => theme.Typography.fontSize[size]}px;
`;

export function Typography({
  color,
  size,
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
