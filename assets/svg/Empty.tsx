import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;
  fill?: ColorValue;
};

export function Empty({ size = 32, fill = "#000" }: Props) {
  return (
    <Svg width={size} height={size} fill={fill} viewBox="0 0 256 256">
      <Path d="M198.24,62.63l15.68-17.25a8,8,0,0,0-11.84-10.76L186.4,51.86A95.95,95.95,0,0,0,57.76,193.37L42.08,210.62a8,8,0,1,0,11.84,10.76L69.6,204.14A95.95,95.95,0,0,0,198.24,62.63ZM48,128A80,80,0,0,1,175.6,63.75l-107,117.73A79.63,79.63,0,0,1,48,128Zm80,80a79.55,79.55,0,0,1-47.6-15.75l107-117.73A79.95,79.95,0,0,1,128,208Z"></Path>
    </Svg>
  );
}
