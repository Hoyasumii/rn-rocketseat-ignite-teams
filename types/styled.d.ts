import "styled-components/native";
import { default as style } from "@/styles";

declare module "styled-components/native" {
  type ThemeType = typeof style;
  export interface DefaultTheme extends ThemeType {}
}
