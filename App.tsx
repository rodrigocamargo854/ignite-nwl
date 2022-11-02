import { NativeBaseProvider,StatusBar} from "native-base";
import { THEME } from "./src/assets/styles/theme";
import { Loading } from "./components/Loading";
import { SignIn } from "./src/assets/screens/Signin";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded ? <Loading /> : <SignIn />}
    </NativeBaseProvider>
  );
}
