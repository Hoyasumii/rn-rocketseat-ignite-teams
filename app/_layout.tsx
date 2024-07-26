import { ThemeProvider } from "styled-components/native";
import { Stack } from "expo-router";
import theme from "@/styles";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@/components";

export default function RootLayout() {
  const [loaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {loaded ? (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="test" />
          {/* <Stack.Screen name="test" /> */}
        </Stack>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  );
}
