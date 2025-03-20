import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  OpenSans_400Regular as OpenSans,
  OpenSans_700Bold as OpenSansBold,
} from "@expo-google-fonts/open-sans";
import { JollyLodger_400Regular as JollyLodger } from "@expo-google-fonts/jolly-lodger";

import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import Tabs from "./tabs-route";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function App() {
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    </TouchableWithoutFeedback>
  );
}
