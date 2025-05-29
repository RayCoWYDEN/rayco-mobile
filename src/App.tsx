import React, { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  OpenSans_400Regular as OpenSans,
  OpenSans_700Bold as OpenSansBold,
} from "@expo-google-fonts/open-sans";
import { JollyLodger_400Regular as JollyLodger } from "@expo-google-fonts/jolly-lodger";

import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import Routes from "./routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    OpenSans,
    OpenSansBold,
    JollyLodger,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Routes />
      </View>
    </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
}

export default App;
